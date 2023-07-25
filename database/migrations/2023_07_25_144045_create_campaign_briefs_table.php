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
        Schema::create('campaign_briefs', function (Blueprint $table) {
            $table->id();
            $table->string('campaign_name');
            $table->text('social_network');
            $table->string('campaign_type');
            $table->string('campaign_budget');
            $table->string('campaign_state_date');
            $table->string('campaign_end_date');
            $table->string('campaign_description');
            $table->string('brand_name');
            $table->string('target_location');
            $table->string('target_gender');
            $table->string('target_age');
            $table->string('target_interest');
            $table->string('tracked_keywords');
            $table->string('reach_goal');
            $table->string('impressions_goal');
            $table->string('engagement_goal');
            $table->string('conversion_goal');
            $table->string('influencer_niche');
            $table->string('influencer_category');
            $table->string('influencer_location');
            $table->string('influencer_age_range');
            $table->string('influencer_gender');
            $table->string('influencer_er_cr');
            $table->string('logo');
            $table->text('about_us');
            $table->text('campaign_goal');
            $table->text('campaign_message');
            $table->string('campaign_key_objectives');
            $table->string('channels');
            $table->string('timeline');
            $table->string('mood_board');
            $table->string('target_audience');
            $table->string('budget');

            $table->integer('user_id');
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
        Schema::dropIfExists('campaign_briefs');
    }
};
