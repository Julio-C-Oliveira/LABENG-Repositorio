<?php

namespace App\Services;

use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserService extends Authenticatable
{
    public function createUser(array $data): User
    {
        $user = new User();
        $user->name = $data["name"];
        $user->username = $data["username"];
        $user->email = $data["email"];
        $user->password = Hash::make($data["password"]);
        $user->save();

        return $user;
    }

    public function findUserByEmail(string $email): ?User
    {
        return User::where("email", $email)->first();
    }

    public function updateUser(User $user, array $data): User
    {
        if (isset($data["name"])) {
            $user->name = $data["name"];
        }
        if (isset($data["email"])) {
            $user->email = $data["email"];
        }
        if (isset($data["password"])) {
            $user->password = Hash::make($data["password"]);
        }
        $user->save();

        return $user;
    }

    public function deleteUser(User $user): void
    {
        $user->delete();
    }

    public function getAllUsers(): \Illuminate\Database\Eloquent\Collection
    {
        return User::all();
    }
    public function getUserById(int $id): ?User
    {
        return User::find($id);
    }
    public function getJWTIdentifier()
    {
        return $$this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }
}
