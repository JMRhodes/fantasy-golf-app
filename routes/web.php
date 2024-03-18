<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TournamentController;
use App\Http\Controllers\PlayerController;
use Illuminate\Support\Facades\Route;
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
    $user = Models\User::find( 1 );

    return Inertia::render( 'Teams/Index', [
        'teams' => $user
            ->teams()
            ->where( "user_id", 1 )
            ->get()
    ] );
} )->middleware( [ 'auth', 'verified' ] )->name( 'teams' );

Route::middleware( 'auth' )->group( function () {
    Route::get( '/players', [ PlayerController::class, 'index' ] )->name( 'players.index' );
    Route::get( '/players/add', [ PlayerController::class, 'create' ] )->name( 'players.add' );
    Route::post( '/players/add', [ PlayerController::class, 'store' ] )->name( 'players.add' );
} );

Route::middleware( 'auth' )->group( function () {
    Route::get( '/tournaments', [ TournamentController::class, 'index' ] )->name( 'tournaments.index' );
    Route::get( '/tournaments/add', [ TournamentController::class, 'create' ] )->name( 'tournaments.add' );
    Route::post( '/tournaments/add', [ TournamentController::class, 'store' ] )->name( 'tournaments.add' );
} );

Route::middleware( 'auth' )->group( function () {
    Route::get( '/profile', [ ProfileController::class, 'edit' ] )->name( 'profile.edit' );
    Route::patch( '/profile', [ ProfileController::class, 'update' ] )->name( 'profile.update' );
    Route::delete( '/profile', [ ProfileController::class, 'destroy' ] )->name( 'profile.destroy' );
} );

require __DIR__ . '/auth.php';
