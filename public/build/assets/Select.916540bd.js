import{r as l,R as r}from"./app.bfe5c952.js";import{L as d}from"./Label.97f51d5a.js";function z({name:t,value:R,className:f,autoComplete:S,disabled:n=!1,required:p,isFocused:g,onChange:b,secondary:v=!1,label:o="",id:a="",explainer:m="",options:c=[],defaultOptionText:s,defaultValue:y,capitalize:E=!0,useBorder:x=!0}){const u=l.exports.useRef();return l.exports.useEffect(()=>{g&&u.current.focus()},[]),l.exports.useEffect(()=>{},[c]),r.createElement("div",{className:"flex flex-col items-start space-y-1"},o&&r.createElement(d,{for:a||t,value:o}),m&&r.createElement("p",{className:"text-sm text-gray-400 mb-1"},m),r.createElement("select",{id:a||t,name:t,disabled:n,ref:u,className:`focus:ring-gray-400 ${E&&"capitalize"} ${x&&"border"} px-2 py-3 focus:border-gray-400 block w-full  sm:text-sm border-gray-300 rounded-md ${v&&"bg-gray-100"} `+f+"border border-gray-300",defaultValue:y,required:p,onChange:e=>b(e)},r.createElement("option",{value:""},s!=null?s:"Select option"),c.length&&c.map((e,N)=>r.createElement("option",{value:e.value||e.value==""?e.value:e.name,className:"capitalize",key:N},e.name.replace("-"," ")))))}export{z as S};