import{r as l,b as y,R as e,L as E,F as v,H as N}from"./app.ea44319b.js";import{L as i}from"./Logo.ae4aa33e.js";import{c as n}from"./helpers.2c6296bd.js";import{D as w}from"./DropdownMenu.1b7cec9b.js";import{g as m,M as k}from"./MagnifyingGlassIcon.e01f1ad2.js";import{X as F}from"./XMarkIcon.e4157076.js";import{B as C,a as I}from"./Bars3CenterLeftIcon.d6c601f9.js";import{W as s}from"./transition.9773836c.js";const u=[{name:"Find Influencers",href:"explore",alt_route:"explore",icon:v,current:!0},{name:"Help center",href:"contact",icon:N,current:!1}];function O({children:d,title:f,subtitle:c,showHeader:p=!0,showSearchForm:x=!0,smallHeader:a=!0,bgColor:h}){const[g,o]=l.exports.useState(!1),{auth:{user:b}}=y().props,r=t=>t.href?t.alt_route?route().current(`${t.href}`)||route().current(`${t.alt_route}.*`):route().current(`${t.href}`):!1;return e.createElement("div",{className:"min-h-screen bg-white"},e.createElement(s.Root,{show:g,as:l.exports.Fragment},e.createElement(m,{as:"div",className:"relative z-40 lg:hidden",onClose:o},e.createElement(s.Child,{as:l.exports.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})),e.createElement("div",{className:"fixed inset-0 z-40 flex bg-white"},e.createElement(s.Child,{as:l.exports.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},e.createElement(m.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-white-700 pt-5 pb-4"},e.createElement(s.Child,{as:l.exports.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"absolute top-0 right-0 -mr-12 pt-2"},e.createElement("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:()=>o(!1)},e.createElement("span",{className:"sr-only"},"Close sidebar"),e.createElement(F,{className:"h-6 w-6 text-white","aria-hidden":"true"})))),e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement(E,{href:"/"},e.createElement(i,{className:"h-10 w-auto"}))),e.createElement("nav",{className:"mt-5 h-full flex-shrink-0 divide-y divide-gray-800 overflow-y-auto","aria-label":"Sidebar"},e.createElement("div",{className:"space-y-1 px-2"},u.map(t=>e.createElement("a",{key:t.name,href:route(t.href),className:n(r(t)?"bg-orange-100 text-[#580877]":"text-gray-400 hover:text-white hover:bg-gray-600","group flex items-center px-2 py-2 text-base  rounded-md"),"aria-current":r(t)?"page":void 0},e.createElement(t.icon,{className:"mr-4 h-6 w-6 flex-shrink-0 text-gray-900","aria-hidden":"true"}),t.name)))))),e.createElement("div",{className:"w-14 flex-shrink-0","aria-hidden":"true"})))),e.createElement("div",{className:"hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col "},e.createElement("div",{className:"flex flex-grow flex-col overflow-y-auto  shadow-side-menu  pt-5 pb-4"},e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement(i,{className:"h-10 w-auto"})),e.createElement("nav",{className:"mt-10 flex flex-1 flex-col divide-y divide-gray-800 overflow-y-auto","aria-label":"Sidebar"},e.createElement("div",{className:"space-y-1 px-3"},u.map(t=>e.createElement("a",{key:t.name,href:route(t.href),className:n(r(t)?"bg-fuchsia-50 rounded-md group-text-fuchsia-900":"text-[#748094]  hover:text-[#A5ABB5]","group flex  space-x-3 items-center font-satoshi  px-2 py-2 text-sm leading-6 rounded-lg"),"aria-current":r(t)?"page":void 0},e.createElement(t.icon,{className:n("h-6 w-6 flex-shrink-0"),"aria-hidden":"true",stroke:t.href==route().current()?"#580877":"#A5ABB5"}),e.createElement("span",{className:r(t)?"text-[#580877]":""},t.name))))))),e.createElement("div",{className:"flex flex-1 flex-col lg:pl-64"},p&&e.createElement("div",{className:n(a?"text-black":"rounded-br-[5rem]",h)},e.createElement("div",{className:"flex mt-4 h-16 flex-shrink-0 border-b border-gray-200 bg-transparent lg:border-none"},e.createElement("button",{type:"button",className:a?"md:border-r border-black px-4 text-black lg:hidden":"md:border-r border-gray-200 px-4 text-gray-400 lg:hidden",onClick:()=>o(!0)},e.createElement("span",{className:"sr-only"},"Open sidebar"),e.createElement(C,{className:a?"h-6 w-6 text-black":"h-6 w-6 text-white","aria-hidden":"true"})),x&&e.createElement("div",{className:"flex flex-1 justify-end md:justify-between mx-auto   sm:px-5 lg:px-5 relative"},e.createElement("div",{className:"hidden md:flex flex-1"},e.createElement("div",{className:"w-full max-w-sm  mt-3"},e.createElement("form",{action:route("explore.search"),method:"get"},e.createElement("label",{htmlFor:"search",className:"sr-only"},"Search"),e.createElement("div",{className:"relative"},e.createElement("div",{className:"pointer-events-none absolute inset-y-0 flex items-center pl-3"},e.createElement(k,{className:"h-5 w-5 text-gray-300","aria-hidden":"true"})),e.createElement("input",{id:"keywords",name:"keywords",className:a?"block w-full rounded-lg border border-black-50/40 bg-black-50/30 py-3 pl-10 pr-3 leading-5 placeholder-black-50 focus:border-fushia-500 focus:placeholder-black-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":"block w-full rounded-lg border border-stone-50/40 bg-stone-50/30 py-3 pl-10 pr-3 leading-5 placeholder-gray-50 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm",placeholder:"Search for influencer by name or @handle",type:"search"}))))),e.createElement("div",{className:"ml-4 flex items-center md:ml-6 space-x-3"},e.createElement("button",{type:"button",className:a?"text-black rounded-lg border border-black-50/40 bg-black-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":"text-white rounded-lg border border-stone-50/40 bg-stone-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"},e.createElement("span",{className:"sr-only"},"View notifications"),e.createElement(I,{className:"h-6 w-6","aria-hidden":"true"})),e.createElement("div",{className:a?"w-full rounded-lg border border-black-50/40 bg-black-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm":" w-full rounded-lg border border-stone-50/40 bg-stone-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"},e.createElement(w,{user:b,light:!a}))))),!a&&e.createElement("div",{className:" px-5 sm:px-6 lg:px-8  my-16 "},e.createElement("h1",{className:"font-display pb-20 font-bold  font-lexend leading-[48px] text-white text-[44px]"},f),c&&e.createElement("p",{className:"text-sm text-gray-50"},c))),e.createElement("div",{className:"py-5"},d)))}export{O as A};
