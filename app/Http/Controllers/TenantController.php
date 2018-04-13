<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TenantModel;

class TenantController extends Controller {

    public function tenants(Request $request){
        $tenantData = TenantModel::newTenants();
        return response()->success(compact('tenantData'));
    }

    public function tenantAddSchedule(Request $request) {
        
        if ($request->input('ownerId')) {
            $inputdata = array(
                'owner_id' => $request->input('ownerId'),
                'property_id' => $request->input('propertyId'),
                'tenant_id' => $request->input('tenantId'),
                'scheduleDate' => $request->input('visitDate'),
                'scheduleTime' => $request->input('visitTime'),
                'message' => $request->input('details'),
            );

            TenantModel::TenantScheduleInsert($inputdata);
        }
        return response()->success('Success');
    }

    public function tenantdetails(Request $request, $id){
        $tenantData = TenantModel::tenantData($id);
        return response()->success(compact('tenantData'));
    }

    //'0'=not uploaded, '1'=sent for verification, '2'= Approved, '3'='invalid doc'
    public function upsertKyc(Request $request, $id){

        $inputdata = [];
        $found = TenantModel::TenantSearchKYC($id);

        $inputdata['tenant_id'] = $id;
        if( null !== $request->input('vid')){
            $v_stat = $request->input('vid');
            $inputdata['v_stat'] = $v_stat;
        }

        if(null !== $request->input('aadhar')){
            $a_stat = $request->input('aadhar');
            $inputdata['a_stat'] = $a_stat;
        }

        if(null !== $request->input('pp')){
            $pass_stat = $request->input('pp');
            $inputdata['pass_stat'] = $pass_stat;
        }

        if(null !== $request->input('status')){
            $pass_stat = $request->input('status');
            $inputdata['status'] = $pass_stat;
        }        

        if($found){
            TenantModel::TenantKYCUploads($inputdata, $id);
        }else{
            TenantModel::insertKYC($inputdata,$id);
        }

        return response()->success('Success');
    }

    public function tenantKyc(Request $request, $id){
        $tenantData = TenantModel::tenantData($id);
        return response()->success(compact('tenantData'));
    }

    public function getKyc(Request $request, $id){
        $kycData = TenantModel::TenantKYC($id);
        return response()->success(compact('kycData'));
    }
 
    public function updStatus(Request $request, $id) {
        if($request->status){
            $results = TenantModel::updateStatus($request->status, $id);
            return response()->success(compact('results'));
        }
    }     

    public function getPaymentStatus(Request $request, $id){
        $results = TenantModel::paymentDetails($id);
        return response()->success(compact('results'));
    }

    public function paymentHistory(Request $request, $id){
        $payments = TenantModel::paymentHistory($id);
        return response()->success(compact('payments'));
    }
    
    public function updateKyc(Request $request, $id){
        if($request->share){
            $results = TenantModel::updateKyc($request->share, $id);
            return response()->success(compact('results'));
        }
    }

    public function netbankingPayment(Request $request){

        $data = array(
            'tenant_id' => $request->input('id'),
            'status' => 2,
            'amount' => $request->input('amount'),
            'payment_id' => $request->input('refNo'),
            'description' => $request->input('Netbanking'),
            'netbanking' => 1
        );

        $results =  TenantModel::paymentHistoryInsert($data);

        return response()->success(compact('results'));              
    }

}
