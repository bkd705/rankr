<?php
namespace App\Services;

use App\Models\User;

class UserService
{
    public function findByEmail($email)
    {
        return User::where('email', $request->email)->first();
    }
}
