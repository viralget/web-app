import{R as e,r as d}from"./app.996d016e.js";function y({forInput:s,value:t,className:a="",children:r}){return e.createElement("label",{htmlFor:s,className:"block text-sm text-[#748094] mb-1"+a},t||r)}const E="block text-md text-gray-500 w-full appearance-none rounded-md border border-gray-200/90 p-3 py-3 placeholder-gray-400 focus:border-black focus:ring-black";function g({type:s="text",label:t,explainer:a,id:r,name:l,value:m,className:o,autoComplete:n,required:u,isFocused:i,onChange:f,placeholder:x,defaultValue:b,icon:c}){return e.createElement("div",{className:"relative"},c&&e.createElement("div",{className:"absolute  bottom-4 left-3 "},c),e.createElement("div",{className:" flex flex-col items-start w-full space-y-1"},t&&e.createElement(y,{for:r||l,value:t}),a&&e.createElement("p",{className:"text-sm text-gray-400 mb-1"},a),e.createElement("input",{type:s,name:l,value:m,placeholder:x,defaultValue:b,className:E+" "+o,autoComplete:n,required:u,onChange:p=>f(p)})))}function h({type:s="text",label:t,explainer:a,id:r,name:l,value:m,className:o,autoComplete:n,required:u,isFocused:i,onChange:f,placeholder:x,defaultValue:b}){const c=d.exports.useRef();return d.exports.useEffect(()=>{i&&c.current.focus()},[]),e.createElement("div",{className:"flex flex-col items-start w-full space-y-1"},t&&e.createElement("label",{htmlFor:r||l,className:"block text-sm font-medium text-gray-700 mb-1"},t),a&&e.createElement("p",{className:"text-sm text-gray-400 mb-1"},a),e.createElement("textarea",{type:s,name:l,value:m,placeholder:x,defaultValue:b,className:E+" "+o,ref:c,rows:10,autoComplete:n,required:u,onChange:p=>f(p)}))}export{g as I,y as L,h as T,E as i};
