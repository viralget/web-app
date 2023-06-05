<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;



Route::get('register', [RegisteredUserController::class, 'create'])->name('register');
Route::post('register', [RegisteredUserController::class, 'store']);
Route::get('email-confirmation', [RegisteredUserController::class, 'confirmation'])->name('confirmation.page');
Route::get('resend-email', [RegisteredUserController::class, 'resendMail'])->name('resend.email');
Route::get('account-setup', [RegisteredUserController::class, 'accountSetup'])->name('account.setup');
Route::post('account-setup', [RegisteredUserController::class, 'storeDetail'])->name('account.setup');
Route::get('/pricing', [RegisteredUserController::class, 'selectPricing'])->name('pricing');
Route::get('verify-email/{id}/{hash}', [RegisteredUserController::class, 'verifyEmail'])->name('verification.verify');
Route::get('/select-payment/{plan_id}', [RegisteredUserController::class, 'selectPayment'])->name('user.payment.page');
Route::get('/verify-payment/{reference}/{plan_id}', [RegisteredUserController::class, 'verifyPayment'])->name('user.verify.payment');
Route::get('/select-social', [RegisteredUserController::class, 'selectSocial'])->name('select.social');

Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::post('login', [AuthenticatedSessionController::class, 'store']);
Route::get('forgot-password', [AuthenticatedSessionController::class, 'createForgotPassword'])
    ->name('create.forgot.password');

Route::post('forgot-password', [AuthenticatedSessionController::class, 'sendMailForgotPassword'])
    ->name('sendMail.forgot.password');

Route::get('reset-password/{email}', [AuthenticatedSessionController::class, 'createResetPassword'])
    ->name('password.reset');

Route::post('reset-password', [AuthenticatedSessionController::class, 'storeResetPassword'])
    ->name('password.update');

/** Social Login */
Route::get('/auth/social', [AuthenticatedSessionController::class, 'socialAuth'])->name('auth.social');
Route::get('/auth/twitter/callback', [AuthenticatedSessionController::class, 'twitterAuthCallback']);
Route::get('/auth/google/callback', [AuthenticatedSessionController::class, 'googleAuthCallback'])->name('auth.social.googleCallBack');

Route::middleware('auth')->group(function () {
    Route::get('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
