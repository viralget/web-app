<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('whatsapp_influencers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('gender', ['male', 'female']);
            $table->integer('age');
            $table->string('marital_status');
            $table->string('email');
            $table->string('occupation');
            $table->string('whatsapp_number');
            $table->string('average_views');
            $table->string('video_evidence');
            $table->string('country');
            $table->string('state');
            $table->string('parental_status');
            $table->string('interests');
            $table->boolean('is_verified')->default(false);
            $table->enum('approval_status', ['pending', 'approved', 'rejected'])->default('pending');
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
        Schema::dropIfExists('whatsapp_influencers');
    }
};
