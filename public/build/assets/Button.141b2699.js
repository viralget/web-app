import{R as e}from"./app.7ed4e565.js";function E({type:m="submit",size:d="large",isDark:r=!1,isLight:n,icon:f,rounded:p=!0,transparent:t,block:x=!1,usePrimary:a,bgColor:g="bg-white",textColor:y="text-gray-900",borderColor:s,className:w="",processing:o,children:c,href:i,onClick:u,disabled:B,target:l}){const b=`inline-flex items-center justify-center text-sm border shadow-sm font-semibold  leading-7 gap-x-1.5 ${x?"w-full":""} ${t||n?"text-gray-900":r||a?"text-white":y} transition-all duration-200 ${t?" bg-transparent hover:bg-gray-100":r?"bg-gray-900 hover:bg-gray-600 ":n?"bg-white":a?"bg-primary":g} border ${s||(t?"border-gray-900":" border")} rounded-md 
                        ${o&&"opacity-25"}
    ${d=="small"?"px-4 py-2":"  px-3 py-2 "}
                        `+w;return i?e.createElement("a",{href:i,className:b,onClick:u,target:l!=null?l:"_self"},e.createElement("div",{className:"flex w-full text-center justify-center focus:ring-offset-0"},c)):e.createElement("button",{type:m,className:b,disabled:o||B,onClick:u},e.createElement("div",{className:" w-full text-center justify-center items-center inline-flex"},f,o&&"Please wait..."," ",c))}export{E as B};
