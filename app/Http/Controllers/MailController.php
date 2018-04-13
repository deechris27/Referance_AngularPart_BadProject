<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Mail;
use App\AdminModel;

class MailController extends Controller{
    
    public function sendWelcomeMail($to, $name){
        
        $data = ['name' => $name, 'email' => $to ];

        Mail::queue('welcomemail', $data, function($message) use($to, $name) {
            $message->to($to, $name)->subject('Flarow Registration');
            $message->from('support@flarow.com', 'Flarow');
        });

        return;
    } 

    public function sendInvitationMail(Request $request, $to, $name){
        
        $data = ['name' => $name, 'email' => $to ];

        Mail::queue('invitationmail', $data, function($message) use($to, $name) {
            $message->to($to, $name)->subject('Flarow Invitation');
            $message->from('support@flarow.com', 'Flarow');
        });

        return;
    } 

    public function sendInvitationByAdmin(Request $request, $id){
        $tenant = AdminModel::getTenantContact($id);

        $to = $tenant[0]->tenant_email;
        $name = $tenant[0]->tenant_name;
        
        $data = ['name' => $name, 'email' => $to ];

        Mail::queue('invitationmail', $data, function($message) use($to, $name) {
            $message->to($to, $name)->subject('Flarow Invitation');
            $message->from('support@flarow.com', 'Flarow');
        });

        AdminModel::updateTagStatus($id);

        return;
    } 
        
}
