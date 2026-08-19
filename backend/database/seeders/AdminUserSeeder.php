<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Seed the single shop-owner admin account, sourced from .env so the
     * password never needs to be committed to the repo.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@goldsky.lk')],
            [
                'name' => env('ADMIN_NAME', 'GoldSky Admin'),
                'password' => env('ADMIN_PASSWORD', 'password'),
                'email_verified_at' => now(),
            ]
        );
    }
}
