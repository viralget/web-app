import{u,R as e}from"./app.b9917e06.js";import{V as i}from"./ValidationErrors.1c350875.js";import{S as n}from"./Select.bfb13258.js";import{g as d}from"./helpers.78219879.js";import{B as f}from"./Button.6de49e08.js";import{I as m,T as y}from"./TextArea.c9e827a8.js";import{c as b}from"./defaults.c9e7dfa9.js";import"./Error.79b96e51.js";import"./Label.24168fe9.js";import"./moment.9709ab41.js";const T=()=>{const{data:a,setData:o,post:c,processing:r,errors:s,reset:v}=u({company_type:"",company_name:"",job_title:"",company_website:"",company_bio:""}),p=l=>{l.preventDefault(),c("/account-setup")},t=l=>{o(l.target.name,d(l))};return e.createElement("div",{className:"flex flex-col  items-center justify-center mt-space-80"},e.createElement("div",{className:""},e.createElement("span",{className:"text-t-xlg  font-bold font-lexend"},"Account setup")),e.createElement(i,{errors:s}),e.createElement("form",{onSubmit:p,className:"mt-space-40 md:w-1/3     "},e.createElement("div",{className:"flex  w-full  space-x-3 mt-space-20"},e.createElement("div",{className:"w-full "},e.createElement(n,{options:[{name:"Brand",value:"brand"},{name:"Agency",value:"agency"}],name:"company_type",value:a.company_type,onChange:t,label:"Company type",defaultOptionText:"Select company type",required:!0})),e.createElement("div",{className:"w-full "},e.createElement(m,{type:"text",name:"company_name",label:"Company name",value:a.company_name,className:"mt-1 h-11 block w-full",autoComplete:"company_name",placeholder:"Enter company name",onChange:t,required:!0}))),e.createElement("div",{className:"flex  w-full  space-x-3 mt-space-20"},e.createElement("div",{className:"w-full"},e.createElement(n,{options:[{name:"C-level / VP",value:"c-level/vp"},{name:"Director",value:"director"},{name:"Manager/Team Lead",value:"manager/team-lead"},{name:"Team member",value:"team-member"},{name:"Executive",value:"executive"},{name:"Assistant",value:"assistant"},{name:"Independent professional",value:"independent-professional"}],name:"job_title",value:a.job_title,onChange:t,label:"Job title",defaultOptionText:"Select job title",required:!0})),e.createElement("div",{className:"w-full"},e.createElement(m,{type:"text",name:"company_website",label:"Company Website",value:a.company_website,className:"mt-1 h-11 block w-full",autoComplete:"company_website",placeholder:"Enter company website",onChange:t,required:!0}))),e.createElement("div",{className:"flex  w-full  space-x-3 mt-space-20"},e.createElement("div",{className:"w-full "},e.createElement(n,{options:b,name:"country",value:a.company_type,onChange:t,label:"Country",defaultOptionText:"Select Country",required:!0})),e.createElement("div",{className:"w-full "},e.createElement(m,{type:"text",name:"phone",label:"Phone Number",value:a.phone,className:"mt-1 h-11 block w-full",autoComplete:"phone",placeholder:"Enter phone number",onChange:t,required:!0}))),e.createElement("div",{className:"w-full  mt-space-20"},e.createElement(y,{name:"company_bio",label:"Company bio",value:a.company_bio,className:"mt-1 h-20 block w-full",autoComplete:"company_bio",placeholder:"Enter company bio",onChange:t,required:!0})),e.createElement("div",{className:"text-center  w-full flex justify-start  mt-space-32"},e.createElement("div",{className:"w-auto"},e.createElement(f,{className:"block w-auto bg-viralget-red  px-space-80 rounded-[8px]",processing:r},"Continue")))))};export{T as default};
