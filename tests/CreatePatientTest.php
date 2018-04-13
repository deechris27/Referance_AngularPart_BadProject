<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Student;

class CreateStudentTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateStudentSuccessfully()
    {
        $post = factory(App\Student::class)->make();

        $this->post('/api/students', [
          'fname' => $post->fname,
          'lname' => $post->lname,
          'regno' => $post->regno,  
          'aadhar' => $post->aadhar,  
          'gender' => $post->gender,
          'dob' => $post->dob,
          'class'=>$post->class,
          'section'=>$post->section  
          ])->seeApiSuccess()
          ->seeJsonObject('data');
        
        $this->seeInDatabase('students', [
          'fname' => $post->fname
//          'gender' => $post->gender,
//          'maritalStatus' => $post->maritalStatus,
          //'dob' => $post->dob,
//          'address' => $post->address,
//          'phoneNumber' => $post->phoneNumber,
//          'mobile'  => $post->mobile, 
//          'emailId' => $post->emailId,            
          ]);
    }
    
    /*public function testDeleteStudent(){
        
        $this->delete('/api/patient/15')
                ->seeApiSuccess();
    }*/
    
    /*public function testUpdateStudent(){
        $post = factory(App\Student::class)->make();

        $this->put('/api/patient/5', [
          'name' => $post->name,
          'gender' => $post->gender,
          'maritalStatus' => $post->maritalStatus,
          'dob' => $post->dob,
          'address' => $post->address,
          'phoneNumber' => $post->phoneNumber,
          'mobile'  => $post->mobile, 
          'emailId' => $post->emailId,            
          ])->seeApiSuccess();    
        
          $this->seeInDatabase('patients', [
          'name' => $post->name,
          'gender' => $post->gender,
          'maritalStatus' => $post->maritalStatus,
          //'dob' => $post->dob,
          'address' => $post->address,
          'phoneNumber' => $post->phoneNumber,
          'mobile'  => $post->mobile, 
          'emailId' => $post->emailId,            
          ]);
    }*/
}
