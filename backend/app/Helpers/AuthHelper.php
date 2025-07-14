<?php

namespace App\Helpers;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthHelper
{
    public static function isCorrectPassword(User $user, string $password)
    {
        if (Hash::check($password, $user->password)) {
            return true;
        }
        return false;
    }

    public static function generateToken(User $user)
    {
        $token = $user->createToken('auth_token')->plainTextToken;
        return $token;
    }
}
