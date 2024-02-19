import{R as e}from"./app.a5286dc2.js";import{d as r}from"./index.e2dba388.js";import{s as n,b as c}from"./helpers.2d6f622c.js";import"./index.e8fcc329.js";import"./moment.9709ab41.js";function m({score:t,id:a,color:l,value:s}){return e.createElement("div",{className:"text-center"},e.createElement(r,{id:a,nrOfLevels:420,animate:!0,arcsLength:[.2,.2,.2,.2,.2],colors:["#E46361","#FEB702","#0BCEF9","#25EEB2","#28CA42"],percent:t,arcPadding:.02,textColor:"#3E4555",needleColor:"#748094"}),e.createElement("div",{className:""},e.createElement("span",{className:`text-xl font-bold ${l}`},s)))}function v({influencer:t}){const a=["Inappropriate words","Negative sentiments","Toxic content","Offensive content","Explicit words","Adult content"];return e.createElement("div",{className:"border  w-full h-full rounded-md p-5"},e.createElement("span",{className:"font-bold text-t-xs font-lexend"},"Brand Safety Level"),e.createElement("div",{className:"flex items-center  w-full space-x-3 "},e.createElement("div",{className:"relative sm:w-2/5"},e.createElement(m,{score:t.brand_safety_level/1e3,name:"bsl",color:n(t.brand_safety_level),text:c(t.brand_safety_level)})),e.createElement("div",{className:"w-full p-4 space-y-3"},e.createElement("p",{className:"font-bold text-sm font-lexend"},"Negative content background check:"),e.createElement("div",{className:"grid md:grid-cols-2 gap-3"},a.map((l,s)=>e.createElement("div",{key:s,className:"flex items-center"},e.createElement("div",{className:"mr-2"},e.createElement("div",{className:"bg-green-600 w-1.5 h-1.5 rounded-full"})),e.createElement("p",{className:"text-sm"},l)))))))}export{v as default};