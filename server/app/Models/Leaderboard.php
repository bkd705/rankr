<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Leaderboard extends Model
{
    protected $fillable = [
        'title', 'description', 'creator_id', 'win_multiplier', 'loss_multiplier'
    ];

    public static function boot()
    {
        parent::boot();

        static::addGlobalScope('playerCount', function ($builder) {
            $builder->withCount('players');
        });
    }

    public function creator()
    {
        return $this->belongsTo(User::class);
    }

    public function players()
    {
        return $this->belongsToMany(User::class, 'leaderboards_player', 'leaderboard_id', 'player_id')->using(Player::class)->withPivot('points');
    }

    public function matches()
    {
        $this->hasMany(Match::class);
    }

    public function addPlayers($players = [])
    {
        collect($players)->map(function ($player) {
            $this->players()->attach($player, [ 'points' => 0 ]);
        });

        $this->save();
    }

    public function removePlayers($players = [])
    {
        collect($players)->map(function ($player) {
            $this->players()->detach($player);
        });

        $this->save();
    }

    public function syncPlayers($players = [])
    {
        $this->players()->sync($players);
    }

    public function updateRanks($match)
    {
        $winner = $this->players()->find($match->winner_id);
        $winnerRank = $winner->pivot->getRank();


        $loser = $this->players()->find($match->loser_id);
        $loserRank = $loser->pivot->getRank();

        $sorted = collect([$loserRank, $winnerRank])->sort()->values()->all();
        $diff = $sorted[1] - $sorted[0];

        if ($winnerRank > $loserRank) {
            $diff = $diff / 2;
        }

        $winner->pivot->increasePointsBy($diff * $this->win_multiplier);
        $loser->pivot->decreasePointsBy($diff * $this->loss_multiplier);
    }
}
