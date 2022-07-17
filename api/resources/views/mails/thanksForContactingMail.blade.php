@component('mail::message', [
    'appName' => $appName,
    'appLogo' => $appLogo,
])
# {{ $mailTitle }}

{{ $mailMessage }}

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
