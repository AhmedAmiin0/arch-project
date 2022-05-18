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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->text('description');
            $table->text('keywords');
            $table->string('project_highlights_section1_title');
            $table->string('project_highlights_section1_description');
            $table->string('project_highlights_section2_title');
            $table->string('project_highlights_section2_description');
            $table->string('project_highlights_section3_title');
            $table->string('project_highlights_section3_description');
            $table->string('project_highlights_section4_title');
            $table->string('project_highlights_section4_description');
            $table->enum('visible',['VISIBLE','HIDDEN'])->default('HIDDEN');
            $table->enum('is_featured',['FEATURED',"NOT_FEATURED"])->default('NOT_FEATURED');
            $table->unsignedBigInteger('category_id')->index()->nullable();
            $table->unsignedBigInteger('service_id')->index()->nullable();
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
        Schema::dropIfExists('projects');
    }
};
