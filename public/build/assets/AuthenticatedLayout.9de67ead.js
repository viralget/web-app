import{r,a as h,R as e,L as x}from"./app.f189a042.js";import{L as o}from"./Logo.571a0bf1.js";import{c}from"./helpers.a1938207.js";import{C as b}from"./Container.ab722d3a.js";import{D as y}from"./DropdownMenu.d2abd5af.js";import{g as i,X as v,M as E,H as N}from"./XMarkIcon.7ab3396d.js";import{B as w,a as k,C,S as F}from"./ScaleIcon.c98b071d.js";import{U as I}from"./UsersIcon.2b776fe0.js";import{W as n}from"./transition.51d39479.js";const m=[{name:"Find Influencers",href:"explore",icon:N,current:!0},{name:"Profile Influencers",href:"profiling",icon:I,current:!1},{name:"My Campaigns",href:"coming-soon",icon:C,current:!1},{name:"Track Campaigns",href:"coming-soon",icon:F,current:!1}];function z({children:d,title:f,subtitle:l,showHeader:u=!0,smallHeader:t=!1}){const[g,s]=r.exports.useState(!1),{auth:{user:p}}=h().props;return e.createElement("div",{className:"min-h-screen bg-gray-50"},e.createElement(n.Root,{show:g,as:r.exports.Fragment},e.createElement(i,{as:"div",className:"relative z-40 lg:hidden",onClose:s},e.createElement(n.Child,{as:r.exports.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})),e.createElement("div",{className:"fixed inset-0 z-40 flex bg-white"},e.createElement(n.Child,{as:r.exports.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},e.createElement(i.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-white-700 pt-5 pb-4"},e.createElement(n.Child,{as:r.exports.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"absolute top-0 right-0 -mr-12 pt-2"},e.createElement("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:()=>s(!1)},e.createElement("span",{className:"sr-only"},"Close sidebar"),e.createElement(v,{className:"h-6 w-6 text-white","aria-hidden":"true"})))),e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement(x,{href:"/"},e.createElement(o,{className:"h-10 w-auto"}))),e.createElement("nav",{className:"mt-5 h-full flex-shrink-0 divide-y divide-gray-800 overflow-y-auto","aria-label":"Sidebar"},e.createElement("div",{className:"space-y-1 px-2"},m.map(a=>e.createElement("a",{key:a.name,href:route(a.href),className:c(a.href==route().current()?"bg-orange-100 text-gray-900":"text-gray-400 hover:text-white hover:bg-gray-600","group flex items-center px-2 py-2 text-base font-medium rounded-md"),"aria-current":a.href==route().current()?"page":void 0},e.createElement(a.icon,{className:"mr-4 h-6 w-6 flex-shrink-0 text-gray-900","aria-hidden":"true"}),a.name)))))),e.createElement("div",{className:"w-14 flex-shrink-0","aria-hidden":"true"})))),e.createElement("div",{className:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col"},e.createElement("div",{className:"flex flex-grow flex-col overflow-y-auto bg-white pt-5 pb-4"},e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement(o,{className:"h-10 w-auto"})),e.createElement("nav",{className:"mt-5 flex flex-1 flex-col divide-y divide-gray-800 overflow-y-auto","aria-label":"Sidebar"},e.createElement("div",{className:"space-y-1 px-2"},m.map(a=>e.createElement("a",{key:a.name,href:route(a.href),className:c(a.href==route().current()?"bg-fuchsia-50 rounded group-text-fuchsia-900":"text-gray-500 hover:text-white hover:bg-gray-600","group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"),"aria-current":a.href==route().current()?"page":void 0},e.createElement(a.icon,{className:"mr-4 h-6 w-6 flex-shrink-0 text-gray-300 ","aria-hidden":"true"}),a.name)))))),e.createElement("div",{className:"flex flex-1 flex-col lg:pl-64"},u&&e.createElement("div",{className:t?"  text-black":"bg-fuchsia-600  bg-gradient-to-r from-fuchsia-600  via-red-500 to-yellow-600    rounded-br-[5rem]"},e.createElement("div",{className:"flex mt-4 h-16 flex-shrink-0 border-b border-gray-200 bg-transparent lg:border-none"},e.createElement("button",{type:"button",className:t?"md:border-r border-black px-4 text-black lg:hidden":"md:border-r border-gray-200 px-4 text-gray-400 lg:hidden",onClick:()=>s(!0)},e.createElement("span",{className:"sr-only"},"Open sidebar"),e.createElement(w,{className:t?"h-6 w-6 text-black":"h-6 w-6 text-white","aria-hidden":"true"})),e.createElement("div",{className:"flex flex-1 justify-end md:justify-between mx-auto  px-5 sm:px-6 lg:px-8 relative"},e.createElement("div",{className:"hidden md:flex flex-1"},e.createElement("div",{className:"w-full max-w-sm  mt-3"},e.createElement("form",{action:route("influencers.search"),method:"get"},e.createElement("label",{htmlFor:"search",className:"sr-only"},"Search"),e.createElement("div",{className:"relative"},e.createElement("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},e.createElement(E,{className:"h-5 w-5 text-gray-50","aria-hidden":"true"})),e.createElement("input",{id:"keywords",name:"keywords",className:t?"block w-full rounded-lg border border-black-50/40 bg-black-50/30 py-3 pl-10 pr-3 leading-5 placeholder-black-50 focus:border-fushia-500 focus:placeholder-black-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":"block w-full rounded-lg border border-stone-50/40 bg-stone-50/30 py-3 pl-10 pr-3 leading-5 placeholder-gray-50 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm",placeholder:"Enter keywords",type:"search"}))))),e.createElement("div",{className:"ml-4 flex items-center md:ml-6 space-x-3"},e.createElement("button",{type:"button",className:t?"text-black rounded-lg border border-black-50/40 bg-black-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":"text-white rounded-lg border border-stone-50/40 bg-stone-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"},e.createElement("span",{className:"sr-only"},"View notifications"),e.createElement(k,{className:"h-6 w-6","aria-hidden":"true"})),e.createElement("div",{className:t?"w-full rounded-lg border border-black-50/40 bg-black-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":" w-full rounded-lg border border-stone-50/40 bg-stone-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"},e.createElement(y,{user:p,light:!t}))))),!t&&e.createElement(b,{className:"relative"},e.createElement("div",{className:"w-3/5  my-16 "},e.createElement("h1",{className:"font-display pb-5 font-bold text-3xl tracking-tight text-white sm:text-4xl md:text-3xl"},f),l&&e.createElement("p",{className:"text-sm text-gray-50"},l)))),d))}export{z as A};