<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ThanksForContactingMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(public $appLogo, public  $appName, public  $mailTitle, public $mailMessage, public $mailSubject, public $emailFrom)
    {
        //
    }


    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject($this->mailSubject)
            ->from($this->emailFrom)
            ->markdown(
                'mails.thanksForContactingMail',
                [
                    'appLogo' => $this->appLogo,
                    'appName' => $this->appName,
                    'mailTitle' => $this->mailTitle,
                    'mailMessage' => $this->mailMessage,
                ]
            );
    }
}
