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
        Schema::table('campaign_briefs', function (Blueprint $table) {
            $table->string('influencer_niche')->nullable()->change();
            $table->string('influencer_category')->nullable()->change();
            $table->string('influencer_location')->nullable()->change();
            $table->string('influencer_age_range')->nullable()->change();
            $table->string('influencer_gender')->nullable()->change();
            $table->string('influencer_er_cr')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('campaign_briefs', function (Blueprint $table) {
            //
        });
    }
};
