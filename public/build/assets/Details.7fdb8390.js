import{R as e}from"./app.fb877f69.js";import{I as r}from"./Input.889e91d8.js";import{L as m}from"./Label.c3b5aba2.js";import{M as i}from"./MultiSelect.ace3b291.js";import{S as d}from"./Select.daeb880f.js";import{T as o}from"./TextArea.0f58c920.js";import"./helpers.472d4338.js";import"./moment.9709ab41.js";import"./Combination.fa2f02b4.js";const h=({data:l,onHandleChange:t,setData:s,campaign:a})=>{var c;return e.createElement(e.Fragment,null,e.createElement("div",{className:"space-y-12"},e.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"},e.createElement("div",null,e.createElement("h2",{className:"text-base font-semibold leading-7 text-gray-900"},"Main Information"),e.createElement("p",{className:"mt-1 text-sm leading-6 text-gray-600"},"This information will be displayed publicly so be careful what you share.")),e.createElement("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"},e.createElement("div",{className:"col-span-full"},e.createElement("div",{className:"mt-2"},e.createElement(r,{type:"text",name:"title",label:"Campaign Title",required:!0,placeholder:"Enter campaign title",defaultValue:l.title,onChange:t}))),e.createElement("div",{className:"col-span-full"},e.createElement(o,{type:"text",name:"description",label:"Campaign Description",placeholder:"Enter detailed campaign information",className:"mt-1 block w-full h-32",defaultValue:l.description,onChange:t,required:!0})),e.createElement("div",{className:"sm:col-span-3"},e.createElement(r,{type:"date",name:"start_date",label:"Campaign start date",required:!0,placeholder:"Start date",defaultValue:l.start_date,onChange:t})),e.createElement("div",{className:"sm:col-span-3"},e.createElement(r,{type:"date",name:"end_date",label:"End date",required:!0,placeholder:"Campaign end date",defaultValue:l.end_date,onChange:t})),e.createElement("div",{className:"col-span-full"},e.createElement(m,null,"Select Campaign Type"),e.createElement("div",{class:"mt-4 flex space-x-3"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"public",onChange:t,name:"campaign_type",checked:a.campaign_type=="public",value:"public",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"public",class:"ml-3 block text-sm font-medium text-gray-700"},"Public")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"private",onChange:t,name:"campaign_type",checked:a.campaign_type=="private",value:"private",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"private",class:"ml-3 block text-sm font-medium text-gray-700"},"Private")))),e.createElement("div",{className:"col-span-full"},e.createElement(i,{options:[{value:"Instagram"},{value:"Twitter"}],label:"Social Platform",name:"social_network",required:!0,defaultValue:(c=a==null?void 0:a.social_network)==null?void 0:c.split(","),onChange:n=>s("social_network",[...n].join(","))})),e.createElement("div",{className:"col-span-full"},e.createElement(r,{type:"text",name:"brand_name",label:"Company/brand/Product",required:!0,placeholder:"Enter company/brand/product name",defaultValue:l.brand_name,onChange:t})),e.createElement("div",{className:"col-span-full"},e.createElement(r,{type:"text",name:"keywords",label:"Tracked keywords",required:!0,placeholder:"field(@handle, #hastag, keywords, phrase)",defaultValue:l.keywords,onChange:t})))),e.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"},e.createElement("div",null,e.createElement("h2",{className:"text-base font-semibold leading-7 text-gray-900"},"Campaign Target Details"),e.createElement("p",{className:"mt-1 text-sm leading-6 text-gray-600"},"Define your campaign's target audience.")),e.createElement("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"},e.createElement("div",{className:"sm:col-span-full"},e.createElement(r,{type:"text",name:"location",label:"Campaign target location",required:!0,placeholder:"Enter preferred campaign target location",defaultValue:l.location,onChange:t})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(m,null,"Target Gender"),e.createElement("div",{class:"mt-4 flex space-x-3"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"male",onChange:t,checked:(a==null?void 0:a.target_gender)=="male",name:"gender",value:"male",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"male",class:"ml-3 block text-sm font-medium text-gray-700"},"Male")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"female",name:"gender",checked:(a==null?void 0:a.target_gender)=="female",onChange:t,value:"female",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"female",class:"ml-3 block text-sm font-medium text-gray-700"},"Female")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"female",name:"gender",checked:(a==null?void 0:a.target_gender)=="both",onChange:t,value:"both",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"female",class:"ml-3 block text-sm font-medium text-gray-700"},"Both")))),e.createElement("div",{className:"sm:col-span-full"},e.createElement(r,{type:"text",name:"age",label:"Preferred audience's Age range",required:!0,placeholder:"Enter age range (e.g: 19-30, 30-40)",defaultValue:l.age,onChange:t})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(r,{type:"text",name:"interest",label:"Target audience interests",required:!0,placeholder:"Enter preferred audience's interest",defaultValue:l.interest,onChange:t})))),e.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"},e.createElement("div",null,e.createElement("h2",{className:"text-base font-semibold leading-7 text-gray-900"},"Campaign Goal"),e.createElement("p",{className:"mt-1 text-sm leading-6 text-gray-600"},"Define what your brand hopes to achieve with this campaign.")),e.createElement("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"},e.createElement("div",{className:"sm:col-span-full"},e.createElement(d,{name:"reach_goal",label:"Campaign Goal",required:!0,placeholder:"Select campaign goal",defaultValue:l.reach_goal,options:[{name:"Reach"},{name:"Impressions/Views"},{name:"Engagement"},{name:"Conversion"}]}))))))};export{h as default};
