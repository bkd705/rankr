<?php
namespace App\Services;

use App\Models\User;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Password;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthService
{
    public function register($credentials)
    {
        $user = User::create([
            'name' => $credentials['name'],
            'email' => $credentials['email'],
            'password' => $credentials['password']
        ]);

        return $user;
    }

    public function login($credentials)
    {
        try {
            $token = auth()->attempt($credentials);
            return [ 'token' => $token ];
        } catch (JWTException $e) {
            return [ 'error' => 'Failed to login, please try again' ];
        }
    }

    public function logout($token)
    {
        try {
            auth()->invalidate($token);
        } catch (JWTException $e) {
            return 'Failed to logout, please try again';
        }
    }

    public function recover($email)
    {
        try {
            Password::sendResetLink($request->only('email'), function (Message $message) {
                $message->subject('Your password reset link');
            });
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }
}
