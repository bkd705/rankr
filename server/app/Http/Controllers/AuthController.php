<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserService;
use App\Services\AuthService;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\LogoutRequest;
use App\Http\Requests\RegisterRequest;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    private $authService;
    private $userService;

    public function __construct(UserService $userService, AuthService $authService)
    {
        $this->authService = $authService;
        $this->userService = $userService;
    }

    public function register(RegisterRequest $request)
    {
        $credentials = $request->only('name', 'email', 'password');

        $this->authService->register($credentials);

        return response(null, 201);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('email', 'password');

        $auth = $this->authService->login($credentials);

        if (!$auth['token']) {
            return response()->json(['success' => false, 'error' => $auth['error']], 401);
        }

        return response()->json(['data' => [ 'token' => $auth['token'] ]], 200);
    }

    public function logout(LogoutRequest $request)
    {
        $error = $this->authService->logout($request->input('token'));

        if ($error) {
            return response()->json(['success' => false, 'error' => $error]);
        }

        return response()->status(200);
    }

    public function recover(Request $request)
    {
        $user = $this->userService->findByEmail($request->email);

        if (!$user) {
            return response()->json(['success' => false, 'error' => [ 'email' => 'Email address not found' ]]);
        }

        $error = $this->authService->recover($user->email);

        if ($error) {
            return response()->json(['success' => false, 'error' => $error]);
        }

        return response()->json([
            'message' => 'A reset email has been sent. Please check your email'
        ]);
    }
}
