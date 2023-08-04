<?php

use App\Http\Controllers\Admin\AdminInfluencerController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\WhatsAppInfluencersController;
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
    Route::get('/login', [AuthController::class, 'index'])->name('index');
    Route::post('/login', [AuthController::class, 'login'])->name('login');

    Route::middleware('auth:admin')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::name('influencers.')->prefix('influencers')->group(function () {

            Route::name('whatsapp.')->prefix('whatsapp')->group(function () {
                Route::get('/', [WhatsAppInfluencersController::class, 'index'])->name('index');
                Route::get('/{influencer}', [WhatsAppInfluencersController::class, 'show'])->name('show');

                Route::get('/{influencer}/verification', [WhatsAppInfluencersController::class, 'verification'])->name('verification');
                Route::get('/{influencer}/approval', [WhatsAppInfluencersController::class, 'approval'])->name('approval');
            });

            Route::get('/', [AdminInfluencerController::class, 'upload'])->name('upload');
            Route::post('upload', [AdminInfluencerController::class, 'handleUpload'])->name('upload.store');
        });
    });
    Route::get('/', [AuthController::class, 'logout'])->name('logout');
});
