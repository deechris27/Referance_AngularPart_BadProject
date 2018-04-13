<?php

namespace App\Http\Controllers\Auth;

use Mail;
use App\User;
use App\OTPModel;
use App\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;

class PasswordResetController extends Controller
{
    public function sendResetLinkEmail(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email',
        ]);

        //invalidate old tokens
        PasswordReset::whereEmail($request->email)->delete();

        $email = $request->email;
        $reset = PasswordReset::create([
            'email' => $email,
            'token' => str_random(10),
        ]);

        $token = $reset->token;

        Mail::send('auth.reset_link', compact('email', 'token'), function ($mail) use ($email) {
            $mail->to($email)
            ->from('noreply@example.com')
            ->subject('Password reset link');
        });

        return response()->success(true);
    }

    public function verify(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'token' => 'required',
        ]);

        $check = PasswordReset::whereEmail($request->email)
        ->whereToken($request->token)
        ->first();

        if (! $check) {
            return response()->error('Email does not exist', 422);
        }

        return response()->success(true);
    }

    public function reset(Request $request){
        //'token'    => "required|exists:password_resets,token,email,{$request->email}",

        $this->validate($request, [
            'email'    => 'required|email',
            'password' => 'required|min:8',
            'otp' => 'required'
        ]);

        $user = User::whereEmail($request->email)->firstOrFail();

        $result = OTPModel::otpDetails($user->mobile, $request->otp);  
        if($result == 0){
            $error = array(
                'code' => 401,
                'message' => 'Invalid OTP'
            );

            return new JsonResponse($error);
        } 


        $user->password = bcrypt($request->password);
        $user->save();

        //delete pending resets
        PasswordReset::whereEmail($request->email)->delete();

        return response()->success(true);
    }
}
