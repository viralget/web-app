import{r as a,R as e}from"./app.cc07e7b9.js";import{E as l}from"./EmptyState.6572b23c.js";import{c as s}from"./helpers.2e537a8b.js";import u from"./Audience.da396450.js";import v from"./Content.8545f6c5.js";import d from"./Influencer.d8c157df.js";import f from"./Overview.3bf14407.js";import E from"./Value.0f9bc10c.js";import"./BoltIcon.7490229c.js";import"./moment.9709ab41.js";import"./Card.e8b20a92.js";import"./index.a41bcc47.js";import"./index.e8fcc329.js";import"./SectionTitle.30b4ed46.js";import"./tweetCard.76d88139.js";import"./card.520b66d8.js";import"./BrandSafetyLevel.b99e153a.js";import"./audienceCardRow.1576ccb5.js";import"./QAS.66a14d77.js";import"./influencerSize.640f15e0.js";const _=({influencer:o})=>{const n=[{name:"Overview",value:"overview",component:e.createElement(f,{influencer:o})},{name:"Influencer",value:"influencer",component:e.createElement(d,{influencer:o})},{name:"Audience",value:"audience",component:e.createElement(u,{influencer:o})},{name:"Content",value:"content",component:e.createElement(v,{influencer:o})},{name:"Value",value:"value",component:e.createElement(E,{title:"Feature coming soon",influencer:o})},{name:"Brand",value:"brand",component:e.createElement(l,{title:"Feature coming soon"})},{name:"Lookalike influencer",value:"lookalike_influencer",component:e.createElement(l,{title:"Feature coming soon"})}],[t,c]=a.exports.useState(n[0]);a.exports.useEffect(()=>{console.log({activeTab:t})},[t]);const i=(r,m)=>{r.preventDefault(),c(n[m])};return e.createElement("div",null,e.createElement("ul",{className:"flex  text-sm font-medium overflow-y-scroll  w-full text-center  border-b border-gray-200 "},n.map((r,m)=>e.createElement("li",{class:"mr-2"},e.createElement("a",{href:"#",onClick:p=>i(p,m),className:s("inline-block p-4 rounded-t-lg text-t-xsx font-lexend font-medium  hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300   ",r.name===t.name?"border-b-2 border-viralget-red text-[#3E4555":"text-[#748094] ")},r.name)))),e.createElement("div",{className:"my-5"},t==null?void 0:t.component))};export{_ as default};
