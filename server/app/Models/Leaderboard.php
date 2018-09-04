<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Leaderboard extends Model
{
    const KFACTOR = 30;

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
        $loser = $this->players()->find($match->loser_id);

        $winnerCurrentRating = $winner->pivot->points;
        $loserCurrentRating = $loser->pivot->points;

        $winnerProbability = $this->calculateProbability($winnerCurrentRating, $loserCurrentRating);
        $loserProbability = $this->calculateProbability($loserCurrentRating, $winnerCurrentRating);

        $winnerRating = $this->calculateRating(1, $winnerProbability, $winnerCurrentRating);
        $loserRating = $this->calculateRating(0, $loserProbability, $loserCurrentRating);

        $winner->pivot->points = floor($winnerRating);
        $winner->pivot->save();

        if ($loserRating < 0) {
            $loser->pivot->points = 0;
            $loser->pivot->save();
        } else {
            $loser->pivot->points = floor($loserRating);
            $loser->pivot->save();
        }
    }

    private function calculateRating($actual, $expected, $rating)
    {
        return $rating + (SELF::KFACTOR * ($actual - $expected));
    }

    private function calculateProbability($pointsA, $pointsB)
    {
        return 1.0 / (1.0 + pow(10, (($pointsB - $pointsA) / 400)));
    }
}
