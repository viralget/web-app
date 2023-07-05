import{R as e,u as d}from"./app.72495fed.js";import{B as p}from"./Button.19e4ff97.js";import{c as f}from"./helpers.d5836624.js";import"./constants.99053707.js";import{I as g}from"./Input.8ea9e917.js";import{V as E}from"./ValidationErrors.f43820bd.js";import{L as x}from"./Label.c910ccaa.js";import{C as h}from"./CheckIcon.30573f47.js";import{A as v}from"./Auth.99c14687.js";import{d as w}from"./icons.5fb3b63a.js";import{B as N}from"./ButtonBack.e0daaca4.js";import"./moment.9709ab41.js";import"./auth_guest.5bcdca73.js";import"./Logo.e4c2e698.js";s.defaultProps={message:null,errors:{}};function s(a){let{message:t}=a;return e.createElement("div",{className:"rounded-md bg-green-50 p-4 my-4"},e.createElement("div",{className:"flex"},e.createElement("div",{className:"flex-shrink-0"},e.createElement(h,{className:"h-5 w-5 text-green-400","aria-hidden":"true"})),e.createElement("div",{className:"ml-3"},t&&e.createElement("h3",{className:"text-sm font-medium text-green-800"},t))))}function j({status:a}){const t=new URLSearchParams(window.location.search).get("email"),{data:n,setData:l,post:o,processing:c,errors:i}=d({email:t!=null?t:""}),u=r=>{l(r.target.name,r.target.value)},m=r=>{r.preventDefault(),o(route("sendMail.forgot.password"))};return e.createElement(v,{type:t?"forgot-success":"forgot"},e.createElement("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("h2",{className:"text-t-lg-x font-lexend  font-bold "},t?"Check your inbox!":"Forgot password?"),e.createElement("div",{className:"mt-space-12 "},t?e.createElement(e.Fragment,null,e.createElement("span",{className:"text-t-xsx font-medium text-viralget-gray-400"},"We\u2019ve sent you an email with instructions on how to reset your password to"),e.createElement("span",{className:"text-t-xsx font-bold text-viralget-grey"}," ",t)):e.createElement("span",{className:"text-t-xsx font-medium text-viralget-grey"}," Sometimes it happens to everyone")),e.createElement("div",{className:"mt-space-40"},e.createElement("span",{className:"font-normal text-t-normal text-viralget-gray-400 "},t?"Didn\u2019t get the email?":"Enter the email connected with your account and we will send you an email with instructions how to reset your password.")),a&&e.createElement(s,{message:a}),e.createElement(E,{errors:i}),e.createElement("form",{onSubmit:m},t?null:e.createElement(e.Fragment,null,e.createElement(x,{value:"Enter email address"}),e.createElement(g,{type:"text",name:"email",value:n.email,className:"mt-1 block w-full  pl-10",isFocused:!0,onChange:u,icon:e.createElement(w,null)})),e.createElement("div",{className:f("flex items-center justify-end ",t?"mt-space-20":"mt-space-32")},e.createElement(p,{className:"block w-full bg-viralget-red rounded-[8px]",processing:c,onClick:m},t?"Send me another email, please":"Send instructions")),t?null:e.createElement("div",{className:"mt-space-20"},e.createElement(N,{title:"Go back and try one more time"})))))}export{j as default};
