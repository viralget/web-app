import{u as l,r as c,R as e,e as u}from"./app.cc07e7b9.js";import{B as f}from"./Button.5e698576.js";import{A as d}from"./App.ca058d5d.js";import{I as E}from"./Input.61401512.js";import{L as w}from"./Label.cb6fd0e5.js";import{V as g}from"./ValidationErrors.4e35c008.js";import{G as b}from"./Guest.c7962355.js";import"./helpers.2e537a8b.js";import"./moment.9709ab41.js";import"./Header.68890ae5.js";import"./NavLink.98bbd975.js";import"./Logo.e9ffbce2.js";import"./DropdownMenu.e38eddb9.js";import"./Avatar.2bebdc68.js";import"./transition.f0c9e4b4.js";import"./keyboard.ada55ee2.js";import"./ChevronDownIcon.800126ac.js";import"./constants.91c69332.js";import"./Error.882d4675.js";function S(){const{data:r,setData:a,post:o,processing:s,errors:m,reset:n}=l({password:""});c.exports.useEffect(()=>()=>{n("password")},[]);const i=t=>{a(t.target.name,t.target.value)},p=t=>{t.preventDefault(),o(route("password.confirm"))};return e.createElement(d,null,e.createElement(u,{title:"Confirm Password"}),e.createElement(b,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Please confirm your password before continuing."),e.createElement(g,{errors:m}),e.createElement("form",{onSubmit:p},e.createElement("div",{className:"mt-4"},e.createElement(w,{forInput:"password",value:"Password"}),e.createElement(E,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:i})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(f,{className:"ml-4",processing:s},"Confirm")))))}export{S as default};
