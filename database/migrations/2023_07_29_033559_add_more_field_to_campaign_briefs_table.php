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
            $table->string('currency')->nullable();
            $table->string('influencer_size')->nullable();
            $table->string('influencer_number')->nullable();
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