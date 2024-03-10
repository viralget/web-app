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
        Schema::create('influencer_metrics_previous_records', function (Blueprint $table) {
            $table->integer('influencer_id');
            $table->integer('platform_id');
            $table->integer('engagement_rate');
            $table->integer('average_impressions');
            $table->integer('impressions');
            $table->integer('interactions');
            $table->integer('reach');
            $table->integer('reachability');
            $table->integer('quality_audience');
            $table->integer('authentic_engagement');
            $table->integer('brand_safety_level');
            $table->integer('total_tweets');
            $table->integer('total_likes');
            $table->integer('total_replies');
            $table->integer('media_value');
            $table->integer('average_cpe');
            $table->integer('average_cpm');
            $table->integer('global_rank');
            $table->integer('category_rank');
            $table->integer('country_rank');
            $table->string('most_used_hashtags');
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
        Schema::dropIfExists('influencer_metrics_previous_records');
    }
};
