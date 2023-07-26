import{r as m,R as e,L as j}from"./app.7179bf09.js";import{M as h}from"./MenuDropDown.4f182e44.js";import{k as S}from"./icons.63ea3f8d.js";import{g as I,p as P}from"./api.3a01e3bc.js";import{t as u}from"./Toast.b8ef6e60.js";import{n as x}from"./helpers.0557fa85.js";const L="https://viralget.io/build/assets/ExportIcon.d53e3ba8.svg";function c(...t){return t.filter(Boolean).join(" ")}function D({influencer:t,isMini:l,list:d}){m.exports.useRef();const[r,p]=m.exports.useState([]),[i,f]=m.exports.useState(""),[N,v]=m.exports.useState(!1);m.exports.useEffect(()=>{b()},[]);async function b(){const a=await I(route("influencer.findprofiled",{id:t.id}),!0),{data:s}=a.data;s&&v(!0)}const y=(a,s)=>{p(a.target.checked?[...r,s]:r.filter(n=>n.id!==s.id))};function k(a){return a==null?void 0:a.find(s=>s.id===t.id)}async function C(a){var E,w,g;a.preventDefault();const n={list:r==null?void 0:r.map(_=>_.id),newList:i,influencer_id:t.id},o=await P(route("influencer.addtolist"),n,!0);(E=o==null?void 0:o.data)!=null&&E.status?(u((w=o.data)==null?void 0:w.message),p([]),f("")):u.error((g=o.data)==null?void 0:g.message)}return e.createElement(j,{href:route("influencer.show",{influencer:t.username})},e.createElement("div",{className:c(l&&"bg-[#0077F2]"," w-full rounded-br-3xl mb-[5rem] h-40")},e.createElement("div",{className:"p-5 absolute top-[3rem] w-full"},e.createElement("div",{className:"bg-white shadow-header-card flex  items-center  rounded-md p-3  w-full space-x-3 "},e.createElement("div",{className:" mb-14 "},e.createElement("div",{className:c("h-[5rem] w-[5rem]","bg-gray-500 rounded-full overflow-hidden ")},e.createElement("img",{className:"mx-auto flex-shrink-0 object-cover w-full h-full",src:t.profile_photo_url,alt:""}))),e.createElement("div",{className:"w-full  md:mt-6"},e.createElement("div",{className:c("flex md:flex-row  flex-col  justify-between",l?"flex-wrap space-y-2 md:w-[25rem]":"")},e.createElement("div",{className:"flex flex-col"},e.createElement("span",{className:"text-h1 font-lexend  font-semibold"},t==null?void 0:t.full_name),e.createElement("span",{className:"text-t-xsx text-viralget-gray-400 font-lexend "},"@",t==null?void 0:t.username)),e.createElement("div",{className:"flex md:flex-row flex-col space-y-2  md:space-y-0 md:justify-between md:mt-0 mt-2 w-auto  md:space-x-2 "},(t==null?void 0:t.location)&&e.createElement("div",{className:"flex  md:space-x-2  border-r border-viralget-gray-300 pr-2  h-space-16 "},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_45476)"},e.createElement("path",{d:"M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_45476"},e.createElement("rect",{width:"16",height:"16",fill:"white"})))),e.createElement("span",{className:"text-t-normal font-satoshi font-medium  text-viralget-grey"},t==null?void 0:t.location)),!l&&e.createElement(e.Fragment,null))),e.createElement("div",{className:"flex mt-space-16  w-full"},e.createElement("div",{className:"flex md:flex-row flex-col mr-3"},e.createElement("span",{className:"font-bold text-t-normal mr-1"},x(t==null?void 0:t.followers_count)," "),e.createElement("span",{className:"text-viralget-grey font-normal text-t-xsx  "}," followers ")),e.createElement("div",{className:"flex mr-3 md:flex-row flex-col"},e.createElement("span",{className:"font-bold text-t-normal mr-1"},x(t==null?void 0:t.tweet_count)),e.createElement("span",{className:"text-viralget-grey font-normal text-t-xsx"},"  tweets ")),e.createElement("div",{className:"flex md:flex-row flex-col"},e.createElement("span",{className:"font-bold text-t-normal mr-1"},x(t==null?void 0:t.following_count)," "),e.createElement("span",{className:"text-viralget-grey font-normal text-t-xsx"},"  following"))),e.createElement("div",{className:c("flex flex-wrap mt-2  ",l?"w-full":"md:w-space-500")},e.createElement("span",{className:"text-xsx-header text-viralget-gray-400  mr-2"},t.bio)),e.createElement("div",{className:"flex justify-between w-full mt-2"},e.createElement("div",{className:"my-3 flex space-x-2"}),!l&&e.createElement("div",{className:"flex md:flex-row flex-col w-full md:items-center justify-end  md:space-x-2  md:space-y-0  space-y-2"},N&&e.createElement(h,{buttonName:"Add to list",buttonIcon:e.createElement(S,{className:"w-5 h-5 "}),className:"border-viralget-red border  text-viralget-red"},e.createElement("div",{className:"w-[20rem]"},e.createElement("form",{className:"pt-2",onSubmit:C},d==null?void 0:d.map(a=>{if(!k(a.influencers))return e.createElement("div",{className:"flex justify-between  items-center p-4 py-2"},e.createElement("div",{className:"flex space-x-2 items-center"},e.createElement("input",{type:"checkbox",className:"h-4 w-4 rounded  accent-gray-700 ",value:a.id,checked:r.includes(a),onChange:s=>y(s,a)}),e.createElement("span",{className:" capitalize text-viralget-grey"},a.name)),e.createElement("span",{className:"text-viralget-grey "},a.influencers.length))}),e.createElement("div",{className:c("w-full mt-3 flex  p-3 space-x-2  ",d.length>0?" border-t":"")},e.createElement("input",{id:"keywords",name:"keywords",type:"text",value:i,onChange:a=>f(a.target.value),placeholder:"Enter list name",className:"block shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"}),e.createElement("button",{className:"bg-[#ffff]  border text-xs font-bold  px-2 text-[#748094] rounded-md"},"Create & Add"))))),e.createElement(h,{buttonName:"Export CSV",buttonIcon:e.createElement("img",{src:L,className:"w-4 h-4  mt-1"}),className:"border-viralget-gray-300 border   shadow-header-card "},e.createElement("div",{className:"p-3 flex  justify-center items-center"},e.createElement("span",{className:"font-normal  text-sm"},"Coming soon"))))))))))}const V=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"}));export{L as E,V as a,D as h};
