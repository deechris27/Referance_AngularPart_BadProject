<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Doctor;

class CreateDoctorTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateDoctorSuccessfully()
    {
        $post = factory(App\Doctor::class)->make();

        $this->post('/api/doctors', [
          'name' => $post->name,
          'address' => $post->address,
          'phoneNumber' => $post->phoneNumber,
          'clinicAddress' => $post->clinicAddress,
          'clinicPhoneNumber' => $post->clinicPhoneNumber,
          'commission' => $post->commission,
          'emailId' => $post->emailId,
            
          ])->seeApiSuccess()
          ->seeJsonObject('data');
        
        $this->seeInDatabase('doctors', [
          'name' => $post->name,
          'address' => $post->address,
          'phoneNumber' => $post->phoneNumber,
          'clinicAddress' => $post->clinicAddress,
          'clinicPhoneNumber' => $post->clinicPhoneNumber,
          'commission' => $post->commission,
          'emailId' => $post->emailId,
            
          ]);
    }
}
