import{r as s,R as e}from"./app.b8dc28e7.js";import{c as l}from"./helpers.1ee73257.js";import"./constants.1d4f79a4.js";import m from"./hero.0bbe096c.js";import c from"./plans.fae7450e.js";import{E as i}from"./EmptyState.f456df0e.js";import"./moment.9709ab41.js";import"./icons.c2716e1a.js";import"./planCard.36933221.js";import"./planDetails.a757da89.js";import"./BoltIcon.2047f22e.js";function w({plans:r}){const[t,n]=s.exports.useState("plans"),a=o=>{n(o)};return e.createElement("div",{className:"bg-viralget-red"},e.createElement("div",{className:"relative flex flex-col items-center justify-center"},e.createElement(m,null),e.createElement("div",{className:"flex  items-center justify-center content-center bottom-0  absolute"},e.createElement("div",{className:"flex"},e.createElement("button",{onClick:()=>a("plans"),className:l("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend",t==="plans"?"bg-white ":"bg-[#f4f4f4]")},"Plans"),e.createElement("button",{onClick:()=>a("paygo"),className:l("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend",t==="paygo"?"bg-white ":"bg-[#f4f4f4]")},"Pay as you go")))),t==="plans"?e.createElement("div",{className:"mb-10"},e.createElement(c,{plans:r})):e.createElement("div",{className:"flex items-center justify-center  w-full   bg-white h-full rounded-tr-lg rounded-tl-lg  -top-10 "},e.createElement("div",{className:"mt-10"},e.createElement(i,{title:"Coming soon"}))))}export{w as default};