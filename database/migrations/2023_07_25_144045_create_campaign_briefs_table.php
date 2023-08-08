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
            $table->text('social_network')->nullable();
            $table->string('campaign_type')->nullable();
            $table->string('campaign_budget')->nullable();
            $table->string('campaign_state_date')->nullable();
            $table->string('campaign_end_date')->nullable();
            $table->string('campaign_description')->nullable();
            $table->string('brand_name')->nullable();
            $table->string('target_location')->nullable();
            $table->string('target_gender')->nullable();
            $table->string('target_age')->nullable();
            $table->string('target_interest')->nullable();
            $table->string('tracked_keywords')->nullable();
            $table->string('reach_goal')->nullable();
            $table->string('impressions_goal')->nullable();
            $table->string('engagement_goal')->nullable();
            $table->string('conversion_goal')->nullable();
            $table->string('influencer_niche')->nullable();
            $table->string('influencer_category')->nullable();
            $table->string('influencer_location')->nullable();
            $table->string('influencer_age_range')->nullable();
            $table->string('influencer_gender')->nullable();
            $table->string('influencer_er_cr')->nullable();
            $table->string('logo')->nullable();
            $table->text('about_us')->nullable();
            $table->text('campaign_goal')->nullable();
            $table->text('campaign_message')->nullable();
            $table->string('campaign_key_objectives')->nullable();
            $table->string('channels')->nullable();
            $table->string('timeline')->nullable();
            $table->string('mood_board')->nullable();
            $table->string('target_audience')->nullable();
            $table->string('budget')->nullable();

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
