import{u as l,r as c,R as e,H as u}from"./app.b9917e06.js";import{B as f}from"./Button.cfdcba50.js";import{A as d}from"./App.dd44e89b.js";import{I as E}from"./Input.b93f4058.js";import{L as w}from"./Label.610c3a99.js";import{V as g}from"./ValidationErrors.1c350875.js";import{G as b}from"./Guest.09820674.js";import"./helpers.78219879.js";import"./moment.9709ab41.js";import"./Header.4d0e2024.js";import"./NavLink.5e4bad17.js";import"./Logo.8fb280c2.js";import"./DropdownMenu.4b18f85c.js";import"./Avatar.9750c799.js";import"./transition.a5983d67.js";import"./keyboard.36a7f5d3.js";import"./ChevronDownIcon.04c3e77b.js";import"./constants.74961878.js";import"./icons.140e276c.js";import"./Error.79b96e51.js";function q(){const{data:r,setData:a,post:o,processing:s,errors:m,reset:n}=l({password:""});c.exports.useEffect(()=>()=>{n("password")},[]);const i=t=>{a(t.target.name,t.target.value)},p=t=>{t.preventDefault(),o(route("password.confirm"))};return e.createElement(d,null,e.createElement(u,{title:"Confirm Password"}),e.createElement(b,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Please confirm your password before continuing."),e.createElement(g,{errors:m}),e.createElement("form",{onSubmit:p},e.createElement("div",{className:"mt-4"},e.createElement(w,{forInput:"password",value:"Password"}),e.createElement(E,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:i})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(f,{className:"ml-4",processing:s},"Confirm")))))}export{q as default};