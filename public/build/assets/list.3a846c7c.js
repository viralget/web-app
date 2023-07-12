import{r as s,R as e}from"./app.90e9de9b.js";import{E as C}from"./EmptyState.22465a65.js";import{T as H}from"./Typography.888963aa.js";import{p as S}from"./api.192dd29f.js";import{t as p}from"./Toast.54645cb4.js";import z from"./listBox.c8727248.js";import{M}from"./Modal.f07e37f2.js";import{B as F}from"./Button.7bbf185c.js";import"./BoltIcon.9174e4f6.js";import"./helpers.8a5284fe.js";import"./moment.9709ab41.js";function f(...m){return m.filter(Boolean).join(" ")}function $({influencerList:m,profiles:E}){const[g,_]=s.exports.useState(""),[y,v]=s.exports.useState(!1),[N,h]=s.exports.useState(!1),j=s.exports.useRef(),[x,L]=s.exports.useState(!1),[b,I]=s.exports.useState(!1),[n,k]=s.exports.useState([]),[B,V]=s.exports.useState([]),[d,r]=s.exports.useState(!1);function w(t){v(!y),V(t)}const u=E.filter(t=>t.influencer).map(t=>t.influencer);console.log({profiles:E,influencers:u});function P(){k(x||b?[]:u),L(!x&&!b),I(!1)}const R=(t,l)=>{k(t.target.checked?[...n,l]:n.filter(a=>a.id!==l.id))};async function T(t){var c,o,i;t.preventDefault(),r(!0);const l={name:g},a=await S(route("create.list"),l,!0);(c=a==null?void 0:a.data)!=null&&c.status?(p.success((o=a==null?void 0:a.data)==null?void 0:o.message),r(!1),setTimeout(function(){window.location.reload()},2e3)):(p.error((i=a==null?void 0:a.data)==null?void 0:i.message),r(!1)),h(!1)}async function A(){var c,o,i;r(!0);const l={data:n.map(D=>({id:D.id})),list_id:B.id},a=await S(route("influencers.list"),l,!0);(c=a==null?void 0:a.data)!=null&&c.status?(v(!1),p.success((o=a==null?void 0:a.data)==null?void 0:o.message),setTimeout(function(){window.location.reload()},2e3),r(!1)):(p.error((i=a==null?void 0:a.data)==null?void 0:i.message),r(!1))}return e.createElement("div",{className:"py-2  mt-16"},e.createElement(M,{iDisplay:y,handleModal:()=>w()},e.createElement("div",{className:"bg-white  rounded-md relative  w-full "},e.createElement("div",{className:f("w-full bottom-0   p-4 flex  justify-center items-center z-20 absolute",n.length>0?"block":"hidden")},e.createElement("button",{disabled:d,onClick:()=>A(),className:f("flex space-x-1 w-full py-3 justify-center bg-viralget-red rounded-md",d?"opacity-10":"")},e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_19399)"},e.createElement("path",{d:"M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z",stroke:"white","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M2.25 15.75V14.25C2.25 13.4544 2.56607 12.6913 3.12868 12.1287C3.69129 11.5661 4.45435 11.25 5.25 11.25H8.25C9.04565 11.25 9.80871 11.5661 10.3713 12.1287C10.9339 12.6913 11.25 13.4544 11.25 14.25V15.75",stroke:"white","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M12 8.25H16.5M14.25 6V10.5",stroke:"white","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_19399"},e.createElement("rect",{width:"18",height:"18",fill:"white"})))),e.createElement("span",{className:"text-white"},"Add influencer"))),e.createElement("div",{className:"flex p-2  justify-between ml-5"},e.createElement("div",null,e.createElement("span",{className:"text-black font-bold"},"Select Influencer")),e.createElement("button",{onClick:()=>w()},e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_50325)"},e.createElement("path",{d:"M13.0625 5L5 13.0625",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M13.0625 13.0625L5 5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_50325"},e.createElement("rect",{width:"18",height:"18",fill:"white"})))))),e.createElement("div",{className:"mt-4  overflow-y-scroll  h-80"},u.length>0?e.createElement("table",{className:"min-w-full table-fixed divide-y divide-gray-300  "},e.createElement("thead",{className:"bg-gray-100"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:"relative w-12 px-6 sm:w-16 sm:px-8"},e.createElement("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded accent-gray-700 focus:[#3E4555] sm:left-6",ref:j,checked:x,onChange:P})),e.createElement("th",{scope:"col",className:"min-w-[12rem] py-3.5 pr-3 text-left  text-xs font-semibold text-gray-900"},"Influencer"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left  text-xs font-semibold text-gray-900"},"Follower"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left  text-xs font-semibold text-gray-900"},"Interaction"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left  text-xs font-semibold text-gray-900"},"ER"))),e.createElement("tbody",{className:"divide-y divide-gray-200 bg-white"},u.map((t,l)=>e.createElement("tr",{key:l,className:n.includes(t)?"bg-gray-50":void 0},e.createElement("td",{className:"relative w-12 px-6 sm:w-16 sm:px-8"},e.createElement("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded  accent-gray-700 sm:left-6",value:t.email,checked:n.includes(t),onChange:a=>R(a,t)})),e.createElement("td",{className:f("whitespace-nowrap py-4  text-sm font-medium flex items-center justify-start  space-x-2   cursor-pointer",(n.includes(t),"text-gray-900"))},e.createElement("img",{className:"h-10 w-10 rounded-full",src:t.profile_photo_url,alt:""}),e.createElement("div",{className:"flex flex-col"},e.createElement("span",{className:"font-bold  text-xs"},"@",t.username),e.createElement("span",{className:"text-sm font-light"},t.full_name))),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.followers_count),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},"10%"),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},"10%"))))):e.createElement(C,null),e.createElement("div",{className:"h-20"})))),e.createElement("div",{className:"flex  justify-between mb-4  w-full"},e.createElement(H,{variant:"h2",content:"My Lists"}),e.createElement("div",null,e.createElement(F,{onClick:()=>h(!0),usePrimary:!0},"Create List"))),e.createElement("div",null,m.length>0?e.createElement("div",{className:"grid   grid-cols-3  gap-3"},m.map(t=>e.createElement(z,{item:t,handleAddInfluencer:()=>w(t)}))):e.createElement(C,null)),e.createElement(M,{iDisplay:N,handleModal:()=>h(!N)},e.createElement("div",{className:"bg-white  rounded-md relative  w-full px-5 py-3 "},e.createElement("h3",{className:"text-bold text-lg py-3"},"Create new list"),e.createElement("div",{className:"p-2 flex flex-col  justify-center items-center"},e.createElement("form",{onSubmit:T},e.createElement("div",null,e.createElement("input",{id:"keywords",name:"keywords",type:"text",value:g,onChange:t=>_(t.target.value),placeholder:"Enter  name",className:"block w-full shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"})),e.createElement("div",{className:"w-full mt-3"},e.createElement("button",{disabled:d,className:f("bg-viralget-red text-white  w-full p-2 rounded-md",d?"opacity-10":"")},"Create list")))))))}export{$ as default};
