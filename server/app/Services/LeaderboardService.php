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
        return Leaderboard::find($id);
    }

    public function create($fields)
    {
        $leaderboard = Leaderboard::create([
          'title' => $fields['title'],
          'description' => $fields['description'],
          'creator_id' => auth()->user()->id
        ]);

        $leaderboard->addMembers($fields['members']);

        return $leaderboard;
    }

    public function update($id, $changes)
    {
        $leaderboard = Leaderboard::find($id);

        $leaderboard->update($changes);

        return $leaderboard;
    }

    public function delete($id)
    {
        $leaderboard = Leaderboard::find($id);

        return $leaderboard->delete();
    }

    public function findMembers($id)
    {
        $leaderboard = Leaderboard::find($id);

        return $leaderboard->members;
    }
}
