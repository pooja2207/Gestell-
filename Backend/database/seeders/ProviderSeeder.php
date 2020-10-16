<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use DB;
class ProviderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       	DB::table('providers')->insert([
            [
                'id' => 1,
                'name' => 'Provider 1',
                'lowest_price' => '20',
                'rating' => '4',
                'max_speed' => '40',
                'description' => 'Provider is the Lowest One',
                'contact_no' => '9766640207',
                'email' => 'p@yopmail.com',
                'image' => '123.png',
                'url' => 'tops',
            ],
            [
                'id' => 2,
                'name' => 'Provider 1',
                'lowest_price' => '20',
                'rating' => '4',
                'max_speed' => '40',
                'description' => 'Provider is the Lowest One',
                'contact_no' => '9766640207',
                'email' => 'p@yopmail.com',
                'image' => '123.png',
                'url' => 'tops',
            ],
            [
                'id' => 3,
                'name' => 'Provider 1',
                'lowest_price' => '20',
                'rating' => '4',
                'max_speed' => '40',
                'description' => 'Provider is the Lowest One',
                'contact_no' => '9766640207',
                'email' => 'p@yopmail.com',
                'image' => '123.png',
                'url' => 'tops',
            ],
            [
                'id' => 4,
                'name' => 'Provider 1',
                'lowest_price' => '20',
                'rating' => '4',
                'max_speed' => '40',
                'description' => 'Provider is the Lowest One',
                'contact_no' => '9766640207',
                'email' => 'p@yopmail.com',
                'image' => '123.png',
                'url' => 'tops',
            ],
            [
                'id' => 5,
                'name' => 'Provider 1',
                'lowest_price' => '20',
                'rating' => '4',
                'max_speed' => '40',
                'description' => 'Provider is the Lowest One',
                'contact_no' => '9766640207',
                'email' => 'p@yopmail.com',
                'image' => '123.png',
                'url' => 'tops',
            ],
            [
                'id' => 6,
                'name' => 'Provider 1',
                'lowest_price' => '20',
                'rating' => '4',
                'max_speed' => '40',
                'description' => 'Provider is the Lowest One',
                'contact_no' => '9766640207',
                'email' => 'p@yopmail.com',
                'image' => '123.png',
                'url' => 'tops',
            ],
            [
                'id' => 7,
                'name' => 'Provider 1',
                'lowest_price' => '20',
                'rating' => '4',
                'max_speed' => '40',
                'description' => 'Provider is the Lowest One',
                'contact_no' => '9766640207',
                'email' => 'p@yopmail.com',
                'image' => '123.png',
                'url' => 'tops',
            ]
          ]);
    }
}
