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
        Schema::create('subscription_features', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('plan_id');
            $table->enum('social_media_platform', ['instagram', 'twitter'])->nullable();
            $table->boolean('discovery')->nullable();
            $table->boolean('access_to_database')->nullable();
            $table->integer('category_accessible')->nullable();
            $table->integer('numbers_of_search_filters')->nullable();
            $table->integer('numbers_of_search_requests')->nullable();
            $table->integer('monthly_search_results')->nullable();
            $table->boolean('save_your_searches')->nullable();
            $table->boolean('save_search_results')->nullable();
            $table->integer('monthly_influencer_analysis')->nullable();
            $table->boolean('advanced_data_statistics')->nullable();
            $table->boolean('brand_safety')->nullable();
            $table->boolean('conversion_rate')->nullable();
            $table->boolean('follower_spend_power')->nullable();
            $table->boolean('influencer_overview')->nullable();
            $table->boolean('influencer_performance')->nullable();
            $table->boolean('audience_insight')->nullable();
            $table->boolean('content_performance')->nullable();
            $table->boolean('brands_influencer_has_worked_with')->nullable();
            $table->boolean('export_profile_analyzed')->nullable();
            $table->boolean('campaign_management')->nullable();
            $table->boolean('number_of_influencers_per_campaign')->nullable();
            $table->boolean('influencer_managed')->nullable();
            $table->boolean('campaign_flow_type')->nullable();
            $table->boolean('e_commerce')->nullable();
            $table->boolean('influencer_marketplace_access')->nullable();
            $table->integer('campaign_tracking')->nullable();
            $table->integer('number_of_influencers_per_campaign_tracking')->nullable();
            $table->string('influencer_tracking')->nullable();
            $table->boolean('real_time_tracking')->nullable();
            $table->boolean('tracking_campaign_conversion')->nullable();
            $table->integer('numbers_of_tracking_dataset')->nullable();
            $table->string('export_report')->nullable();
            $table->boolean('save_your_report')->nullable();
            $table->integer('number_of_campaign_report_per_month')->nullable();
            $table->integer('number_of_influencer_report_per_month')->nullable();
            $table->string('custom_report')->nullable();
            $table->string('date_range')->nullable();
            $table->string('support')->nullable();
            $table->string('dedicated_team')->nullable();
            $table->integer('platform_cost')->nullable();
            $table->integer('discounted_cost')->nullable();
            $table->timestamps(); // Created at and updated at timestamps        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscription_features');
    }
};
