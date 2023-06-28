import{r as s,u as c,R as e}from"./app.71a75db1.js";import"./Toast.36f41967.js";import{A as d}from"./AuthenticatedLayout.fb1b2d88.js";import{n as a}from"./helpers.91236dcf.js";import{T as i}from"./TitleText.8d96e6de.js";import p from"./InfluencerCard.ac5ea198.js";import{C as g}from"./Cards.1b4d7197.js";import r from"./Stats.bb54c8dd.js";import"./Logo.854edb19.js";import"./DropdownMenu.0afbd710.js";import"./Avatar.036a65c5.js";import"./Button.e3d75a02.js";import"./transition.a64233e9.js";import"./ChevronDownIcon.7bd09380.js";import"./icons.65f2ebe7.js";import"./dialog.8eb1eeb8.js";import"./use-event-listener.4b827b00.js";import"./XMarkIcon.864ca17c.js";import"./Bars3CenterLeftIcon.8dcd4188.js";import"./moment.9709ab41.js";import"./Typography.ac154419.js";function L({influencers:l,campaigns:m,campaign:n,stats:t}){return s.exports.useState(!1),c({title:"",goal:""}),e.createElement(d,{title:"Campaign",showHeader:!1},e.createElement("div",{className:"relative p-5"},e.createElement("div",{class:"flex"},e.createElement("h1",{class:"flex-1 text-2xl font-bold text-gray-900"},"Campaign Details: ",n.title),e.createElement("div",{class:"ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden"},e.createElement("button",{type:"button",class:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},e.createElement("svg",{class:"h-5 w-5","x-description":"Heroicon name: mini/bars-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{"fill-rule":"evenodd",d:"M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})),e.createElement("span",{class:"sr-only"},"Use list view")),e.createElement("button",{type:"button",class:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},e.createElement("svg",{class:"h-5 w-5","x-description":"Heroicon name: mini/squares-2x2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{"fill-rule":"evenodd",d:"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z","clip-rule":"evenodd"})),e.createElement("span",{class:"sr-only"},"Use grid view")))),e.createElement("div",{className:"mt-10 grid grid-cols-3 gap-3"},e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.qas),title:"Quality Audience Total"}),e.createElement(r,{stat:a(t.reach),title:"Reach Total"})),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.engagement),title:"Quality Engagement Total"}),e.createElement(r,{stat:a(t.reachability),title:"Authentic Reachablility"})),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.impressions),title:"Impressions Total"}),e.createElement(r,{stat:a(t.engagement_rate),title:"Engagement Rate"}))),e.createElement("div",{className:"mt-10"},e.createElement(i,{text:"Profiled Influencers"}),e.createElement("ul",{role:"list",className:"mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},(l==null?void 0:l.length)>0&&l.map(o=>e.createElement(p,{influencer:o})))),e.createElement("div",{className:"mt-10"},e.createElement(i,{text:"My Lists"}),e.createElement(g,{campaigns:m}))))}export{L as default};
