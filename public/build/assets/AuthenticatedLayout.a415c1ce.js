import{r,a as h,R as e,L as b}from"./app.b9917e06.js";import{L as c}from"./Logo.8fb280c2.js";import{c as l}from"./helpers.78219879.js";import{D as y}from"./DropdownMenu.4b18f85c.js";import{F as E,b as v,M as N,T as w,H as k}from"./icons.140e276c.js";import{g as i}from"./dialog.7fcf58de.js";import{X as F}from"./XMarkIcon.584a20e6.js";import{B as C,a as T}from"./Bars3CenterLeftIcon.55a1125a.js";import{W as n}from"./transition.a5983d67.js";const m=[{name:"Find Influencers",href:"explore",icon:E,current:!0},{name:"Profile Influencers",href:"profiling",icon:v,current:!1},{name:"My Campaigns",href:"brief",icon:N,current:!1},{name:"Track Campaigns",href:"track.campaign.page",icon:w,current:!1},{name:"Help center",href:"coming-soon",icon:k,current:!1}];function R({children:f,title:u,subtitle:o,showHeader:d=!0,showSearchForm:p=!0,smallHeader:t=!1}){const[x,s]=r.exports.useState(!1),{auth:{user:g}}=h().props;return e.createElement("div",{className:"min-h-screen bg-white"},e.createElement(n.Root,{show:x,as:r.exports.Fragment},e.createElement(i,{as:"div",className:"relative z-40 lg:hidden",onClose:s},e.createElement(n.Child,{as:r.exports.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})),e.createElement("div",{className:"fixed inset-0 z-40 flex bg-white"},e.createElement(n.Child,{as:r.exports.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},e.createElement(i.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-white-700 pt-5 pb-4"},e.createElement(n.Child,{as:r.exports.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"absolute top-0 right-0 -mr-12 pt-2"},e.createElement("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:()=>s(!1)},e.createElement("span",{className:"sr-only"},"Close sidebar"),e.createElement(F,{className:"h-6 w-6 text-white","aria-hidden":"true"})))),e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement(b,{href:"/"},e.createElement(c,{className:"h-10 w-auto"}))),e.createElement("nav",{className:"mt-5 h-full flex-shrink-0 divide-y divide-gray-800 overflow-y-auto","aria-label":"Sidebar"},e.createElement("div",{className:"space-y-1 px-2"},m.map(a=>e.createElement("a",{key:a.name,href:route(a.href),className:l(a.href==route().current()?"bg-orange-100 text-[#580877]":"text-gray-400 hover:text-white hover:bg-gray-600","group flex items-center px-2 py-2 text-base  rounded-md"),"aria-current":a.href==route().current()?"page":void 0},e.createElement(a.icon,{className:"mr-4 h-6 w-6 flex-shrink-0 text-gray-900","aria-hidden":"true"}),a.name)))))),e.createElement("div",{className:"w-14 flex-shrink-0","aria-hidden":"true"})))),e.createElement("div",{className:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col "},e.createElement("div",{className:"flex flex-grow flex-col overflow-y-auto  shadow-side-menu  pt-5 pb-4"},e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement(c,{className:"h-10 w-auto"})),e.createElement("nav",{className:"mt-10 flex flex-1 flex-col divide-y divide-gray-800 overflow-y-auto","aria-label":"Sidebar"},e.createElement("div",{className:"space-y-1 px-3"},m.map(a=>e.createElement("a",{key:a.name,href:route(a.href),className:l(a.href==route().current()?"bg-fuchsia-50 rounded-md group-text-fuchsia-900":"text-[#748094]  hover:text-[#A5ABB5]","group flex  space-x-3 items-center font-satoshi  px-2 py-2 text-sm leading-6 rounded-lg"),"aria-current":a.href==route().current()?"page":void 0},e.createElement(a.icon,{className:l("h-6 w-6 flex-shrink-0"),"aria-hidden":"true",stroke:a.href==route().current()?"#580877":"#A5ABB5"}),e.createElement("span",{className:a.href==route().current()?"text-[#580877]":""},a.name))))))),e.createElement("div",{className:"flex flex-1 flex-col lg:pl-64"},d&&e.createElement("div",{className:t?"  text-black":"bg-[#01C5FF] bg-gradient-to-r from-[#01C5FF]  via-[#00AEFF] to-[#0094FE]    rounded-br-[5rem]"},e.createElement("div",{className:"flex mt-4 h-16 flex-shrink-0 border-b border-gray-200 bg-transparent lg:border-none"},e.createElement("button",{type:"button",className:t?"md:border-r border-black px-4 text-black lg:hidden":"md:border-r border-gray-200 px-4 text-gray-400 lg:hidden",onClick:()=>s(!0)},e.createElement("span",{className:"sr-only"},"Open sidebar"),e.createElement(C,{className:t?"h-6 w-6 text-black":"h-6 w-6 text-white","aria-hidden":"true"})),p&&e.createElement("div",{className:"flex flex-1 justify-end md:justify-between mx-auto  px-5 sm:px-6 lg:px-8 relative"},e.createElement("div",{className:"hidden md:flex flex-1"}),e.createElement("div",{className:"ml-4 flex items-center md:ml-6 space-x-3"},e.createElement("button",{type:"button",className:t?"text-black rounded-lg border border-black-50/40 bg-black-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":"text-white rounded-lg border border-stone-50/40 bg-stone-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"},e.createElement("span",{className:"sr-only"},"View notifications"),e.createElement(T,{className:"h-6 w-6","aria-hidden":"true"})),e.createElement("div",{className:t?"w-full rounded-lg border border-black-50/40 bg-black-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":" w-full rounded-lg border border-stone-50/40 bg-stone-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"},e.createElement(y,{user:g,light:!t}))))),!t&&e.createElement("div",{className:" px-5 sm:px-6 lg:px-8  my-16 "},e.createElement("h1",{className:"font-display pb-5 font-bold  font-lexend leading-[48px] text-white text-[44px]"},u),o&&e.createElement("p",{className:"text-sm text-gray-50"},o))),f))}export{R as A};
