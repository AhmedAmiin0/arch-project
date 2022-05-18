<?php

namespace App\Http\Controllers;

use App\Http\Services\SentenceService;
use App\Models\ProjectSentence;
use Illuminate\Http\Request;

class ProjectSentenceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public $sentenceService;
    public function __construct()
    {
        $this->sentenceService = new SentenceService;
    }

    public function index()
    {
        return $this->sentenceService->retrive(ProjectSentence::class);
    }

    public
    function store(Request $request)
    {
        try {
            $this->sentenceService->storeOrUpdate($request,ProjectSentence::class);
            return response()->json(['success' => 'Action Has been taken successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
}
