<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use Illuminate\Support\Facades\Log;

class OwnerModel extends Model {

    public static function LoginCheck($email = '', $pass = '') {
        $result = DB::table('tbl_owners')
                ->where('email', $email)
                ->where('password', $pass)
                ->first();
        return $result;
    }

    public static function OwnerEmailCheck($email) {
        $result = DB::table('tbl_owners')
                ->where('email', $email)
                ->count();
        return $result;
    }

    public static function OwnerForgetPass($inp = [], $email = '') {
        $result = DB::table('tbl_owners')
                ->where('email', $email)
                ->update($inp);
        return $result;
    }

    public static function OwnerRegister($inp = []) {
        $result = DB::table('tbl_owners')->insertGetId($inp);
        return $result;
    }

    public static function OwnerDetails($id = '') {
        $result = DB::table('user_profile as p')
        ->join('users as u', 'u.id', '=', 'p.user_id')
        ->where('p.user_id', $id)
        ->where('u.type', 1)                
        ->first();
        return $result;
    }

    public static function UpdateOwnerData($inp = [], $id = '') {
        $result = DB::table('tbl_owners')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function InsertGalleryImage($inp = []) {
        $result = DB::table('tbl_property_images')->insertGetId($inp);
        return $result;
    }

    public static function UpdateGalleryImage($inp = [], $id = '') {
        $result = DB::table('tbl_property_images')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function OwnerAdminScheduleLists($id = '') {
        $result = DB::table('tbl_schedule_visit')
                ->where('deleted', '0')
                ->where('owner_id', $id)
                ->get();
        return $result;
    }

    public static function OwnerAdminScheduleDetails($oid = '', $id = '') {
        $result = DB::table('tbl_schedule_visit')
                ->where('owner_id', $oid)
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function UpdateVisitData($inp = [], $id = '') {


        if ($inp['status'] == '2') {

            DB::table('tbl_schedule_visit')
                    ->where('id', $id)
                    ->update(array('status' => 2, 'deleted' => 1));
            DB::table('tbl_booking')->insertGetId($inp);
            $result = "BOOKED";
        } else {

            $result = DB::table('tbl_schedule_visit')
                    ->where('id', $id)
                    ->update($inp);
            $result = "NOO";
        }

        return $result;
    }

    public static function OwnerAdminBookingLists($id = "") {
        DB::enableQueryLog();
        $result = DB::table('tbl_booking')
                ->where('deleted', '0')
                ->where('owner_id', $id)
                ->get();

        Log::info(DB::getQueryLog());        
        return $result;
    }

    public static function OwnerBookingDetails($id = "") {
        $result = DB::table('tbl_booking')
                ->where('deleted', '0')
                ->where('id', $id)
                ->first();

        Log::info("******************");
        Log:info($id);
        Log::info("******************");
        //Log::info($result->id);
        return $result;
    }    
    
    public static function OwnerAdminTicketLists($id = "") {
        $result = DB::table('tbl_ticket')
                ->where('deleted', '0')
                ->where('owner_id', $id)
                ->get();
        return $result;
    }

    public static function OwnerTicketDetails($id = "") {
        $result = DB::table('tbl_ticket')
                ->where('deleted', '0')
                ->where('id', $id)
                ->first();
        return $result;
    }

    public static function UpdateTicketsDatas($inp = [], $id = '') {

        $result = DB::table('tbl_ticket')
                ->where('id', $id)
                ->update($inp);
        return $result;
    }

    public static function ticketDetails($id = '') {
        $result = DB::table('tbl_ticket')
                ->where('id', $id)
                ->first();
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

    public static function ticketCount($id) {
        $result = DB::table('tbl_ticket')
                ->where('owner_id', $id)
                ->where('status',0)
                ->count();
        return $result;
    }

    public static function visitCount($id) {
        $result = DB::table('tbl_schedule_visit')
                ->where('owner_id', $id)
                ->where('status',0)
                ->count();
        return $result;
    }

    public static function thisMonthDue($id ='') {
        DB::enableQueryLog();

        $result = DB::select('select sum(`p`.`rent`) as aggregate from tbl_properties as p inner join tbl_booking as b on b.owner_id = p.owner_id ' .
        ' where b.property_id = p.id and p.owner_id =' .$id. ' and b.property_id = p.id and `b`.`status` = 2 group by b.owner_id');

        return $result;
    }

    public static function thisMonthCollected($id='') {
        $result = DB::select('select sum(p.amount) as rent from tbl_payment_history as p inner join tbl_booking as b on b.owner_id =' 
        .$id. ' where b.status = 2 and b.owner_id =' .$id.  ' and b.tenant_id = p.tenant_id group by b.property_id');
        return $result;
    }

    public static function newTenants() {
        $result = DB::table('users')
                ->where('type', 0)
                ->where('status',0)
                ->count();
        return $result;
    }

    public static function visits() {
        $result = DB::table('tbl_schedule_visit')
            ->where('status',0)
            ->count();
        return $result;
    }

    public static function registration() {
        $result = DB::table('users')
            ->where('status',0)
            ->count();
        return $result;
    }

    public static function newOwners() {
        $result = DB::table('users')
                ->where('type', 1)
                ->where('status',0)
                ->count();
        return $result;
    }

    public static function Owners() {
        $result = DB::table('users as u')
                ->leftjoin('user_profile as usp', 'u.id', '=', 'usp.user_id')
                ->where('u.type', 1)
                ->where('u.status',0)
                ->get(['u.id','fname','lname','u.email','u.mobile', 'u.status']);
        return $result;
    }

    public static function paymentHistory($id) {   
        $result = DB::table('tbl_payment_history as h')
                ->join('tbl_booking as b', 'b.tenant_id', '=', 'h.tenant_id')
                ->join('user_profile as u ', 'u.user_id', '=', 'b.tenant_id' )
                ->join('tbl_properties as p ', 'p.id', '=', 'b.property_id' )
                ->where('b.owner_id', $id)
                ->get(['h.status', 'h.amount', 'h.create_date as date', 'p.title', 'u.fname as name']);
        return $result;
    }    

    public static function newTag($inp = []){
        $result = DB::table('tbl_booking')->insertGetId($inp);
        return $result;
    }

}
