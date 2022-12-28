import{u as i,r as u,R as e}from"./app.0ebeabc9.js";import{A as d}from"./Auth.5df41adb.js";import{B as p,g as f}from"./Button.e1b4d650.js";import{I as E}from"./Input.39dbe42d.js";import{V as g}from"./ValidationErrors.4a82c570.js";import{P as v}from"./PasswordInput.68c90e8e.js";import{L as N}from"./Logo.004f1c1c.js";import w from"./SocialsLogin.c27402f9.js";import"./moment.0d47bed0.js";function P(){const{data:a,setData:s,post:l,processing:m,errors:n,reset:o}=i({email:"",password:""});u.exports.useEffect(()=>()=>{o("password")},[]);const r=t=>{s(t.target.name,f(t))},c=t=>{t.preventDefault(),l("/login")};return e.createElement(d,null,e.createElement("div",null,e.createElement(N,null),e.createElement("h2",{className:"mt-6 text-3xl font-bold tracking-tight text-gray-900"},"Sign in to your account"),e.createElement("p",{className:"mt-2 text-sm text-gray-600"},"Or"," ",e.createElement("a",{href:"/register",className:"font-medium text-fuchsia-600 hover:text-fuchsia-500"},"Create an account"))),e.createElement("div",{className:"mt-8"},e.createElement("div",null,e.createElement(w,null),e.createElement("div",{className:"relative mt-6"},e.createElement("div",{className:"absolute inset-0 flex items-center","aria-hidden":"true"},e.createElement("div",{className:"w-full border-t border-gray-300"})),e.createElement("div",{className:"relative flex justify-center text-sm"},e.createElement("span",{className:"bg-white px-2 text-gray-500"},"Or continue with")))),e.createElement(g,{errors:n}),e.createElement("form",{onSubmit:c,className:"space-y-2"},e.createElement("div",{className:"mt-4"},e.createElement(E,{type:"email",name:"email",label:"Email Address",value:a.email,className:"mt-1 block w-full",autoComplete:"email",onChange:r,required:!0})),e.createElement("div",{className:"mt-4"},e.createElement(v,{type:"password",label:"Password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:r,required:!0})),e.createElement("div",{className:"text-center space-y-2 mt-4"},e.createElement(p,{className:"block w-full",processing:m},"Login")))))}export{P as default};
