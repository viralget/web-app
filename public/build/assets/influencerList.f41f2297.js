import{R as e}from"./app.86d821d2.js";import{E as n}from"./EmptyState.2ef3066d.js";import a from"./InfluencerCard.bbe78adb.js";import{T as i}from"./TitleText.559f63cc.js";import"./helpers.e82f777a.js";import"./moment.9709ab41.js";function u({list:l}){const t=l.map(r=>r.influencer);return e.createElement("div",{className:"px-10 py-2"},e.createElement("div",{className:"flex  justify-between  w-full"},e.createElement(i,{text:"Last profiled influencers"}),e.createElement("div",null,e.createElement("a",{href:"#",className:"text-xs font-bold  border   px-4  py-2 border-viralget-red text-viralget-red"},"View More"))),e.createElement("div",null,(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 "},t.slice(0,4).map(r=>e.createElement(a,{influencer:r}))):e.createElement(n,null)))}export{u as default};
