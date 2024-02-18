<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    protected $fields = [
                'niche',
                'age',
                'posting_frequency',
                'total_image_post',
                'total_video_post',
                'total_video_views',
                'total_comments',
                'total_shares',
                'average_comments_per_post',
                'average_views_per_post',
                'average_shares_per_post',
                'likes_comments_ratio',
                'likes_shares_ratio',
                'total_engagement',
                'average_engagement',
                'video_view_rate',
                'comment_rate',
                'potential_reach',
                'potential_total_impact',
                'average_impact_per_post',
                'growth_rate',
                'qas',
                'media_value_per_post',
                'average_cpv',
                'parental_status',
                'marital_status',
                'education',
                'brands_worked_with',
                'ethnicity',
                'previous_30_days_followers_count'
            ];
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('twitter_influencers', function (Blueprint $table) {
           
            //
            foreach ($this->fields as $field) {
                $table->string($field)->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('twitter_influencers', function (Blueprint $table) {
            foreach ($this->fields as $field) {
                $table->dropColumn($field);
            }        
        });
    }
};
