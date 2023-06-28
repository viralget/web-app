import{R as e,r as i,L as n}from"./app.71a75db1.js";import{A as g}from"./Avatar.036a65c5.js";import{B as l}from"./Button.e3d75a02.js";import{q as a,W as u}from"./transition.a64233e9.js";import{C as p}from"./ChevronDownIcon.7bd09380.js";const f=[{name:"Account Settings",href:"settings"}];function m(...t){return t.filter(Boolean).join(" ")}function h({user:t,light:o=!1}){return e.createElement(a,{as:"div",className:"relative inline-block text-left"},e.createElement("div",null,t?e.createElement(a.Button,{className:"bg-transparent"},e.createElement(e.Fragment,null,e.createElement("span",{className:"sr-only"},"Open user menu"),e.createElement(e.Fragment,null,e.createElement(g,{user:t}),e.createElement("div",{className:`ml-2 text-sm  inline-flex items-center ${o?"text-white":"text-gray-800"}`},t.name," ",e.createElement(p,{className:"w-4 h-4 ml-1"})," ")))):e.createElement("div",{className:"hidden sm:flex sm:items-center sm:ml-6 space-x-2"},e.createElement(l,{bgColor:"",textColor:"text-gray-800",className:"border-gray-500 border",href:route("login"),active:route().current("login")},"Login"),e.createElement(l,{bgColor:"bg-gray-800",textColor:"text-white",href:route("register"),active:route().current("register")},"Create an Account"))),e.createElement(u,{as:i.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},e.createElement(a.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},t&&e.createElement("div",{className:"px-4 py-3"},e.createElement("p",{className:"text-sm"},"Signed in as"),e.createElement("p",{className:"truncate text-sm font-medium text-gray-900"},t.email)),e.createElement("div",{className:"py-1"},f.map((r,s)=>e.createElement(a.Item,{key:s},({active:c})=>e.createElement(n,{href:route(r.href),className:m(c?"bg-gray-100 text-gray-900":"text-gray-700","block px-4 py-2 text-sm")},r.name)))),e.createElement("div",{className:"py-1"},e.createElement(a.Item,null,({active:r})=>e.createElement(n,{href:route("logout"),className:m(r?"bg-gray-100 text-gray-900":"text-gray-700","block w-full px-4 py-2 text-left text-sm")},"Log out"))))))}export{h as D};
