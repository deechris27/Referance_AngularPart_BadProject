<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CreateBillTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
    $post = factory(App\Bill::class)->make();
    
    $this->post('/api/bills', [
      'billNo' => $post->billNo,
      'billDate' => $post->billDate,
      'branchId' => $post->branchId,
      'patientId' => $post->patientId,
      'testIds' => $post->testIds,
      'totalCost' => $post->totalCost,
      'tax' => $post->tax,
      'discount' => $post->discount,
      'remarks' => $post->remarks,
      'tcIds' => $post->tcIds,
      'doctorId' => $post->doctorId
        
      ])->seeApiSuccess()
      ->seeJsonObject('bill');
    
    $this->seeInDatabase('bills', [
      'billNo' => $post->billNo,
      'billDate' => $post->billDate,
      'branchId' => $post->branchId,
      'patientId' => $post->patientId,
      'totalCost' => $post->totalCost,
      'tax' => $post->tax,
      'discount' => $post->discount,
      'remarks' => $post->remarks,
      'doctorId' => $post->doctorId    
      ]);
    }
}
