<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        {{-- <link rel="shortcut icon" href="{{ Vite::asset('resources/assets/images/favicon.ico') }}" type="image/x-icon" /> --}}
    @routes
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])

    {{-- @vite('resources/js/app.jsx') --}}
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>