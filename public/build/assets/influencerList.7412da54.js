import{R as e,L as m}from"./app.b8dc28e7.js";import{E as i}from"./EmptyState.386c59ff.js";import o from"./InfluencerCard.801479cb.js";import{T as c}from"./Typography.133e823c.js";import"./BoltIcon.2047f22e.js";import"./helpers.1ee73257.js";import"./moment.9709ab41.js";function x({list:t,isFull:l=!1,showMore:a}){let r=t==null?void 0:t.map(n=>n.influencer);return r=l?r:r.slice(0,3),e.createElement(e.Fragment,null,e.createElement("div",{className:"flex  justify-between mt-16  w-full"},e.createElement(c,{variant:"h2",content:"Last profiled influencers"}),a&&!l&&e.createElement("div",null,e.createElement(m,{href:route("profiling.list"),className:"text-xs font-bold  border   px-4  py-2 border-viralget-red text-viralget-red"},"View More"))),e.createElement("div",null,(r==null?void 0:r.length)>0?e.createElement("div",{role:"list",className:"mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},r.map(n=>e.createElement(o,{useLink:!0,influencer:n}))):e.createElement(i,null)))}export{x as default};