import{r as o,R as e}from"./app.996d016e.js";import{T as c}from"./Typography.9f2f7a5e.js";import{E as a}from"./EmptyState.cc2e9483.js";import u from"./InfluencerCard.3d8a4726.js";import f from"./index.46304d9c.js";import"./BoltIcon.613f5973.js";import"./helpers.48db9924.js";import"./moment.9709ab41.js";import"./Profile.9395e9d9.js";import"./header.b6b5f690.js";import"./MenuDropDown.076f90a5.js";import"./transition.a592a82d.js";import"./icons.252ca32f.js";import"./api.25e07a73.js";import"./Toast.475862ec.js";import"./influencerSize.4803b5b7.js";import"./audienceCard.125ac877.js";import"./card.b6564de7.js";import"./tweetList.1e68ec61.js";import"./tweetCard.e1803fe2.js";import"./profiling.d2d5fce9.js";import"./footer.037d0099.js";function z({data:t}){const[m,n]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(n(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},m?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{z as default};