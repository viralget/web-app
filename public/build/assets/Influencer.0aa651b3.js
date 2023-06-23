import{R as e}from"./app.b8dc28e7.js";import{C as B}from"./Card.e5ba5254.js";import{n as o}from"./helpers.1ee73257.js";import{c as b,l as h,n as w,o as A,G,p as P,M as L,q,r as F,s as H}from"./icons.c2716e1a.js";import"./index.432d6924.js";import p from"./card.8ba75417.js";import U from"./BrandSafetyLevel.f792654d.js";import"./moment.9709ab41.js";function Q({influencer:n}){var f,v,x,C,N,R,S,I,y;const{engagement_rate:a,global_rank:s,country_rank:c,category_rank:r,avg_cpe:m,avg_cpm:i,reachability:d,avg_impressions:E,reach:t,impressions:l}=n==null?void 0:n.metrics,M=[{title:"Engagement rate",icon:e.createElement(b,null),score:(a==null?void 0:a.score)+"%",increase:a==null?void 0:a.increase,label:a==null?void 0:a.label},{title:"Global rank",icon:e.createElement(h,null),score:s==null?void 0:s.score,increase:null,label:s==null?void 0:s.label},{title:"Country rank",icon:e.createElement(w,null),score:c==null?void 0:c.score,increase:null,label:c==null?void 0:c.label},{title:"Category rank",icon:e.createElement(A,null),score:r==null?void 0:r.score,increase:null,label:r==null?void 0:r.label}];return G,(f=o(t==null?void 0:t.score))!=null,P,(v=o(d==null?void 0:d.score))!=null,L,(x=o(l==null?void 0:l.score))!=null,q,(C=E==null?void 0:E.score)!=null,F,(N=m==null?void 0:m.score)!=null,H,(R=i==null?void 0:i.score)!=null,e.createElement("div",{className:"space-y-5"},e.createElement("div",{className:"grid sm:grid-cols-2 p-4 md:space-x-3 "},e.createElement(U,{influencer:n}),e.createElement("div",{className:"grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  "},M.map(u=>e.createElement(p,{item:u})))),e.createElement(B,{useBorder:!0,useShadow:!1},e.createElement("span",{className:"font-bold text-t-xs font-lexend"},"Impressions vs Reach"),e.createElement("div",{className:"my-3 space-x-3 flex"},e.createElement(p,{item:{title:"Impressions",icon:e.createElement(b,null),score:o((S=l==null?void 0:l.score)!=null?S:0),increase:l==null?void 0:l.increase,label:l==null?void 0:l.label}}),e.createElement(p,{item:{title:"Reach",icon:e.createElement(b,null),score:o((I=t==null?void 0:t.score)!=null?I:0),increase:t==null?void 0:t.increase,label:t==null?void 0:t.label}}))),e.createElement(B,{useBorder:!0,useShadow:!1},e.createElement("span",{className:"font-bold text-t-xs font-lexend"},"Most Used Hashtags"),e.createElement("div",{className:"my-3 space-x-3"},(y=n.most_used_hashtags)==null?void 0:y.map((u,g)=>e.createElement("span",{className:"p-2 bg-gray-50 rounded-md",key:g},"#",u)))))}export{Q as default};
