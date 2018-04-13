<?php

namespace App\Http\Controllers\Auth;

use Auth;
use JWTAuth;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Tracking;
use App\Http\Controllers\OTPController;
use App\OTPModel;
use App\ProfileModel;
use App\Http\Controllers\MailController;
use Log;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $this->validate($request, [
            'email'    => 'required|email',
            'password' => 'required|min:8',
        ]);

        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                Log::error("Request from ip =  " . $request->ip() );
                return response()->error('User Id/Password is invalid', 401);
            }
        } catch (\JWTException $e) {
            Log::error("Request from ip =  " . $request->ip() .$e );
            return response()->error('Could not create token', 500);
        }

        $user = Auth::user();
        
        $track = new Tracking;
        $track->ip = $request->ip();
        
        $track->save();
        
        return response()->success(compact('user', 'token'));
    }

    public function register(Request $request){
        $this->validate($request, [
            'mobile'       => 'required|min:10',
            'password'   => 'required|min:6',
            'type' => 'required'
        ]);

        $result = OTPModel::otpDetails($request->mobile, $request->otp);  
        if($result == 0){
            $error = array(
                'code' => 401,
                'message' => 'Invalid OTP'
            );

            return new JsonResponse($error);
        }  

        $user = new User;
        if($request->email != null){
            $user->userid = trim(strtolower($request->email));
        }else{
            $user->userid = trim($request->mobile);
        }
        
        $user->name = trim($request->name);
        $user->email = trim(strtolower($request->email));
        $user->mobile = trim($request->mobile);
        $user->password = bcrypt($request->password);
        $user->type = (int)trim($request->type);
        
        $user->save();

        $inp = array(
            'email' => $user->email,
            'phone' => $user->mobile,
            'user_id' => $user->id,
            'fname' => trim($request->name)
        );
        ProfileModel::insertProfile($inp);

        $token = JWTAuth::fromUser($user);

        //$mail = new MailController();
        //$mail->sendWelcomeMail($user->email, trim($request->name));    


        return response()->success(compact('user', 'token'));
    }
    
     public function logout(){
         Auth::logout();
         return "logged out";
     }
}
