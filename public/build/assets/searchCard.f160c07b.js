import{r as d,R as e,am as x,an as E,ao as N,L as h}from"./app.a5286dc2.js";import{a as g,f as v}from"./helpers.2d6f622c.js";import{M as y}from"./MenuDropDown.8dc950a5.js";import{t as i}from"./Toast.b71ab449.js";import{a as b}from"./api.f37ec366.js";import"./moment.9709ab41.js";import"./transition.387e8173.js";import"./keyboard.ad91c4ea.js";const w=({card:a,isSaved:p})=>{const[f,c]=d.exports.useState(!1);async function u(l){var n,m,o;c(!0);const r={id:l},t=await b(route("influencers.search.delete"),r,!0);(n=t==null?void 0:t.data)!=null&&n.status?(i.success((m=t==null?void 0:t.data)==null?void 0:m.message),setTimeout(function(){window.location.reload()},1e3)):(i.error((o=t==null?void 0:t.data)==null?void 0:o.message),c(!1))}const s=JSON.parse(a.search_filters);return e.createElement("div",{className:" rounded-lg bg-white shadow-header-card  border  border-[#F5F5F5] overflow-hidden"},e.createElement("div",{className:"p-space-17"},p?e.createElement("div",{className:"flex justify-between   mb-17"},e.createElement("div",{className:"flex space-x-2"},e.createElement(x,null),e.createElement("span",{className:"capitalize"},a.name)),e.createElement("div",null,e.createElement(y,{buttonName:"",buttonIcon:e.createElement(E,{className:"w-4 h-4  mt-1"}),className:"p-0 py-0 px-0  ring-0"},e.createElement("div",{className:"p-3 flex flex-col w-40  justify-center items-left  space-y-3"},e.createElement("button",{onClick:()=>u(a.id),className:"flex  items-center space-x-2"},e.createElement(N,null),f?e.createElement("span",null,"Deleting..."):e.createElement("span",null,"Delete")))))):null,e.createElement("div",{className:"flex items-center"},e.createElement(h,{href:route("explore.search")+"?"+a.query,className:"w-0 flex-1 pt-space-17"},e.createElement("span",null,e.createElement("span",{className:" text-sm font-medium text-gray-500 space-x-1 "},Object.keys(s).length>0&&Object.keys(s).splice(0,2).map((l,r)=>e.createElement("span",{className:"capitalize",key:r},"\u2022 ",l,": ",s[l]," ",r+1>2?",":"")),Object.keys(s).length>2?e.createElement("a",{href:"",className:"text-viralget-red"},"+ ",Object.keys(s).length-2," filters"):""))))),e.createElement("div",{className:"px-space-17 pb-space-17"},e.createElement("div",{className:"text-sm flex justify-between"},e.createElement("a",{href:a.href,className:"font-medium bg-viralget-gray-200 rounded-md py-[6px] px-[12px] text-[#3E4555] hover:text-cyan-900"},g(a.results_count)," results"),e.createElement("div",{className:"flex items-center "},e.createElement("span",{className:"text-[#3E4555] text-center font-normal text-t-normal"},v(a.created_at,!1,"DD MMM"))))))},C=w;export{C as default};