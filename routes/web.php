<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\InfluencerController;
use App\Http\Controllers\WhatsAppInfluencerController;
use App\Http\Controllers\UserProfileController;
use App\Models\WhatsappInfluencer;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfilingController;
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

Route::get('/', [PageController::class, 'home'])->name('home');

Route::get('/join', function () {
    return Inertia::render('Join/index');
})->name('join');

Route::get('/faqs', function () {
    return Inertia::render('Faqs/index');
})->name('faqs');

Route::get('/contact', function () {
    return Inertia::render('Contact/index');
})->name('contact');

Route::get('/pricing-page', function () {
    return Inertia::render('PricingPage/index');
})->name('pricing.page');


Route::post('/send-contact', [PageController::class, 'sendContact'])->name('send.contact');

Route::get('/coming-soon', function () {
    return Inertia::render('ComingSoon/index');
})->name('coming-soon');

Route::middleware('auth')->group(
    function () {
        Route::get('/welcome', [AuthenticatedSessionController::class, 'welcome'])->name('auth.welcome');
        Route::get('/explore', [InfluencerController::class, 'index'])->name('explore');
        Route::get('/search', [InfluencerController::class, 'index'])->name('search');

        Route::get('/search', [InfluencerController::class, 'search'])->name('influencers.search');
        Route::post('/search/store', [InfluencerController::class, 'storeUserSearch'])->name('influencers.search.store');
        Route::post('/search/delete', [InfluencerController::class, 'deleteUserSearch'])->name('influencers.search.delete');
        
        Route::get('/all-categories', [InfluencerController::class, 'getAllCategoriesPage'])->name('allcategories.page');
        Route::get('/saved-searches', [InfluencerController::class, 'savedSearches'])->name('savedsearches.page');
        Route::get('/influencer/{id}', [InfluencerController::class, 'show'])->name('influencer.show');

        // profiling.
        Route::post('/create-profiling', [ProfilingController::class, 'createProfiling'])->name('create.profiling');
        Route::get('/profiling', [ProfilingController::class, 'profilingPage'])->name('profiling');
        Route::get('/profiling/all', [ProfilingController::class, 'list'])->name('profiling.list');
        Route::post('/create-list', [ProfilingController::class, 'createList'])->name('create.list');
        Route::post('/update-list', [ProfilingController::class, 'updateList'])->name('update.list');
        Route::post('/influencer-list', [ProfilingController::class, 'AddInfluencerToList'])->name('influencers.list');
        Route::post('/delete-list', [ProfilingController::class, 'deleteList'])->name('delete.list');
    
        Route::get('/list/{id}', [ProfilingController::class, 'getSingleList'])->name('single.list');
        Route::get('/findprofiled/{id}', [ProfilingController::class, 'findProfiledInfluencer'])->name('influencer.findprofiled');
        Route::post('/influencer-create-list', [ProfilingController::class, 'influencerCreateList'])->name('influencer.addtolist');
       
       Route::get('/settings', [UserProfileController::class, 'createSettings'])->name('settings');
       Route::post('/update-settings', [UserProfileController::class, 'updateSettings'])->name('update.settings');

        Route::resources([
            'campaigns' => CampaignController::class,
            'influencers' => InfluencerController::class,
        ]);

        Route::post('/campaign/initiate', [CampaignController::class, 'initiateCampaign'])->name('campaign.initiate');
        Route::get('/track-campaign', [CampaignController::class, 'trackCampaignPage'])->name('track.campaign.page');
        Route::get('/campaign-metrics/{id}', [CampaignController::class, 'campaignMetricsPage'])->name('metrics.campaign.page');
  
  
    }
);

Route::get('whatsapp-amplifier', [WhatsAppInfluencerController::class, 'create'])->name('amplifier');
Route::resources(['whatsapp-influencers' => WhatsAppInfluencerController::class]);


require __DIR__ . '/admin.php';
