import{u as g,r as x,R as e,P as n}from"./app.cc07e7b9.js";import{B as E}from"./Button.5e698576.js";import{I as m}from"./Input.61401512.js";import{L as l}from"./Label.cb6fd0e5.js";import{V as v}from"./ValidationErrors.4e35c008.js";import{A as N}from"./Auth.cf1530a7.js";import"./helpers.2e537a8b.js";import"./moment.9709ab41.js";import"./Error.882d4675.js";import"./auth_guest.5bcdca73.js";import"./Logo.e9ffbce2.js";function V({token:c,email:a}){const s=new URLSearchParams(window.location.search).get("status"),{data:r,setData:p,post:u,processing:d,errors:i,reset:w}=g({token:c,email:a,password:"",password_confirmation:""});x.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const o=t=>{p(t.target.name,t.target.value)},f=t=>{t.preventDefault(),u(route("password.update"))};return e.createElement(N,{type:s=="success"?"password-success":"newPassword"},s=="success"?e.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("h2",{className:"text-t-lg-x font-lexend  font-bold "},"You\u2019ve successfully updated your password!"),e.createElement("span",{className:"mt-space-16 text-t-xsx font-medium text-viralget-grey"}," Now you can log in to your ViralGet account"),e.createElement("div",{className:"mt-4"},e.createElement("a",{href:route("login",{email:a}),className:"block w-full bg-viralget-red rounded-[8px] text-white py-space-10  text-center"},"Log in"))):e.createElement("div",{className:"sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("h2",{className:"text-t-lg-x font-lexend  font-bold "},"Create new password"),e.createElement("span",{className:"mt-space-12 text-t-xsx font-medium text-viralget-grey"}," Securely access your account by creating a new log in password"),e.createElement(v,{errors:i}),e.createElement("form",{onSubmit:f,className:"mt-space-40"},e.createElement("div",{className:"mt-4"},e.createElement(l,{forInput:"password",value:"Enter new password"}),e.createElement(m,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full  pl-10",autoComplete:"new-password",isFocused:!0,onChange:o,icon:e.createElement(n,null),placeholder:"Create your new password"})),e.createElement("div",{className:"mt-4"},e.createElement(l,{forInput:"password_confirmation",value:"Confirm new password"}),e.createElement(m,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full  pl-10",autoComplete:"new-password",onChange:o,icon:e.createElement(n,null),placeholder:"Confirm your new password"})),e.createElement("div",{className:"mt-4"},e.createElement(E,{className:"block w-full bg-viralget-red rounded-[8px]",processing:d},"Reset Password")))))}export{V as default};
