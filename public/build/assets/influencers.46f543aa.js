import{r as o,R as r}from"./app.f673fc86.js";import{E as s}from"./EmptyState.5127002f.js";import c from"./InfluencerCard.0d217351.js";import f from"./index.4c0d180f.js";import"./BoltIcon.92f3b502.js";import"./helpers.23eb6283.js";import"./moment.9709ab41.js";import"./Typography.f34751d5.js";import"./Profile.16f89240.js";import"./header.89ecaa1b.js";import"./MenuDropDown.58cf42a6.js";import"./transition.0019ceb8.js";import"./icons.25e2fbfa.js";import"./api.d4fc0112.js";import"./Toast.494d6890.js";import"./influencerSize.2234ceef.js";import"./audienceCard.5abb5c57.js";import"./index.bc5f9f95.js";import"./card.1b8314f6.js";import"./profiling.066be735.js";import"./footer.41ab0a64.js";const a=({data:t})=>{const[m,i]=o.exports.useState(!1),[n,l]=o.exports.useState([]);function p(e){e&&(i(!0),l(e))}return r.createElement("div",{className:"mt-4"},m?r.createElement(f,{influencer:n}):null,(t==null?void 0:t.length)>0?r.createElement("div",{role:"list",className:"mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 "},t.map(e=>r.createElement(c,{influencer:e,handleProfile:()=>p(e)}))):r.createElement(s,null))},A=a;export{A as default};