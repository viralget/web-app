import{u as p,R as e}from"./app.cd2afafc.js";import{t as d}from"./Toast.bd76ed2e.js";import{I as m}from"./Input.911b8803.js";import{T as f}from"./TextArea.12771194.js";import{B as y}from"./Button.cf384359.js";import{g}from"./helpers.94bbc4f4.js";import{V as E}from"./ValidationErrors.c18c2c74.js";import{U as h,e as v,g as b}from"./icons.c01f0542.js";import"./Label.7cae29ac.js";import"./moment.9709ab41.js";function U(){const{data:a,setData:o,post:r,processing:n,errors:s,reset:c}=p({full_name:"",email:"",company_name:"",message:""}),t=l=>{o(l.target.name,g(l))};function u(l){l.preventDefault(),r(route("send.contact"),{preserveScroll:!0,onSuccess:()=>{d.success("Submitted successfully, one of our team will reach out to you shorthly!"),c()},onError:i=>{console.log("error:",i)}})}return e.createElement("div",{className:"md:p-20 p-5 md:pt-10  md:mt-0 md:w-[50%] mt-5 md:h-screen"},e.createElement("div",{className:"relative flex  text-sm  mb-3"},e.createElement("span",{className:" text-black  text-2xl font-bold"},"Contact Us")),e.createElement("div",null,e.createElement(E,{errors:s})),e.createElement("form",{onSubmit:u,className:"space-y-3 py-5"},e.createElement(m,{type:"text",name:"full_name",label:"Full Name",value:a.full_name,className:"mt-1 block h-10  pl-10 w-full",autoComplete:"full_name",placeholder:"Enter your full name",onChange:t,icon:e.createElement(h,null)}),e.createElement(m,{type:"text",name:"email",label:"Email",value:a.email,className:"mt-1 block  h-10  pl-10 w-full",autoComplete:"email",placeholder:"Enter your email",onChange:t,icon:e.createElement(v,null)}),e.createElement(m,{type:"text",name:"company_name",label:"Company",value:a.company_name,className:"mt-1 block h-10  pl-10 w-full",autoComplete:"company_name",placeholder:"Enter your company name",onChange:t,icon:e.createElement(b,null)}),e.createElement("div",{className:"relative"},e.createElement(f,{type:"text",name:"message",label:"Message",value:a.message,className:"mt-1 block h-[8rem] w-full",autoComplete:"message",placeholder:"Enter your message",onChange:t})),e.createElement("div",null,e.createElement("span",{className:"text-viralget-grey text-xs"},"By submitting this form, you agree to the processing of your personal data by ViralGet as described in the Privacy Policy.")),e.createElement("div",{className:"text-center space-y-2 mt-4"},e.createElement(y,{className:"block rounded-sm bg-viralget-red w-full",processing:n},"Send"))))}export{U as default};
