import{R as t}from"./app.996d016e.js";import{c as b}from"./helpers.48db9924.js";function k({user:a,userName:n,url:l,size:g,className:i,isEditable:r,isDark:p}){var m,f,d;let e;switch(g){case"xlarge":e="w-24 h-24";break;case"large":e="w-12 h-12";break;default:e="w-8 h-8";break}const c=(m=n!=null?n:a==null?void 0:a.first_name)!=null?m:a==null?void 0:a.email,o=(f=l!=null?l:a==null?void 0:a.avatar)!=null?f:a==null?void 0:a.logo_url;return t.createElement(t.Fragment,null,t.createElement("div",{className:`relative inline-block ${r&&"cursor-pointer"}`},o?t.createElement("img",{className:`inline-block rounded-full ${e} ${i}`,src:o,alt:""}):t.createElement("span",{className:b("inline-flex items-center justify-center rounded-full",p?"bg-secondary":"bg-gray-800",i,e)},t.createElement("span",{className:"text-sm font-medium leading-none text-white"},(d=c==null?void 0:c.toUpperCase())==null?void 0:d.charAt(0)))))}export{k as A};