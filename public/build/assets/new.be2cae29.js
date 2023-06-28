import{r as o,R as e,u as h}from"./app.71a75db1.js";import{B as b}from"./Button.e3d75a02.js";import{i as v,I as p}from"./Input.82bca9f9.js";import{t as f}from"./Toast.36f41967.js";import{A as N}from"./AuthenticatedLayout.fb1b2d88.js";import{g as w}from"./helpers.91236dcf.js";import"./Label.fbccb202.js";import"./Logo.854edb19.js";import"./DropdownMenu.0afbd710.js";import"./Avatar.036a65c5.js";import"./transition.a64233e9.js";import"./ChevronDownIcon.7bd09380.js";import"./icons.65f2ebe7.js";import"./dialog.8eb1eeb8.js";import"./use-event-listener.4b827b00.js";import"./XMarkIcon.864ca17c.js";import"./Bars3CenterLeftIcon.8dcd4188.js";import"./moment.9709ab41.js";function C({type:t="text",label:a,explainer:m,id:s,name:l,value:i,className:n,autoComplete:c,required:r,isFocused:u,onChange:g,placeholder:x,defaultValue:E}){const d=o.exports.useRef();return o.exports.useEffect(()=>{u&&d.current.focus()},[]),e.createElement("div",{className:"flex flex-col items-start w-full space-y-1"},a&&e.createElement("label",{htmlFor:s||l,className:"block text-sm font-medium text-gray-700 mb-1"},a),m&&e.createElement("p",{className:"text-sm text-gray-400 mb-1"},m),e.createElement("textarea",{type:t,name:l,value:i,placeholder:x,defaultValue:E,className:v+" "+n,ref:d,rows:10,autoComplete:c,required:r,onChange:y=>g(y)}))}function k({title:t,subtitle:a,rightComponent:m,useMargin:s=!0,noMargin:l=!1}){return e.createElement("div",{className:l?"":`md:py-4 ${s&&""}`},e.createElement("div",{className:l?"":"-ml-4 md:-mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap"},e.createElement("div",{className:l?"":"ml-4 mt-4"},e.createElement("h3",{className:"text-xl leading-6 font-bold text-gray-900"},t),e.createElement("p",{className:"mt-1 text-sm text-gray-500"},a)),e.createElement("div",{className:"ml-4 mt-4 flex-shrink-0 inline-flex"},m)))}function J({influencers:t}){o.exports.useState(!1);const{data:a,setData:m,post:s,processing:l,errors:i}=h({title:"",goal:""}),n=r=>{m(r.target.name,w(r))},c=r=>{r.preventDefault(),s(route("campaigns.store"),{onSuccess:()=>{f("Campaign created successfully! Our team would reach out to you once the highlighted influencer(s) respond")},onError:()=>{f.error("An error occured")}})};return e.createElement(N,{title:"Create new Campaign",showHeader:!1},e.createElement("div",{className:"m-4"},e.createElement(k,{title:"Create new Campaign"})),e.createElement("div",{className:"overflow-hidden py-4 px-4 sm:px-6  mb-20"},e.createElement("div",{className:"relative mx-auto max-w-xl"},e.createElement("div",{className:""},(t==null?void 0:t.length)>0&&e.createElement("div",{className:"my-3"},e.createElement("h4",{className:"font-bold"},"Selected Influencers:"),e.createElement("div",{className:"space-x-3"},t.map((r,u)=>e.createElement("span",{className:"text-sm text-gray-700 bg-gray-200 rounded p-1 px-2"},r.username)))),e.createElement("form",{onSubmit:c,className:"space-y-2"},e.createElement("div",null,e.createElement(p,{type:"text",name:"title",label:"Campaign Title",required:!0,defaultValue:a.title,className:"mt-1 block w-full",onChange:n})),e.createElement("div",null,e.createElement(p,{type:"text",name:"keywords",label:"Tracked Keywords ",required:!0,defaultValue:a.keywords,className:"mt-1 block w-full",onChange:n})),e.createElement("div",null,e.createElement("div",{class:"max-w-lg"},e.createElement("p",{class:"text-sm text-gray-500"},"Select Campaign Goal"),e.createElement("div",{class:"mt-4 space-y-4"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"push-everything",name:"push-notifications",type:"radio",class:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"}),e.createElement("label",{for:"push-everything",class:"ml-3 block text-sm font-medium text-gray-700"},"Engagement")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"push-email",name:"push-notifications",type:"radio",class:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"}),e.createElement("label",{for:"push-email",class:"ml-3 block text-sm font-medium text-gray-700"},"Reach")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"push-nothing",name:"push-notifications",type:"radio",class:"h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"}),e.createElement("label",{for:"push-nothing",class:"ml-3 block text-sm font-medium text-gray-700"},"Conversion"))))),e.createElement("div",null,e.createElement(C,{type:"text",name:"goal",label:"Additional Information",className:"mt-1 block w-full",defaultValue:a.goal,onChange:n,required:!0})),e.createElement("div",{className:"text-center space-y-2 mt-4"},e.createElement(b,{type:"submit",className:"block w-full",processing:l},"Create Campaign")))))))}export{J as default};
