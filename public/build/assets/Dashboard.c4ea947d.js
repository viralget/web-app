import{r as a,R as e}from"./app.f189a042.js";import{A as x}from"./Avatar.baedbf25.js";import{g as d,X as p,M as g,H as h}from"./XMarkIcon.7ab3396d.js";import{W as o,q as i}from"./transition.51d39479.js";import"./use-event-listener.62720cc9.js";function E({title:r,titleId:n,...s},l){return a.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":n},s),r?a.exports.createElement("title",{id:n},r):null,a.exports.createElement("path",{fillRule:"evenodd",d:"M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.202 41.202 0 01-5.183.501.78.78 0 00-.528.224l-3.579 3.58A.75.75 0 016 17.25v-3.443a41.033 41.033 0 01-2.57-.33C1.993 13.244 1 11.986 1 10.573V5.426c0-1.413.993-2.67 2.43-2.902z",clipRule:"evenodd"}))}const v=a.exports.forwardRef(E),y=v;function w({title:r,titleId:n,...s},l){return a.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":n},s),r?a.exports.createElement("title",{id:n},r):null,a.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"}))}const N=a.exports.forwardRef(w),b=N,f=[{name:"Dashboard",href:"#",icon:h,current:!0},{name:"WhatsApp Inluencers",href:route("admin.influencers.whatsapp.index"),icon:y,current:!1}],k=[{name:"Sign out",href:route("admin.logout")}];function c(...r){return r.filter(Boolean).join(" ")}function I({children:r,title:n}){const[s,l]=a.exports.useState(!1),m=window.location.href;return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(o.Root,{show:s,as:a.exports.Fragment},e.createElement(d,{as:"div",className:"relative z-40 md:hidden",onClose:l},e.createElement(o.Child,{as:a.exports.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})),e.createElement("div",{className:"fixed inset-0 z-40 flex"},e.createElement(o.Child,{as:a.exports.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full"},e.createElement(d.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-indigo-700 pt-5 pb-4"},e.createElement(o.Child,{as:a.exports.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement("div",{className:"absolute top-0 right-0 -mr-12 pt-2"},e.createElement("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:()=>l(!1)},e.createElement("span",{className:"sr-only"},"Close sidebar"),e.createElement(p,{className:"h-6 w-6 text-white","aria-hidden":"true"})))),e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300",alt:"Your Company"})),e.createElement("div",{className:"mt-5 h-0 flex-1 overflow-y-auto"},e.createElement("nav",{className:"space-y-1 px-2"},f.map(t=>e.createElement("a",{key:t.name,href:t.href,className:c(m==t.href?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-600","group flex items-center px-2 py-2 text-base font-medium rounded-md")},e.createElement(t.icon,{className:"mr-4 h-6 w-6 flex-shrink-0 text-indigo-300","aria-hidden":"true"}),t.name)))))),e.createElement("div",{className:"w-14 flex-shrink-0","aria-hidden":"true"})))),e.createElement("div",{className:"hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col"},e.createElement("div",{className:"flex flex-grow flex-col overflow-y-auto bg-indigo-700 pt-5"},e.createElement("div",{className:"flex flex-shrink-0 items-center px-4"},e.createElement("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300",alt:"Your Company"})),e.createElement("div",{className:"mt-5 flex flex-1 flex-col"},e.createElement("nav",{className:"flex-1 space-y-1 px-2 pb-4"},f.map(t=>e.createElement("a",{key:t.name,href:t.href,className:c(m==t.href?"bg-indigo-800 text-white":"text-indigo-100 hover:bg-indigo-600","group flex items-center px-2 py-2 text-sm font-medium rounded-md")},e.createElement(t.icon,{className:"mr-3 h-6 w-6 flex-shrink-0 text-indigo-300","aria-hidden":"true"}),t.name)))))),e.createElement("div",{className:"flex flex-1 flex-col md:pl-64"},e.createElement("div",{className:"sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow"},e.createElement("button",{type:"button",className:"border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",onClick:()=>l(!0)},e.createElement("span",{className:"sr-only"},"Open sidebar"),e.createElement(b,{className:"h-6 w-6","aria-hidden":"true"})),e.createElement("div",{className:"flex flex-1 justify-between px-4"},e.createElement("div",{className:"flex flex-1"},e.createElement("form",{className:"flex w-full md:ml-0",action:"#",method:"GET"},e.createElement("label",{htmlFor:"search-field",className:"sr-only"},"Search"),e.createElement("div",{className:"relative w-full text-gray-400 focus-within:text-gray-600"},e.createElement("div",{className:"pointer-events-none absolute inset-y-0 left-0 flex items-center"},e.createElement(g,{className:"h-5 w-5","aria-hidden":"true"})),e.createElement("input",{id:"search-field",className:"block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm",placeholder:"Search",type:"search",name:"search"})))),e.createElement("div",{className:"ml-4 flex items-center md:ml-6"},e.createElement(i,{as:"div",className:"relative ml-3"},e.createElement("div",null,e.createElement(i.Button,{className:"flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},e.createElement("span",{className:"sr-only"},"Open user menu"),e.createElement(x,{userName:"Admin"}))),e.createElement(o,{as:a.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},e.createElement(i.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},k.map(t=>e.createElement(i.Item,{key:t.name},({active:u})=>e.createElement("a",{href:t.href,className:c(u?"bg-gray-100":"","block px-4 py-2 text-sm text-gray-700")},t.name))))))))),e.createElement("main",null,e.createElement("div",{className:"py-6"},n&&e.createElement("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 md:px-8"},e.createElement("h1",{className:"text-2xl font-semibold text-gray-900"},n)),e.createElement("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 md:px-8"},r))))))}export{I as default};