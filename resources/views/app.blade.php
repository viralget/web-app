<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
<meta name="facebook-domain-verification" content="dyz562z2z85jz5eoolyfwvep9x8nzq" />
<link rel="shortcut icon" href="{{ asset('/assets/images/logos/logo.png') }}" type="image/x-icon">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '1317488535485095'); 
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1" src="https://www.facebook.com/tr?id=1317488535485095&ev=PageView&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

    @routes
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])

    {{-- @vite('resources/js/app.jsx') --}}
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>

  <!-- <script src="https://js.paystack.co/v2/inline.js"> -->
</html>