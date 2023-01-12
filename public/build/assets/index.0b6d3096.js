import{r as m,u,R as e}from"./app.13a136bb.js";import"./Header.b8c9e463.js";import{B as d}from"./Button.333930e7.js";import{I as r}from"./Input.c82a53b0.js";import{P as p}from"./PasswordInput.90d3a585.js";import{A as f}from"./AuthenticatedLayout.e7919d25.js";import"./NavLink.a649390a.js";import"./Avatar.07ae93b5.js";import"./Logo.b6dcfb48.js";import"./DropdownMenu.de585630.js";import"./Badge.8a44825a.js";import"./moment.0d47bed0.js";function U(){m.exports.useState(!1);const{data:t,setData:n,post:s,processing:o,errors:h,reset:c}=u({company_name:"",first_name:"",last_name:"",email:"",password:""});m.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const a=l=>{n(l.target.name,getEventValue(l))},i=l=>{l.preventDefault(),s("/register")};return e.createElement(f,{title:"Account Settings",subtitle:"Update your account information"},e.createElement("div",{className:"overflow-hidden bg-white py-12 px-4 "},e.createElement("div",{className:"relative mx-auto max-w-xl"},e.createElement("svg",{className:"absolute left-full translate-x-1/2 transform",width:404,height:404,fill:"none",viewBox:"0 0 404 404","aria-hidden":"true"},e.createElement("defs",null,e.createElement("pattern",{id:"85737c0e-0916-41d7-917f-596dc7edfa27",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse"},e.createElement("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"}))),e.createElement("rect",{width:404,height:404,fill:"url(#85737c0e-0916-41d7-917f-596dc7edfa27)"})),e.createElement("svg",{className:"absolute right-full bottom-0 -translate-x-1/2 transform",width:404,height:404,fill:"none",viewBox:"0 0 404 404","aria-hidden":"true"},e.createElement("defs",null,e.createElement("pattern",{id:"85737c0e-0916-41d7-917f-596dc7edfa27",x:0,y:0,width:20,height:20,patternUnits:"userSpaceOnUse"},e.createElement("rect",{x:0,y:0,width:4,height:4,className:"text-gray-200",fill:"currentColor"}))),e.createElement("rect",{width:404,height:404,fill:"url(#85737c0e-0916-41d7-917f-596dc7edfa27)"})),e.createElement("div",{className:""},e.createElement("form",{onSubmit:i,className:"space-y-2"},e.createElement("div",null,e.createElement(r,{type:"text",name:"company_name",label:"Company Name",value:t.company_name,className:"mt-1 block w-full",autoComplete:"company_name",onChange:a,placeholder:"Optional",required:!0})),e.createElement("div",null,e.createElement(r,{type:"text",name:"first_name",label:"First Name",value:t.first_name,className:"mt-1 block w-full",autoComplete:"first_name",onChange:a,required:!0})),e.createElement("div",null,e.createElement(r,{type:"text",name:"last_name",label:"Last Name",value:t.last_name,className:"mt-1 block w-full",autoComplete:"family_name",onChange:a,required:!0})),e.createElement("div",{className:"mt-4"},e.createElement(r,{type:"email",name:"email",label:"Email Address",value:t.email,className:"mt-1 block w-full",autoComplete:"email",onChange:a,required:!0})),e.createElement("div",{className:"mt-4"},e.createElement(p,{type:"password",label:"Password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a,required:!0})),e.createElement("div",{className:"text-center space-y-2 mt-4"},e.createElement(d,{className:"block w-full",processing:o},"Update Account")))))))}export{U as default};
