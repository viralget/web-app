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
        Schema::create('influencer_lists_twitter_influencers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('influencer_list_id');
            $table->unsignedBigInteger('twitter_influencer_id');
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
        Schema::dropIfExists('influencer_lists_twitter_influencers');
    }
};
