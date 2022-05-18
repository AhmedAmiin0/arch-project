<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('about_pages', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->string('subtitle')->nullable();
            $table->text('description')->nullable();
            $table->string('sentence_title')->nullable();
            $table->string('sentence_subtitle')->nullable();
            $table->string('sentence_description')->nullable();
            $table->text('keywords')->nullable();
            $table->text('first_section_title')->nullable();
            $table->text('first_section_subtitle')->nullable();
            $table->text('first_section_description')->nullable();
            $table->string('video_url')->nullable();
            $table->string('slug')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('about_pages');
    }
};
