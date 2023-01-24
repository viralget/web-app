<?php

use App\Http\Controllers\Admin\InfluencerController as AdminInfluencerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::name('admin.')->prefix('admin')->group(function () {
    Route::name('influencers.')->prefix('influencers')->group(function () {
        Route::get('upload', [AdminInfluencerController::class, 'upload'])->name('upload');
        Route::post('upload', [AdminInfluencerController::class, 'handleUpload'])->name('upload.store');
    });
});
