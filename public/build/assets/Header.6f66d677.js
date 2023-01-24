import{R as e,a as d,H as u,L as m,r as l}from"./app.cdc3a11f.js";import{c as i}from"./helpers.52d17e80.js";import{N as o,B as f,m as n}from"./NavLink.d1e66ba0.js";import{C as g,W as r}from"./Avatar.990fa7d7.js";import{L as p}from"./Logo.078db715.js";import{D as E}from"./DropdownMenu.b08ccec2.js";import{B as h}from"./Badge.43d56b9a.js";const s=[{name:"Features",href:"/#features"},{name:"Testimonials",href:"/#testimonials"},{name:"Find Influencers",href:route("explore")},{name:e.createElement(e.Fragment,null," Track Campaign",e.createElement(h,{text:"Coming soon"})," "),href:"/#"}];function v({href:t,children:a}){return e.createElement(n.Button,{as:m,href:t,className:"block w-full p-2"},a)}function x({open:t}){return e.createElement("svg",{"aria-hidden":"true",className:"h-3.5 w-3.5 overflow-visible stroke-slate-700",fill:"none",strokeWidth:2,strokeLinecap:"round"},e.createElement("path",{d:"M0 1H14M0 7H14M0 13H14",className:i("origin-center transition",t&&"scale-90 opacity-0")}),e.createElement("path",{d:"M2 2L12 12M12 2L2 12",className:i("origin-center transition",!t&&"scale-90 opacity-0")}))}function N(){return e.createElement(n,null,e.createElement(n.Button,{className:"relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none","aria-label":"Toggle Navigation"},({open:t})=>e.createElement(x,{open:t})),e.createElement(r.Root,null,e.createElement(r.Child,{as:l.exports.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"duration-150 ease-in",leaveFrom:"opacity-100",leaveTo:"opacity-0"},e.createElement(n.Overlay,{className:"fixed inset-0 bg-slate-300/50"})),e.createElement(r.Child,{as:l.exports.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},e.createElement(n.Panel,{as:"div",className:"absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"},s.map((t,a)=>e.createElement(v,{key:a,href:t.href},t.name))))))}function H(){const{auth:{user:t}}=d().props;return e.createElement(e.Fragment,null,e.createElement(u,null,e.createElement("title",null,"Viralget - Data-driven end-to-end influencer marketing platform"),e.createElement("meta",{name:"description",content:"Viralget is a data-driven end-to-end influencer marketing platform, focused on getting actionable influencer marketing data insight, tracking and managing influencers."})),e.createElement("header",{className:"py-10"},e.createElement(g,null,e.createElement("nav",{className:"relative z-50 flex justify-between"},e.createElement("div",{className:"flex items-center md:gap-x-12"},e.createElement(m,{href:"/","aria-label":"Home"},e.createElement(p,{className:"h-10 w-auto"})),e.createElement("div",{className:"hidden font-bold items-center md:flex md:gap-x-3"},s.map((a,c)=>e.createElement(o,{key:c,href:a.href},a.name)))),e.createElement("div",{className:"flex items-center gap-x-5 md:gap-x-8"},t?e.createElement(E,{user:t}):e.createElement(e.Fragment,null,e.createElement("div",{className:"hidden md:block"},e.createElement(o,{href:"/login"},"Log in")),e.createElement(f,{href:"/register",color:"blue"},e.createElement("span",null,"Create an account"))),e.createElement("div",{className:"-mr-1 md:hidden"},e.createElement(N,null)))))))}export{H};