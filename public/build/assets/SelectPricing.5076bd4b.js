import{r as n,R as e}from"./app.996d016e.js";import p from"./header.2ab43a53.js";import f from"./hero.27ab3349.js";import u from"./plans.6b13c9ff.js";import{c as r}from"./helpers.48db9924.js";import"./Logo.5a4d82ff.js";import"./Avatar.3ef9a82f.js";import"./icons.252ca32f.js";import"./moment.9709ab41.js";import"./planCard.3e1208b4.js";import"./planDetails.4f2477bd.js";import"./Container.3af7d19a.js";const S=o=>{const{auth:{user:c},plans:t}=o,[a,m]=n.exports.useState("plans"),[i,g]=n.exports.useState(t==null?void 0:t.filter(l=>!l.is_deleted)),s=l=>{m(l)},d=[{name:"Account setup",status:"complete"},{name:"Pricing",status:"current"},{name:"Payment method",status:"pending"}];return e.createElement("div",null,e.createElement(p,{user:c,levels:d}),e.createElement("div",{className:"bg-viralget-red"},e.createElement("div",{className:"relative flex flex-col items-center justify-center"},e.createElement(f,null),e.createElement("div",{className:"flex  items-center justify-center content-center bottom-0  absolute"},e.createElement("div",{className:"flex"},e.createElement("button",{onClick:()=>s("plans"),className:r("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend",a==="plans"?"bg-white ":"bg-[#f4f4f4]")},"Plans"),e.createElement("button",{onClick:()=>s("paygo"),className:r("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend",a==="paygo"?"bg-white ":"bg-[#f4f4f4]")},"Pay as you go")))),a==="plans"?e.createElement("div",{className:"mb-10"},e.createElement(u,{plans:i})):e.createElement("div",{className:"flex items-center justify-center  w-full   bg-white h-full rounded-tr-lg rounded-tl-lg  -top-10 "},e.createElement("div",{className:"mt-space-20"},e.createElement("span",{className:"font-bold text-t-lg font-lexend"},"Coming soon.")))))};export{S as default};