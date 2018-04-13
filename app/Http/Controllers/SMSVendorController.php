<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SMSVendorController extends Controller{
    public function create(Request $request){}
    
    public function send($number, $message, $otp){
        
        // Your account details
        $authKey = '155233A9glcJ21p59377f21';

        // Message details
        //$sender = 611332;    
        $sender ='FLAROW';   
        $route = "default";

        $data_tosend = array(
            'authkey' => $authKey, 
            'mobiles' =>$number, 
            "message" => $message,
            "sender" => $sender,             
            "route" => $route, 
        );
                        
        Log::info($message);

        $url = "https://control.msg91.com/api/sendotp.php?".
        "authkey=" . $authKey ."&".
        "mobile=". $number ."&".
        "message=". $message ."&".
        "sender=". $sender ."&".
        "otp=" .$otp;
	
        $ch = curl_init();
        //"https://control.msg91.com/api/sendhttp.php"
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        //curl_setopt($ch, CURLOPT_POST, 1);
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $data_tosend);

        //Ignore SSL certificate verification
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

        $response = curl_exec($ch);
        
        //Log::info('sms log ' .$response);
        
	    curl_close($ch);
    }

    public function sendMessage($number, $message){
        
        // Your account details
        $authKey = '155233A9glcJ21p59377f21';

        // Message details
        //$sender = 611332;       
        $sender ='FLAROW';
        $route = "default";

        $data_tosend = array(
            'authkey' => $authKey, 
            'mobiles' =>$number, 
            "message" => $message,
            "sender" => $sender,             
            "route" => $route, 
        );
                        
        Log::info($message);

        $url = "https://control.msg91.com/api/sendhttp.php";

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_tosend);

        //Ignore SSL certificate verification
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

        $response = curl_exec($ch);
        
        Log::info('sms log ' .$response);
        
	    curl_close($ch);
    }
    
}
