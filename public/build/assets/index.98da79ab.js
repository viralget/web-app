import{r as o,R as e}from"./app.ab529ffa.js";import{T as c}from"./Typography.c33eea1f.js";import{E as a}from"./EmptyState.270e3850.js";import u from"./InfluencerCard.d8d565ea.js";import f from"./index.c612b3d2.js";import"./BoltIcon.86558697.js";import"./helpers.22edbd67.js";import"./moment.9709ab41.js";import"./Profile.6214c178.js";import"./header.9958723e.js";import"./MenuDropDown.caaa2a47.js";import"./transition.420e093e.js";import"./icons.ff85f760.js";import"./api.4440e724.js";import"./Toast.2986d594.js";import"./influencerSize.9fb2cfc2.js";import"./audienceCard.30ebb043.js";import"./index.0319f301.js";import"./card.d6c9335e.js";import"./profiling.29af2e3f.js";import"./footer.30b04c98.js";function q({data:t}){const[n,m]=o.exports.useState(!1),[i,p]=o.exports.useState([]);function l(r){r&&(m(!0),p(r))}return e.createElement("div",{className:"mt-space-60"},n?e.createElement(f,{influencer:i}):null,e.createElement(c,{variant:"h2",content:"Top Influencers"}),(t==null?void 0:t.length)>0?e.createElement("div",{role:"list",className:"mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 "},t.map((r,s)=>e.createElement(u,{useShadow:!0,useLink:!0,influencer:r,key:s,showBanner:!0,handleProfile:()=>l(r)}))):e.createElement(a,null))}export{q as default};
