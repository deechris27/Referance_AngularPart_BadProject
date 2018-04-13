<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use DB;

class OTPModel extends Model {

    public static function otpEntry($data) {
        $result = DB::table('otp')->insertGetId($data);
        return $result;
    }

    public static function otpDetails($mobile = '', $otp) {
        $result = DB::table('otp')
                ->where('mobile', $mobile)
                ->where('otp', $otp)
                ->where('expired', '0')
                ->count();        
        return $result;
    }    
}