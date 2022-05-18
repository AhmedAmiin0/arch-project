<?php

namespace App\Http\Controllers;

use App\Models\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $limit = request()->get('limit', 15);
        return Email::paginate($limit);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|unique:emails',
        ]);
        $email = Email::create($request->all());
        return response()->json($email, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Email $email
     * @return \Illuminate\Http\Response
     */
    public function show(Email $email)
    {
        return $email;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Email $email
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Email $email)
    {
        $email->update($request->all());
        return response()->json($email, 200);
    }

    public function archived()
    {
        $limit = request()->get('limit', 10);
        return Email::onlyTrashed()
            ->paginate($limit);

    }


    public function restoreFromArchive(Request $request)
    {
        try {
            $email = Email::onlyTrashed()->find($request->get('id'));
            $email->restore();
            return response()->json(['message' => 'success'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    public function removePermanently($id)
    {
        $email = Email::onlyTrashed()->find($id);
        $email->forceDelete();
        return response()->json(['message' => 'success'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\Email $email
     * @return \Illuminate\Http\Response
     */
    public function destroy(Email $email)
    {
        $email->delete();
        return response()->noContent();
    }
}
