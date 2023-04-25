import{r as o,R as e}from"./app.d3683383.js";import{A as b}from"./AuthenticatedLayout.18578bac.js";import{E as h}from"./EmptyState.d5c7f20d.js";import{B as x}from"./ButtonBack.bfc8f8f9.js";import"./Logo.9f4e84aa.js";import"./helpers.fa82645d.js";import"./moment.9709ab41.js";import"./Container.ad9158e5.js";import"./DropdownMenu.058c5686.js";import"./Avatar.eab25eba.js";import"./Button.2acf1c12.js";import"./ChevronDownIcon.d6525fbf.js";import"./transition.5edbca99.js";import"./icons.d0e960f1.js";import"./XMarkIcon.2799caee.js";import"./Bars3CenterLeftIcon.888f2bc0.js";import"./MagnifyingGlassIcon.66e9dbdf.js";import"./use-event-listener.d0bb8610.js";import"./BoltIcon.f8961d9d.js";function $({categories:a}){const[s,c]=o.exports.useState([]),[i,p]=o.exports.useState("all"),[l,m]=o.exports.useState([]);o.exports.useEffect(()=>{d()},[]);function d(){const t=a==null?void 0:a.map(f=>f.name.charAt(0)),n=["all",...[...new Set(t)]];c(n),m(a)}function u(t){if(p(t),t==="all")m(a);else{const r=a.filter(n=>n.name.charAt(0)===t);m(r)}}return e.createElement(b,{smallHeader:!0},e.createElement("div",{className:"bg-white h-screen  mt-3 px-5"},e.createElement(x,null),e.createElement("div",{className:"flex  pl-0 mt-5 space-x-2 border-b-2 "},s==null?void 0:s.map(t=>e.createElement("button",{onClick:()=>u(String(t)),className:i===t?"px-2 border-b-2  border-b-black":"px-2"},e.createElement("span",{className:"capitalize "},t)))),(l==null?void 0:l.length)>0?e.createElement("div",{className:"mt-5 grid grid-cols-1 gap-y-8 mb-5 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},l.map((t,r)=>e.createElement("a",{href:`/search/?category=${t.name}`,key:r},e.createElement("div",{className:"relative"},e.createElement("div",{className:"relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-fuchsia-600 "},e.createElement("img",{src:t.image_url,alt:t.name,className:"h-full w-full object-cover object-center"})),e.createElement("div",{className:"absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden rounded-lg p-4"},e.createElement("div",{"aria-hidden":"true",className:"absolute inset-x-0 bottom-0 top-0 h-full bg-black opacity-50"}),e.createElement("p",{className:"relative text-lg font-semibold text-white capitalize "},t.name)))))):e.createElement(h,null)))}export{$ as default};
