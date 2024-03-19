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
    Route::get( '/players/create', [ PlayerController::class, 'create' ] )->name( 'players.create' );
    Route::get( '/players/{id}/edit', [ PlayerController::class, 'edit' ] )->name( 'players.edit' );
    Route::post( '/players/store', [ PlayerController::class, 'store' ] )->name( 'players.store' );
    Route::put( '/players/{id}', [ PlayerController::class, 'update' ] )->name( 'players.update' );
    Route::delete( '/players/{id}', [ PlayerController::class, 'destroy' ] )->name( 'players.destroy' );
} );

Route::middleware( 'auth' )->group( function () {
    Route::get( '/tournaments', [ TournamentController::class, 'index' ] )->name( 'tournaments.index' );
    Route::get( '/tournaments/create', [ TournamentController::class, 'create' ] )->name( 'tournaments.create' );
    Route::get( '/tournaments/{id}/edit', [ TournamentController::class, 'edit' ] )->name( 'tournaments.edit' );
    Route::post( '/tournaments/create', [ TournamentController::class, 'store' ] )->name( 'tournaments.store' );
    Route::patch( '/tournaments/{id}', [ TournamentController::class, 'update' ] )->name( 'tournaments.update' );
    Route::delete( '/tournaments/{id}', [ TournamentController::class, 'destroy' ] )->name( 'tournaments.destroy' );
} );

Route::middleware( 'auth' )->group( function () {
    Route::get( '/profile', [ ProfileController::class, 'edit' ] )->name( 'profile.edit' );
    Route::patch( '/profile', [ ProfileController::class, 'update' ] )->name( 'profile.update' );
    Route::delete( '/profile', [ ProfileController::class, 'destroy' ] )->name( 'profile.destroy' );
} );

require __DIR__ . '/auth.php';
