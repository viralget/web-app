import{R as e,r as i}from"./app.f189a042.js";import{q as a,W as s}from"./transition.51d39479.js";function l(...t){return t.filter(Boolean).join(" ")}function u({buttonName:t,buttonIcon:n,children:r,className:o}){return e.createElement(a,{as:"div",className:"relative inline-block text-left"},e.createElement("div",null,e.createElement(a.Button,{className:l("inline-flex w-full  justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300",o)},e.createElement("div",{className:"flex items-center justify-center"},n),t)),e.createElement(s,{as:i.exports.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},e.createElement(a.Items,{className:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},r)))}export{u as M};
