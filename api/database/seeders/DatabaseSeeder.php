<?php

namespace Database\Seeders;

use App\Models\Email;
use App\Models\Project;
use Database\Factories\CategoryFactory;
//use Database\Factories\HasAttractiveSentenceFactory;
//use Database\Factories\HasSectionFactory;
use Database\Factories\HighlightedSectionFactory;
use Database\Factories\ProjectFactory;
use Database\Factories\ServiceFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        Email::factory(100)->create();
        // ProjectFactory::new()->count(10)->create();
//        HasAttractiveSentenceFactory::new()->count(10)->create();
//        HasSectionFactory::new()->count(10)->create();
        // HighlightedSectionFactory::new()->count(10)->create();
        //CategoryFactory::new()->count(10000)->create();
    }
}
