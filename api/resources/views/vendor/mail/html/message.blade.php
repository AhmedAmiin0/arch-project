@component('mail::layout')
    {{-- Header --}}
    @slot('header')
        @component('mail::header', ['url' => env('FRONTEND_URL')])
            @if (!empty($appLogo))
                <img src="{{ $appLogo['src'] }}" class="logo" alt="{{ $appName }}">
            @else
                    {{ config('app.name') }}
            @endif
        @endcomponent
    @endslot

    {{-- Body --}}
    {{ $slot }}

    {{-- Subcopy --}}
    @isset($subcopy)
        @slot('subcopy')
            @component('mail::subcopy')
                {{ $subcopy }}
            @endcomponent
        @endslot
    @endisset

    {{-- Footer --}}
    @slot('footer')
        @component('mail::footer')
            © {{ date('Y') }} {{ !empty($appName) ? $appName : config('app.name') }}. @lang('All rights reserved.')
        @endcomponent
    @endslot
@endcomponent
