<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use App\Student;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Http\Response;

class AppController extends Controller
{
    public function create(Request $request){
        
        Log::info('here in create ');
        
        $this->validate($request, [
           'fname' => 'required|string',
           'lname' => 'required|string',
           'regno' => 'required|string', 
           'aadhar' => 'required|string',
           'gender' => 'required|string', 
           'dob' => 'required|date', 
           'class' => 'required|string',
           'section' => 'required|string',
        ]);
        
        $result = Student::where('reg_no', $request->input('regno'))
        ->where('fname', $request->input('fname'))
        ->where('lname', $request->input('lname'))        
        ->get();
        
        if($result->first()){
            return response()->error('Student already exists', 409);
        }
        
        $data = new Student();
        $data->fname = $request->input('fname');
        $data->lname = $request->input('lname');
        $data->reg_no = $request->input('regno');
        $data->aadhar = $request->input('aadhar');
        $data->sex = $request->input('gender');
        $data->dob = $request->input('dob');
        $data->class = $request->input('class');
        $data->section = $request->input('section');
        $data->doa = $request->input('doa');
        $data->class_admitted = $request->input('admitted');
        $data->year = $request->input('year');
        $data->l2 = $request->input('l2');
        $data->l3 = $request->input('l3');
        $data->transport = $request->input('transport');
        $data->type = $request->input('type');
        $data->ex_curricular = $request->input('cocurricular');
        $data->blood_group = $request->input('bloodgrp');
        $data->fees = $request->input('fees');
        $data->sports = $request->input('sports');
        $data->father = $request->input('father');
        $data->mother = $request->input('mother');
        $data->father_email = $request->input('femail'); 
        $data->mother_email = $request->input('memail'); 
        $data->father_mobile = $request->input('fmobile');
        $data->mother_mobile = $request->input('mmobile');               
        $data->created_by = $request->input('createdBy'); 
        $data->updated_by = $request->input('updatedBy'); 
        $data->save();
        
        return response()->success(compact('data'));
    }
    
    public function entries(Request $request){
        
        $this->validate($request, [
           'userId' => 'required|numeric'
        ]); 

        $dt = Carbon::now();
        $userId = $request->input('userId');
        
        $responseData = [];
        $ids = explode(',', $request->input('id'));
        foreach ($ids as $id){
             $data = new \App\Absentee();
             $data->reg_no = $id;
             $data->absent_at = $dt->format('d/m/Y');
             $data->school_id = $userId;
             
             $data->save(); 
             array_push($responseData, $data);
        }
 
        $sql = 'select * from (select s.reg_no, s.fname, s.lname, s.father_mobile, s.class '
                . 'from students s left join absentees a on s.reg_no = a.reg_no and '
                . 'a.reg_no is null and a.absent_at = date(CURRENT_DATE) ) as drv '
                . 'where drv.class ="I" order by drv.reg_no';
        
        $mobile = DB::select( $sql);
        
        $api_key = '45952758CCAFB5';
        $contacts = $mobile[0]->father_mobile;
        $from = 'KURNJI';
        
        $message = "Your ward " .$mobile[0]->fname. " " .$mobile[0]->lname. 
                " with roll number " .$data->sid. 
                " safely came to the school - Pricipal, Kurinji CBSE";
        
        Log::info($message);
        $sms_text = urlencode($message);
	
        $ch = curl_init();
        curl_setopt($ch,CURLOPT_URL, "http://sms.shanmugacomputers.com/app/smsapi/index.php");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "key=".$api_key."&routeid=134&type=text&contacts=".$contacts."&senderid=".$from."&msg=".$sms_text);
        $response = curl_exec($ch);
        
        Log::info('sms log ' .$response);
        
	curl_close($ch);
        
        return response()->success(compact('responseData'));       
    }
    
    public function destroy($id){
        return Student::destroy($id);
    }
    
    public function update(Request $request, $id)
    {

    }
    
    public function show($id){
        return Student::find($id);
    }
    
    public function store(){
        Log::info('here in store ');
    }
    
    public function details(Request $request){
        
        $userId = $request->input('userId');
        $sql = 'select s.name, s.logo_url, s.address from schools s, users u '
                . 'where s.id = u.school_id ';
        $params = [];
        
        if(!is_null($userId) && !empty($userId)){
            $sql = $sql . ' and u.id = :schoolId';
            $params['schoolId'] = $userId;
        }
        
        $sql = $sql . ' order by s.id' ;
        
        $result = DB::select( $sql, $params);
        
        Log::info(\GuzzleHttp\json_encode($result[0]));
        
        return response()->success($result[0]);
       
     }
     
     public function lists(Request $request){
         
        $userId = $request->input('userId');
        $sql = 'select c.id, class, section from classes c, users u '
                . 'where c.school_id=u.school_id ';
        $params = [];
        
        if(!is_null($userId) && !empty($userId)){
            $sql = $sql . ' and u.id = :schoolId';
            $params['schoolId'] = $userId;
        }
        
        $sql = $sql . ' order by c.id' ;
        
        $result = DB::select( $sql, $params);
        return response()->success($result);
     }  
     
      public function classes(Request $request){
          
        $this->validate($request, [
           'userId' => 'required|numeric',
           'classId' => 'required|numeric'
        ]);          
          
        $userId = $request->input('userId');
        $classId = $request->input('classId');
        
        $sql = 'select s.id, s.fname, s.lname, s.reg_no from students s, 
                classes c, users u where s.class = c.class and 
                s.section = c.section and c.school_id = u.school_id';
        
        $params = [];

        if(!is_null($classId) && !empty($classId)){
            $sql = $sql . ' and c.id = :classId';
            $params['classId'] = $classId;
        }
        
        if(!is_null($userId) && !empty($userId)){
            $sql = $sql . ' and u.id = :schoolId';
            $params['schoolId'] = $userId;
        }
        
        $sql = $sql . ' order by s.id' ;
        
        $result = DB::select( $sql, $params);
        return response()->success($result);
     }     
    
}
