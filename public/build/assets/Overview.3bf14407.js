import{R as e,f as R,aa as S,ae as w,af as A,ag as I,ah as z,ai as P,aj as j,ak as y,al as F}from"./app.cc07e7b9.js";import{a as p}from"./helpers.2e537a8b.js";import G from"./audienceCardRow.1576ccb5.js";import M from"./card.520b66d8.js";import B from"./influencerSize.640f15e0.js";import"./moment.9709ab41.js";import"./index.a41bcc47.js";import"./index.e8fcc329.js";import"./QAS.66a14d77.js";function T({influencer:c}){var u,v,f,b,x,N;const{engagement_rate:t,global_rank:a,country_rank:l,category_rank:r,avg_cpe:s,avg_cpm:n,reachability:i,avg_impressions:o,reach:d,impressions:E}=c==null?void 0:c.metrics,C=[{title:"Engagement rate",icon:e.createElement(R,null),score:(t==null?void 0:t.score)+"%",increase:t==null?void 0:t.increase,label:t==null?void 0:t.label},{title:"Global rank",icon:e.createElement(S,null),score:a==null?void 0:a.score,increase:null,label:a==null?void 0:a.label},{title:"Country rank",icon:e.createElement(w,null),score:l==null?void 0:l.score,increase:null,label:l==null?void 0:l.label},{title:"Category rank",icon:e.createElement(A,null),score:r==null?void 0:r.score,increase:null,label:r==null?void 0:r.label}],h=[{title:"Reach",icon:e.createElement(I,null),label:(u=p(d==null?void 0:d.score))!=null?u:"no data"},{title:"Reachability",icon:e.createElement(z,null),label:(v=p(i==null?void 0:i.score))!=null?v:"no data"},{title:"Impressions",icon:e.createElement(P,null),label:(f=p(E==null?void 0:E.score))!=null?f:"no data"},{title:"Average Impressions",icon:e.createElement(j,null),label:(b=o==null?void 0:o.score)!=null?b:"no data"},{title:"Average CPE",icon:e.createElement(y,null),label:(x=s==null?void 0:s.score)!=null?x:"no data"},{title:"Average CPM",icon:e.createElement(F,null),label:(N=n==null?void 0:n.score)!=null?N:"no data"}];return e.createElement(e.Fragment,null,e.createElement("div",{className:"grid grid-cols-2 md:space-x-3"},e.createElement("div",{className:"mx-5  md:mr-0 "},e.createElement(B,{influencer:c})),e.createElement("div",{className:"grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0   "},h.map(m=>{var g;return e.createElement("div",{className:"border rounded-md  p-space-8 h-auto  items-left justify-center"},e.createElement("div",{className:"flex  items-center"},e.createElement("div",{className:"mr-1"},m.icon),e.createElement("span",{className:"text-t-normal font-lexend font-normal capitalize   text-viralget-grey"},m.title)),e.createElement("div",{className:"mt-2"},e.createElement("span",{className:"text-t-normal capitalize  font-medium font-satoshi   text-viralget-grey "},(g=m.label)!=null?g:"no data")))}))),e.createElement("div",{className:"flex md:flex-row   flex-col p-4  md:space-x-3  md:pl-5 mt-5"},e.createElement("div",{className:"lg:w-space-510 lg:h-space-282"},e.createElement(G,{influencer:c})),e.createElement("div",{className:"grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  "},C.map(m=>e.createElement(M,{item:m})))))}export{T as default};
