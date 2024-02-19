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
        Schema::create('influencer_metrics', function (Blueprint $table) {
            $table->id();
            $table->string('influencer_id');
            $table->string('platform_id')->nullable();
            $table->string('engagement_rate')->nullable();
            $table->string('average_impressions')->nullable();
            $table->string('impressions')->nullable();
            $table->string('interactions')->nullable();
            $table->string('reach')->nullable();
            $table->string('reachability')->nullable();
            $table->string('quality_audience')->nullable();
            $table->string('authentic_engagement')->nullable();
            $table->string('brand_safety_level')->nullable();
            $table->string('total_tweets')->nullable();
            $table->string('total_likes')->nullable();
            $table->string('total_replies')->nullable();
            $table->string('total_replies')->nullable();
            $table->string('media_value')->nullable();
            $table->string('average_cpe')->nullable();
            $table->string('average_cpm')->nullable();
            $table->string('global_rank')->nullable();
            $table->string('category_rank')->nullable();
            $table->string('country_rank')->nullable();
            $table->string('most_used_hashtags')->nullable();
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
        Schema::dropIfExists('influencer_metrics');
    }
};
