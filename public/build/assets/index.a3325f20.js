import{r as s,R as t}from"./app.72495fed.js";import{A as b}from"./AuthenticatedLayout.f1d40b47.js";import{E as h}from"./EmptyState.508a7b9b.js";import{B as x}from"./ButtonBack.e0daaca4.js";import"./Logo.e4c2e698.js";import"./helpers.d5836624.js";import"./moment.9709ab41.js";import"./DropdownMenu.29c80a1b.js";import"./Avatar.8547a6a2.js";import"./Button.19e4ff97.js";import"./ChevronDownIcon.3ea8f0a6.js";import"./transition.7af25c76.js";import"./icons.5fb3b63a.js";import"./XMarkIcon.6a46a6ed.js";import"./Bars3CenterLeftIcon.7c9f79b1.js";import"./dialog.5c08b318.js";import"./BoltIcon.2fa61485.js";function H({categories:a}){const[n,c]=s.exports.useState([]),[i,p]=s.exports.useState("all"),[r,m]=s.exports.useState([]);s.exports.useEffect(()=>{d()},[]);function d(){const e=a==null?void 0:a.map(f=>f.name.charAt(0)),l=["all",...[...new Set(e)]];c(l),m(a)}function u(e){if(p(e),e==="all")m(a);else{const o=a.filter(l=>l.name.charAt(0)===e);m(o)}}return t.createElement(b,{smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-5 mb-10"},t.createElement(x,null),t.createElement("div",{className:"flex  pl-0 mt-5 space-x-2 border-b-2 "},n==null?void 0:n.map(e=>t.createElement("button",{onClick:()=>u(String(e)),className:i===e?"px-2 border-b-2  border-b-black":"px-2"},t.createElement("span",{className:"capitalize "},e)))),(r==null?void 0:r.length)>0?t.createElement("div",{className:"mt-5 grid grid-cols-1 gap-y-8 mb-5 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},r.map((e,o)=>{var l;return t.createElement("a",{href:`/search/?category=${e.name}`,key:o},t.createElement("div",{className:"relative"},t.createElement("div",{className:"relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-fuchsia-600 "},t.createElement("img",{src:(l=e.image_url)!=null?l:"/images/categories/"+e.name+".png",alt:e.name,className:"h-full w-full object-cover object-center"})),t.createElement("div",{className:"absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden rounded-lg p-4"},t.createElement("div",{"aria-hidden":"true",className:"absolute inset-x-0 bottom-0 top-0 h-full bg-black opacity-20"}),t.createElement("p",{className:"relative text-lg font-bold text-white capitalize  "},e.name))))})):t.createElement(h,null)))}export{H as default};
