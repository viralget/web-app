import{u as w,r as f,R as e,H as E}from"./app.d049b2b6.js";import{B as v}from"./Button.7d093bd4.js";import{A as g}from"./App.74b3e4fe.js";import{I as r}from"./Input.9e318eb1.js";import{L as o}from"./Label.f467f503.js";import{V as h}from"./ValidationErrors.7bb067a3.js";import N from"./AuthHeader.dedfedb1.js";import"./helpers.5a7a7c47.js";import"./moment.9709ab41.js";import"./Header.54ec550e.js";import"./NavLink.7ebfd9bd.js";import"./Avatar.ac3f19d7.js";import"./Logo.9ef0f0fc.js";import"./DropdownMenu.668532dc.js";import"./Badge.2fc8ec37.js";function V({token:m,email:l}){const{data:a,setData:n,post:p,processing:i,errors:c,reset:u}=w({token:m,email:l,password:"",password_confirmation:""});f.exports.useEffect(()=>()=>{u("password","password_confirmation")},[]);const s=t=>{n(t.target.name,t.target.value)},d=t=>{t.preventDefault(),p(route("password.update"))};return e.createElement(g,null,e.createElement(E,{title:"Reset Password"}),e.createElement(N,{title:"Reset Password",showAuth:!1}),e.createElement("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},e.createElement("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},e.createElement(h,{errors:c}),e.createElement("form",{onSubmit:d},e.createElement("div",null,e.createElement(o,{forInput:"email",value:"Email"}),e.createElement(r,{type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",onChange:s})),e.createElement("div",{className:"mt-4"},e.createElement(o,{forInput:"password",value:"Password"}),e.createElement(r,{type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:s})),e.createElement("div",{className:"mt-4"},e.createElement(o,{forInput:"password_confirmation",value:"Confirm Password"}),e.createElement(r,{type:"password",name:"password_confirmation",value:a.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:s})),e.createElement("div",{className:"mt-4"},e.createElement(v,{className:"w-full",processing:i},"Reset Password"))))))}export{V as default};