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
        Schema::create('twitter_influencers', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('full_name');
            $table->string('profile_photo_url');
            $table->string('profile_banner_url');
            $table->boolean('is_verified')->boolean(false);
            $table->integer('followers_count');
            $table->integer('following_count');
            $table->integer('tweets_count');
            $table->string('location');
            $table->string('geocode');
            $table->string('bio');
            $table->string('profile_url');
            $table->boolean('is_protected')->boolean(false);
            $table->boolean('is_featured')->boolean(false);
            $table->timestamp('account_created_on');
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
        Schema::dropIfExists('twitter_influencers');
    }
};
