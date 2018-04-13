<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class CreateTcTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testStoresTcSuccessfully()
    {
        $post = factory(App\Tc::class)->make();

        $this->post('/api/tcs', [
          'description' => $post->description,
          'type' => $post->type,
          'active' => $post->active,
          ])->seeApiSuccess()
          ->seeJsonObject('data');

        $this->seeInDatabase('tcs', [
          'description' => $post->description,
          'type' => $post->type,
          'active' => $post->active,  
          ]);
    }
}
