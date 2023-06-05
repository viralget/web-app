import{R as e}from"./app.f673fc86.js";import{h as R}from"./header.89ecaa1b.js";import h from"./influencerSize.2234ceef.js";import A from"./audienceCard.5abb5c57.js";import M from"./card.1b8314f6.js";import z from"./profiling.066be735.js";import B from"./footer.41ab0a64.js";import{c as F,S as G,k as I,l as C,m as L,n as P}from"./icons.25e2fbfa.js";import"./MenuDropDown.58cf42a6.js";import"./transition.0019ceb8.js";import"./api.d4fc0112.js";import"./Toast.494d6890.js";import"./helpers.23eb6283.js";import"./moment.9709ab41.js";import"./index.bc5f9f95.js";function Z({influencer:t}){var i,p,E,d,b,S,v;const m=(i=t==null?void 0:t.metrics)==null?void 0:i.engagement_rate,s=(p=t==null?void 0:t.metrics)==null?void 0:p.avg_comments,a=(E=t==null?void 0:t.metrics)==null?void 0:E.avg_retweet,l=(d=t==null?void 0:t.metrics)==null?void 0:d.interactions,o=(b=t==null?void 0:t.metrics)==null?void 0:b.global_rank,r=(S=t==null?void 0:t.metrics)==null?void 0:S.country_rank,c=(v=t==null?void 0:t.metrics)==null?void 0:v.category_rank,x=[{title:"Engagement rate",icon:e.createElement(F,null),score:(m==null?void 0:m.score)+"%",increase:m==null?void 0:m.increase,label:m==null?void 0:m.label},{title:"Avg. comments",icon:e.createElement(G,null),score:s==null?void 0:s.score,increase:s==null?void 0:s.increase,label:s==null?void 0:s.label},{title:"Avg. retweet",icon:e.createElement(I,null),score:a==null?void 0:a.score,increase:a==null?void 0:a.increase,label:a==null?void 0:a.label},{title:"Interactions",icon:e.createElement(C,null),score:"#"+(l==null?void 0:l.score),increase:null,label:l==null?void 0:l.label},{title:"Global rank",icon:e.createElement(C,null),score:"#"+(o==null?void 0:o.score),increase:null,label:o==null?void 0:o.label},{title:"Country rank",icon:e.createElement(L,null),score:"#"+(r==null?void 0:r.score),increase:null,label:r==null?void 0:r.label},{title:"Category rank",icon:e.createElement(P,null),score:"#"+(c==null?void 0:c.score),increase:null,label:c==null?void 0:c.label}];return e.createElement("div",{className:"w-full flex flex-col  mb-20"},e.createElement("div",{className:"relative md:mb-[5rem]  mb-[10rem]"},e.createElement(R,{isMini:!0,influencer:t})),e.createElement("div",{className:"px-5"},e.createElement(h,{influencer:t,isMini:!0})),e.createElement("div",{className:"px-5 "},e.createElement(A,{influencer:t})),e.createElement("div",{className:"p-5"},e.createElement("div",{className:"grid grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-3"},x.map(N=>e.createElement(M,{item:N})))),e.createElement(z,null),e.createElement(B,{influencer:t}))}export{Z as default};