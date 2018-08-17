<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Match extends Model
{
    protected $fillable = [
        'winner_score', 'loser_score', 'winner_id', 'loser_id', 'leaderboard_id'
    ];

    protected $with = [
        'winner', 'loser'
    ];

    public function winner()
    {
        return $this->belongsTo(User::class);
    }

    public function loser()
    {
        return $this->belongsTo(User::class);
    }

    public function leaderboard()
    {
        return $this->belongsTo(Leaderboard::class);
    }
}
