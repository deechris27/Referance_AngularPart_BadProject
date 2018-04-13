<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Sms_History;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\MailController;

class SMSController extends Controller{
    public function create(Request $request){

    }
 
    public function individual(Request $request){
        $this->validate($request, [
           'mobile' => 'required|string',
           'email' => 'required|string',
           'name' => 'required|string'
        ]);

        $message = 'Hello '. $request->input('name') .' your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register';
        
        $data = new Sms_History();
        $data->message = $message;
        $data->to =  $request->input('mobile');
        //$data->email = $request->input('email');
        $data->created_by = $request->input('createdBy');
        $data->updated_by = $request->input('updatedBy');
                
        $data->save();
                
        $sms = new SMSVendorController();
        $sms->sendMessage($request->input('mobile'), $data->message);

        $mail = new MailController();
        $mail->sendInvitationMail($request->input('email'), trim($request->name));  
        
        return response()->success(compact('data'));
    }   
    
    public function store(){

    }
    
    public function get(){
        return Sms_History::all();
    }
           
}
