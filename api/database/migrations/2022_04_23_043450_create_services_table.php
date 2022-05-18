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
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('subtitle')->nullable();
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->string('excerpt')->nullable();
            $table->string('slug')->nullable();
            $table->enum('visible',['VISIBLE','HIDDEN'])->default('HIDDEN');
            $table->enum('is_featured',['FEATURED',"NOT_FEATURED"])->default('NOT_FEATURED');
            // $table->softDeletes();
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
        Schema::dropIfExists('services');
    }
};
