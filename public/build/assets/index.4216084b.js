import{r as s,R as e}from"./app.2148b6e9.js";import{A as h}from"./AuthenticatedLayout.6d0c63b6.js";import{E as b}from"./EmptyState.5b27ee3f.js";import"./Logo.3022f7e2.js";import"./helpers.ccb7bbea.js";import"./moment.9709ab41.js";import"./Container.74fbd380.js";import"./DropdownMenu.d4a8fc50.js";import"./Avatar.c55f5105.js";import"./Button.500114af.js";import"./ChevronDownIcon.7925e1a4.js";import"./transition.d973e996.js";import"./XMarkIcon.a3033c15.js";import"./use-event-listener.dd7f7c61.js";import"./ScaleIcon.da2ab7bd.js";import"./UsersIcon.664e1341.js";function B({categories:a}){const[n,m]=s.exports.useState([]),[i,p]=s.exports.useState("all"),[r,o]=s.exports.useState([]);s.exports.useEffect(()=>{d();const t=a.filter(l=>l.name.charAt(0)==="F");console.log("cate:",t)},[]);function d(){const t=a==null?void 0:a.map(f=>f.name.charAt(0)),c=["all",...[...new Set(t)]];m(c),o(a)}function u(t){if(p(t),t==="all")o(a);else{const l=a.filter(c=>c.name.charAt(0)===t);o(l)}}return e.createElement(h,{title:"Search through our database of 33.5m+ influencers",smallHeader:!0},e.createElement("div",{className:"bg-gray-50 h-screen  mt-3 px-5"},e.createElement("button",{className:"flex   ",onClick:()=>window.history.back()},e.createElement("div",{className:""},e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M10.4698 13.0302C10.7626 12.7374 10.7626 12.2626 10.4697 11.9697L7.93357 9.43357C7.84889 9.34889 7.84889 9.2116 7.93357 9.12693L10.4698 6.59075C10.7626 6.2979 10.7626 5.8231 10.4698 5.53025C10.1769 5.2374 9.7021 5.2374 9.40925 5.53025L6.04836 8.89114C5.83346 9.10604 5.83346 9.45446 6.04836 9.66936L9.40925 13.0302C9.7021 13.3231 10.1769 13.3231 10.4698 13.0302Z",fill:"#3E4555"}))),e.createElement("span",{className:"text-xs "},"Back")),e.createElement("div",{className:"flex  pl-0 mt-5 space-x-2 border-b-2 "},n==null?void 0:n.map(t=>e.createElement("button",{onClick:()=>u(String(t)),className:i===t?"px-2 border-b-2  border-b-black":"px-2"},e.createElement("span",{className:"capitalize "},t)))),(r==null?void 0:r.length)>0?e.createElement("div",{className:"mt-5 grid grid-cols-1 gap-y-8 mb-5 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},r.map((t,l)=>e.createElement("a",{href:"#",key:l},e.createElement("div",{className:"relative"},e.createElement("div",{className:"relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-fuchsia-600 "},e.createElement("img",{src:t.imageSrc,alt:t.imageAlt,className:"h-full w-full object-cover object-center"})),e.createElement("div",{className:"absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden rounded-lg p-4"},e.createElement("div",{"aria-hidden":"true",className:"absolute inset-x-0 bottom-0 top-0 h-full bg-black opacity-50"}),e.createElement("p",{className:"relative text-lg font-semibold text-white capitalize "},t.name)))))):e.createElement(b,null)))}export{B as default};
