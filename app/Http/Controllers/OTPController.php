<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\OTPModel;
use App\User;
use App\Http\Controllers\SMSVendorController;
use Mail;

class OTPController extends Controller{

    public function reg(Request $request)
    {
        $this->validate($request, [
            'email'      => 'required|email|unique:users',
            'mobile'       => 'required|min:10',
            'password'   => 'required|min:6',
            'type' => 'required'
        ]);

        $this->sendOTP(trim($request->mobile));

        return;
    }

    public function reSend(Request $request)
    {
        $this->validate($request, [
            'email'      => 'required|email',
            'mobile'       => 'required|min:10',
            'password'   => 'required|min:6',
            'type' => 'required'
        ]);

        $this->sendOTP(trim($request->mobile));

        return;
    }

     public function sendOTP($number){
		// generate OTP
        $otp = mt_rand(10000,99999);
    
        $inputdata = array(
            'otp' => $otp,
            'mobile' => $number
        );

        $result = OTPModel::otpEntry($inputdata);
        $smsVendor = new SMSVendorController();
        $msg = $otp. " is your one time password to proceed on FLAROW";
    
        $smsVendor->send($number, $msg, $otp);
        return $result;         
    }

    public function quickRegister(Request $request){
        $this->validate($request, [
            'mobile'       => 'required|min:10',
        ]);  
        
        $this->sendOTP(trim($request->mobile));
        
        return;               
    }  
    
    public function sendMail(){
        
        $data = ['name' => 'test mail'];
        $o_email = "uma@ulagellam.com";
        $name ="test";
        Mail::send('welcome', $data, function($message) use($o_email, $name) {

            $message->to($o_email, $name)->subject('Flarow Registration Verification');
            $message->from('admin@flarow.com', 'Flarow');
        });
    } 

    public function sendByEmail(Request $request){
        $this->validate($request, [
            'email'      => 'required|email'
        ]);

        $data = User::getUserByEmail($request->email);
        Log::info("$$$$$$$$$$");
        Log::info($data[0]->mobile);

        $this->sendOTP(trim($data[0]->mobile));
        return;
    }
        
}
