import{R as e,r as c,L as s,a as E,H as x}from"./app.0ebeabc9.js";import{B as o,c as i}from"./Button.e1b4d650.js";import{N as u,B as h,m as l}from"./NavLink.3d867b6c.js";import{z as r,A as v,B as y,W as m,C as N}from"./Avatar.94e9c00e.js";import{L as b}from"./Logo.004f1c1c.js";const k=[{name:"Explore Influencers",href:"explore"},{name:"Create new Campaign",href:"campaigns.create"},{name:"Account Settings",href:"settings"}];function g(...t){return t.filter(Boolean).join(" ")}function w({user:t,light:a=!1}){return e.createElement(r,{as:"div",className:"relative inline-block text-left"},e.createElement("div",null,t?e.createElement(r.Button,{className:"bg-transparent"},e.createElement(e.Fragment,null,e.createElement("span",{className:"sr-only"},"Open user menu"),e.createElement(e.Fragment,null,e.createElement(v,{userName:t.name}),e.createElement("div",{className:`ml-2 text-sm  inline-flex items-center ${a?"text-white":"text-gray-800"}`},t.name," ",e.createElement(y,{className:"w-4 h-4 ml-1"})," ")))):e.createElement("div",{className:"hidden sm:flex sm:items-center sm:ml-6 space-x-2"},e.createElement(o,{bgColor:"",textColor:"text-gray-800",className:"border-gray-500 border",href:route("login"),active:route().current("login")},"Login"),e.createElement(o,{bgColor:"bg-gray-800",textColor:"text-white",href:route("register"),active:route().current("register")},"Create an Account"))),e.createElement(m,{as:c.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},e.createElement(r.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},t&&e.createElement("div",{className:"px-4 py-3"},e.createElement("p",{className:"text-sm"},"Signed in as"),e.createElement("p",{className:"truncate text-sm font-medium text-gray-900"},t.email)),e.createElement("div",{className:"py-1"},k.map((n,f)=>e.createElement(r.Item,{key:f},({active:p})=>e.createElement(s,{href:route(n.href),className:g(p?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm")},n.name)))),e.createElement("div",{className:"py-1"},e.createElement(r.Item,null,({active:n})=>e.createElement(s,{href:route("logout"),className:g(n?"bg-gray-100 text-gray-900":"text-gray-700","block w-full px-4 py-2 text-left text-sm")},"Log out"))))))}function F({type:t,text:a}){return e.createElement(e.Fragment,null,e.createElement("span",{className:"inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800"},a))}const d=[{name:"Features",href:"/#features"},{name:"Testimonials",href:"/#testimonials"},{name:"Find Influencers",href:route("explore")},{name:e.createElement(e.Fragment,null," Track Campaign",e.createElement(F,{text:"Coming soon"})," "),href:"/#"}];function C({href:t,children:a}){return e.createElement(l.Button,{as:s,href:t,className:"block w-full p-2"},a)}function L({open:t}){return e.createElement("svg",{"aria-hidden":"true",className:"h-3.5 w-3.5 overflow-visible stroke-slate-700",fill:"none",strokeWidth:2,strokeLinecap:"round"},e.createElement("path",{d:"M0 1H14M0 7H14M0 13H14",className:i("origin-center transition",t&&"scale-90 opacity-0")}),e.createElement("path",{d:"M2 2L12 12M12 2L2 12",className:i("origin-center transition",!t&&"scale-90 opacity-0")}))}function B(){return e.createElement(l,null,e.createElement(l.Button,{className:"relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none","aria-label":"Toggle Navigation"},({open:t})=>e.createElement(L,{open:t})),e.createElement(m.Root,null,e.createElement(m.Child,{as:c.exports.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"duration-150 ease-in",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement(l.Overlay,{className:"fixed inset-0 bg-slate-300/50"})),e.createElement(m.Child,{as:c.exports.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},e.createElement(l.Panel,{as:"div",className:"absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"},d.map((t,a)=>e.createElement(C,{key:a,href:t.href},t.name))))))}function M(){const{auth:{user:t}}=E().props;return e.createElement(e.Fragment,null,e.createElement(x,null,e.createElement("title",null,"Viralget - Data-driven end-to-end influencer marketing platform"),e.createElement("meta",{name:"description",content:"Viralget is a data-driven end-to-end influencer marketing platform, focused on getting actionable influencer marketing data insight, tracking and managing influencers."})),e.createElement("header",{className:"py-10"},e.createElement(N,null,e.createElement("nav",{className:"relative z-50 flex justify-between"},e.createElement("div",{className:"flex items-center md:gap-x-12"},e.createElement(s,{href:"/","aria-label":"Home"},e.createElement(b,{className:"h-10 w-auto"})),e.createElement("div",{className:"hidden font-bold items-center md:flex md:gap-x-3"},d.map((a,n)=>e.createElement(u,{key:n,href:a.href},a.name)))),e.createElement("div",{className:"flex items-center gap-x-5 md:gap-x-8"},t?e.createElement(w,{user:t}):e.createElement(e.Fragment,null,e.createElement("div",{className:"hidden md:block"},e.createElement(u,{href:"/login"},"Log in")),e.createElement(h,{href:"/register",color:"blue"},e.createElement("span",null,"Create an account"))),e.createElement("div",{className:"-mr-1 md:hidden"},e.createElement(B,null)))))))}function j({children:t}){return e.createElement(e.Fragment,null,e.createElement(M,null),e.createElement("div",{className:"mx-auto w-full"},t))}export{j as A};
