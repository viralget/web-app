import{r as o,R as e}from"./app.aa8cffa1.js";import{T as c}from"./Typography.02eb5781.js";import{E as a}from"./EmptyState.78655010.js";import u from"./InfluencerCard.40138e60.js";import f from"./index.5052b1b5.js";import"./BoltIcon.6c60d611.js";import"./helpers.9020a9ed.js";import"./moment.9709ab41.js";import"./Profile.fc77022e.js";import"./header.36a65751.js";import"./MenuDropDown.19f7de3f.js";import"./transition.3e108733.js";import"./icons.2b1ab55c.js";import"./api.48573476.js";import"./Toast.410d3d93.js";import"./influencerSize.40f83252.js";import"./audienceCard.111c1dc7.js";import"./index.5259200d.js";import"./QAS.8f4c9ea8.js";import"./card.eb37f6c3.js";import"./profiling.3de4a1a4.js";import"./footer.27ff281f.js";function z({data:t}){const[m,n]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(n(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},m?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{z as default};
