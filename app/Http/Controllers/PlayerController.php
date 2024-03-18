<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlayerController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response {
        return Inertia::render( 'Players/Index', [
            'players' => Player::all()
        ] );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response {
        return Inertia::render( 'Players/Add' );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store( Request $request ): \Illuminate\Http\RedirectResponse {
        $player = Player::create( $request->validate( [
            'first_name' => [ 'required', 'max:18' ],
            'last_name'  => [ 'required', 'max:18' ],
            'salary'     => [ 'required', 'max:6' ],
        ] ) );

        return to_route( 'players.index' );
    }

    /**
     * Display the specified resource.
     */
    public function show( string $id ) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( string $id ) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update( Request $request, string $id ) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( string $id ) {
        //
    }
}
