<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'username'  => fake()->unique()->userName(),
            'email'     => fake()->unique()->safeEmail(),
            'password'  => static::$password ??= Hash::make('password'),
            'avatar'    => fake()->imageUrl(200, 200, 'avatar', true),
            'cellphone' => fake()->phoneNumber(),
            'linkedin'  => 'https://linkedin.com/in/' . fake()->userName(),
            'github'    => 'https://github.com/' . fake()->userName(),
            'remember_token' => Str::random(10),
        ];
    }
}
