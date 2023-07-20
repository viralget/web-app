<x-mail::message>
# New Pre-order received

Details are as below:

@foreach ($data as $key => $value)
    {{$key}} : {{$value}}
@endforeach

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
