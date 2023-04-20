import{u,R as e}from"./app.7fa3bd1a.js";import{V as i}from"./ValidationErrors.6b1bf1d5.js";import{S as n}from"./Select.dab2662d.js";import{g as d}from"./helpers.97e11027.js";import{B as y}from"./Button.87c9004d.js";import{I as m,T as b}from"./TextArea.26594388.js";import"./moment.9709ab41.js";const C=()=>{const{data:a,setData:o,post:c,processing:r,errors:s,reset:f}=u({company_type:"",company_name:"",job_title:"",company_website:"",company_bio:""}),p=l=>{l.preventDefault(),c("/account-setup")},t=l=>{o(l.target.name,d(l))};return e.createElement("div",{className:"flex flex-col  items-center justify-center mt-space-80"},e.createElement("div",{className:""},e.createElement("span",{className:"text-t-xlg  font-bold font-lexend"},"Account setup")),e.createElement(i,{errors:s}),e.createElement("form",{onSubmit:p,className:"mt-space-40 md:w-1/3   space-y-space-14   "},e.createElement("div",{className:"flex  w-full  space-x-3"},e.createElement("div",{className:"w-full "},e.createElement(n,{options:[{name:"Brand",value:"brand"},{name:"Agency",value:"agency"}],name:"company_type",value:a.company_type,onChange:t,label:"Company type",defaultOptionText:"Select company type",required:!0})),e.createElement("div",{className:"w-full"},e.createElement(m,{type:"text",name:"company_name",label:"Company name",value:a.company_name,className:"mt-1 h-11 block w-full",autoComplete:"company_name",placeholder:"Enter company name",onChange:t,required:!0}))),e.createElement("div",{className:"flex  w-full  space-x-3"},e.createElement("div",{className:"w-full"},e.createElement(n,{options:[{name:"C-level / VP",value:"c-level/vp"},{name:"Director",value:"director"},{name:"Manager/Team Lead",value:"manager/team-lead"},{name:"Team member",value:"team-member"},{name:"Executive",value:"executive"},{name:"Assistant",value:"assistant"},{name:"Independent professional",value:"independent-professional"}],name:"job_title",value:a.job_title,onChange:t,label:"Job title",defaultOptionText:"Select job title",required:!0})),e.createElement("div",{className:"w-full"},e.createElement(m,{type:"text",name:"company_website",label:"Company Website",value:a.company_website,className:"mt-1 h-11 block w-full",autoComplete:"company_website",placeholder:"Enter company website",onChange:t,required:!0}))),e.createElement("div",{className:"w-full"},e.createElement(b,{name:"company_bio",label:"Company bio",value:a.company_bio,className:"mt-1 h-20 block w-full",autoComplete:"company_bio",placeholder:"Enter company bio",onChange:t,required:!0})),e.createElement("div",{className:"text-center  w-full flex justify-start  mt-space-20"},e.createElement("div",{className:"w-auto"},e.createElement(y,{className:"block w-auto bg-viralget-red  px-space-80 rounded-[8px]",processing:r},"Continue")))))};export{C as default};
