<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * @property int $id
 * @property string $first_name
 * @property string $last_name
 * @property int $salary
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Team> $teams
 * @property-read int|null $teams_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Tournament> $tournaments
 * @property-read int|null $tournaments_count
 * @method static \Database\Factories\PlayerFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Player newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Player newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Player query()
 * @method static \Illuminate\Database\Eloquent\Builder|Player whereFirstName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Player whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Player whereLastName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Player whereSalary($value)
 * @mixin \Eloquent
 * @mixin IdeHelperPlayer
 */
class Player extends Model {
    use HasFactory;

    protected $table = 'players';

    public $timestamps = false;

    protected $fillable = [
        'first_name',
        'last_name',
        'salary',
    ];

    public function getFullNameAttribute(): string {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function teams(): BelongsToMany {
        return $this->belongsToMany(
            Team::class,
            'teams_players',
            'player_id',
            'team_id'
        );
    }

    public function results(): BelongsToMany {
        return $this->belongsToMany(
            Result::class,
            'players_results',
            'player_id',
            'result_id'
        );
    }
}
