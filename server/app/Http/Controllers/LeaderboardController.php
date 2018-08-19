<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MatchService;
use App\Services\LeaderboardService;
use App\Http\Requests\CreateLeaderboardRequest;
use App\Http\Requests\UpdateLeaderboardRequest;

class LeaderboardController extends Controller
{
    private $leaderboardService;
    private $matchService;

    public function __construct(LeaderboardService $leaderboardService, MatchService $matchService)
    {
        $this->leaderboardService = $leaderboardService;
        $this->matchService = $matchService;
    }

    public function index()
    {
        return $this->leaderboardService->findAll();
    }

    public function show($leaderboardId)
    {
        return $this->leaderboardService->findById($leaderboardId);
    }

    public function store(CreateLeaderboardRequest $request)
    {
        $this->leaderboardService->create($request->all());

        return response(null, 201);
    }

    public function update(UpdateLeaderboardRequest $request, $leaderboardId)
    {
        $this->leaderboardService->update($leaderboardId, $request->all());

        return response(null, 204);
    }

    public function destroy($leaderboardId)
    {
        $this->leaderboardService->delete($leaderboardId);

        return response(null, 204);
    }

    public function matches($leaderboardId)
    {
        $matches = $this->matchService->findByLeaderboardId($leaderboardId);

        return response()->json($matches);
    }

    public function players($leaderboardId)
    {
        $players = $this->leaderboardService->findPlayers($leaderboardId);

        return response()->json($players);
    }

    public function addPlayer(Request $request, $leaderboardId)
    {
        $playerId = $request->input('player_id');

        $this->leaderboardService->addPlayer($leaderboardId, $playerId);

        return response()->json(null, 204);
    }
}
