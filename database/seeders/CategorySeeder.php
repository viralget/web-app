<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Art',
            ],
            [
                'name' => 'Actors',
            ],
            [
                'name' => 'Blogs',
            ],
            [
                'name' => 'Beauty',
            ],
            [
                'name' => 'Comedy',
            ],
            [
                'name' => 'Computers & Gadgets',
            ],
            [
                'name' => 'Crypto',
            ],
            [
                'name' => 'Dance',
            ],
            [
                'name' => 'Entertainment',
            ],
        ];

        \App\Models\Category::create($categories);
    }
}
