<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class Authentication extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function it_should_register_a_user()
    {
        $email = 'kungfukenny@example.com';

        $this->post('/api/register', [
            'email' => $email,
            'name' => 'kungfu kenny',
            'password' => 'password123'
        ])->assertStatus(200);

        $this->assertDatabaseHas('users', ['email' => $email]);
    }

    /** @test */
    public function it_should_login_a_user_and_return_a_token()
    {
        $user = create('App\Models\User', [ 'password' => 'password123' ]);

        $this->post('/api/login', [
            'email' => $user->email,
            'password' => 'password123'
        ])
        ->assertStatus(200)
        ->assertJsonStructure([
            'data' => ['token']
        ]);
    }
}
