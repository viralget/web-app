import{r as s,R as t}from"./app.7179bf09.js";import{A as b}from"./AuthenticatedLayout.e810a987.js";import{E as h}from"./EmptyState.dac176c7.js";import{B as x}from"./ButtonBack.d61501bc.js";import"./Logo.466f055b.js";import"./helpers.0557fa85.js";import"./moment.9709ab41.js";import"./DropdownMenu.b9126ff9.js";import"./Avatar.ed1856cd.js";import"./Button.e49676a1.js";import"./ChevronDownIcon.e12a2f77.js";import"./transition.c8990606.js";import"./keyboard.6d843577.js";import"./icons.63ea3f8d.js";import"./XMarkIcon.b673d200.js";import"./Bars3CenterLeftIcon.a04a926a.js";import"./dialog.b6f54463.js";import"./description.44a2c872.js";import"./BoltIcon.481f7d00.js";function $({categories:a}){const[m,c]=s.exports.useState([]),[i,p]=s.exports.useState("all"),[r,n]=s.exports.useState([]);s.exports.useEffect(()=>{d()},[]);function d(){const e=a==null?void 0:a.map(f=>f.name.charAt(0)),l=["all",...[...new Set(e)]];c(l),n(a)}function u(e){if(p(e),e==="all")n(a);else{const o=a.filter(l=>l.name.charAt(0)===e);n(o)}}return t.createElement(b,{smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-5 mb-10"},t.createElement(x,null),t.createElement("div",{className:"flex  pl-0 mt-5 space-x-2 border-b-2 "},m==null?void 0:m.map(e=>t.createElement("button",{onClick:()=>u(String(e)),className:i===e?"px-2 border-b-2  border-b-black":"px-2"},t.createElement("span",{className:"capitalize "},e)))),(r==null?void 0:r.length)>0?t.createElement("div",{className:"mt-5 grid grid-cols-1 gap-y-8 mb-5 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},r.map((e,o)=>{var l;return t.createElement("a",{href:`/search/?category=${e.name}`,key:o},t.createElement("div",{className:"relative"},t.createElement("div",{className:"relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-fuchsia-600 "},t.createElement("img",{src:(l=e.image_url)!=null?l:"/images/categories/"+e.name+".png",alt:e.name,className:"h-full w-full object-cover object-center"})),t.createElement("div",{className:"absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden rounded-lg p-4"},t.createElement("div",{"aria-hidden":"true",className:"absolute inset-x-0 bottom-0 top-0 h-full bg-black opacity-20"}),t.createElement("p",{className:"relative text-lg font-bold text-white capitalize  "},e.name))))})):t.createElement(h,null)))}export{$ as default};
