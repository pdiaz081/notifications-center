<?php

use App\User;
use Illuminate\Database\Seeder;

class NotificationsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all()->map(function ($item, $key) {
            return $item->id;
        });

        for($i = 1; $i <= sizeof($users); $i++)
        {
            $notificationsAmount = rand(3, 10);

            for($y = 1; $y <= $notificationsAmount; $y++)
            {
                $statusValue = rand(0, 1);

                $faker = Faker\Factory::create();

                \App\UserNotification::create([
                    "user_id"       => $i,
                    "notifications" => $faker->sentence,
                    "status"        => $statusValue,
                ]);
            }

        }
    }
}
