<?php
namespace App\Services;

use App\Models\Leaderboard;

class LeaderboardService
{
    public function findAll()
    {
        return Leaderboard::all();
    }

    public function findById($id)
    {
        return Leaderboard::findOrFail($id);
    }

    public function create($fields)
    {
        $leaderboard = Leaderboard::create([
          'title' => $fields['title'],
          'description' => $fields['description'],
          'creator_id' => auth()->user()->id
        ]);

        if (array_key_exists('players', $fields)) {
            $leaderboard->addPlayers($fields['players']);
        }

        return $leaderboard;
    }

    public function update($id, $changes)
    {
        $leaderboard = Leaderboard::findOrFail($id);

        $leaderboard->update($changes);

        return $leaderboard;
    }

    public function delete($id)
    {
        $leaderboard = Leaderboard::findOrFail($id);

        return $leaderboard->delete();
    }

    public function findPlayers($id)
    {
        $leaderboard = Leaderboard::findOrFail($id);

        return $leaderboard->players;
    }

    public function addPlayer($id, $playerId)
    {
        $leaderboard = Leaderboard::findOrFail($id);

        $leaderboard->addPlayers([$playerId]);
    }
}
