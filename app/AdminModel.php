<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use Illuminate\Support\Facades\Log;

class AdminModel extends Model {

    public static function LoginCheck($input = []) {
        $result = DB::table('tbl_super_admin')
                ->where('email', $input['email'])
                ->where('password', $input['password'])
                ->first();
        return $result;
    }

    public static function SuperAdminDetails($id = '') {
        $result = DB::table('tbl_super_admin')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function UpdateAdminData($inp = [], $id = '') {
        $result = DB::table('tbl_super_admin')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function SuperAdminownersLists() {
        $result = DB::table('tbl_owners')
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function SuperAdminTenantsLists() {
        $result = DB::table('tbl_tenants')
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function SuperAdminKycLists() {
        $result = DB::table('tbl_kyc')
                ->get();
        return $result;
    }

    public static function SuperAdminKycDetails($id = '') {
        $result = DB::table('tbl_kyc')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function UpdateKycData($inp = [], $id = '') {

        $result = DB::table('tbl_kyc')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function SuperAdminPropertyLists() {
        $result = DB::table('tbl_properties')
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function SuperAdminScheduleLists() {
        $result = DB::table('tbl_schedule_visit')
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function SuperAdminBookingLists() {
        $result = DB::table('tbl_booking')
                ->where('deleted', '0')
                ->get();
        return $result;
    }

    public static function bookingDetails($id = '') {
        $result = DB::table('tbl_booking')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function UpdateBookingData($inp = [], $id = '') {

        $result = DB::table('tbl_booking')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function OwnerDelete($id = '') {

        $tm = time();
        DB::table('tbl_owners')
                ->where('id', $id)
                ->update(array('deleted' => '1', 'deleted_at' => date('Y-m-d', $tm)));

        DB::table('tbl_properties')
                ->where('owner_id', $id)
                ->update(array('deleted' => '1', 'deleted_at' => date('Y-m-d', $tm)));

        DB::table('tbl_property_images')
                ->where('owner_id', $id)
                ->update(array('deleted' => '1', 'deleted_at' => date('Y-m-d', $tm)));
    }

    public static function OwnerImageDetails($id = '') {

        DB::table('tbl_property_images')->where('owner_id', $id)->get();
    }

    public static function TenantDelete($id = '') {

        $tm = time();
        DB::table('tbl_tenants')
                ->where('id', $id)
                ->update(array('deleted' => '1', 'deleted_at' => date('Y-m-d', $tm)));
    }

    public static function PropertyDelete($id = '') {

        $tm = time();
        DB::table('tbl_properties')
                ->where('id', $id)
                ->update(array('deleted' => '1', 'deleted_at' => date('Y-m-d', $tm)));

        DB::table('tbl_property_images')
                ->where('pro_id', $id)
                ->update(array('deleted' => '1', 'deleted_at' => date('Y-m-d', $tm)));
    }

    public static function taggingDetails() {
        $result = DB::select('select distinct b.id, b.owner_id, (select name from users where id = b.owner_id) as ownerName, b.tenant_name as tenantName, '.
                        'b.tenant_mobile as tenantMobile, b.property_id, b.request_status, b.created_at as requestDate, '.
                        'case when u.mobile is not null then "Tag" when u.mobile is null then "Invite" end as Action '.
                        'from tbl_booking b left outer join users u on u.mobile=b.tenant_mobile '.
                        'where b.tenant_id=0'
                        );

        return $result;
    }

    public static function tagDetailsById($id){
        $result = DB::select('select distinct (select name from users where id = b.created_by) as createdBy,' . 
                            ' (select name from users where id = b.updated_by) as updatedBy,'.
                            ' concat(u.fname," ", u.lname) as ownerName, u.email as ownerEmail,'.
                            ' u.phone as ownerMobile, u.about, u.address as ownerAddress,'.
                            ' u.city as ownerCity, u.state as ownerState, u.zip as ownerZip,'.
                            ' b.tenant_name as tenantName, b.tenant_mobile as tenantMobile, '.
                            ' b.property_id, p.`title`, p.rent, p.address as propAddress, '. 
                            ' p.city as propCity, p.state as propState, p.zipcode as propZip, b.request_status'.
                            ' from tbl_booking b, user_profile u, tbl_properties p'.
                            ' where u.user_id = b.owner_id and p.id = b.property_id and b.id = '.$id
                            );
        return $result;                    
    }

    public static function tag($id, $userId){
        $result = DB::statement('update tbl_booking tb,'.
                    '(select u.id from users u, tbl_booking b where u.email = b.tenant_email and b.id =' .$id. ') drv '.
                    ' set tb.tenant_id = drv.id, tb.request_status=4, tb.updated_by =' .$userId. ' where tb.id ='.$id
                    );
        return $result;
    }

    public static function getTenantContact($id){
        $result = DB::select('select tenant_name, tenant_email from tbl_booking where id='. $id
                    );
        return $result;
    }

    public static function updateTagStatus($id) {
        $result = DB::table('tbl_booking')
                ->where('id', $id)
                ->update(array('request_status' => '5'));
        return $result;
    }

    public static function paymentHistory() {   
        DB::enableQueryLog();
        $result = DB::table('tbl_payment_history as h')
                ->join('tbl_booking as b', 'b.tenant_id', '=', 'h.tenant_id')
                ->join('user_profile as u ', 'u.user_id', '=', 'b.owner_id' )
                ->join('user_profile as up ', 'up.user_id', '=', 'h.tenant_id' )
                ->join('tbl_properties as p ', 'p.id', '=', 'b.property_id' )
                ->where('h.status', '=', '2', 'or', 'h.transfer_status', '=', '0')
                ->get(['h.status as paymentStatus', 'h.amount', 'h.create_date as date', 'p.title', 
                'u.fname as ownerName','u.bank_name as bankName', 'u.account_name as holderName', 'u.account_number as accountNumber','u.ifsc_code as ifsc','u.account_type as accountType','up.fname as tenantName', 'h.id', 'h.transfer_status as flarowStatus']);
        Log::info(DB::getQueryLog());
                
        Log::info($result);                
        return $result;
    }

    public static function updatePaymentDetails($inp = [], $id = '') {

        $result = DB::table('tbl_payment_history')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

}
