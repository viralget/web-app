import{r as o,R as e}from"./app.79940f90.js";import{T as c}from"./Typography.826755a6.js";import{E as a}from"./EmptyState.32d957fb.js";import u from"./InfluencerCard.2ff7cdcb.js";import f from"./index.098c56ce.js";import"./BoltIcon.b995ec4b.js";import"./helpers.ea5f5bb1.js";import"./moment.9709ab41.js";import"./Profile.0b046ede.js";import"./header.164730cf.js";import"./MenuDropDown.e8da5224.js";import"./transition.a21306aa.js";import"./icons.aabcb22c.js";import"./api.50a43643.js";import"./Toast.a926ea5a.js";import"./influencerSize.9674014b.js";import"./audienceCard.e0c235fc.js";import"./card.3a2e69f5.js";import"./tweetList.d23b63bc.js";import"./tweetCard.d5bdb7ab.js";import"./profiling.15d65cbd.js";import"./footer.c62fd1f2.js";function z({data:t}){const[m,n]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(n(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},m?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{z as default};
