<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DB;
use Illuminate\Support\Facades\Log;

class ProfileModel extends Model {

    public static function LoginCheck($email = '', $pass = '') {
        $result = DB::table('user_profile')
                ->where('email', $email)
                ->where('password', $pass)
                ->first();
        return $result;
    }

    public static function UserEmailCheck($email) {
        $result = DB::table('user_profile')
                ->where('email', $email)
                ->count();
        return $result;
    }

    public static function UserRegister($inp = []) {
        $result = DB::table('user_profile')->insertGetId($inp);
        Log::info($result);
        /* ---Insert in dependent table--- */
        //$data = array('tenant_id' => $result);
        //DB::table('tbl_kyc')->insertGetId($data);
        return $result;
    }

    public static function TenantInsertKYC($id) {
        $data = array('tenant_id' => $id);
        $result = DB::table('tbl_kyc')->insertGetId($data);
        return $result;
    }

    public static function ProfileDetails($id = '') {
        $result = DB::table('user_profile')
                ->where('user_id', $id)
                ->where('deleted', '0')
                ->first();
        return $result;
    }

    public static function UpdateUserProfile($inp = [], $id = '') {
        $result = DB::table('user_profile')
                ->where('user_id', $id)
                ->update($inp);
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

    public static function insertProfile($inp = []) {
        $result = DB::table('user_profile')->insertGetId($inp);
        return $result;
    }

    public static function bankdetailsCheck($bname, $id) {
        $result = DB::table('user_profile')
                ->where('bank_name', $bname)
                ->where('user_id', $id)
                ->count();
        return $result;
    }

}
