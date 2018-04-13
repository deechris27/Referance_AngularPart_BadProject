<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use Illuminate\Support\Facades\Log;

class TenantModel extends Model {

    public static function LoginCheck($email = '', $pass = '') {
        $result = DB::table('tbl_tenants')
                ->where('email', $email)
                ->where('password', $pass)
                ->first();
        return $result;
    }

    public static function TenantEmailCheck($email) {
        $result = DB::table('tbl_tenants')
                ->where('email', $email)
                ->count();
        return $result;
    }

    public static function TenantRegister($inp = []) {
        $result = DB::table('tbl_tenants')->insertGetId($inp);
        /* ---Insert in dependent table--- */
        $data = array('tenant_id' => $result);
        DB::table('tbl_kyc')->insertGetId($data);
        return $result;
    }

    public static function TenantInsertKYC($id) {
        $data = array('tenant_id' => $id);
        $result = DB::table('tbl_kyc')->insertGetId($data);
        return $result;
    }

    public static function TenantDetails($id = '') {
        DB::enableQueryLog();

        $result = DB::table('user_profile as p')
                ->rightjoin('users as u', 'u.id', '=', 'p.user_id')
                ->leftjoin('tbl_kyc as k', 'k.tenant_id', '=', 'u.id')
               // ->join('tbl_payment_history as h', 'h.tenant_id', '=', 'u.id')
                ->where('u.id', $id)
                ->where('u.type', 0)
               // ->whereRaw('MONTH(h.create_date) =?',[date('m')])
                ->get(['u.id','p.fname','p.lname','k.id as kycId','k.status','k.share',
               // 'h.status as pstatus',
                'u.email', 'p.phone', 'p.address',
                'p.city', 'p.state', 'p.zip']);

        Log::info(DB::getQueryLog());

        $status = DB::table('tbl_payment_history')
                  ->where('tenant_id', '=', $id)
                  ->whereRaw('MONTH(create_date) =?', [date('m')])
                  ->get(['status']);
                  
        Log::info($status);  


        if(!empty($status)){
            $result[0]->pstatus = isset($status[0]) ? $status[0]->status : '' ;
        }
    
        Log::info($result);

        return $result;
    }

    public static function ScheduledVisit($id = '') {  
        $result = DB::table('tbl_schedule_visit')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function UpdateTenantData($inp = [], $id = '') {
        $result = DB::table('tbl_tenants')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function TenantchekPassword($pass = '', $id = '') {
        $result = DB::table('tbl_tenants')
                ->where('id', $id)
                ->where('password', $pass)
                ->count();
        return $result;
    }

    public static function TenantSearchKYC($id) {
        $result = DB::table('tbl_kyc')
                ->where('tenant_id', $id)
                ->count();
        return $result;
    }

    public static function TenantKYC($id) {
        $result = DB::table('tbl_kyc')
                ->where('tenant_id', $id)
                ->first();
        return $result;
    }

    public static function TenantKYCUploads($inp = [], $id = '') {
        $result = DB::table('tbl_kyc')
                ->where('tenant_id', $id)
                ->update($inp);
        return $result;
    }

    public static function OwnerDetailsByProperty($id = '') {
        $result1 = DB::table('tbl_properties')
                ->where('id', $id)
                ->first();

        $o_id = $result1->owner_id;

        $result = DB::table('tbl_owners')
                ->where('id', $o_id)
                ->first();
        return $result;
    }

    public static function TenantScheduleInsert($inp = []) {
        $result = DB::table('tbl_schedule_visit')->insertGetId($inp);
        return $result;
    }

    public static function PropertyDetails($id = '') {
        $result = DB::table('tbl_properties')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function ScheduleDetailsList($id = '') {
        $result = DB::table('tbl_schedule_visit')
                ->where('tenant_id', $id)
                ->get();
        return $result;
    }

    public static function TicketDetailsList($id = '') {
        $result = DB::table('tbl_ticket')
                ->where('tenant_id', $id)
                ->get();
        return $result;
    }

    public static function OwnerDetails($id = '') {
        $result = DB::table('tbl_owners')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function newTenants(){
        $result = DB::table('users as u')
        ->leftjoin('user_profile as usp', 'u.id', '=', 'usp.user_id')
        ->where('u.type', 0)
        ->where('u.status',0)
        ->get(['u.id','fname','lname','u.email','u.mobile', 'u.status']);
        return $result;        
    }

    public static function tenantData($id = '') {
        $result = DB::table('users as u')
                ->where('u.id', $id)
                ->where('u.type', 0)
                ->get(['u.id', 'u.mobile', 'u.email']);
        return $result;
    }

    public static function insertKYC($data, $id) {
        $result = DB::table('tbl_kyc')->insertGetId($data);
        return $result;
    }
    
    public static function updateStatus($status, $id = '') {
        $result = DB::table('user_profile')
                ->where('user_id', $id)
                ->update(array('status' => $status));
        $result = DB::table('users')
            ->where('id', $id)
            ->update(array('status' => $status));                
        return $result;
    }        
    
    public static function propertyBookingByTenant($id = "") {

        $result = DB::table('tbl_properties as p')
        ->join('tbl_booking as b ', 'b.property_id', '=', 'p.id' )
        ->join('user_profile as u ', 'u.user_id', '=', 'p.owner_id' )
        ->where('u.deleted', '0')
        ->where('p.deleted', '0')
        ->where('b.tenant_id', $id)        
        ->get(['p.rent as rent', 'u.fname as ownerName']);

        return $result;
    }

    public static function paymentHistoryInsert($data) {
        $result = DB::table('tbl_payment_history')->insertGetId($data);
        return $result;
    }

    public static function paymentDetails($id) {   
        $result = DB::table('tbl_payment_history')
                ->where('payment_id', $id)
                ->get();
        return $result;
    }

    public static function paymentHistory($id) {   
        DB::enableQueryLog();
        $result = DB::table('tbl_payment_history as h')
                ->join('tbl_booking as b', 'b.tenant_id', '=', 'h.tenant_id')
                ->join('user_profile as u ', 'u.user_id', '=', 'b.owner_id' )
                ->join('tbl_properties as p ', 'p.id', '=', 'b.property_id' )
                ->where('h.tenant_id', $id)
                ->get(['h.status', 'h.amount', 'h.create_date as date', 'p.title', 'u.fname as name']);
        Log::info(DB::getQueryLog());
                
        Log::info($result);                
        return $result;
    }

    public static function updateKyc($share, $id = '') {
        $result = DB::table('tbl_kyc')
                ->where('id', $id)
                ->update(array('share' => $share));
        return $result;
    }

}