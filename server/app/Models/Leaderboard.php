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

        static::addGlobalScope('memberCount', function ($builder) {
            $builder->withCount('members');
        });
    }

    public function creator()
    {
        return $this->belongsTo(User::class);
    }

    public function members()
    {
        return $this->belongsToMany(User::class, 'leaderboards_member', 'leaderboard_id', 'member_id')->using(Player::class)->withPivot('points');
    }

    public function matches()
    {
        $this->hasMany(Match::class);
    }

    public function addMembers($members = [])
    {
        collect($members)->map(function ($member) {
            $this->members()->attach($member, [ 'points' => 0 ]);
        });

        $this->save();
    }

    public function removeMembers($members = [])
    {
        collect($members)->map(function ($member) {
            $this->members()->detach($member);
        });

        $this->save();
    }

    public function syncMembers($members = [])
    {
        $this->members()->sync($members);
    }

    public function updateRanks($match)
    {
        $winner = $this->members()->find($match->winner_id);
        $winnerRank = $winner->pivot->getRank();

        $loser = $this->members()->find($match->loser_id);
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
