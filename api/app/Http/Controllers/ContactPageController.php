<?php

namespace App\Http\Controllers;

use App\Http\Resources\ContactPageResource;
use App\Jobs\SendMailsJob;
use App\Mail\NotifiMail;
use App\Models\ContactPage;
use App\Models\Email;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactPageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contactPage = ContactPage::find(1);
        return ContactPageResource::make($contactPage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();
        try {
            $data = $request->only('title','subtitle','contact_details','location');
            $contactPage = ContactPage::find(1);
            $contactPage == null ? ContactPage::create($data) : $contactPage->update($data);
            // if ($request->has('contact_page_image')) {
            //     $contactPage->addMediaFromRequest('contact_page_image')->each(fn ($media) => $media->toMediaCollection('contact_page_image'));
            // }
            return response()->json(['message' => 'Contact page updated successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

}
