<?php

namespace App\Http\Controllers;

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
        $contactPage =  ContactPage::find(1);

        return $contactPage;
        // if ($contactPage != null) {
        //     $contactPage->home_images = $contactPage->getMedia('contact_page_image')->map(function ($item) {
        //         return [
        //             'src' => $item->getFullUrl(),
        //             'alt' => $item->name,
        //             'id' => $item->id,
        //         ];
        //     });
        //     unset($contactPage->media);
        // }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $contactPage = ContactPage::find(1);
            $contactPage == null ? ContactPage::create([
                'title' => [
                    'en' => $request->title['en'] ?? '',
                    'ar' => $request->title['ar']  ?? '',
                ],
                'subtitle' => [
                    'en' => $request->subtitle['en'] ?? '',
                    'ar' => $request->subtitle['ar']  ?? '',
                ],
                'contact_details' => [
                    'en' => $request->contact_details['en'] ?? '',
                    'ar' => $request->contact_details['ar']  ?? '',
                ],
                'location' => $request->location,
            ]) : $contactPage->update([
                'title' => [
                    'en' => $request->title['en'] ?? '',
                    'ar' => $request->title['ar']  ?? '',
                ],
                'subtitle' => [
                    'en' => $request->subtitle['en'] ?? '',
                    'ar' => $request->subtitle['ar']  ?? '',
                ],
                'contact_details' => [
                    'en' => $request->contact_details['en'] ?? '',
                    'ar' => $request->contact_details['ar']  ?? '',
                ],
                'location' => $request->location,
            ]);

            if ($request->has('contact_page_image')) {
                $contactPage->addMediaFromRequest('contact_page_image')->each(fn ($media) => $media->toMediaCollection('contact_page_image'));
            }
            return response()->json(['message' => 'Contact page updated successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function sendMessage(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|email',
                'phone' => 'nullable|numeric',
                'message' => 'nullable',
            ]);
            Mail::to('ahmedamin1925@gmail.com')->send(new NotifiMail());
            //            SendMailsJob::dispatch($mailModel, $request->all());
            // check if email is already in the database
            Email::where('email', $request->email)->first() ?? Email::create($request->only('email'));
            return response()->json(['message' => 'Message sent successfully.'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
