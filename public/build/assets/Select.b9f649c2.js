import{r as l,R as r}from"./app.1fbb248a.js";import{L as N}from"./TextArea.fc055129.js";function i({name:t,value:R,className:f,autoComplete:S,disabled:n=!1,required:p,isFocused:g,onChange:b,secondary:v=!1,label:o="",id:a="",explainer:m="",options:c=[],defaultOptionText:s,defaultValue:y,capitalize:E=!0,useBorder:x=!0}){const u=l.exports.useRef();return l.exports.useEffect(()=>{g&&u.current.focus()},[]),l.exports.useEffect(()=>{},[c]),r.createElement("div",{className:"flex flex-col items-start space-y-1"},o&&r.createElement(N,{for:a||t,value:o}),m&&r.createElement("p",{className:"text-sm text-gray-400 mb-1"},m),r.createElement("select",{id:a||t,name:t,disabled:n,ref:u,className:`focus:ring-gray-400 ${E&&"capitalize"} ${x&&"border"}  indent-1 py-3 focus:border-gray-400 block w-full px-2  sm:text-sm border-gray-300 rounded-md ${v&&"bg-gray-100"} `+f+"border border-gray-300",defaultValue:y,required:p,onChange:e=>b(e)},r.createElement("option",{value:""},s!=null?s:"Select option"),c.length&&c.map((e,d)=>r.createElement("option",{value:e.value||e.value==""?e.value:e.name,className:"capitalize",key:d},e.name.replace("-"," ")))))}export{i as S};
