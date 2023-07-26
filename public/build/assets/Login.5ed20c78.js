import{u as d,r as p,R as e}from"./app.7179bf09.js";import{A as u}from"./Auth.9b5561d9.js";import{B as f}from"./Button.e49676a1.js";import{I as g}from"./Input.ae562cd8.js";import{V as E}from"./ValidationErrors.b8ab5216.js";import{P as v}from"./PasswordInput.cb31aea6.js";import{g as b}from"./helpers.0557fa85.js";import x from"./SocialsLogin.5abb720d.js";import{d as N,P as w}from"./icons.63ea3f8d.js";import"./auth_guest.5bcdca73.js";import"./Logo.466f055b.js";import"./Label.dbd7e4d9.js";import"./Error.5c8c8e29.js";import"./EyeIcon.612c6c3e.js";import"./moment.9709ab41.js";function D(){const a=new URLSearchParams(window.location.search).get("email"),{data:r,setData:m,post:s,processing:o,errors:n,reset:c}=d({email:a!=null?a:"",password:""});p.exports.useEffect(()=>()=>{c("password")},[]);const l=t=>{m(t.target.name,b(t))},i=t=>{t.preventDefault(),s("/login")};return e.createElement(u,null,e.createElement("div",{className:"w-full"},e.createElement("h2",{className:"text-t-lg-x font-lexend  font-bold "},"Welcome back!"),e.createElement("p",{className:"mt-2 text-t-normal font-normal  text-gray-600"},"Not registered yet? "," ",e.createElement("a",{href:route("register"),className:"font-bold text-t-normal text-viralget-red"},"Create an account"))),e.createElement("div",{className:"mt-8"},e.createElement("div",null,e.createElement(x,{type:"google"}),e.createElement("div",{className:"relative mt-6"},e.createElement("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true"},e.createElement("div",{className:"w-full border-t border-gray-300"})),e.createElement("div",{className:"relative flex justify-center text-sm"},e.createElement("span",{className:"bg-white px-2 text-gray-500"},"Or")))),e.createElement(E,{errors:n}),e.createElement("form",{onSubmit:i,className:""},e.createElement("div",{className:"mt-4"},e.createElement(g,{type:"email",name:"email",label:"Email Address",value:r.email,className:"mt-1 block w-full  pl-10",autoComplete:"email",onChange:l,required:!0,icon:e.createElement(N,null)})),e.createElement("div",{className:"mt-4"},e.createElement(v,{type:"password",label:"Password",name:"password",value:r.password,className:"mt-1 block w-full pl-10",autoComplete:"new-password",onChange:l,required:!0,icon:e.createElement(w,null)})),e.createElement("div",{className:"flex items-center justify-between"},e.createElement("div",{className:"flex items-center"},e.createElement("input",{id:"remember-me",name:"remember-me",type:"checkbox",className:"h-4 w-4 rounded border-gray-300 text-viralget-red accent-viralget-red focus:ring-indigo-500"}),e.createElement("label",{htmlFor:"remember-me",className:"ml-2 block text-sm text-gray-900"},"Remember me")),e.createElement("div",{className:"text-sm"},e.createElement("a",{href:route("create.forgot.password"),className:"font-bold text-viralget-red hover:text-viralget-red"},"Forgot your password?"))),e.createElement("div",{className:"text-center  mt-space-32"},e.createElement(f,{className:"block w-full bg-viralget-red rounded-[8px]",processing:o},"Login")))))}export{D as default};
