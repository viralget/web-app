<?php

use App\Http\Controllers\CampaignController;
use App\Http\Controllers\InfluencerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Home/index');
})->name('home');

Route::get('/join', function () {
    return Inertia::render('Join/index');
});

Route::get('/faqs', function () {
    return Inertia::render('Faqs/index');
})->name('faqs');

Route::get('/coming-soon', function () {
    return Inertia::render('ComingSoon/index');
})->name('coming-soon');

Route::middleware('auth')->group(
    function () {
        Route::get('/search', [InfluencerController::class, 'search'])->name('influencers.search');
        Route::get('/explore', [InfluencerController::class, 'index'])->name('explore');

        Route::get('/settings', function () {
            return Inertia::render('Account/index');
        })->name('settings');

        Route::resources([
            'campaigns' => CampaignController::class,
            'influencers' => InfluencerController::class
        ]);
    }
);




// Route::get('/search', function () {
//     return Inertia::render('Search/index');
// });



// Route::get('/register', function () {
//     return Inertia::render('Auth/Register');
// });
// Route::get('/login', function () {
//     return Inertia::render('Auth/Register');
// });
