import{r as o,R as e}from"./app.ea16e437.js";import{T as c}from"./Typography.c415d5e1.js";import{E as a}from"./EmptyState.455d5799.js";import u from"./InfluencerCard.ff3ea364.js";import f from"./index.e77bec82.js";import"./BoltIcon.8d63c572.js";import"./helpers.234c81d2.js";import"./moment.9709ab41.js";import"./Profile.d59ef45c.js";import"./header.cdc02f12.js";import"./MenuDropDown.637151b7.js";import"./transition.2d5de3f1.js";import"./icons.83608ea0.js";import"./api.acd2980e.js";import"./Toast.1b90b548.js";import"./influencerSize.9aefea92.js";import"./audienceCard.4b56c565.js";import"./index.62402f6e.js";import"./QAS.eaf59ec6.js";import"./card.8ece3ee3.js";import"./profiling.37fea494.js";import"./footer.45aefe3f.js";function z({data:t}){const[m,n]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(n(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},m?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{z as default};
