<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AdminModel;
use App\OwnerModel;
use App\TenantModel;
use App\PropertyModel;
use Illuminate\Support\Facades\Log;

class AdminController extends Controller {

    public function adminBookingList(Request $request){

        $properties = AdminModel::SuperAdminBookingLists();

        $datatable = json_decode(json_encode($properties));
        $arr = '';
        $status = '';
        $bookings = [];
        foreach ($datatable as $bookingDatas) {

            $property = PropertyModel::PropertyDetails($bookingDatas->property_id);
            $owner = OwnerModel::OwnerDetails($bookingDatas->owner_id);
            $tenants = TenantModel::TenantDetails($bookingDatas->tenant_id);

            if($owner !== NULL && $tenants !== NULL){
                $prop = array(
                    'title' => $property->title,
                    'propertyId' => $property->id,
                    'ownerName' => isset($owner->name) ? $owner->name : '',
                    'tenantName' => isset($tenant->name) ? $tenant->name : '',
                    'id' => $bookingDatas->id, 
                    'bookingDate' => date("d, M, Y", strtotime($bookingDatas->created_at))
                );

                array_push($bookings, $prop); 
            }
        }
        return response()->success(compact('bookings'));
    }

    public function scheduleList(Request $request){

        $schedule = AdminModel::SuperAdminScheduleLists();
        $datatable = json_decode(json_encode($schedule));
        $arr = '';
        $status = '';
        $scheduleList = [];
        foreach ($datatable as $scheduleData) {
            if ($scheduleData->status == '2') {
                $status = 'Booked';
            } else if ($scheduleData->status == '1') {
                $status = 'Visited';
            } else {
                $status = 'Not Visited Yet';
            }

            $owner = OwnerModel::OwnerDetails($scheduleData->owner_id);
            $tenant = TenantModel::TenantDetails($scheduleData->tenant_id);
            $property = PropertyModel::PropertyDetails($scheduleData->property_id);

            if($owner !== NULL && $tenant !== NULL){
                $prop = array(
                    'title' => $property->title,
                    'propertyId' => $property->id,
                    'ownerName' => isset($owner->name) ? $owner->name : '',
                    'tenantName' => isset($tenant->name) ? $tenant->name : '',
                    'status' => $status
                );

                array_push($scheduleList, $prop);
            }
        }
        return response()->success(compact('scheduleList'));
    }

    public function kycList(Request $request) {

        $kyc = AdminModel::SuperAdminKycLists();
        $datatable = json_decode(json_encode($kyc));
        $arr = '';
        $status = '';
        $date = '';
        $kycList = [];
        foreach ($datatable as $kycData) {

            $tenant = TenantModel::TenantDetails($kycData->tenant_id);
            if($tenant !== NULL){

                if ($kycData->status == 2) {
                    $status = 'Verified';
                } else if ($kycData->status == 1) {
                    $status = 'Please Verify';
                } else if ($kycData->status == 3) {
                    $status = 'Document Invalid';
                } else {
                    $status = 'Not Uploaded';
                }

                if ($kycData->updated_at == '') {
                    $date = "Not Updated Yet";
                } else {
                    $date = date("d, M, Y", strtotime($kycData->updated_at));
                }

                $prop = array(
                    'tenantName' => isset($tenant->fname) ? $tenant->fname : '',
                    'status' => $status,
                    'lastUpdated' => $date,
                    'id' => isset($kycData->id) ? $kycData->id : ''
                );

                array_push($kycList, $prop);            
                
            }
        }
        return response()->success(compact('kycList'));
    }
    
    public function kycStatus(Request $request, $id){
        $kycStatus = AdminModel::SuperAdminKycDetails($id);
        return response()->success(compact('kycStatus'));
    }

//2="booking pending",1="Booked"
    public function bookingdetails(Request $request, $id) {
        
        $book = AdminModel::bookingDetails($id);
        $property = PropertyModel::PropertyDetails($book->property_id);
        $owner = OwnerModel::OwnerDetails($book->owner_id);
        $tenants = TenantModel::TenantDetails($book->tenant_id);

        $data = array(
            'propertyId' => $property->id,
            'title' => $property->title,
            'owner' => isset($owner->name) ? $owner->name : '',
            'tenant' => isset($tenant->name) ? $tenant->name : '',
            'startDate' => date("Y-m-d", strtotime($book->startDate)),
            'endDate' => date("Y-m-d", strtotime($book->endDate)),
            'status' => $book->status,
        );
        return response()->success(compact('data'));
    } 

    public function updateBooking(Request $request, $id) {
            
        if ($request->input('startDate')) {
            $datas = array(
                'startDate' => $request->input('startDate') . ":00:00:00",
                'endDate' => $request->input('endDate') . ":00:00:00",
                'status' => $request->input('status'),
            );

            AdminModel::UpdateBookingData($datas, $id);
            return response()->success('Booking successful');
        } 
    }    

    public function getTagging(){
        $tagging = AdminModel::taggingDetails();
        return response()->success(compact('tagging'));        
    }

    public function getTagDetailsById(Request $request, $id){
        $tagging = AdminModel::tagDetailsById($id);
        return response()->success(compact('tagging'));         
    }

    public function tagTenant(Request $request, $id, $userId){
        $tagging = AdminModel::tag($id, $userId);
        return response()->success(compact('tagging'));
    }

    public function payments(Request $request){
        $payments = AdminModel::paymentHistory();
        return response()->success(compact('payments'));
    }

    public function updatePaymentStatus(Request $request) {
            
        if ($request->input('id')) {
            $payStatus = null;
            $datas = array();

            $datas['id'] = $request->input('id');
            if($request->input('paymentStatus')){
                $datas['status'] = $request->input('paymentStatus'); 
            }

            if($request->input('flarowStatus')){
                $datas['transfer_status'] = $request->input('flarowStatus'); 
            }

            AdminModel::updatePaymentDetails($datas, $request->input('id'));
            return response()->success('Payment update successful');
        } 
    } 

}
