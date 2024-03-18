<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @mixin IdeHelperResult
 */
class Result extends Model
{
    use HasFactory;

    protected $table = 'results';

    protected $fillable = [
        'tournament_id',
        'points',
        'position'
    ];

    public function players(): BelongsToMany {
        return $this->belongsToMany(
            Player::class,
            'players_results',
            'result_id',
            'player_id'
        );
    }
}
