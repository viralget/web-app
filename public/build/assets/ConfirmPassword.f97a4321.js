import{u as l,r as c,R as e,H as u}from"./app.79940f90.js";import{B as f}from"./Button.a91d9d50.js";import{A as d,G as E}from"./Guest.24d3fdf5.js";import{I as w}from"./Input.252931a2.js";import{L as g}from"./Label.eb3374c7.js";import{V as b}from"./ValidationErrors.99a97103.js";import"./helpers.ea5f5bb1.js";import"./moment.9709ab41.js";import"./Header.b39ed949.js";import"./NavLink.4e287095.js";import"./transition.a21306aa.js";import"./use-event-listener.be398118.js";import"./Logo.44fbd942.js";import"./DropdownMenu.c4a9cec3.js";import"./Avatar.f952009b.js";import"./ChevronDownIcon.bf9f91d5.js";import"./constants.3ab6c266.js";import"./icons.aabcb22c.js";function k(){const{data:r,setData:a,post:o,processing:s,errors:m,reset:n}=l({password:""});c.exports.useEffect(()=>()=>{n("password")},[]);const i=t=>{a(t.target.name,t.target.value)},p=t=>{t.preventDefault(),o(route("password.confirm"))};return e.createElement(d,null,e.createElement(u,{title:"Confirm Password"}),e.createElement(E,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Please confirm your password before continuing."),e.createElement(b,{errors:m}),e.createElement("form",{onSubmit:p},e.createElement("div",{className:"mt-4"},e.createElement(g,{forInput:"password",value:"Password"}),e.createElement(w,{type:"password",name:"password",value:r.password,className:"mt-1 block w-full",isFocused:!0,onChange:i})),e.createElement("div",{className:"flex items-center justify-end mt-4"},e.createElement(f,{className:"ml-4",processing:s},"Confirm")))))}export{k as default};