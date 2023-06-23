import{u as l,r as c,R as e,H as u}from"./app.0f8ffcca.js";import{B as f}from"./Button.76a23ed0.js";import{A as d}from"./App.25786ca3.js";import{I as E}from"./Input.da2c5ed4.js";import{L as w}from"./Label.73f0b69e.js";import{V as g}from"./ValidationErrors.5ad7f571.js";import{G as b}from"./Guest.1c3fe254.js";import"./Header.61b45ba0.js";import"./helpers.178dcc0c.js";import"./moment.9709ab41.js";import"./NavLink.59880fe2.js";import"./transition.aac9cd30.js";import"./use-event-listener.f6360f6b.js";import"./Logo.66fe3582.js";import"./DropdownMenu.fc8d9874.js";import"./Avatar.f7c4c44b.js";import"./ChevronDownIcon.c26aeca4.js";import"./constants.55363d8c.js";import"./icons.91f88e70.js";function S(){const{data:r,setData:a,post:o,processing:s,errors:m,reset:n}=l({password:""});c.exports.useEffect(()=>()=>{n("password")},[]);const i=t=>{a(t.target.name,t.target.value)},p=t=>{t.preventDefault(),o(route("password.confirm"))};return e.createElement(d,null,e.createElement(u,{title:"Confirm Password"}),e.createElement(b,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Please confirm your password before continuing."),e.createElement(g,{errors:m}),e.createElement("form",{onSubmit:p},e.createElement("div",{className:"mt-4"},e.createElement(w,{forInput:"password",value:"Password"}),e.createElement(E,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:i})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(f,{className:"ml-4",processing:s},"Confirm")))))}export{S as default};