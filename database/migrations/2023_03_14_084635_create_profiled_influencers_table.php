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
        Schema::create('profiled_influencers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('influencer_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('influencer_id')->references('id')->on('twitter_influencers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.x
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiled_influencers');
    }
};
