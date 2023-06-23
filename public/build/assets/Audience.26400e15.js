import{R as e}from"./app.b8dc28e7.js";import{C as n}from"./Card.e5ba5254.js";import{n as v}from"./helpers.1ee73257.js";import{c as A,l as B,n as y,o as R,G as P,p as T,M as G,q as M,r as z,s as F}from"./icons.c2716e1a.js";import"./index.432d6924.js";import{S as r}from"./SectionTitle.f1191aa8.js";import{E as c}from"./EmptyState.f456df0e.js";import"./moment.9709ab41.js";import"./BoltIcon.2047f22e.js";function X({influencer:i}){var N,x,C,b,h,S;const{engagement_rate:t,global_rank:l,country_rank:a,category_rank:s,avg_cpe:o,avg_cpm:m,reachability:I,avg_impressions:j,reach:q,impressions:L,average_tweet_per_contributor:d,average_follower_per_contributor:E,engagements:u,total_retweets:p}=i==null?void 0:i.metrics;A,(t==null?void 0:t.score)+"",t==null||t.increase,t==null||t.label,B,l==null||l.score,l==null||l.label,y,a==null||a.score,a==null||a.label,R,s==null||s.score,s==null||s.label;const w=[{title:"Average Tweet Per Contributor",icon:e.createElement(P,null),label:(N=v(d==null?void 0:d.score))!=null?N:"no data"},{title:"Average Follower Per Contributor",icon:e.createElement(T,null),label:(x=v(E==null?void 0:E.score))!=null?x:"no data"},{title:"Engagements",icon:e.createElement(G,null),label:(C=v(u==null?void 0:u.score))!=null?C:"no data"},{title:"Total Retweets",icon:e.createElement(M,null),label:(b=p==null?void 0:p.score)!=null?b:"no data"},{title:"Average CPE",icon:e.createElement(z,null),label:(h=o==null?void 0:o.score)!=null?h:"no data"},{title:"Average CPM",icon:e.createElement(F,null),label:(S=m==null?void 0:m.score)!=null?S:"no data"}];return e.createElement("div",{className:"space-y-5"},e.createElement("div",{className:"grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4 mt-5 gap-3 md:pr-5 md:pl-0   "},w.map(f=>{var g;return e.createElement("div",{className:"border rounded-md  p-space-8 h-auto  items-left justify-center"},e.createElement("div",{className:"flex  items-center"},e.createElement("div",{className:"mr-1"},f.icon),e.createElement("span",{className:"text-t-normal font-lexend font-normal capitalize   text-viralget-grey"},f.title)),e.createElement("div",{className:"mt-2"},e.createElement("span",{className:"text-t-normal capitalize  font-medium font-satoshi   text-viralget-grey "},(g=f.label)!=null?g:"no data")))})),e.createElement("div",{className:"flex space-x-3"},e.createElement("div",{className:"w-1/3"},e.createElement(n,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience Type"}),e.createElement(c,{title:"Coming soon"}))),e.createElement("div",{className:"flex-1"},e.createElement(n,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience Location"}),e.createElement(c,{title:"Coming soon"})))),e.createElement("div",{className:"flex space-x-3"},e.createElement("div",{className:"flex-1"},e.createElement(n,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience age and gender"}),e.createElement(c,{title:"Coming soon"}))),e.createElement("div",{className:"w-1/3"},e.createElement(n,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Relationship status"}),e.createElement(c,{title:"Coming soon"})))),e.createElement("div",{className:"flex space-x-3"},e.createElement("div",{className:""},e.createElement(n,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience education level"}),e.createElement(c,{title:"Coming soon"}))),e.createElement("div",{className:"w-1/3"},e.createElement(n,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Audience spend power"}),e.createElement(c,{title:"Coming soon"})))))}export{X as default};
