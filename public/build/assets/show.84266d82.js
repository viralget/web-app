import{R as e}from"./app.1fbb248a.js";import{A as v}from"./AuthenticatedLayout.05617b24.js";import{B as x}from"./ButtonBack.9b713ca8.js";import{h}from"./header.7cd88a48.js";import N from"./influencerSize.f0758e02.js";import{t as w}from"./constants.3b4071bf.js";import{e as y,g as k,h as f,i as C,G as R,k as S,l as P,m as B,I as G,n as I}from"./icons.f643128d.js";import L from"./card.952f2a8e.js";import z from"./audienceCardRow.603f2878.js";import"./Logo.6da8fed8.js";import"./helpers.1cd6bcc2.js";import"./moment.9709ab41.js";import"./Container.a626044f.js";import"./DropdownMenu.ba897c9a.js";import"./Avatar.53a45213.js";import"./Button.e32771f9.js";import"./transition.9e4679b1.js";import"./ChevronDownIcon.6e7e4e27.js";import"./MagnifyingGlassIcon.5f1978ab.js";import"./use-event-listener.c7464666.js";import"./XMarkIcon.3a9e654a.js";import"./Bars3CenterLeftIcon.30f6d97b.js";import"./MenuDropDown.670e04b0.js";import"./api.e6f46c49.js";import"./Toast.fb0b306b.js";function A(...t){return t.filter(Boolean).join(" ")}const T=({tabs:t,link:n,activeTab:o})=>{const r=new URLSearchParams(window.location.search).get("tab"),a=r==null?o:r;return e.createElement("ul",{className:"flex  text-sm font-medium overflow-y-scroll  w-full text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"},t.map(l=>e.createElement("li",{class:"mr-2"},e.createElement("a",{href:n+"?tab="+l.value,className:A("inline-block p-4 rounded-t-lg text-t-xsx font-lexend font-medium  hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300   ",l.value===a?"border-b-2 border-viralget-red text-[#3E4555":"text-[#748094] ")},l.name))))},j=T;function ce({influencer:t,list:n}){var i,d,p,E;const o=new URLSearchParams(window.location.search).get("tab"),r=o==null?"overview":o,a=(i=t==null?void 0:t.metrics)==null?void 0:i.engagement_rate,l=(d=t==null?void 0:t.metrics)==null?void 0:d.global_rank,s=(p=t==null?void 0:t.metrics)==null?void 0:p.country_rank,c=(E=t==null?void 0:t.metrics)==null?void 0:E.category_rank,g=[{title:"Engagement rate",icon:e.createElement(y,null),score:(a==null?void 0:a.score)+"%",increase:a==null?void 0:a.increase,label:a.label},{title:"Global rank",icon:e.createElement(k,null),score:"#"+(l==null?void 0:l.score),increase:null,label:l.label},{title:"Country rank",icon:e.createElement(f,null),score:"#"+(s==null?void 0:s.score),increase:null,label:s.label},{title:"Category rank",icon:e.createElement(C,null),score:"#"+(c==null?void 0:c.score),increase:null,label:c.label}],b=[{title:"Gender & age",icon:e.createElement(R,null),label:t.gender+" \u2022 "+t.age+" y.o"},{title:"Marital status",icon:e.createElement(S,null),label:t.marital_status},{title:"Parental status",icon:e.createElement(P,null),label:t.parental_status},{title:"Ethnicity",icon:e.createElement(B,null),label:t.ethinic},{title:"Est. Income",icon:e.createElement(G,null),label:t.income},{title:"Education",icon:e.createElement(I,null),label:t.education}],u=()=>r==="overview"?e.createElement(e.Fragment,null,e.createElement("div",{className:"grid grid-cols-2 md:space-x-3 mt-5 "},e.createElement("div",{className:"mx-5  md:mr-0 "},e.createElement(N,{influencer:t})),e.createElement("div",{className:"grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0   "},b.map(m=>e.createElement("div",{className:"border rounded-md  p-space-8 h-auto  items-left justify-center"},e.createElement("div",{className:"flex  items-center"},e.createElement("div",{className:"mr-1"},m.icon),e.createElement("span",{className:"text-t-normal font-lexend font-normal capitalize   text-viralget-grey"},m.title)),e.createElement("div",{className:"mt-2"},e.createElement("span",{className:"text-t-normal capitalize  font-medium font-satoshi   text-viralget-grey "},m.label)))))),e.createElement("div",{className:"flex md:flex-row   flex-col p-4  md:space-x-3  md:pl-5 mt-5"},e.createElement("div",{className:"lg:w-space-510 lg:h-space-282"},e.createElement(z,{influencer:t})),e.createElement("div",{className:"grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  "},g.map(m=>e.createElement(L,{item:m}))))):e.createElement("div",{className:"flex items-center  p-5"},e.createElement("span",null,"Coming soon."));return e.createElement(v,null,e.createElement(e.Fragment,null,e.createElement("div",{className:"relative -mt-40   md:mb-0  mb-[8rem]"},e.createElement("div",{className:"m-5"},e.createElement(x,{fill:"white",className:"text-white"})),e.createElement(h,{influencer:t,list:n}))),e.createElement("div",{className:"w-full p-4  md:mt-5  mt-10 "},e.createElement(j,{activeTab:r,tabs:w,link:route("influencer.show",{id:t.id})})),e.createElement(u,null))}export{ce as default};
