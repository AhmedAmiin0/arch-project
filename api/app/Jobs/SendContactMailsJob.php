<?php

namespace App\Jobs;

use App\Mail\ThanksForContactingMail;
use App\Models\Email;
use App\Models\GlobalData;
use App\Models\Message;
use App\Models\ThanksForContactingMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendContactMailsJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $appLogo, $appName, $mailTitle, $mailMessage, $mailSubject, $appMail;

    public function __construct(public $email, public $clientName, public $clientMessage, public $clientSubject, public $clientStatus)
    {
        $globalData = GlobalData::first();
        $ThanksForContactingMessage = ThanksForContactingMessage::first();
        $this->appLogo = [
            'src' => $globalData?->getFirstMedia('logo')?->getUrl() ?? asset('logo.png'),
            'alt' => $globalData?->getFirstMedia('logo')?->name ?? 'logo',
        ];
        $this->appName = $globalData->name ?? config('app.name');
        $this->appMail = $globalData->email ?? env("TEMP_MAIL");
        $this->mailTitle = $ThanksForContactingMessage->title ?? 'A7a';
        $this->mailMessage = $ThanksForContactingMessage->message ?? 'Thanks for contacting us';
        $this->mailSubject = $ThanksForContactingMessage->subject ?? 'Thanks for contacting us';
    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {

        Mail::to($this->email)->send(new ThanksForContactingMail(
            $this->appLogo,
            $this->appName,
            $this->mailTitle,
            $this->mailMessage,
            $this->mailSubject,
            $this->appMail
        ));
        Message::create([
            'email' => $this->email,
            'name' => $this->clientName,
            'message' => $this->clientMessage,
            'subject' => $this->clientSubject,
            'status' => $this->clientStatus,
        ]);
        Email::firstOrCreate(['email' => $this->email]);
        Mail::to($this->appMail)->send(new ThanksForContactingMail(
            $this->appLogo,
            $this->appName,
            $this->clientSubject,
            $this->clientMessage,
            $this->clientName,
            $this->email
        ));
    }
}
