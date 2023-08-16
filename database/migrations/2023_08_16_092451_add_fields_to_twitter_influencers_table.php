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
        Schema::table('twitter_influencers', function (Blueprint $table) {
            $table->enum('platform', ['twitter', 'instagram', 'tiktok'])->default('twitter');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('gender')->nullable();
            $table->string('average_likes_per_post')->nullable();
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
            $table->dropColumn('platform');
            $table->dropColumn('email');
            $table->dropColumn('phone');
            $table->dropColumn('gender');
            $table->dropColumn('average_likes_per_post');
        });
    }
};
