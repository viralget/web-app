import{R as e,f as n}from"./app.a466af73.js";import{C as a}from"./Card.fba60cf4.js";import{a as p}from"./helpers.d3ba62f0.js";import"./index.b9e2ff58.js";import u from"./card.04fa1d63.js";import{S as r}from"./SectionTitle.d7a76a20.js";import{E as l}from"./EmptyState.a5e6ec13.js";import"./moment.9709ab41.js";import"./index.e8fcc329.js";import"./BoltIcon.f375ee46.js";function j({influencer:s}){var i,d;const{engagement_rate:g,global_rank:v,country_rank:f,category_rank:_,avg_cpe:w,avg_cpm:N,reachability:c,avg_impressions:x,reach:A,impressions:S,average_views_per_post:h,average_comments_per_post:C,engagements:B,total_replies:y,audience_authenticity:o}=s==null?void 0:s.metrics,{quality_audience:m}=s,E=[{title:"Quality Audience ",icon:e.createElement(n,null),score:m!=null?m:"-"},{title:"Audience Reachability",icon:e.createElement(n,null),score:(i=c==null?void 0:c.score)!=null?i:"-"},{title:"Audience Authenticity",icon:e.createElement(n,null),score:(d=o==null?void 0:o.score)!=null?d:"-"}];return e.createElement("div",{className:"space-y-5"},e.createElement("div",{className:"grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4 mt-5 gap-3 md:pr-5 md:pl-0   "},E.map(t=>e.createElement(u,{item:{title:t.title,icon:e.createElement(n,null),score:t!=null&&t.score?p(t==null?void 0:t.score):"-",increase:t==null?void 0:t.increase,label:t==null?void 0:t.label}}))),e.createElement("div",{className:"flex space-x-3"},e.createElement("div",{className:"w-1/3"},e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience Type"}),e.createElement(l,{title:"Coming soon"}))),e.createElement("div",{className:"flex-1"},e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience Location"}),e.createElement(l,{title:"Coming soon"})))),e.createElement("div",{className:"flex space-x-3"},e.createElement("div",{className:"flex-1"},e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience age and gender"}),e.createElement(l,{title:"Coming soon"}))),e.createElement("div",{className:"w-1/3"},e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Relationship status"}),e.createElement(l,{title:"Coming soon"})))),e.createElement("div",{className:"flex space-x-3"},e.createElement("div",{className:""},e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience education level"}),e.createElement(l,{title:"Coming soon"}))),e.createElement("div",{className:"w-1/3"},e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience spend power"}),e.createElement(l,{title:"Coming soon"})))))}export{j as default};