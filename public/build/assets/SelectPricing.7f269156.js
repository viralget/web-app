import{r as n,R as e}from"./app.aa8cffa1.js";import d from"./header.08d1b491.js";import{c as r}from"./helpers.9020a9ed.js";import f from"./hero.08f82e0a.js";import u from"./plans.fb02f4da.js";import"./Logo.0ece8bbc.js";import"./icons.2b1ab55c.js";import"./DropdownMenu.33622f09.js";import"./Avatar.d2220e24.js";import"./Button.749d679a.js";import"./transition.3e108733.js";import"./ChevronDownIcon.43fb4119.js";import"./moment.9709ab41.js";import"./planCard.5dee16f5.js";import"./constants.a38f6622.js";import"./planDetails.ab2c3f30.js";const A=o=>{const{auth:{user:m},plans:t}=o,[a,c]=n.exports.useState("plans"),[i,g]=n.exports.useState(t==null?void 0:t.filter(l=>!l.is_deleted)),s=l=>{c(l)},p=[{name:"Account setup",status:"complete"},{name:"Pricing",status:"current"},{name:"Payment method",status:"pending"}];return e.createElement("div",null,e.createElement(d,{user:m,levels:p}),e.createElement("div",{className:"bg-viralget-red"},e.createElement("div",{className:"relative flex flex-col items-center justify-center"},e.createElement(f,null),e.createElement("div",{className:"flex  items-center justify-center content-center bottom-0  absolute"},e.createElement("div",{className:"flex"},e.createElement("button",{onClick:()=>s("plans"),className:r("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend",a==="plans"?"bg-white ":"bg-[#f4f4f4]")},"Plans"),e.createElement("button",{onClick:()=>s("paygo"),className:r("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend",a==="paygo"?"bg-white ":"bg-[#f4f4f4]")},"Pay as you go")))),a==="plans"?e.createElement("div",{className:"mb-10"},e.createElement(u,{plans:i})):e.createElement("div",{className:"flex items-center justify-center  w-full   bg-white h-full rounded-tr-lg rounded-tl-lg  -top-10 "},e.createElement("div",{className:"mt-space-20"},e.createElement("span",{className:"font-bold text-t-lg font-lexend"},"Coming soon.")))))};export{A as default};