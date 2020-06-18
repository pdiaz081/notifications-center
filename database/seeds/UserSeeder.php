<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    const AMOUNT_OF_USERS = 100;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 1; $i <= static::AMOUNT_OF_USERS; $i++)
        {
            $faker = Faker\Factory::create();

            User::create([
                "first"    => $faker->firstName,
                "last"     => $faker->lastName,
                "email"    => $faker->email,
                "password" => "test1234",
            ]);
        }
    }
}
