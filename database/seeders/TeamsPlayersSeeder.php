<?php

namespace Database\Seeders;

use App\Models\Player;
use App\Models\Team;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory;

class TeamsPlayersSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $faker = Factory::create();
        foreach ( Team::all() as $team ) {
            for ( $i = 0; $i < 4; $i++ ) {
                $team->players()->attach(
                    $faker->randomFloat( 0, 1, 50 )
                );
            }
        }
    }
}
