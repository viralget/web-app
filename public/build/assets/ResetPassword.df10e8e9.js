import{u as g,r as x,R as e}from"./app.7fa3bd1a.js";import{B as E}from"./Button.7add666f.js";import{I as n}from"./Input.108a27f6.js";import{L as m}from"./Label.69cb16f0.js";import{V as v}from"./ValidationErrors.6b1bf1d5.js";import{A as N}from"./Auth.c4b46c0f.js";import{P as l}from"./icons.4ebce0a2.js";import"./helpers.97e11027.js";import"./moment.9709ab41.js";import"./Logo.cfe81f18.js";function L({token:c,email:a}){const s=new URLSearchParams(window.location.search).get("status"),{data:r,setData:p,post:u,processing:d,errors:i,reset:w}=g({token:c,email:a,password:"",password_confirmation:""});x.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const o=t=>{p(t.target.name,t.target.value)},f=t=>{t.preventDefault(),u(route("password.update"))};return e.createElement(N,{type:s=="success"?"password-success":"newPassword"},s=="success"?e.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("h2",{className:"text-t-lg-x font-lexend  font-bold "},"You\u2019ve successfully updated your password!"),e.createElement("span",{className:"mt-space-16 text-t-xsx font-medium text-viralget-grey"}," Now you can log in to your ViralGet account"),e.createElement("div",{className:"mt-4"},e.createElement("a",{href:route("login",{email:a}),className:"block w-full bg-viralget-red rounded-[8px] text-white py-space-10  text-center"},"Log in"))):e.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("h2",{className:"text-t-lg-x font-lexend  font-bold "},"Create new password"),e.createElement("span",{className:"mt-space-12 text-t-xsx font-medium text-viralget-grey"}," Securely access your account by creating a new log in password"),e.createElement(v,{errors:i}),e.createElement("form",{onSubmit:f,className:"mt-space-40"},e.createElement("div",{className:"mt-4"},e.createElement(m,{forInput:"password",value:"Enter new password"}),e.createElement(n,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full  pl-10",autoComplete:"new-password",isFocused:!0,onChange:o,icon:e.createElement(l,null),placeholder:"Create your new password"})),e.createElement("div",{className:"mt-4"},e.createElement(m,{forInput:"password_confirmation",value:"Confirm new password"}),e.createElement(n,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full  pl-10",autoComplete:"new-password",onChange:o,icon:e.createElement(l,null),placeholder:"Confirm your new password"})),e.createElement("div",{className:"mt-4"},e.createElement(E,{className:"block w-full bg-viralget-red rounded-[8px]",processing:d},"Reset Password")))))}export{L as default};
