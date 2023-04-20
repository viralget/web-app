import{R as e}from"./app.7fa3bd1a.js";import{c}from"./helpers.97e11027.js";import"./moment.9709ab41.js";function s(...t){return t.filter(Boolean).join(" ")}function o({steps:t}){return e.createElement("nav",{className:"mx-auto px-4 sm:px-6 ","aria-label":"Progress"},e.createElement("ol",{role:"list",className:"overflow-hidden flex lg:border-gray-200"},t.map((a,r)=>e.createElement("li",{key:a.id,className:"md:w-1/5 relative"},e.createElement("div",{className:s(a.status==="complete"?"bg-viralget-red ":"bg-[#F5F5F5] ",r==0&&"rounded-l-md",r==t.length-1&&"rounded-r-md","relative  lg:flex-1 flex items-center w-full h-14 border-2 border-white influencer-size")},e.createElement("div",{className:s(r===0?"rounded-t-md border-b-0":"",r===t.length-1?"rounded-b-md border-t-0":"","border-gray-200 lg:border-0")},a.status==="complete"?e.createElement("span",{className:"group influencer-size"},e.createElement("span",{className:s("flex items-center px-2 py-2 text-sm font-medium")},e.createElement("span",{className:"mt-0.5 ml-4 flex items-center text-center"},e.createElement("span",{className:"text-xs  text-white"},a.name)))):a.status==="current"?e.createElement("span",{"aria-current":"step"},e.createElement("span",{className:s("flex items-start px-2 py-2 text-sm font-medium")},e.createElement("span",{className:"mt-0.5 ml-4 flex min-w-0 flex-col"},e.createElement("span",{className:"text-sm font-medium text-viralget-grey"},a.name)))):e.createElement("span",{className:"group"},e.createElement("span",{className:"absolute top-0 left-0 h-full w-1 bg-transparent  lg:bottom-0 lg:top-auto lg:h-1 lg:w-full","aria-hidden":"true"}),e.createElement("span",{className:s("flex items-start px-2 py-2 text-sm font-medium")},e.createElement("span",{className:"mt-0.5 ml-4 flex min-w-0 flex-col"},e.createElement("span",{className:"text-sm font-medium text-viralget-grey"},a.name)))),r!==t.length-1?e.createElement("div",{className:`influencer-size-arrow ${a.status=="complete"?" bg-viralget-red":" bg-[#F5F5F5]"}`}):null)),e.createElement("div",{className:"border-0 mt-2"},e.createElement("span",{className:"text-[#748094]"},a.value))))))}function f({influencer:t,isMini:a}){const r=[{id:"01",name:"Nano",value:"1K",href:"#",status:"current"},{id:"02",name:"Micro",value:"10K",href:"#",status:"current"},{id:"03",name:"Mid-tier",value:"50K",href:"#",status:"current"},{id:"04",name:"Macro",value:"100K",href:"#",status:"current"},{id:"05",name:"Mega",value:"1m+",href:"#",status:"current"}];function m(){const n=r;return n.forEach(l=>{t.followers_count>=1e3&&l.name==="Nano"&&(l.status="complete"),t.followers_count>=1e4&&l.name==="Micro"&&(l.status="complete"),t.followers_count>=5e4&&l.name==="Mid-tier"&&(l.status="complete"),t.followers_count>=1e5&&l.name==="Macro"&&(l.status="complete"),t.followers_count>=1e7&&l.name==="Mega"&&(l.status="complete")}),n}return e.createElement("div",{className:c("border pb-10 rounded-md",a?"w-full h-full":" md:h-space-190")},e.createElement("div",{className:"pl-7 p-space-20  pt-space-24"},e.createElement("span",{className:"font-bold  text-t-xs font-lexend"},"Influencer size")),e.createElement("div",{className:"mt-space-20"},e.createElement(o,{steps:m()})))}export{f as default};
