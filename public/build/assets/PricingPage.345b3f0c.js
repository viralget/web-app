import{r as o,R as e}from"./app.7179bf09.js";import{c as s}from"./helpers.0557fa85.js";import"./constants.48562a6a.js";import c from"./hero.5e52d63b.js";import n from"./plans.82505ea4.js";import i from"./PAYG.dff7abb5.js";import"./moment.9709ab41.js";import"./icons.63ea3f8d.js";import"./planCard.5de9db9b.js";import"./planDetails.bbd50109.js";import"./Button.e49676a1.js";import"./api.3a01e3bc.js";import"./Toast.b8ef6e60.js";import"./inline.c6606910.js";function j({plans:t}){const[a,r]=o.exports.useState("paygo"),l=m=>{r(m)};return e.createElement("div",{className:"bg-viralget-red"},e.createElement("div",{className:"relative flex flex-col items-center justify-center"},e.createElement(c,null),e.createElement("div",{className:"flex  items-center justify-center content-center bottom-0  absolute"},e.createElement("div",{className:"flex"},e.createElement("button",{onClick:()=>l("paygo"),className:s("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend",a==="paygo"?"bg-white ":"bg-[#f4f4f4]")},"Pay as you go")))),a==="plans"?e.createElement("div",{className:"mb-10"},e.createElement(n,{plans:t})):e.createElement("div",{className:"flex items-center justify-center  w-full   bg-white h-full rounded-tr-lg rounded-tl-lg  -top-10 "},e.createElement("div",{className:"mt-10"},e.createElement(i,{plan:t[0]}))))}export{j as default};
