import{r as o,R as e}from"./app.883b28e9.js";import{T as c}from"./Typography.b1e495c0.js";import{E as a}from"./EmptyState.2068a59d.js";import u from"./InfluencerCard.f29162a2.js";import f from"./index.c221df95.js";import"./BoltIcon.99009c3e.js";import"./helpers.8b976fa1.js";import"./moment.9709ab41.js";import"./Profile.3f3e1260.js";import"./header.58cccee5.js";import"./MenuDropDown.5a6a5082.js";import"./transition.5d961188.js";import"./icons.3f1cebcd.js";import"./api.335b882e.js";import"./Toast.6bfd23ba.js";import"./influencerSize.69050ddf.js";import"./audienceCard.0cd025aa.js";import"./card.08eed747.js";import"./tweetList.29267fe4.js";import"./tweetCard.74e707c7.js";import"./profiling.d983c2f2.js";import"./footer.ee139708.js";function z({data:t}){const[m,n]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(n(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},m?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{z as default};
