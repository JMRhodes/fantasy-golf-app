<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @mixin IdeHelperTeam
 */
class Team extends Model {
    use HasFactory;

    protected $table = 'teams';

    protected $fillable = [
        'user_id',
        'name'
    ];

    public function players(): BelongsToMany {
        return $this->belongsToMany(
            Player::class,
            'teams_players',
            'team_id',
            'player_id'
        );
    }

    public function user(): BelongsTo {
        return $this->belongsTo( User::class );
    }
}
