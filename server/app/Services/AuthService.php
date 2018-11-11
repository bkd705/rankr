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

        $token = auth()->login($user);

        return $token;
    }

    public function login($credentials)
    {
        $token = auth()->attempt($credentials);
        if (!$token) {
            return [ 'token' => null, 'error' => 'Failed to login, please try again' ];
        }

        return [ 'token' => $token ];
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
