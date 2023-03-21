import{R as e}from"./app.f189a042.js";import{n as s}from"./helpers.a1938207.js";import"./moment.9709ab41.js";function d({influencer:t,showBanner:a,handleProfile:m,useShadow:c,useLink:o}){var r;const l=()=>{o?window.location.href=route("influencer.show",{id:t.id}):m()};return e.createElement("div",{key:t.id,className:`col-span-1 bg-white rounded-lg text-center ${c?"shadow-lg":"border"} overflow-hidden`},a&&e.createElement("div",{className:"bg-gray-500"},t.profile_banner_url&&e.createElement("img",{class:"h-36 w-full object-cover",src:t.profile_banner_url,alt:""})),e.createElement("div",{className:`flex flex-1 flex-col p-8 ${a&&"-mt-16"}`},e.createElement("img",{className:"mx-auto h-20 w-20 flex-shrink-0 rounded-full",src:t.profile_photo_url,alt:""}),e.createElement("h3",{className:"mt-6 text-sm font-medium text-gray-900 cursor-pointer",onClick:()=>l()},"@",t.username),e.createElement("dl",{className:"mt-1 flex flex-grow flex-col justify-between cursor-pointer",onClick:()=>l()},e.createElement("dd",{className:"text-sm text-gray-500"},t.full_name))),e.createElement("div",null,e.createElement("div",{className:"flex justify-between mx-10 mb-5 "},e.createElement("div",{className:"text-center items-center flex-col"},e.createElement("span",{className:"text-xl block"},s(t.followers_count)),e.createElement("span",{className:"text-sm text-gray-500"},"Followers")),e.createElement("div",{className:"text-center items-center flex-col"},e.createElement("span",{className:"text-xl block p-0"},s(t.interactions)),e.createElement("span",{className:"text-sm text-gray-500"},"Interactions")),e.createElement("div",{className:"text-center items-center flex-col"},e.createElement("span",{className:"text-xl block"},(r=t.engagement_rate)!=null?r:0),e.createElement("span",{className:"text-sm text-gray-500"},"ER")))))}export{d as default};
