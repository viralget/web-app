import{R as e,r as b}from"./app.b0d4b6c9.js";import{L as g}from"./Label.60e52bfe.js";const y="block text-md text-gray-500 w-full appearance-none rounded-md border border-gray-200/90 p-3 py-3 placeholder-gray-400 focus:border-black focus:ring-black";function h(r){const{type:s="text",label:t,explainer:a,id:l,name:c,value:n,className:x,autoComplete:u,required:f,isFocused:d,onChange:i,placeholder:p,defaultValue:m,icon:o}=r;return e.createElement("div",{className:"relative"},o&&e.createElement("div",{className:"absolute  bottom-4 left-3 capitalize"},o),e.createElement("div",{className:" flex flex-col items-start w-full space-y-1"},t&&e.createElement(g,{for:l||c,value:t}),a&&e.createElement("p",{className:"text-sm text-gray-400 mb-1"},a),e.createElement("input",{type:s,name:c,value:n,placeholder:p,defaultValue:m,className:y,autoComplete:u,required:f,onChange:E=>i(E),...r})))}function k({type:r="text",label:s,explainer:t,id:a,name:l,value:c,className:n,autoComplete:x,required:u,isFocused:f,onChange:d,placeholder:i,defaultValue:p}){const m=b.exports.useRef();return b.exports.useEffect(()=>{f&&m.current.focus()},[]),e.createElement("div",{className:"flex flex-col items-start w-full space-y-1"},s&&e.createElement("label",{htmlFor:a||l,className:"block text-sm font-medium text-gray-700 mb-1"},s),t&&e.createElement("p",{className:"text-sm text-gray-400 mb-1"},t),e.createElement("textarea",{type:r,name:l,value:c,placeholder:i,defaultValue:p,className:y+" "+n,ref:m,rows:10,autoComplete:x,required:u,onChange:o=>d(o)}))}export{h as I,k as T,y as i};
