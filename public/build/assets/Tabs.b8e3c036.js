import{r as a,R as e}from"./app.b8dc28e7.js";import{E as l}from"./EmptyState.f456df0e.js";import{c as s}from"./helpers.1ee73257.js";import u from"./Audience.26400e15.js";import v from"./Content.b0881c42.js";import d from"./Influencer.0aa651b3.js";import f from"./Overview.696ed44a.js";import E from"./Value.2a8d5b29.js";import"./BoltIcon.2047f22e.js";import"./moment.9709ab41.js";import"./Card.e5ba5254.js";import"./icons.c2716e1a.js";import"./index.432d6924.js";import"./SectionTitle.f1191aa8.js";import"./tweetCard.438353d0.js";import"./card.8ba75417.js";import"./BrandSafetyLevel.f792654d.js";import"./audienceCardRow.308c6cc2.js";import"./QAS.b1c98829.js";import"./influencerSize.148a5000.js";const _=({influencer:o})=>{const n=[{name:"Overview",value:"overview",component:e.createElement(f,{influencer:o})},{name:"Influencer",value:"influencer",component:e.createElement(d,{influencer:o})},{name:"Audience",value:"audience",component:e.createElement(u,{influencer:o})},{name:"Content",value:"content",component:e.createElement(v,{influencer:o})},{name:"Value",value:"value",component:e.createElement(E,{title:"Feature coming soon",influencer:o})},{name:"Brand",value:"brand",component:e.createElement(l,{title:"Feature coming soon"})},{name:"Lookalike influencer",value:"lookalike_influencer",component:e.createElement(l,{title:"Feature coming soon"})}],[t,c]=a.exports.useState(n[0]);a.exports.useEffect(()=>{console.log({activeTab:t})},[t]);const i=(r,m)=>{r.preventDefault(),c(n[m])};return e.createElement("div",null,e.createElement("ul",{className:"flex  text-sm font-medium overflow-y-scroll  w-full text-center  border-b border-gray-200 "},n.map((r,m)=>e.createElement("li",{class:"mr-2"},e.createElement("a",{href:"#",onClick:p=>i(p,m),className:s("inline-block p-4 rounded-t-lg text-t-xsx font-lexend font-medium  hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300   ",r.name===t.name?"border-b-2 border-viralget-red text-[#3E4555":"text-[#748094] ")},r.name)))),e.createElement("div",{className:"my-5"},t==null?void 0:t.component))};export{_ as default};
