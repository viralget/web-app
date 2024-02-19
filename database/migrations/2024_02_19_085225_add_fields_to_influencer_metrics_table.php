<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    protected $fields = [
      'niche',
'category',
'first_name',
'last_name',
'username',
'page_url',
'gender',
'age',
'followers_count',
'following_count',
'posting_frequency',
'total_image_post',
'total_video_post',
'total_video_views',
'total_comments',
'total_shares',
'average_likes_per_post',
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
'email',
'phone_number',
'parental_status',
'marital_status',
'education',
'is_verified',
'brands_worked_with',
'ethnicity',
'location',
'previous_30_days_followers_count',
'posts_count'
    ];
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::table('influencer_metrics', function (Blueprint $table) {
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
        Schema::table('influencer_metrics', function (Blueprint $table) {
            foreach ($this->fields as $field) {
                $table->dropColumn($field);
            }     
        });
    }
};
