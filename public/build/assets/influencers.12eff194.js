import{r as o,R as r}from"./app.555deeaa.js";import{E as s}from"./EmptyState.e5dffa05.js";import c from"./InfluencerCard.e04d704b.js";import f from"./index.7c775ee7.js";import"./BoltIcon.ce12ffa3.js";import"./helpers.c297aee6.js";import"./moment.9709ab41.js";import"./Typography.c544590f.js";import"./Profile.bb574a69.js";import"./header.a5917c93.js";import"./MenuDropDown.3ce8cd96.js";import"./transition.b5afd01f.js";import"./icons.27a0792e.js";import"./api.c6911db0.js";import"./Toast.25d54279.js";import"./influencerSize.235e30cb.js";import"./audienceCard.94ca7ecf.js";import"./index.be169a89.js";import"./card.d16675d4.js";import"./profiling.6d9a3ff8.js";import"./footer.43586328.js";const a=({data:t})=>{const[m,i]=o.exports.useState(!1),[n,l]=o.exports.useState([]);function p(e){e&&(i(!0),l(e))}return r.createElement("div",{className:"mt-4"},m?r.createElement(f,{influencer:n}):null,(t==null?void 0:t.length)>0?r.createElement("div",{role:"list",className:"mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 "},t.map(e=>r.createElement(c,{influencer:e,handleProfile:()=>p(e)}))):r.createElement(s,null))},A=a;export{A as default};