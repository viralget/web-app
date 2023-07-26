import{u as l,r as c,R as e,H as u}from"./app.7179bf09.js";import{B as f}from"./Button.e49676a1.js";import{A as d}from"./App.51554eaf.js";import{I as E}from"./Input.ae562cd8.js";import{L as w}from"./Label.dbd7e4d9.js";import{V as g}from"./ValidationErrors.b8ab5216.js";import{G as b}from"./Guest.8387e54d.js";import"./helpers.0557fa85.js";import"./moment.9709ab41.js";import"./Header.7a51fd3a.js";import"./NavLink.bf2953a2.js";import"./Logo.466f055b.js";import"./DropdownMenu.02b2b6f4.js";import"./Avatar.ed1856cd.js";import"./transition.c8990606.js";import"./keyboard.6d843577.js";import"./ChevronDownIcon.e12a2f77.js";import"./constants.48562a6a.js";import"./icons.63ea3f8d.js";import"./Error.5c8c8e29.js";function q(){const{data:r,setData:a,post:o,processing:s,errors:m,reset:n}=l({password:""});c.exports.useEffect(()=>()=>{n("password")},[]);const i=t=>{a(t.target.name,t.target.value)},p=t=>{t.preventDefault(),o(route("password.confirm"))};return e.createElement(d,null,e.createElement(u,{title:"Confirm Password"}),e.createElement(b,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Please confirm your password before continuing."),e.createElement(g,{errors:m}),e.createElement("form",{onSubmit:p},e.createElement("div",{className:"mt-4"},e.createElement(w,{forInput:"password",value:"Password"}),e.createElement(E,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:i})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(f,{className:"ml-4",processing:s},"Confirm")))))}export{q as default};