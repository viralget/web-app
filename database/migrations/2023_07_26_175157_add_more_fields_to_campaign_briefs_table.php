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
            $table->string('status');
            $table->string('reference_number')->nullable();
            $table->text('report_text')->nullable();
            $table->string('report_file')->nullable();
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
