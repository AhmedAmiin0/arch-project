<?php

namespace App\Http\Controllers;

use App\Http\Resources\CorporateResource;
use App\Models\Corporate;
use Illuminate\Http\Request;

class CorporateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $limit = request()->get('limit', 10);
        $corporate =  Corporate::search(request('q'))->paginate($limit);
        $corporate->load('media');
        return CorporateResource::collection($corporate);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            [
                'name' => 'required|string|max:255',
                'url' => 'required|string|max:255',
                'corporate_logo' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:4128',
            ]
        );
        $corporate = Corporate::create(
            [
                'name' => $request->name,
                'url' => $request->url,
            ]
        );
        if ($request->hasFile('corporate_logo')) {
            $corporate->addMedia($request->file('corporate_logo'))->toMediaCollection('corporate_logo');
        }
        return response()->json([
            'message' => 'Corporate Created',
            'corporate_id' => $corporate->id
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Corporate $corporate
     * @return \Illuminate\Http\Response
     */
    public function show(Corporate $corporate)
    {
        $corporate->Load('media');
        return CorporateResource::make($corporate);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Corporate $corporate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Corporate $corporate)
    {
        // return $request->all();
        $corporate->update([
            'name' => $request->name,
            'url' => $request->url,
        ]);
        if ($request->has('corporate_logo')) {
            $corporate->addMediaFromRequest('corporate_logo')->toMediaCollection('corporate_logo');
        }
        return response()->json(['message' => 'Corporate Updated'], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Corporate $corporate
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Corporate::find($id)->delete();
        return response()->noContent();
    }
}
