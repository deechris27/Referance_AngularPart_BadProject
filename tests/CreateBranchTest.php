<?php

use App\Branch;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class CreateBranchTest extends TestCase
{

  public function testStoresPostSuccessfully()
  {
   
    $post = factory(App\Branch::class)->make();
    
    $this->post('/api/branches', [
      'name' => $post->name,
      'address1' => $post->address1,
      'address2' => $post->address2,
      'city' => $post->city,
      'state' => $post->state,
      'zip' => $post->zip,
      'landLine' => $post->landLine,
      'mobile' => $post->mobile,
      'emailId' => $post->emailId,
      'contactPerson' => $post->contactPerson,
      'designation' => $post->designation,
      'phoneNumber' => $post->phoneNumber
        
      ])->seeApiSuccess()
      ->seeJsonObject('branch');
    
    $this->seeInDatabase('branches', [
      'name' => $post->name,
      'address1' => $post->address1,
      'address2' => $post->address2,
      'city' => $post->city,
      'state' => $post->state,
      'zip' => $post->zip,
      'landLine' => $post->landLine,
      'mobile' => $post->mobile,
      'emailId' => $post->emailId,
      'contactPerson' => $post->contactPerson,
      'designation' => $post->designation,
      'phoneNumber' => $post->phoneNumber,  
      ]);
  }
  
}