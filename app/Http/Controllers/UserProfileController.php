<?php

namespace App\Http\Controllers;

use Mail;
use Illuminate\Http\Request;
use App\ProfileModel;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\File as LaraFile;
use App\User;

class UserProfileController extends Controller {

    /**
     * @super admin dashboard controller
     */
    public function AddUserProfile(Request $request, $id) {
            if ($request->input('fname')) {

                $inputdata = array(
                    'fname' => $request->input('fname'),
                    'lname' => $request->input('lname'),
                    'user_id' => $request->input('userId'),
                    'address' => $request->input('address'),
                    'city' => $request->input('city'),
                    'state' =>  $request->input('state'),
                    'country' => $request->input('country'),
                    'zip' => $request->input('zip'),
                    'email' => $request->input('email'),
                    'phone' => $request->input('phone'),
                    'about' => $request->input('about'),
                    //'facebook' => $request->input('facebook'),
                    //'twitter' => $request->input('twitter'),
                    //'googleplus' => $request->input('googleplus'),
                );

                if(ProfileModel::UserEmailCheck($request->input('email'))){
                    $result = ProfileModel::UpdateUserProfile($inputdata, $request->input('userId'));
                }else{
                    $result = ProfileModel::UserRegister($inputdata);
                }
                return response()->success(compact('result'));
            } 
    }

    public function GetUserProfile(Request $request,$id){
        $result = ProfileModel::ProfileDetails($id);
        if(!$result){
            return response()->success('Please fill the user profile'); 
        }
        $user = array(
            'fname' => $result->fname,
            'lname' => $result->lname,
            'email' => $result->email,
            'phone' => $result->phone,
            'about' => $result->about,
            'address' => $result->address,
            'city' => $result->city,
            'state' => $result->state,
            'country' => $result->country,
            'zip' => $result->zip,
            'status' => $result->status
        );    
        return response()->success(compact('user'));    
    }

    public function checkUserByEmail(Request $request){
        $result = User::userCheck($request->email);
        return response()->success(compact('result'));
    }


    public function getBankDetails(Request $request,$id){
        $result = ProfileModel::ProfileDetails($id);
        if(!$result){
            return response()->success('Please fill the user profile'); 
        }
        $user = array(
            'bname' => $result->bank_name,
            'ahname' => $result->account_name,
            'anumber' => $result->account_number,
            'icode' => $result->ifsc_code,
            'atype' => $result->account_type
        );    
        return response()->success(compact('user'));    
    }

    public function addBankDetails(Request $request, $id) {
        if ($request->input('bname')) {

            $inputdata = array(
                'bank_name' => $request->input('bname'),
                'account_name' => $request->input('ahname'),
                'account_number' => $request->input('anumber'),
                'account_type' => $request->input('atype'),
                'ifsc_code' => $request->input('icode')
            );

            Log::info(ProfileModel::bankdetailsCheck($request->input('bname'), $id));

            if(ProfileModel::bankdetailsCheck($request->input('bname'), $id)){
                $result = ProfileModel::UpdateUserProfile($inputdata, $id);
            }

            return response()->success(compact('result'));
        } 
    }

/* --- Controller ---- */

    /**
     * @super admin dashboard controller
     */
    // public function TenantAdminPasswordchange(Request $request) {
    //     if ($request->session()->get('_tenantadmin')) {
    //         $result = TenantAdminModel::TenantchekPassword(md5(trim($request->input('password'))), $request->session()->get('_tenantadmin'));
    //         if ($result > 0) {
    //             $inputdata = array('password' => md5(trim($request->input('password'))));
    //             TenantAdminModel::UpdateTenantData($inputdata, $request->session()->get('_tenantadmin'));
    //             return "Your password is changed successfully!";
    //         } else {
    //             return "Current password not matched!";
    //         }
    //     }
    // }

    // public function TenantAdminKyc(Request $request) {

    //     if ($request->session()->get('_tenantadmin')) {
    //         $id = $request->session()->get('_tenantadmin');
    //     } else {
    //         return Redirect::to('/tenant/logout');
    //     }

    //     $kyc = TenantAdminModel::TenantSearchKYC($id[0]);

    //     if ($kyc == 0) {
    //         TenantAdminModel::TenantInsertKYC($id[0]);
    //         $tenantsKyc = TenantAdminModel::TenantKYC($id[0]);
    //     } else {
    //         $tenantsKyc = TenantAdminModel::TenantKYC($id[0]);
    //     }

    //     /* -----Aadhaar card------- */
    //     if ($tenantsKyc->a_stat == 1) {
    //         $aadhaar_stat = 'Sent For Approval';
    //     } elseif ($tenantsKyc->a_stat == 2) {
    //         $aadhaar_stat = 'Approved';
    //     } elseif ($tenantsKyc->a_stat == 3) {
    //         $aadhaar_stat = 'Not Valid, Please upload again';
    //     } else {
    //         $aadhaar_stat = 'Not uploaded yet';
    //     }

    //     /* -----voterid card------- */
    //     if ($tenantsKyc->v_stat == 1) {
    //         $v_stat = 'Sent For Approval';
    //     } elseif ($tenantsKyc->v_stat == 2) {
    //         $v_stat = 'Approved';
    //     } elseif ($tenantsKyc->v_stat == 3) {
    //         $v_stat = 'Not Valid, Please upload again';
    //     } else {
    //         $v_stat = 'Not uploaded yet';
    //     }

    //     /* -----Passport------- */
    //     if ($tenantsKyc->pass_stat == 1) {
    //         $pass_stat = 'Sent For Approval';
    //     } elseif ($tenantsKyc->pass_stat == 2) {
    //         $pass_stat = 'Approved';
    //     } elseif ($tenantsKyc->pass_stat == 3) {
    //         $pass_stat = 'Not Valid, Please upload again';
    //     } else {
    //         $pass_stat = 'Not uploaded yet';
    //     }

    //     $result = TenantAdminModel::TenantDetails($id[0]);
    //     $data = array(
    //         'name' => $result->name,
    //         'image' => $result->image,
    //         'voterid' => $tenantsKyc->voterid,
    //         'aadhar' => $tenantsKyc->aadhar,
    //         'passport' => $tenantsKyc->passport,
    //         'aadhaar_stat' => $aadhaar_stat,
    //         'v_stat' => $v_stat,
    //         'pass_stat' => $pass_stat,
    //         'validate_js' => '/jquery.validate.js',
    //         'msg' => '',
    //     );

    //     return view('tenants.kyc', $data);
    // }

    // public function TenantAdminKycEdit(Request $request, $ids) {

    //     if ($request->session()->get('_tenantadmin')) {
    //         $id = $request->session()->get('_tenantadmin');
    //     } else {
    //         return Redirect::to('/tenant/logout');
    //     }
    //     $msg = '';


    //     $kyc = TenantAdminModel::TenantSearchKYC($id[0]);
    //     if ($kyc == 0) {
    //         TenantAdminModel::TenantInsertKYC($id[0]);
    //         $tenantsKyc = TenantAdminModel::TenantKYC($id[0]);
    //     } else {
    //         $tenantsKyc = TenantAdminModel::TenantKYC($id[0]);
    //     }

    //     /* -----Aadhaar card------- */
    //     if ($ids == 4) {
    //         $name = 'passport';
    //         $stat = 'pass_stat';
    //         $old_image = $tenantsKyc->passport;
    //     } elseif ($ids == 3) {
    //         $name = 'pan';
    //         $old_image = $tenantsKyc->pan;
    //         $stat = 'pan_stat';
    //     } elseif ($ids == 2) {
    //         $name = 'voterid';
    //         $old_image = $tenantsKyc->voterid;
    //         $stat = 'v_stat';
    //     } elseif ($ids == 1) {
    //         $name = 'aadhar';
    //         $old_image = $tenantsKyc->aadhar;
    //         $stat = 's_stat';
    //     } else {
    //         $name = '';
    //         $old_image = '';
    //         $stat = '';
    //     }

    //     if ($request->input('_token')) {

    //         if ($request->hasFile($name)) {
    //             if ($request->file($name)->isValid()) {
    //                 LaraFile::delete(public_path() . "/uploads/kyc/" . $tenantsKyc->$name);
    //                 try {
    //                     $file = $request->file($name);
    //                     $names = md5(rand(11111, 99999)) . '.' . $file->getClientOriginalExtension();
    //                     $request->file($name)->move(public_path('uploads/kyc'), $names);
    //                 } catch (Illuminate\Filesystem\FileNotFoundException $e) {
    //                     print_r($e);
    //                 }
    //             }
    //             $image = $names;
    //         } else {
    //             $image = $request->input('old_image');
    //         }
    //         $inp = array($name => $image, $stat => 1);
    //         TenantAdminModel::TenantKYCUploads($inp, $id[0]);
    //         return Redirect::to('/tenant/kyc');
    //     }


    //     $result = TenantAdminModel::TenantDetails($id[0]);
    //     $data = array(
    //         'name' => $result->name,
    //         'tenant_id' => $ids,
    //         'image' => $result->image,
    //         'old_image' => $old_image,
    //         'file_names' => $name,
    //         'validate_js' => '/jquery.validate.js',
    //         'msg' => '',
    //     );

    //     return view('tenants.kycedit', $data);
    // }

    // public function TenantAddSchedule(Request $request, $ids) {

    //     if ($request->session()->get('_tenantadmin')) {
    //         $id = $request->session()->get('_tenantadmin');
    //     } else {
    //         return Redirect::to('/tenant/logout');
    //     }


    //     if ($request->input('owner_id')) {

    //         $dt = explode("-", $request->input('scheduleDate'));
    //         $inputdata = array(
    //             'owner_id' => $request->input('owner_id'),
    //             'property_id' => $request->input('property_id'),
    //             'tenant_id' => $id[0],
    //             'scheduleDate' => $dt[2] . "-" . $dt[1] . "-" . $dt[0],
    //             'scheduleTime' => $request->input('time'),
    //             'message' => $request->input('messege'),
    //         );

    //         TenantAdminModel::TenantScheduleInsert($inputdata);
    //         $pro = TenantAdminModel::PropertyDetails($ids);
    //         $ownerDtls = TenantAdminModel::OwnerDetailsByProperty($ids);
    //         $result = TenantAdminModel::TenantDetails($id[0]);

    //         //print_r($result);
    //         $data = array(
    //             'name' => $result->name,
    //             'property_id' => $ids,
    //             'property_name' => $pro->title,
    //             'image' => $result->image,
    //             'validate_js' => '/jquery.validate.js',
    //             'msg' => 'Successfully Submited, Please wait for approval',
    //             'o_name' => $ownerDtls->name,
    //             'o_id' => $ownerDtls->id,
    //             'o_email' => $ownerDtls->email,
    //             'o_phone' => $ownerDtls->phone,
    //             'o_address' => $ownerDtls->address
    //         );

    //         return view('tenants.add-schedule', $data);
    //     } else {


    //         $ownerDtls = TenantAdminModel::OwnerDetailsByProperty($ids);
    //         $result = TenantAdminModel::TenantDetails($id[0]);
    //         $pro = TenantAdminModel::PropertyDetails($ids);
    //         $data = array(
    //             'name' => $result->name,
    //             'property_id' => $ids,
    //             'property_name' => $pro->title,
    //             'image' => $result->image,
    //             'validate_js' => '/jquery.validate.js',
    //             'msg' => '',
    //             'o_id' => $ownerDtls->id,
    //             'o_name' => $ownerDtls->name,
    //             'o_email' => $ownerDtls->email,
    //             'o_phone' => $ownerDtls->phone,
    //             'o_address' => $ownerDtls->address
    //         );

    //         return view('tenants.add-schedule', $data);
    //     }
    // }

    // public function TenantScheduleList(Request $request) {


    //     if ($request->session()->get('_tenantadmin')) {
    //         $id = $request->session()->get('_tenantadmin');
    //     } else {
    //         return Redirect::to('/tenant/logout');
    //     }


    //     $schedule = TenantAdminModel::ScheduleDetailsList($id[0]);
    //     $datatable = json_decode(json_encode($schedule));
    //     $arr = '';
    //     $status = '';
    //     foreach ($datatable as $scheduleList) {
    //         if ($scheduleList->status == '1') {
    //             $status = 'Approved';
    //         } else {
    //             $status = 'Pending';
    //         }

    //         $ownerDtls = TenantAdminModel::OwnerDetails($scheduleList->owner_id);

    //         $arr .= '<li><div class="list-box-listing">
								
	// 					  <div class="list-box-listing-content">
	// 								<div class="inner">
	// 									<h3>Owner Name: ' . $ownerDtls->name . ' </h3>
	// 									<span>Visit Date: ' . $scheduleList->scheduleDate . ' / Visit Time: ' . $scheduleList->scheduleTime . ' </span>
	// 									<div>Created Date: ' . date("d, M Y", strtotime($scheduleList->created_at)) . '</div>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<div class="buttons-to-right">
	// 							<div>Status: ' . $status . '</div>
	// 						</div>
	// 					</li>';
    //     }


    //     $result = TenantAdminModel::TenantDetails($id[0]);

    //     $data = array(
    //         'name' => $result->name,
    //         'image' => $result->image,
    //         'validate_js' => '/jquery.validate.js',
    //         'msg' => '',
    //     );
    //     $data['datatable'] = $arr;
    //     return view('tenants.schedule-list', $data);
    // }

    // public function TenantAdminTicketList(Request $request) {

    //     if ($request->session()->get('_tenantadmin')) {
    //         $id = $request->session()->get('_tenantadmin');
    //     } else {
    //         return Redirect::to('/tenant/logout');
    //     }

    //     $ticket = TenantAdminModel::TicketDetailsList($id[0]);
    //     $datatable = json_decode(json_encode($ticket));
    //     $arr = '';
    //     $status = '';
    //     foreach ($datatable as $ticketList) {
    //         if ($ticketList->status == '1') {
    //             $status = 'Solved';
    //         } else {
    //             $status = 'Pending';
    //         }

    //         $ownerDtls = TenantAdminModel::OwnerDetails($ticketList->owner_id);
    //         $arr .= '<li><div class="list-box-listing">	
	// 					  <div class="list-box-listing-content">
	// 								<div class="inner">
	// 									<h3>Owner Name : ' . $ownerDtls->name . ' </h3>
	// 									<span>Ticket Message: ' . $ticketList->message . '</span>
	// 									<div>Created Date: ' . date("d, M Y", strtotime($ticketList->created_at)) . '</div>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<div class="buttons-to-right">
	// 							<div>Status: ' . $status . '</div>
	// 						</div>
	// 					</li>';
    //     }

    //     $result = TenantAdminModel::TenantDetails($id[0]);

    //     $data = array(
    //         'name' => $result->name,
    //         'image' => $result->image,
    //         'validate_js' => '/jquery.validate.js',
    //         'msg' => '',
    //     );
    //     $data['datatable'] = $arr;
    //     return view('tenants.ticket-list', $data);
    // }

    // public function TenantAdminBookingDetails(Request $request) {

    //     if ($request->session()->get('_tenantadmin')) {
    //         $id = $request->session()->get('_tenantadmin');
    //     } else {
    //         return Redirect::to('/tenant/logout');
    //     }

    //     $ticket = TenantAdminModel::TicketDetailsList($id[0]);
    //     $datatable = json_decode(json_encode($ticket));
    //     $arr = '';
    //     $status = '';
    //     foreach ($datatable as $ticketList) {
    //         if ($ticketList->status == '1') {
    //             $status = 'Solved';
    //         } else {
    //             $status = 'Pending';
    //         }

    //         $ownerDtls = TenantAdminModel::OwnerDetails($ticketList->owner_id);
    //         $arr .= '<li><div class="list-box-listing">	
	// 					  <div class="list-box-listing-content">
	// 								<div class="inner">
	// 									<h3>Owner Name : ' . $ownerDtls->name . ' </h3>
	// 									<span>Ticket Message: ' . $ticketList->message . '</span>
	// 									<div>Created Date: ' . date("d, M Y", strtotime($ticketList->created_at)) . '</div>
	// 								</div>
	// 							</div>
	// 						</div>
	// 						<div class="buttons-to-right">
	// 							<div>Status: ' . $status . '</div>
	// 						</div>
	// 					</li>';
    //     }

    //     $result = TenantAdminModel::TenantDetails($id[0]);

    //     $data = array(
    //         'name' => $result->name,
    //         'image' => $result->image,
    //         'validate_js' => '/jquery.validate.js',
    //         'msg' => '',
    //     );
    //     $data['datatable'] = $arr;
    //     return view('tenants.ticket-list', $data);
    // }

}
