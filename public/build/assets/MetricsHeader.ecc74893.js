import{R as l}from"./app.cd2afafc.js";import{c as t}from"./icons.c01f0542.js";import f from"./card.8355de1d.js";import{f as x}from"./helpers.94bbc4f4.js";import"./moment.9709ab41.js";const d=({metrics:p,onRefetch:u,updated_at:E})=>{var r,c,s,m,a,i,o,g;const e=p,n=[{title:"Impressions",icon:l.createElement(t,null),score:(r=e==null?void 0:e.impressions)==null?void 0:r.value,increase:(c=e==null?void 0:e.impressions)==null?void 0:c.growth,label:null},{title:"Reach",icon:l.createElement(t,null),score:(s=e==null?void 0:e.reach)==null?void 0:s.value,increase:(m=e==null?void 0:e.reach)==null?void 0:m.growth,label:null},{title:"Engagement Rate",icon:l.createElement(t,null),score:(a=e==null?void 0:e.engagement_rate)==null?void 0:a.value,increase:(i=e==null?void 0:e.engagement_rate)==null?void 0:i.growth,label:null},{title:"Campaign Value",icon:l.createElement(t,null),score:(o=e==null?void 0:e.campaign_value)==null?void 0:o.value,increase:(g=e==null?void 0:e.campaign_value)==null?void 0:g.growth,label:null}];return l.createElement("div",{className:"mt-space-60 "},l.createElement("div",{className:"flex    justify-end"},l.createElement("div",{className:"text-right"},l.createElement("button",{onClick:u,className:"p-2  px-5  rounded-md bg-viralget-red  text-white font-lexend"}," Refetch "),l.createElement("p",null,"Last updated on: ",x(E)))),l.createElement("div",{className:"grid mt-space-60  lg:grid-cols-4   grid-cols-1  gap-y-5 lg:gap-x-space-8"},(n==null?void 0:n.length)>0&&(n==null?void 0:n.map((h,v)=>l.createElement(f,{item:h,key:v})))))};export{d as default};
