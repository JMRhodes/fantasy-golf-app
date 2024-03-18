<?php

namespace App\Http\Controllers;

use App\Models\Result;
use App\Models\Tournament;
use Faker\Factory;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Psy\debug;

class TournamentController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response {
        return Inertia::render( 'Tournaments/Index', [
            'tournaments' => Tournament::orderBy( "ended_at", "desc" )->get()
        ] );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response {
        return Inertia::render( 'Tournaments/Add' );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store( Request $request ): \Illuminate\Http\RedirectResponse {
        $tournament = Tournament::create( $request->validate( [
            'name'       => [ 'required', 'max:50' ],
            'started_at' => [ 'required', 'date' ],
            'ended_at'   => [ 'required', 'date' ],
        ] ) );

        //        $tournament->id;
        $faker = Factory::create();
        //        for ( $i = 0; $i < 10; $i++ ) {
        //            $tournament->players()->attach(
        //                $faker->randomFloat( 0, 1, 50 )
        //            );
        //        }
//        $result = Result::create( [
//            'tournament_id' => $tournament->id,
//            'points'        => 15,
//            'position'      => 3
//        ] )->players()->attach(50);

        return to_route( 'tournaments.index' );
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
