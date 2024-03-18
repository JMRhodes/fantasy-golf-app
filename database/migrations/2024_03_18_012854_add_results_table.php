<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create( 'results', function ( Blueprint $table ) {
            $table->unsignedBigInteger( 'tournament_id' );
            $table->unsignedBigInteger( 'player_id' );
            $table->foreign( 'tournament_id' )->references( 'id' )->on( 'tournaments' );
            $table->foreign( 'player_id' )->references( 'id' )->on( 'players' );
            $table->integer( 'points' );
            $table->string( 'position' );
        } );
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists( 'results' );
    }
};
