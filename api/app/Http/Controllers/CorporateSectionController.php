<?php

namespace App\Http\Controllers;

use App\Http\Services\SentenceService;
use App\Models\Corporate;
use App\Models\CorporateSection;
use Illuminate\Http\Request;

class CorporateSectionController extends Controller
{
    public $sentenceService;
    public function __construct()
    {
        $this->sentenceService = new SentenceService;
    }

    public function index()
    {
        return $this->sentenceService->retrive(CorporateSection::class);
    }

    public
    function store(Request $request)
    {
        try {
            $this->sentenceService->storeOrUpdate($request,CorporateSection::class);
            return response()->json(['success' => 'Action Has been taken successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
