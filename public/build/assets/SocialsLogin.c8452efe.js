import{R as e}from"./app.19c40a43.js";function o({type:r,redirect_url:l}){const a=n=>{let t=`${route("auth.social")}?platform=${n}`;l&&(t=`${t}&redirect_url=${l}`),window.location.href=t};return e.createElement(e.Fragment,null,e.createElement("div",{className:"mt-1 grid "},e.createElement("div",null,e.createElement("button",{onClick:()=>a("twitter"),className:"inline-flex w-full justify-center space-x-3 rounded-md border  bg-blue-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-600"},e.createElement("svg",{className:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{d:"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"})),e.createElement("span",null,"Sign in with Twitter")))))}export{o as default};