import{R as o,f as I,a7 as F,a8 as P,a9 as L,aa as j,g as q}from"./app.a466af73.js";import{h as G}from"./header.0b52085c.js";import H from"./influencerSize.be2aa4d3.js";import J from"./audienceCard.dbd3dbaf.js";import K from"./card.04fa1d63.js";import O from"./profiling.6ac010ac.js";import Q from"./footer.cf5e6db5.js";import{a as T}from"./helpers.d3ba62f0.js";import"./MenuDropDown.88162ac4.js";import"./transition.fb7b2a55.js";import"./keyboard.7337a3d2.js";import"./api.c27b3b5d.js";import"./Toast.76c83788.js";import"./Avatar.4db74bc0.js";import"./female.264b94a6.js";import"./index.b9e2ff58.js";import"./index.e8fcc329.js";import"./QAS.4a51c17e.js";import"./moment.9709ab41.js";function pt({influencer:t}){var e,A,S,x,N,R,h,i,d,y,C,M,k,B;const{media_value_per_post:b}=t==null?void 0:t.metrics;console.log({media_value_per_post:b});const r="no data",m=(e=t==null?void 0:t.metrics)==null?void 0:e.engagement_rate,c=(A=t==null?void 0:t.metrics)==null?void 0:A.average_comments_per_post,a=(S=t==null?void 0:t.metrics)==null?void 0:S.avg_retweet,E=(x=t==null?void 0:t.metrics)==null?void 0:x.interactions,p=t==null?void 0:t.metrics.average_likes_per_post;(N=t==null?void 0:t.metrics)==null||N.global_rank,(R=t==null?void 0:t.metrics)==null||R.country_rank,(h=t==null?void 0:t.metrics)==null||h.category_rank;const l=(i=t==null?void 0:t.metrics)==null?void 0:i.avg_impressions,V=(s,z,D)=>({title:z,icon:D,score:s!=null&&s.score?T(s==null?void 0:s.score):r,increase:s==null?void 0:s.increase,label:s==null?void 0:s.label}),W=[{title:"Engagement rate",icon:o.createElement(I,null),score:m!=null&&m.score?(m==null?void 0:m.score)+"":r,increase:m==null?void 0:m.increase,label:m==null?void 0:m.label},{title:"Avg. impressions",icon:o.createElement(F,null),score:(d=l==null?void 0:l.score)!=null?d:r,increase:l==null?void 0:l.increase,label:l==null?void 0:l.label},{title:"Avg. likes",icon:o.createElement(P,null),score:(y=p==null?void 0:p.score)!=null?y:r,increase:p==null?void 0:p.increase,label:p==null?void 0:p.label},{title:"Avg. retweet",icon:o.createElement(L,null),score:(C=a==null?void 0:a.score)!=null?C:r,increase:a==null?void 0:a.increase,label:a==null?void 0:a.label},{title:"Interactions",icon:o.createElement(j,null),score:(M=E==null?void 0:E.score)!=null?M:r,increase:null,label:E==null?void 0:E.label},{title:"Avg. comments",icon:o.createElement(F,null),score:(k=c==null?void 0:c.score)!=null?k:r,increase:c==null?void 0:c.increase,label:c==null?void 0:c.label},{title:"Avg. retweet",icon:o.createElement(L,null),score:(B=a==null?void 0:a.score)!=null?B:r,increase:a==null?void 0:a.increase,label:a==null?void 0:a.label},V(b,"Average Media Value",o.createElement(q,null))];return o.createElement("div",{className:"w-full flex flex-col  mb-20"},o.createElement("div",{className:"relative md:mb-[5rem]  mb-[10rem]"},o.createElement(G,{isMini:!0,influencer:t})),o.createElement("div",{className:"px-5"},o.createElement(H,{influencer:t,isMini:!0})),o.createElement("div",{className:"px-5 "},o.createElement(J,{influencer:t})),o.createElement("div",{className:"p-5"},o.createElement("div",{className:"grid grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-3"},W.filter(s=>s.score!=r).map(s=>o.createElement(K,{item:s})))),o.createElement(O,null),o.createElement(Q,{influencer:t}))}export{pt as default};