<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\MatchService;
use App\Http\Requests\CreateMatchRequest;
use App\Http\Requests\UpdateMatchRequest;

class MatchController extends Controller
{
    private $matchService;

    public function __construct(MatchService $matchService)
    {
        $this->matchService = $matchService;
    }

    public function index()
    {
        return $this->matchService->findAll();
    }

    public function show($matchId)
    {
        return $this->matchService->findById($matchId);
    }

    public function store(CreateMatchRequest $request)
    {
        $this->matchService->create($request->all());

        return response(null, 201);
    }

    public function update(UpdateMatchRequest $request, $matchId)
    {
        $this->matchService->update($request->all());

        return response(null, 204);
    }
}
