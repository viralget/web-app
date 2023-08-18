<?php

// use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\InfluencerController;
use App\Http\Controllers\WhatsAppInfluencerController;
use App\Http\Controllers\UserProfileController;
use App\Models\WhatsappInfluencer;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfilingController;
use App\Http\Controllers\PurchasesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\MessagesController;

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
Route::get('/find-influencers', function () {
    return Inertia::render('LandingPage/index');
})->name('landing-page');
Route::get('/pre-order', function () {
    return Inertia::render('LandingPage/Preorder/index');
})->name('preorder');
Route::post('/pre-order', [PurchasesController::class, 'preOrder'])->name('preorder');
Route::get('/pre-order/success', function () {
    return Inertia::render('LandingPage/Preorder/Success');
})->name('preorder.success');
Route::get('/join', function () {
    return Inertia::render('Join/index');
})->name('join');

Route::get('/faqs', function () {
    return Inertia::render('Faqs/index');
})->name('faqs');

Route::get('/services', function () {
    return Inertia::render('Services/index');
})->name('services');

Route::get('/contact', function () {
    return Inertia::render('Contact/index');
})->name('contact');

Route::get('/pricing-page', function () {
    return redirect(route('pricing'));
    // return Inertia::render('PricingPage/index');
})->name('pricing.page');


Route::post('/send-contact', [PageController::class, 'sendContact'])->name('send.contact');

Route::get('/coming-soon', function () {
    return Inertia::render('ComingSoon/index');
})->name('coming-soon');

Route::post('/payments/verify', [PurchasesController::class, 'verifyPayment'])->name('payments.verify');
Route::prefix('transactions')->name('payments.')->group(
    function () {


        Route::post('/create-customer', [PurchasesController::class, 'stripeCreateCustomer'])->name('stripe.customer.create');
        Route::post('/stripe-create-intent', [PurchasesController::class, 'stripeCreateIntent'])->name('stripe.intent');
    }
);

Route::middleware('auth')->group(
    function () {
        Route::get('/welcome', [AuthenticatedSessionController::class, 'welcome'])->name('auth.welcome');
        Route::get('/dashboard', [InfluencerController::class, 'index'])->name('dashboard');
        //    Route::get('/dashboard', DashboardController::class)->name('dashboard');
        Route::get('/explore', [InfluencerController::class, 'index'])->name('explore');
        Route::get('/search', [InfluencerController::class, 'search'])->name('explore.search');
        // Route::get('/search', [InfluencerController::class, 'index'])->name('explore.search');
        Route::get('/messages', [MessagesController::class, 'index'])->name('get.messages');
        Route::post('/messages', [MessagesController::class, 'index'])->name('message.post');

        Route::post('/search/store', [InfluencerController::class, 'storeUserSearch'])->name('influencers.search.store');
        Route::post('/search/delete', [InfluencerController::class, 'deleteUserSearch'])->name('influencers.search.delete');

        Route::get('/all-categories', [InfluencerController::class, 'getAllCategoriesPage'])->name('allcategories.page');
        Route::get('/saved-searches', [InfluencerController::class, 'savedSearches'])->name('savedsearches.page');
        Route::get('/influencer/{influencer}', [InfluencerController::class, 'show'])->name('influencer.show');

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



        // Route::resources([
        //     // 'campaigns' => CampaignController::class,
        //     'influencers' => InfluencerController::class,
        // ])->except('show');

        // campiagn brief

        Route::get('/campaign/brief', [CampaignController::class, 'indexBrief'])->name('brief');
        Route::get('/campaign/brief/create', [CampaignController::class, 'createBrief'])->name('brief.create');
        Route::post('/campaign/brief/create', [CampaignController::class, 'storeBrief'])->name('brief.store');
        Route::post('general/payments/verify', [PurchasesController::class, 'generalVerifyPayment'])->name('general.payments.verify');
        Route::get('/campaign/brief/success', [CampaignController::class, 'successBrief'])->name('brief.success');
        Route::get('/campaign/brief/view/{id}', [CampaignController::class, 'viewBrief'])->name('brief.show');
        Route::get('/campaign/brief/edit/{id}', [CampaignController::class, 'editBrief'])->name('brief.edit');
        Route::post('/campaign/brief/update/{id}', [CampaignController::class, 'updateBrief'])->name('brief.update');
        Route::patch('/campaign/brief/update-reference/{brief}', [CampaignController::class, 'updateReference'])->name('brief.reference.update');

        Route::post('/report/create', [CampaignController::class, 'createReport'])->name('create.report');



        Route::prefix('billings')->name('billings.')->group(function () {
            Route::get('/', [PurchasesController::class, 'billings'])->name('index');
            Route::get('/billings', [PurchasesController::class, 'billings'])->name('billings');
            Route::get('/plans', [PurchasesController::class, 'plans'])->name('plans');
            Route::post('/purchase', [PurchasesController::class, 'processPurchase'])->name('purchase');

            Route::get('/invoice/{id}', [PurchasesController::class, 'invoice'])->name('invoice');


            // Route::patch('/update-profile', [SettingsController::class, 'updateProfile'])->name('profile.update');
            // Route::patch('/update-password', [SettingsController::class, 'updatePassword'])->name('password.update');
        });
        // Route::post('/payments/verify/{reference}', [PurchasesController::class, 'verifyPayment'])->name('payments.verify');


        Route::resource('influencers', InfluencerController::class)->except('show');
        Route::get('influencers/{influencer}', [InfluencerController::class, 'show'])->name('influencers.show');

        Route::post('/campaign/initiate', [CampaignController::class, 'initiateCampaign'])->name('campaign.initiate');
        Route::get('/track-campaign', [CampaignController::class, 'trackCampaignPage'])->name('track.campaign.page');
        Route::get('/campaign-metrics/{query}', [CampaignController::class, 'campaignMetricsPage'])->name('metrics.campaign.page');
        Route::post('/campaign-metrics/', [CampaignController::class, 'storeMetrics'])->name('metrics.campaign.store');
    }
);

Route::get('whatsapp-amplifier', [WhatsAppInfluencerController::class, 'create'])->name('amplifier');
Route::resources(['whatsapp-influencers' => WhatsAppInfluencerController::class]);




require __DIR__ . '/admin.php';
