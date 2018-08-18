<?php
namespace App\Services;

use App\Models\Match;
use App\Events\MatchCompleted;

class MatchService
{
    public function findAll()
    {
        return Match::all();
    }

    public function findById($id)
    {
        return Match::find($id);
    }

    public function findByLeaderboardId($leaderboardId)
    {
        return Match::where('leaderboard_id', $leaderboardId)->get();
    }

    public function create($fields)
    {
        $match = Match::create($fields);

        event(new MatchCompleted($match));
    }

    public function update($changes, $id)
    {
        $match = Match::find($id);

        return $match->update($changes);
    }
}