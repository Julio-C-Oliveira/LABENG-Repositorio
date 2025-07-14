<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\AuthHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Http\Resources\UserResource;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    public function me()
    {
        $user = Auth::user();

        return response()->json([
            'user' => new UserResource($user),
        ], 200);
    }

    public function signup(SignUpRequest $request, UserService $userService)
    {
        $data = $request->validated();

        $userService->createUser([
            'username' => $data['username'],
            'email' => $data['email'],
            'password' => $data['password'],
        ]);

        return response()->json([
            'message' => 'User created successfully',
        ], 201);
    }

    public function login(LoginRequest $request, UserService $userService, AuthHelper $authHelper)
    {
        $data = $request->validated();

        $user = $userService->findUserByEmail($data['email']);
        if (!$authHelper->isCorrectPassword($user, $data['password'])) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $authHelper->generateToken($user);
        return response()->json([
            'message' => 'Login successful',
            'user' => new UserResource($user),
            'token' => $token,
        ], 200);
    }
}
