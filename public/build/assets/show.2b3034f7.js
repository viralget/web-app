import{R as e}from"./app.996d016e.js";import{A as u}from"./AuthenticatedLayout.206fd8ec.js";import{B as x}from"./ButtonBack.be7ac5c8.js";import{h}from"./header.b6b5f690.js";import N from"./influencerSize.4803b5b7.js";import{t as w}from"./constants.220d3651.js";import{e as y,g as k,h as f,i as C,G as R,k as S,l as P,m as B,I as G,n as I}from"./icons.252ca32f.js";import L from"./card.b6564de7.js";import z from"./audienceCardRow.4121332f.js";import"./Logo.5a4d82ff.js";import"./helpers.48db9924.js";import"./moment.9709ab41.js";import"./Container.3af7d19a.js";import"./DropdownMenu.476507f0.js";import"./Avatar.3ef9a82f.js";import"./Button.dcfe4146.js";import"./transition.a592a82d.js";import"./ChevronDownIcon.898d964a.js";import"./MagnifyingGlassIcon.0b8bed85.js";import"./use-event-listener.ba5db124.js";import"./XMarkIcon.1d282fc3.js";import"./Bars3CenterLeftIcon.3e0bc72c.js";import"./MenuDropDown.076f90a5.js";import"./api.25e07a73.js";import"./Toast.475862ec.js";function A(...t){return t.filter(Boolean).join(" ")}const T=({tabs:t,link:n,activeTab:o})=>{const r=new URLSearchParams(window.location.search).get("tab"),a=r==null?o:r;return e.createElement("ul",{className:"flex  text-sm font-medium overflow-y-scroll  w-full text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"},t.map(l=>e.createElement("li",{class:"mr-2"},e.createElement("a",{href:n+"?tab="+l.value,className:A("inline-block p-4 rounded-t-lg text-t-xsx font-lexend font-medium  hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300   ",l.value===a?"border-b-2 border-viralget-red text-[#3E4555":"text-[#748094] ")},l.name))))},j=T;function ce({influencer:t,list:n}){var i,d,p,E;console.log({influencer:t});const o=new URLSearchParams(window.location.search).get("tab"),r=o==null?"overview":o,a=(i=t==null?void 0:t.metrics)==null?void 0:i.engagement_rate,l=(d=t==null?void 0:t.metrics)==null?void 0:d.global_rank,s=(p=t==null?void 0:t.metrics)==null?void 0:p.country_rank,c=(E=t==null?void 0:t.metrics)==null?void 0:E.category_rank,g=[{title:"Engagement rate",icon:e.createElement(y,null),score:(a==null?void 0:a.score)+"%",increase:a==null?void 0:a.increase,label:a.label},{title:"Global rank",icon:e.createElement(k,null),score:"#"+(l==null?void 0:l.score),increase:null,label:l.label},{title:"Country rank",icon:e.createElement(f,null),score:"#"+(s==null?void 0:s.score),increase:null,label:s.label},{title:"Category rank",icon:e.createElement(C,null),score:"#"+(c==null?void 0:c.score),increase:null,label:c.label}],b=[{title:"Gender & age",icon:e.createElement(R,null),label:t.gender+" \u2022 "+t.age+" y.o"},{title:"Marital status",icon:e.createElement(S,null),label:t.marital_status},{title:"Parental status",icon:e.createElement(P,null),label:t.parental_status},{title:"Ethnicity",icon:e.createElement(B,null),label:t.ethinic},{title:"Est. Income",icon:e.createElement(G,null),label:t.income},{title:"Education",icon:e.createElement(I,null),label:t.education}],v=()=>r==="overview"?e.createElement(e.Fragment,null,e.createElement("div",{className:"grid grid-cols-2 md:space-x-3 mt-5 "},e.createElement("div",{className:"mx-5  md:mr-0 "},e.createElement(N,{influencer:t})),e.createElement("div",{className:"grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0   "},b.map(m=>e.createElement("div",{className:"border rounded-md  p-space-8 h-auto  items-left justify-center"},e.createElement("div",{className:"flex  items-center"},e.createElement("div",{className:"mr-1"},m.icon),e.createElement("span",{className:"text-t-normal font-lexend font-normal capitalize   text-viralget-grey"},m.title)),e.createElement("div",{className:"mt-2"},e.createElement("span",{className:"text-t-normal capitalize  font-medium font-satoshi   text-viralget-grey "},m.label)))))),e.createElement("div",{className:"flex md:flex-row   flex-col p-4  md:space-x-3  md:pl-5 mt-5"},e.createElement("div",{className:"lg:w-space-510 lg:h-space-282"},e.createElement(z,{influencer:t})),e.createElement("div",{className:"grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  "},g.map(m=>e.createElement(L,{item:m}))))):e.createElement("div",{className:"flex items-center  p-5"},e.createElement("span",null,"Coming soon."));return e.createElement(u,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"relative -mt-40   md:mb-0  mb-[8rem]"},e.createElement("div",{className:"m-5"},e.createElement(x,{fill:"white",className:"text-white"})),e.createElement(h,{influencer:t,list:n}))),e.createElement("div",{className:"w-full p-4  md:mt-5  mt-10 "},e.createElement(j,{activeTab:r,tabs:w,link:route("influencer.show",{id:t.id})})),e.createElement(v,null))}export{ce as default};
