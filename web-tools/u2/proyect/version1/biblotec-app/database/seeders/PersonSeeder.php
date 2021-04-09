<?php

namespace Database\Seeders;

use App\Models\Person;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        for ($i=0; $i < 4; $i++) {
            Person::create(
                [
                    'name'=>$faker->word(),
                    'firstSurname'=>$faker->word(),
                    'secondSurname'=>$faker->word(),
                    'age'=>$faker->randomNumber(1),
                    'major'=>$faker->word()
                ]
            );
        }
    }
}
