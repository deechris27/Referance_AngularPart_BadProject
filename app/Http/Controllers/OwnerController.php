<?php

namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;
use App\OwnerModel;
use App\TenantModel;
use App\PropertyModel;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File as LaraFile;
use Illuminate\Support\Facades\Log;

class OwnerController extends Controller {

    /**
     * Show the Vendor dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function OwnerAdmin(Request $request) {
        if ($request->session()->get('_oadmin')) {

            return Redirect::to('/owner/dashboard');
        } else {
            $data = ['validate_js' => '/jquery.validate.js', 'msg' => ''];
            return view('owner.login', $data);
        }
    }

/* ---End controller-- */

    public function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return md5($randomString);
    }

    public function OwnerRegisterCheck(Request $request) {
        $email = '';
        $checkcount = OwnerModel::OwnerEmailCheck($request->input('email'));
        if ($checkcount > 0) {
            return "Your email is already exist.";
        } else {
            $verify = $this->generateRandomString();
            $r_data = array('name' => $request->input('name'), 'email' => $request->input('email'), 'password' => md5(trim($request->input('password'))), 'verfy_code' => $verify);
            $result = OwnerModel::OwnerRegister($r_data);
            $o_email = $request->input('email');
            $name = $request->input('name');
            $data = ['name' => $request->input('name'), 'verify' => $verify, 'id' => $result];

            Mail::send('owner.mail', $data, function($message) use($o_email, $name) {

                $message->to($o_email, $name)->subject('Flarow Registration Verification');
                $message->from('admin@flarow.com', 'Flarow');
            });

            return "Successfully Registered,Please Login.";
        }
    }

    public function OwnerLoginCheck(Request $request) {
        $result = OwnerModel::LoginCheck($request->input('email'), md5(trim($request->input('password'))));
        if (!empty($result)) {
            $request->session()->push('_oadmin', $result->id);
            $request->session()->push('_oemail', $result->email);
            return 'OKK';
        } else {
            return "Email / Password Wrong!";
        }
    }

    public function OwnerResetPassword(Request $request) {
        $result = OwnerModel::OwnerEmailCheck($request->input('email'));
        if ($result > 0) {

            $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+;:,.?";
            $pass = substr(str_shuffle($chars), 0, 8);
            $password = md5($pass);

            OwnerModel::OwnerForgetPass(array('password' => $password), $request->input('email'));

            $re_email = $request->input('email');
            $data = ['password' => $pass];

            Mail::send('owner.resetmail', $data, function($message) use ($re_email) {

                $message->to($re_email, 'Owners')->subject('Flarow Forget Password');
                $message->from('admin@flarow.com', 'Flarow');
            });


            return "Successfully Reset your password. Please, check your email.";
        } else {
            return "Email does not exist. Please, contact flarow support.";
        }
    }

    /**
     * 
     * @owner admin logout
     * 
     */
    public function OwnerAdminLogout(Request $request) {
        $request->session()->flush();
        return Redirect::to('/owner/login');
    }

    /**
     * @super admin dashboard controller
     */
    public function OwnerAdminDashboard(Request $request) {
        if ($request->session()->get('_oadmin')) {
            $result = OwnerModel::OwnerDetails($request->session()->get('_oadmin'));
            $data = array(
                'name' => $result->name,
                'image' => $result->image
            );
            return view('owner.dashboard', $data);
        } else {
            return Redirect::to('/owner/login');
        }
    }

    /**
     * @owner admin dashboard controller
     */
    public function OwnerAdminProfile(Request $request) {
        if ($request->session()->get('_oadmin')) {
            if ($request->input('name')) {
                if ($request->input('password')) {
                    $password = md5(trim($request->input('password')));
                } else {
                    $result = OwnerModel::OwnerDetails($request->session()->get('_oadmin'));
                    $password = $result->password;
                }


                if ($request->hasFile('image')) {
                    if ($request->file('image')->isValid()) {
                        $result = OwnerModel::OwnerDetails($request->session()->get('_oadmin'));
                        LaraFile::delete(public_path() . "\admin\dist\img\\" . $result->image);
                        try {
                            $file = $request->file('image');
                            $name = md5(rand(11111, 99999)) . '.' . $file->getClientOriginalExtension();
                            $request->file('image')->move(public_path('admin/dist/img'), $name);
                        } catch (Illuminate\Filesystem\FileNotFoundException $e) {
                            print_r($e);
                        }
                    }
                    $image = $name;
                } else {

                    $image = $request->input('old_image');
                }

                $inputdata = array(
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                    'phone' => $request->input('phone'),
                    'image' => $image,
                    'password' => $password,
                    'about' => $request->input('about'),
                );

                OwnerModel::UpdateOwnerData($inputdata, $request->session()->get('_oadmin'));
                $result = OwnerModel::OwnerDetails($request->session()->get('_oadmin'));
                $data = array(
                    'name' => $result->name,
                    'email' => $result->email,
                    'phone' => $result->phone,
                    'image' => $result->image,
                    'about' => $result->about,
                    'validate_js' => '/jquery.validate.js',
                    'msg' => 'Successfully Updated!',
                );
                return view('owner.profile', $data);
            } else {

                $result = OwnerModel::OwnerDetails($request->session()->get('_oadmin'));
                $data = array(
                    'name' => $result->name,
                    'email' => $result->email,
                    'phone' => $result->phone,
                    'image' => $result->image,
                    'about' => $result->about,
                    'validate_js' => '/jquery.validate.js',
                    'msg' => '',
                );

                return view('owner.profile', $data);
            }
        } else {
            return Redirect::to('/owner/login');
        }
    }

/* --- Controller ---- */

    //////////// Schedule List Controller ///////////////

    public function tenantVisitRequests(Request $request, $id) {

        $schedule = OwnerModel::OwnerAdminScheduleLists($id);
        $datatable = json_decode(json_encode($schedule));
        $arr = '';
        $status = '';       
        $visits = []; 
        foreach ($datatable as $scheduleData) {
            if ($scheduleData->status == '2') {

                $status = 'Booked';
                $color = '#f39c12';
            } else if ($scheduleData->status == '1') {

                $status = 'Visited';
                $color = '#36a20b';
            } else if ($scheduleData->status == '3') {
                $status = 'Cancelled';
                $color = '#ff0000';
            } else {

                $status = 'Not Visited Yet';
                $color = '#ff0000';
            }

            $tenant = TenantModel::TenantDetails($scheduleData->tenant_id);
            $property = PropertyModel::PropertyDetails($scheduleData->property_id);

            $arr = array(
                'id' =>$scheduleData->id,
                'tenantId' => isset($tenant->id) ? $tenant->id : '',
                'title' => $property->title,
                'propertyId'=>$property->id,
                'name' => isset($tenant->name) ? $tenant->name : '',
                'status' => $status,
                'date' => date("d, M, Y", strtotime($scheduleData->created_at))
            );
            array_push($visits, $arr);

        }        

        return response()->success(compact('visits'));
    }

    public function tenantdetails(Request $request, $id){
        $visitor = TenantModel::ScheduledVisit($id);
        $tenant = TenantModel::TenantDetails($visitor->tenant_id);
        $property = PropertyModel::PropertyDetails($visitor->property_id);

        $visit = array(
            'tenantId' => $tenant->id,
            'title' => $property->title,
            'propertyId' => $property->id,
            'name' => isset($tenant->name) ? $tenant->name : '',
            'phone' => $tenant->mobile,
            'email' => $tenant->email,
            'status' => $visitor->status,
            'date' => date("d, M, Y", strtotime($visitor->created_at))
        );
        
        return response()->success(compact('visit'));
    }

    public function updateVisitStatus(Request $request, $id) {

        if (!empty($request->input('status'))) {
            $msg = '';
            $inputdata = array(
                'owner_id' => $request->input('ownerId'),
                'property_id' => $request->input('propertyId'),
                'tenant_id' => $request->input('tenantId'),
                'status' => $request->input('status')
            );

            $res = OwnerModel::UpdateVisitData($inputdata, $id);

            if ($res === "BOOKED") {
                $msg = "Successfully Booked, Please update booking agreement dates!";
            } else {
                $msg = "Successfully Updated!";
            }
            return response()->success(compact('msg'));;
        } 
    }

    public function myTenants(Request $request, $id) {

        $booking = OwnerModel::OwnerAdminBookingLists($id);
        $datatable = json_decode(json_encode($booking));
        $arr = '';
        $status = '';
        $tenants = [];

        foreach ($datatable as $bookingDatas) {
            $property = PropertyModel::PropertyDetails($bookingDatas->property_id);
            $tenant = TenantModel::TenantDetails($bookingDatas->tenant_id);
            
            if ($bookingDatas->startDate == NULL) {
                $status = "Agreement Not Done";
            } else {
                $status = "Booking Complete";
            }
            if ($bookingDatas->endDate <= date('d-m-Y',time())) {
                $tenant_status = "Current";
            } else {
                $tenant_status = "Past";
            }
            if (isset($tenant[0]->pstatus) &&  $tenant[0]->pstatus ==1) {
                $payment_status = "Paid";
            } else {
                $payment_status = "NA";
            }   
            //0='Not sent', 1='Sent for approval',2='Verified'  
            if (isset($tenant[0]->status) &&  $tenant[0]->status == 1) {
                $kyc_status = "Sent for approval";
            } else if(isset($tenant[0]->status) &&  $tenant[0]->status == 3){
                $kyc_status = "Rejected";
            } else if(isset($tenant[0]->status) &&  $tenant[0]->status == 2){
                $kyc_status = "Verified";
            } else {
                $kyc_status = "Not sent";
            }    
            
            if(isset($tenant[0]->share) &&  $tenant[0]->share == 1){
                $kyc_share = "Available";
            } else {
                $kyc_share = "Not available";
            }
            
            $arr = array(
                'id' =>$bookingDatas->id,
                'tenantId' => isset($tenant[0]->id) ? $tenant[0]->id : '',
                'title' => isset($property->title) ? $property->title : '' ,
                'propertyId'=> isset($property->id) ? $property->id : '',
                'name' => isset($tenant[0]->fname) ? $tenant[0]->fname : '',
                'kyc_id' => isset($tenant[0]->kycId) ? $tenant[0]->kycId : '',
                'kyc_status' => $kyc_status,
                'kyc_share' => $kyc_share,
                'tenant_status' => $tenant_status,
                'payment_status' => $payment_status,
                'status' => $status,
                'date' => date("d, M, Y", strtotime($bookingDatas->created_at))
            );
            array_push($tenants, $arr);
        }
        return response()->success(compact('tenants'));
    }

    public function myTenantdetails(Request $request, $id){
        $booking = OwnerModel::OwnerBookingDetails($id);
        //Log::info($booking);
        $tenant = TenantModel::TenantDetails($booking->tenant_id);
        $property = PropertyModel::PropertyDetails($booking->property_id);
        $tenant = array(
            'tenantId' => $tenant->id,
            'title' => $property->title,
            'propertyId' => $property->id,
            'name' => isset($tenant->name) ? $tenant->name : '',
            'phone' => $tenant->phone,
            'email' => $tenant->email,
            'status' => $booking->status,
            'date' => date("d, M, Y", strtotime($booking->created_at))
        );
        
        return response()->success(compact('tenant'));
    }    

    public function myTenantsEdit(Request $request, $id) {

        $kyc_status = '';

        if ($request->input('startDate')) {

            $datas = array(
                'startDate' => $request->input('startDate') . ":00:00:00",
                'endDate' => $request->input('endDate') . ":00:00:00",
                'status' => $request->input('status'),
            );

            OwnerModel::UpdateBookingData($datas, $id);

            $book = OwnerModel::bookingDetails($id);
            $property = PropertyModel::PropertyDetails($book->property_id);
            $tenants = TenantModel::TenantDetails($book->tenant_id);
            $kyc = TenantModel::TenantKYC($book->tenant_id);

            if ($kyc->status == '2') {
                $kyc_status = 'Verified';
            } elseif ($kyc->status == '1') {
                $kyc_status = 'Sent For Approval';
            } else {
                $kyc_status = 'Not Verified';
            }

            $data = array(
                'title' => $property->title,
                'name' => $tenants->name,
                'startDate' => date("Y-m-d", strtotime($book->startDate)),
                'endDate' => date("Y-m-d", strtotime($book->endDate)),
                'kyc_status' => $kyc_status,
                'status' => $book->status,
                'msg' => ''
            );
            return response()->success(compact('data'));
        } else {

            $book = OwnerModel::bookingDetails($id);
            $property = PropertyModel::PropertyDetails($book->property_id);
            $tenants = TenantModel::TenantDetails($book->tenant_id);
            $kyc = TenantModel::TenantKYC($book->tenant_id);

            if ($kyc->status == '2') {
                $kyc_status = 'Verified';
            } elseif ($kyc->status == '1') {
                $kyc_status = 'Sent For Approval';
            } else {
                $kyc_status = 'Not Verified';
            }

            if ($book->startDate != '') {
                $sartdate = date("Y-m-d", strtotime($book->startDate));
                $enddate = date("Y-m-d", strtotime($book->startDate));
            } else {
                $sartdate = '';
                $enddate = '';
            }

            $data = array(
                'title' => $property->title,
                'name' => $tenants->name,
                'startDate' => date("Y-m-d", strtotime($book->startDate)),
                'endDate' => date("Y-m-d", strtotime($book->endDate)),
                'kyc_status' => $kyc_status,
                'status' => $book->status,
                'msg' => ''
            );
            return response()->success(compact('data'));
        }
    }

    public function tenantTickets(Request $request, $id) {

        $tikets = OwnerModel::OwnerAdminTicketLists($id);
        $datatable = json_decode(json_encode($tikets));
        $arr = '';
        $status = '';
        $tickets = [];
        foreach ($datatable as $ticketsDatas) {

            $property = PropertyModel::PropertyDetails($ticketsDatas->property_id);
            $tenant = TenantModel::TenantDetails($ticketsDatas->tenant_id);
            if ($ticketsDatas->status == '0') {
                $status = "Unread";
            } else {
                $status = "Solved";
            }
            if($tenant != null){
                $arr = array(
                    'id' =>$ticketsDatas->id,
                    'tenantId' => isset($tenant->id) ? $tenant->id : '',
                    'title' => $property->title,
                    'propertyId'=>$property->id,
                    'name' => isset($tenant->name) ? $tenant->name : '',
                    'status' => $status,
                    'date' => date("d, M, Y", strtotime($ticketsDatas->created_at))
                );
                array_push($tickets, $arr);  
            }                       
        }

        return response()->success(compact('tickets'));
    }

    public function ticketDetails(Request $request, $id){
        $ticketDetail = OwnerModel::OwnerTicketDetails($id);
        $tenant = TenantModel::TenantDetails($ticketDetail->tenant_id);
        $property = PropertyModel::PropertyDetails($ticketDetail->property_id);
        $ticket = array(
            'tenantId' => $tenant->id,
            'title' => $property->title,
            'propertyId' => $property->id,
            'name' => $tenant->name,
            'phone' => $tenant->phone,
            'email' => $tenant->email,
            'message' => $ticketDetail->message,
            'date' => date("d, M, Y", strtotime($ticketDetail->created_at))
        );
        
        return response()->success(compact('ticket'));
    }     

    public function updateTicketsData(Request $request, $id) {

        if ($request->input("status") != "") {

            $datas = array("status" => $request->input("status"));
            $resultsss = OwnerModel::UpdateTicketsDatas($datas, $id);

            $msg = 'Ticket updated';
            return response()->success(compact('msg'));;
        } 
    }

    public function ownerDashboardInfo(Request $request, $id){
        $rentdue = OwnerModel::thisMonthDue($id);
        $rentcollected = OwnerModel::thisMonthCollected($id);
        $propListed = PropertyModel::propertyListed($id);
        $visit = OwnerModel::visitCount($id);

        $ownerData = array(
            'rent_due' => isset($rentdue[0]->aggregate) ? $rentdue[0]->aggregate : 0,
            'rent_collected' => isset($rentcollected[0]->rent) ? $rentcollected[0]->rent : 0,
            'property_count' => $propListed,
            'visits' => $visit
        );

        return response()->success(compact('ownerData'));
    }

    public function adminDashboardInfo(Request $request){
        $tenants = OwnerModel::newTenants();
        $visits = OwnerModel::visits();
        $registration = OwnerModel::registration();
        $owners = OwnerModel::newOwners();

        $ownerData = array(
            'tenants' => $tenants,
            'registration' => $registration,
            'visits' => $visits,
            'owners' => $owners
        );

        return response()->success(compact('ownerData'));
    }

    public function owners(Request $request){
        $ownerData = OwnerModel::owners();
        return response()->success(compact('ownerData'));
    }

    public function getOutstandingRent(Request $request, $id){
        return OwnerModel::outstandingRent($id);
    }

    public function getOpenTickets(Request $request, $id){
        return OwnerModel::ticketCount($id);
    }

    public function getVisitCount(Request $request, $id){
        return OwnerModel::visitCount($id);
    }

    public function paymentHistory(Request $request, $id){
        $payments = OwnerModel::paymentHistory($id);
        return response()->success(compact('payments'));
    }     
    
    public function tagTenant(Request $request){
        $this->validate($request, [
           'mobile' => 'required|string',
           'email' => 'required|string',
           'name' => 'required|string'
        ]);
 
        $tagData = array(
            'tenant_name' => $request->input('name'),
            'tenant_mobile' => $request->input('mobile'),
            'tenant_email' => $request->input('email'),
            'owner_id' => $request->input('owner'),
            'property_id' => $request->input('propertyId'),
            'created_by' => $request->input('owner')
        );
                
        $tagId = OwnerModel::newTag($tagData);
                        
        return response()->success(compact('$tagId'));
    } 

}
