import{r as o,R as e}from"./app.a918c474.js";import{T as c}from"./Typography.80aeed49.js";import{E as a}from"./EmptyState.c0e76491.js";import u from"./InfluencerCard.e086e57e.js";import f from"./index.8031f757.js";import"./BoltIcon.e04579d3.js";import"./helpers.32eb6c7d.js";import"./moment.9709ab41.js";import"./Combination.889f982a.js";import"./Profile.30d6a3db.js";import"./header.6eab4b86.js";import"./MenuDropDown.88ea9a3a.js";import"./transition.45301794.js";import"./icons.7b319742.js";import"./api.82ca1ffc.js";import"./Toast.bf87ecc4.js";import"./influencerSize.a2264b30.js";import"./audienceCard.4ec60edc.js";import"./index.69bf941a.js";import"./QAS.75bc34e1.js";import"./card.9d7e96ec.js";import"./profiling.3b3d3b27.js";import"./footer.e5f913f6.js";function A({data:t}){const[m,n]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(n(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},m?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{A as default};
