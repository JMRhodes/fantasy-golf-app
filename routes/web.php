<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models;

//Route::get('/', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::get( '/', function () {
    return Inertia::render( 'Dashboard' );
} )->middleware( [ 'auth', 'verified' ] )->name( 'dashboard' );

Route::get( '/teams', function () {
    $user = Models\User::find(1);

    return Inertia::render( 'Teams/Index', [
        'teams' => $user
            ->teams()
            ->where("user_id", 1)
            ->get()
    ] );
} )->middleware( [ 'auth', 'verified' ] )->name( 'teams' );

Route::get( '/players', function () {
    return Inertia::render( 'Players/Index' );
} )->middleware( [ 'auth', 'verified' ] )->name( 'players' );

Route::get( '/tournaments', function () {
    return Inertia::render( 'Tournaments/Index' );
} )->middleware( [ 'auth', 'verified' ] )->name( 'tournaments' );

Route::middleware( 'auth' )->group( function () {
    Route::get( '/profile', [ ProfileController::class, 'edit' ] )->name( 'profile.edit' );
    Route::patch( '/profile', [ ProfileController::class, 'update' ] )->name( 'profile.update' );
    Route::delete( '/profile', [ ProfileController::class, 'destroy' ] )->name( 'profile.destroy' );
} );

require __DIR__ . '/auth.php';
