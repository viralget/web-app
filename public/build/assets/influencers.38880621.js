import{r as o,R as r}from"./app.8b78a5c0.js";import{E as s}from"./EmptyState.787d9b4b.js";import c from"./InfluencerCard.ad4cd744.js";import f from"./index.a6fc3c3b.js";import"./BoltIcon.ec4040f8.js";import"./helpers.db1be364.js";import"./moment.9709ab41.js";import"./Typography.22640a6e.js";import"./Profile.121234f8.js";import"./header.b9956c4c.js";import"./MenuDropDown.0b065dfb.js";import"./transition.1883d475.js";import"./icons.fd20f7c7.js";import"./api.d0dc956d.js";import"./Toast.a48f7553.js";import"./influencerSize.b30e7fb4.js";import"./audienceCard.c7f80cf1.js";import"./card.201e7102.js";import"./tweetList.c04cc181.js";import"./tweetCard.580844e6.js";import"./profiling.e7e0a7bc.js";import"./footer.f23ae852.js";const a=({data:t})=>{const[m,i]=o.exports.useState(!1),[n,l]=o.exports.useState([]);function p(e){e&&(i(!0),l(e))}return r.createElement("div",{className:"mt-4"},m?r.createElement(f,{influencer:n}):null,(t==null?void 0:t.length)>0?r.createElement("div",{role:"list",className:"mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 "},t.map(e=>r.createElement(c,{influencer:e,handleProfile:()=>p(e)}))):r.createElement(s,null))},B=a;export{B as default};
