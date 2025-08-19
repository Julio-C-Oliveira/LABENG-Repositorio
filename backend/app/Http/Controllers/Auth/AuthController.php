<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Database\Eloquent\Model;
use App\Helpers\AuthHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignUpRequest;
use App\Http\Resources\UserResource;
use App\Services\UserService;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth:api", ["except" => ["login", "signup"]]);
    }

    public function me()
    {
        $user = Auth::user();

        return response()->json(
            [
                "user" => new UserResource($user),
            ],
            200,
        );
    }

    public function signup(SignUpRequest $request, UserService $userService)
    {
        $data = $request->validated();
        $user = $userService->createUser($data);

        $token = AuthHelper::generateToken($user);

        return response()->json(
            [
                "status" => "success",
                "message" => "User Registered Successfully",
                "user" => $user,
                "token" => $token,
            ],
            201,
        );
    }

    public function login(
        LoginRequest $request /*
    UserService $userService,
    AuthHelper $authHelper,
     */,
    ) {
        $data = $request->validated();
        $token = Auth::attempt($data);

        if (!$token) {
            return response()->json(
                [
                    "status" => "error",
                    "message" => "unauthorized",
                ],
                401,
            );
        }

        $user = Auth::user();
        return response()->json([
            "status" => "success",
            "user" => $user,
            "token" => $token,
        ]);
        /*
        $user = $userService->findUserByEmail($data["email"]);
        if (!$authHelper->isCorrectPassword($user, $data["password"])) {
            return response()->json(["message" => "Invalid credentials"], 401);
        }

        $token = $authHelper->generateToken($user);
        return response()->json(
            [
                "message" => "Login successful",
                "user" => new UserResource($user),
                "token" => $token,
            ],
            200,
        ); */
    }
}
