<?php

namespace Database\Seeders;

use App\Models\BookCopy;
use App\Models\Person;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class BookCopySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $howMany = Person::all()->count();
        for ($i=0; $i < 19; $i++) {
            BookCopy::create(
                [
                    'serial_number'=>$faker->randomNumber(9),
                    'bookshelf'=>$faker->word(),
                    'person_id'=>$faker->numberBetween(1,$howMany)
                ]
                );
        }
    }
}
