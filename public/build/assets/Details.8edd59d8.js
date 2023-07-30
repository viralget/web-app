import{R as e}from"./app.b9917e06.js";import{I as l}from"./Input.b93f4058.js";import{L as r}from"./Label.610c3a99.js";import{M as m}from"./MultiSelect.a76c656b.js";import{T as s}from"./TextArea.773433bc.js";import"./select.c5b14128.js";import"./Combination.d7154277.js";const f=({data:t,onHandleChange:a,setData:c})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"space-y-12"},e.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"},e.createElement("div",null,e.createElement("h2",{className:"text-base font-semibold leading-7 text-gray-900"},"Main Information"),e.createElement("p",{className:"mt-1 text-sm leading-6 text-gray-600"},"This information will be displayed publicly so be careful what you share.")),e.createElement("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"},e.createElement("div",{className:"col-span-full"},e.createElement("div",{className:"mt-2"},e.createElement(l,{type:"text",name:"title",label:"Campaign Title",required:!0,placeholder:"Enter campaign title",defaultValue:t.title,onChange:a}))),e.createElement("div",{className:"col-span-full"},e.createElement(s,{type:"text",name:"description",label:"Campaign Description",placeholder:"Enter detailed campaign information",className:"mt-1 block w-full h-32",defaultValue:t.description,onChange:a,required:!0})),e.createElement("div",{className:"sm:col-span-3"},e.createElement(l,{type:"date",name:"start_date",label:"Campaign start date",required:!0,placeholder:"Start date",defaultValue:t.start_date,onChange:a})),e.createElement("div",{className:"sm:col-span-3"},e.createElement(l,{type:"date",name:"end_date",label:"End date",required:!0,placeholder:"Campaign end date",defaultValue:t.end_date,onChange:a})),e.createElement("div",{className:"col-span-full"},e.createElement(r,null,"Select Campaign Type"),e.createElement("div",{class:"mt-4 flex space-x-3"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"public",onChange:a,name:"campaign_type",value:"public",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"public",class:"ml-3 block text-sm font-medium text-gray-700"},"Public")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"private",onChange:a,name:"campaign_type",value:"private",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"private",class:"ml-3 block text-sm font-medium text-gray-700"},"Private")))),e.createElement("div",{className:"col-span-full"},e.createElement(m,{options:[{value:"Instagram"},{value:"Twitter"}],label:"Social Platform",name:"social_network",required:!0,onChange:n=>c("social_network",[...n].join(","))})),e.createElement("div",{className:"col-span-full"},e.createElement(l,{type:"text",name:"brand_name",label:"Company/brand/Product",required:!0,placeholder:"Enter company/brand/product name",defaultValue:t.brand_name,onChange:a})),e.createElement("div",{className:"col-span-full"},e.createElement(l,{type:"text",name:"keywords",label:"Tracked keywords",required:!0,placeholder:"field(@handle, #hastag, keywords, phrase)",defaultValue:t.keywords,onChange:a})))),e.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"},e.createElement("div",null,e.createElement("h2",{className:"text-base font-semibold leading-7 text-gray-900"},"Campaign Target Details"),e.createElement("p",{className:"mt-1 text-sm leading-6 text-gray-600"},"Define your campaign's target audience.")),e.createElement("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"},e.createElement("div",{className:"sm:col-span-full"},e.createElement(l,{type:"text",name:"location",label:"Campaign target location",required:!0,placeholder:"Enter preferred campaign target location",defaultValue:t.location,onChange:a})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(r,null,"Target Gender"),e.createElement("div",{class:"mt-4 flex space-x-3"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"male",onChange:a,name:"gender",value:"male",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"male",class:"ml-3 block text-sm font-medium text-gray-700"},"Male")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"female",name:"gender",onChange:a,value:"female",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"female",class:"ml-3 block text-sm font-medium text-gray-700"},"Female")))),e.createElement("div",{className:"sm:col-span-full"},e.createElement(l,{type:"text",name:"age",label:"Preferred audience's Age range",required:!0,placeholder:"Enter age range (e.g: 19-30, 30-40)",defaultValue:t.age,onChange:a})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(l,{type:"text",name:"interest",label:"Target audience interests",required:!0,placeholder:"Enter preferred audience's interest",defaultValue:t.interest,onChange:a})))),e.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"},e.createElement("div",null,e.createElement("h2",{className:"text-base font-semibold leading-7 text-gray-900"},"Campaign Goals"),e.createElement("p",{className:"mt-1 text-sm leading-6 text-gray-600"},"Define whay your brand hopes to achieve with this campaign.")),e.createElement("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"},e.createElement("div",{className:"sm:col-span-full"},e.createElement(l,{type:"text",name:"reach",label:"Expected reach",required:!0,placeholder:"Enter expected reach",defaultValue:t.reach,onChange:a})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(l,{type:"text",name:"impression",label:"Expected impressions/views",required:!0,placeholder:"Enter expected impression",defaultValue:t.impression,onChange:a})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(l,{type:"text",name:"engagement",label:"Expected engagement rate",required:!0,placeholder:"Enter expected engagement rate",defaultValue:t.engagement,onChange:a})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(l,{type:"text",name:"conversion",label:"Expected conversion rate",required:!0,placeholder:"Enter expected conversion",defaultValue:t.conversion,onChange:a}))))));export{f as default};
