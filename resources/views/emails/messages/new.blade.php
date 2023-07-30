<x-mail::message>
# New Message received

Details are as below:

Influencer: {{ $influencer->username }} - {{ $influencer->full_name }}

Message:

<blockquote>{{$message}}</blockquote>
Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
