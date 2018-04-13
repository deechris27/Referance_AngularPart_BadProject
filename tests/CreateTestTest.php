<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use App\Test;

class CreateTestTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testStoresTestsSuccessfully()
    {
        $post = factory(App\Test::class)->make();

        $this->post('/api/tests', [
          'name' => $post->name,
          'noOfParameters' => $post->noOfParameters,
          'cost' => $post->cost,
          ])->seeApiSuccess()
          ->seeJsonObject('data');

        $this->seeInDatabase('tests', [
          'name' => $post->name,
          'noOfParameters' => $post->noOfParameters,
          'cost' => $post->cost,  
          ]);
    }
}
