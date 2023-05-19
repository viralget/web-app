import{r as o,u as c,R as e}from"./app.3f7f0ea0.js";import"./Toast.5f12d99d.js";import{A as d}from"./AuthenticatedLayout.2628ac29.js";import{n as a}from"./helpers.a4e89aae.js";import{T as i}from"./TitleText.86aa007c.js";import p from"./InfluencerCard.b9927c9b.js";import{C as g}from"./Cards.c393e0aa.js";import r from"./Stats.5ac1d4aa.js";import"./Logo.1123ff57.js";import"./DropdownMenu.60ef732e.js";import"./Avatar.c072116e.js";import"./Button.e50b03bf.js";import"./transition.8a9c2d4e.js";import"./ChevronDownIcon.4683fc46.js";import"./icons.22485185.js";import"./MagnifyingGlassIcon.e51e5f81.js";import"./use-event-listener.5b738577.js";import"./XMarkIcon.549d5304.js";import"./Bars3CenterLeftIcon.fa37e8fd.js";import"./moment.9709ab41.js";import"./Typography.63e448b9.js";function L({influencers:l,campaigns:m,campaign:s,stats:t}){return o.exports.useState(!1),c({title:"",goal:""}),e.createElement(d,{title:"Campaign",showHeader:!1},e.createElement("div",{className:"relative p-5"},e.createElement("div",{class:"flex"},e.createElement("h1",{class:"flex-1 text-2xl font-bold text-gray-900"},"Campaign Details: ",s.title),e.createElement("div",{class:"ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden"},e.createElement("button",{type:"button",class:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},e.createElement("svg",{class:"h-5 w-5","x-description":"Heroicon name: mini/bars-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{"fill-rule":"evenodd",d:"M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})),e.createElement("span",{class:"sr-only"},"Use list view")),e.createElement("button",{type:"button",class:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},e.createElement("svg",{class:"h-5 w-5","x-description":"Heroicon name: mini/squares-2x2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{"fill-rule":"evenodd",d:"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z","clip-rule":"evenodd"})),e.createElement("span",{class:"sr-only"},"Use grid view")))),e.createElement("div",{className:"mt-10 grid grid-cols-3 gap-3"},e.createElement("div",{className:"border border-gray-300 p-5"},e.createElement(i,{text:"Influencers"}),e.createElement("div",{className:"text-center"},e.createElement("div",{className:"radial-progress text-orange-500",style:{"--value":"70","--size":"12rem","--thickness":"1rem"}},"70%"))),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.qas),title:"Quality Audience Total"}),e.createElement(r,{stat:a(t.reach),title:"Reach Total"})),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.engagement),title:"Quality Engagement Total"}),e.createElement(r,{stat:a(t.reachability),title:"Authentic Reachablility"})),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.impressions),title:"Impressions Total"}),e.createElement(r,{stat:a(t.engagement_rate),title:"Engagement Rate"}))),e.createElement("div",{className:"mt-10"},e.createElement(i,{text:"Profiled Influencers"}),e.createElement("ul",{role:"list",className:"mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},(l==null?void 0:l.length)>0&&l.map(n=>e.createElement(p,{influencer:n})))),e.createElement("div",{className:"mt-10"},e.createElement(i,{text:"My Lists"}),e.createElement(g,{campaigns:m}))))}export{L as default};
