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
            $table->text('keyword')->nullable();
            $table->text('twitter_id')->nullable();
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
            $table->dropColumn('keyword');
            $table->dropColumn('twitter_id');
        });
    }
};
