<?php

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
});

Route::get('/join', function () {
    return Inertia::render('Join/index');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard/index');
// });


// Route::get('/search', function () {
//     return Inertia::render('Search/index');
// });



// Route::get('/register', function () {
//     return Inertia::render('Auth/Register');
// });
// Route::get('/login', function () {
//     return Inertia::render('Auth/Register');
// });
