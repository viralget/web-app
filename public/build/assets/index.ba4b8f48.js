import{r as o,R as e}from"./app.1ddb5203.js";import{T as c}from"./Typography.09ad2255.js";import{E as a}from"./EmptyState.f25a5f4c.js";import u from"./InfluencerCard.6d386793.js";import f from"./index.8f815b45.js";import"./BoltIcon.b73f2557.js";import"./helpers.f008556a.js";import"./moment.9709ab41.js";import"./Combination.3f1fc379.js";import"./Profile.f1929b9b.js";import"./header.8134fd09.js";import"./MenuDropDown.9d235c0b.js";import"./transition.800aedd5.js";import"./icons.449c77bf.js";import"./api.f6c959ce.js";import"./Toast.f4d3e75e.js";import"./influencerSize.57721c4a.js";import"./audienceCard.1f5922ab.js";import"./index.ad8caf25.js";import"./QAS.1cd320c7.js";import"./card.ae610b21.js";import"./profiling.50052315.js";import"./footer.8166f0dd.js";function A({data:t}){const[m,n]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(n(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},m?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{A as default};
