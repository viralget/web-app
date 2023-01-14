import{R as e,a as c,H as u,L as o,r}from"./app.22e06bd3.js";import{c as i}from"./Button.eaf39404.js";import{N as d,B as f,m as n}from"./NavLink.b0fbeca5.js";import{C as p,W as l}from"./Avatar.d6ab54cf.js";import{L as g}from"./Logo.be5f54d8.js";import{D as E}from"./DropdownMenu.c55ab1a3.js";function h({type:t,text:a}){return e.createElement(e.Fragment,null,e.createElement("span",{className:"inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800"},a))}const m=[{name:"Features",href:"/#features"},{name:"Testimonials",href:"/#testimonials"},{name:"Find Influencers",href:route("join")},{name:e.createElement(e.Fragment,null," Track Campaign",e.createElement(h,{text:"Coming soon"})," "),href:"/#"}];function v({href:t,children:a}){return e.createElement(n.Button,{as:o,href:t,className:"block w-full p-2"},a)}function x({open:t}){return e.createElement("svg",{"aria-hidden":"true",className:"h-3.5 w-3.5 overflow-visible stroke-slate-700",fill:"none",strokeWidth:2,strokeLinecap:"round"},e.createElement("path",{d:"M0 1H14M0 7H14M0 13H14",className:i("origin-center transition",t&&"scale-90 opacity-0")}),e.createElement("path",{d:"M2 2L12 12M12 2L2 12",className:i("origin-center transition",!t&&"scale-90 opacity-0")}))}function N(){return e.createElement(n,null,e.createElement(n.Button,{className:"relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none","aria-label":"Toggle Navigation"},({open:t})=>e.createElement(x,{open:t})),e.createElement(l.Root,null,e.createElement(l.Child,{as:r.exports.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"duration-150 ease-in",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement(n.Overlay,{className:"fixed inset-0 bg-slate-300/50"})),e.createElement(l.Child,{as:r.exports.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},e.createElement(n.Panel,{as:"div",className:"absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"},m.map((t,a)=>e.createElement(v,{key:a,href:t.href},t.name))))))}function M(){const{auth:{user:t}}=c().props;return e.createElement(e.Fragment,null,e.createElement(u,null,e.createElement("title",null,"Viralget - Data-driven end-to-end influencer marketing platform"),e.createElement("meta",{name:"description",content:"Viralget is a data-driven end-to-end influencer marketing platform, focused on getting actionable influencer marketing data insight, tracking and managing influencers."})),e.createElement("header",{className:"py-10"},e.createElement(p,null,e.createElement("nav",{className:"relative z-50 flex justify-between"},e.createElement("div",{className:"flex items-center md:gap-x-12"},e.createElement(o,{href:"/","aria-label":"Home"},e.createElement(g,{className:"h-10 w-auto"})),e.createElement("div",{className:"hidden font-bold items-center md:flex md:gap-x-3"},m.map((a,s)=>e.createElement(d,{key:s,href:a.href},a.name)))),e.createElement("div",{className:"flex items-center gap-x-5 md:gap-x-8"},t?e.createElement(E,{user:t}):e.createElement(e.Fragment,null,e.createElement(f,{href:"/join",color:"blue"},e.createElement("span",null,"Join the waitlist"))),e.createElement("div",{className:"-mr-1 md:hidden"},e.createElement(N,null)))))))}export{M as H};
