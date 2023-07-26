<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->double('amount');
            $table->longText('description');
            $table->longText('items');
            $table->double('total_amount');
            $table->double('tax');
            $table->double('tax_rate');
            $table->text('currency');
            $table->enum('status', ['paid', 'pending', 'cancelled']);
            $table->text('status_comment')->nullable();
            $table->text('reference', 255)->nullable();
            $table->text('channel', 255)->nullable();
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
        Schema::dropIfExists('invoices');
    }
}
