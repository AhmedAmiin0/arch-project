@component('mail::message', [
    'appName' => $appName,
    'appLogo' => $appLogo,
])
# {{ $mailTitle }}

{{ $mailMessage }}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
