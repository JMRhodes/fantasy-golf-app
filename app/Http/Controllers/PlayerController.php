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
            'players' => Player::orderBy( 'salary', 'desc' )->get()->map( function ( $player ) {
                $currency = new \NumberFormatter( "en-US", \NumberFormatter::CURRENCY );
                $currency->setAttribute( \NumberFormatter::MAX_FRACTION_DIGITS, 0 ); // no decimals

                return [
                    'id'         => $player->id,
                    'first_name' => $player->first_name,
                    'last_name'  => $player->last_name,
                    'salary'     => $currency->format( $player->salary ),
                    'edit_url'   => route( 'players.edit', $player ),
                    'delete_url' => route( 'players.destroy', $player ),
                ];
            } ),
        ] );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response {
        return Inertia::render( 'Players/Create' );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store( Request $request ): \Illuminate\Http\RedirectResponse {
        Player::create( $request->validate( [
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
        return Inertia::render( 'Players/Edit', [
            'player' => Player::find( $id )
        ] );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update( Request $request, $id ): \Illuminate\Http\RedirectResponse {
        $player             = Player::find( $id );
        $player->first_name = $request->input( 'first_name' );
        $player->last_name  = $request->input( 'last_name' );
        $player->salary     = $request->input( 'salary' );;

        $player->save();

        return to_route( 'players.index' );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy( string $id ) {
        Player::find( $id )
            ->delete();

        return to_route( 'players.index' );
    }
}
