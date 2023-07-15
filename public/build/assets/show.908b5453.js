import{r as o,u as c,R as e}from"./app.10e8d628.js";import"./Toast.c96645b1.js";import{A as d}from"./AuthenticatedLayout.2448e9d9.js";import{n as a}from"./helpers.05ac4563.js";import{T as i}from"./TitleText.f07c8a09.js";import p from"./InfluencerCard.003795d3.js";import{C as g}from"./Cards.f4c1a5ac.js";import r from"./Stats.ef563998.js";import"./Logo.3fffa135.js";import"./DropdownMenu.468ba300.js";import"./Avatar.b1f3d288.js";import"./Button.12ec73ad.js";import"./transition.9d8577f8.js";import"./keyboard.79068ade.js";import"./ChevronDownIcon.f97afd78.js";import"./icons.68dbae32.js";import"./dialog.29cdbad8.js";import"./description.811c7987.js";import"./XMarkIcon.9cb4bc15.js";import"./Bars3CenterLeftIcon.870894fa.js";import"./moment.9709ab41.js";import"./Typography.351274f6.js";function Q({influencers:l,campaigns:m,campaign:s,stats:t}){return o.exports.useState(!1),c({title:"",goal:""}),e.createElement(d,{title:"Campaign",showHeader:!1},e.createElement("div",{className:"relative p-5"},e.createElement("div",{class:"flex"},e.createElement("h1",{class:"flex-1 text-2xl font-bold text-gray-900"},"Campaign Details: ",s.title),e.createElement("div",{class:"ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden"},e.createElement("button",{type:"button",class:"rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},e.createElement("svg",{class:"h-5 w-5","x-description":"Heroicon name: mini/bars-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{"fill-rule":"evenodd",d:"M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z","clip-rule":"evenodd"})),e.createElement("span",{class:"sr-only"},"Use list view")),e.createElement("button",{type:"button",class:"ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},e.createElement("svg",{class:"h-5 w-5","x-description":"Heroicon name: mini/squares-2x2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},e.createElement("path",{"fill-rule":"evenodd",d:"M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z","clip-rule":"evenodd"})),e.createElement("span",{class:"sr-only"},"Use grid view")))),e.createElement("div",{className:"mt-10 grid grid-cols-3 gap-3"},e.createElement("div",{className:"border border-gray-300 p-5"},e.createElement(i,{text:"Influencers"}),e.createElement("div",{className:"text-center"},e.createElement("div",{className:"radial-progress text-orange-500",style:{"--value":"70","--size":"12rem","--thickness":"1rem"}},"70%"))),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.qas),title:"Quality Audience Total"}),e.createElement(r,{stat:a(t.reach),title:"Reach Total"})),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.engagement),title:"Quality Engagement Total"}),e.createElement(r,{stat:a(t.reachability),title:"Authentic Reachablility"})),e.createElement("div",{className:"space-y-3"},e.createElement(r,{stat:a(t.impressions),title:"Impressions Total"}),e.createElement(r,{stat:a(t.engagement_rate),title:"Engagement Rate"}))),e.createElement("div",{className:"mt-10"},e.createElement(i,{text:"Profiled Influencers"}),e.createElement("ul",{role:"list",className:"mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},(l==null?void 0:l.length)>0&&l.map(n=>e.createElement(p,{influencer:n})))),e.createElement("div",{className:"mt-10"},e.createElement(i,{text:"My Lists"}),e.createElement(g,{campaigns:m}))))}export{Q as default};
