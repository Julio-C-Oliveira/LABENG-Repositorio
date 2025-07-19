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

    public function signup(SignUpRequest $request)
    {
        $data = $request->validated();
        /*
        $userService->createUser([
            "username" => $data["username"],
            "email" => $data["email"],
            "password" => $data["password"],
        ]);
        $user = User::create([
            "name" => $userService->usernamename,
            "email" => $userService->email,
            "password" => $userService->password,
        ]); */
        $user = User::create([
            "name" => $data["name"],
            "email" => $data["email"],
            "password" => Hash::make($data["password"]),
        ]);

        $token = $user->createToken("auth-token")->plainTextToken;
        return response()->json(
            [
                "status" => "success",
                "message" => "User Registered Successfully",
                "user" => $user,
                "authorisation" => [
                    "token" => $token,
                    "type" => "bearer",
                ],
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
            "authorisation" => [
                "token" => $token,
                "type" => "bearer",
            ],
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
