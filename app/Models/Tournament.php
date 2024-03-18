<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @mixin IdeHelperTournament
 */
class Tournament extends Model {
    use HasFactory;

    protected $table = 'tournaments';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'started_at',
        'ended_at'
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array {
        return [
            'started_at' => 'date:Y-m-d',
            'ended_at'   => 'date:Y-m-d',
        ];
    }

    public function results(): HasMany {
        return $this->hasMany(
            Result::class,
            'tournament_id',
            'id'
        );
    }
}
