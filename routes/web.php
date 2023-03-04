<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\InfluencerController;
use App\Http\Controllers\WhatsAppInfluencerController;
use App\Models\WhatsappInfluencer;
use App\Http\Controllers\PageController;
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
})->name('join');

Route::get('/faqs', function () {
    return Inertia::render('Faqs/index');
})->name('faqs');

Route::get('/contact', function () {
    return Inertia::render('Contact/index');
})->name('contact');

Route::get('/pricing', function () {
    return Inertia::render('PricingPage/index');
})->name('pricing');


Route::post('/send-contact', [PageController::class, 'sendContact'])->name('send.contact');

Route::get('/coming-soon', function () {
    return Inertia::render('ComingSoon/index');
})->name('coming-soon');

Route::middleware('auth')->group(
    function () {
        Route::get('/welcome', [AuthenticatedSessionController::class, 'welcome'])->name('auth.welcome');
        Route::get('/explore', [InfluencerController::class, 'index'])->name('explore');

        Route::get('/search', [InfluencerController::class, 'search'])->name('influencers.search');
        Route::post('/search/store', [InfluencerController::class, 'storeSearch'])->name('influencers.search.store');
        Route::get('/all-categories', [InfluencerController::class, 'getAllCategoriesPage'])->name('allcategories.page');

        Route::get('/settings', function () {
            return Inertia::render('Account/index');
        })->name('settings');

        Route::resources([
            'campaigns' => CampaignController::class,
            'influencers' => InfluencerController::class,
        ]);

        Route::post('/campaign/initiate', [CampaignController::class, 'initiateCampaign'])->name('campaign.initiate');
    }
);
// Route::group(function () {
Route::get('whatsapp-amplifier', [WhatsAppInfluencerController::class, 'create'])->name('amplifier');
Route::resources(['whatsapp-influencers' => WhatsAppInfluencerController::class]);
// });

require __DIR__ . '/admin.php';



// Route::get('/search', function () {
//     return Inertia::render('Search/index');
// });



// Route::get('/register', function () {
//     return Inertia::render('Auth/Register');
// });
// Route::get('/login', function () {
//     return Inertia::render('Auth/Register');
// });
