import{u,r as p,R as e,L as d}from"./app.0ebeabc9.js";import{A as f}from"./Auth.5df41adb.js";import{B as E,g}from"./Button.e1b4d650.js";import{I as m}from"./Input.39dbe42d.js";import{V as v}from"./ValidationErrors.4a82c570.js";import{P as N}from"./PasswordInput.68c90e8e.js";import{L as w}from"./Logo.004f1c1c.js";import y from"./SocialsLogin.c27402f9.js";import"./moment.0d47bed0.js";function I(){const{data:t,setData:r,post:n,processing:s,errors:o,reset:c}=u({company_name:"",first_name:"",last_name:"",email:"",password:""});p.exports.useEffect(()=>()=>{c("password","password_confirmation")},[]);const a=l=>{r(l.target.name,g(l))},i=l=>{l.preventDefault(),n("/register")};return e.createElement(f,null,e.createElement("div",null,e.createElement(d,{href:"/"},e.createElement(w,null)),e.createElement("h2",{className:"mt-6 text-3xl font-bold tracking-tight text-gray-900"},"Sign in to your account"),e.createElement("p",{className:"mt-2 text-sm text-gray-600"},"Or"," ",e.createElement("a",{href:route("login"),className:"font-medium text-fuchsia-600 hover:text-fuchsia-500"},"Login to continue"))),e.createElement("div",{className:"mt-8"},e.createElement("div",null,e.createElement(y,null),e.createElement("div",{className:"relative mt-6"},e.createElement("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true"},e.createElement("div",{className:"w-full border-t border-gray-300"})),e.createElement("div",{className:"relative flex justify-center text-sm"},e.createElement("span",{className:"bg-white px-2 text-gray-500"},"Or continue with")))),e.createElement(v,{errors:o}),e.createElement("form",{onSubmit:i,className:"space-y-2"},e.createElement("div",null,e.createElement(m,{type:"text",name:"company_name",label:"Company Name",value:t.company_name,className:"mt-1 block w-full",autoComplete:"company_name",onChange:a,placeholder:"Optional"})),e.createElement("div",null,e.createElement(m,{type:"text",name:"first_name",label:"First Name",value:t.first_name,className:"mt-1 block w-full",autoComplete:"first_name",onChange:a,required:!0})),e.createElement("div",null,e.createElement(m,{type:"text",name:"last_name",label:"Last Name",value:t.last_name,className:"mt-1 block w-full",autoComplete:"family_name",onChange:a,required:!0})),e.createElement("div",{className:"mt-4"},e.createElement(m,{type:"email",name:"email",label:"Email Address",value:t.email,className:"mt-1 block w-full",autoComplete:"email",onChange:a,required:!0})),e.createElement("div",{className:"mt-4"},e.createElement(N,{type:"password",label:"Password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a,required:!0})),e.createElement("div",{className:"text-center space-y-2 mt-4"},e.createElement(E,{className:"block w-full",processing:s},"Create account")))))}export{I as default};
