import{r as s,R as e}from"./app.cd2afafc.js";import{M as g}from"./MenuDropDown.56d7fd50.js";import{o as j}from"./icons.c01f0542.js";import{g as L,p as S}from"./api.89589f61.js";import{t as u}from"./Toast.bd76ed2e.js";import{n as i}from"./helpers.94bbc4f4.js";const M="http://viralget.test/build/assets/ExportIcon.d53e3ba8.svg";function n(...t){return t.filter(Boolean).join(" ")}function P({influencer:t,isMini:l,list:c}){s.exports.useRef(),s.exports.useState(!1),s.exports.useState(!1);const[o,p]=s.exports.useState([]),[x,h]=s.exports.useState(""),[v,k]=s.exports.useState(!1);s.exports.useEffect(()=>{N()},[]);async function N(){const a=await L(route("influencer.findprofiled",{id:t.id}),!0),{data:r}=a.data;r&&k(!0)}const b=(a,r)=>{p(a.target.checked?[...o,r]:o.filter(d=>d.id!==r.id))};function C(a){return a==null?void 0:a.find(r=>r.id===t.id)}async function y(a){var f,w,E;a.preventDefault();const d={list:o==null?void 0:o.map(_=>_.id),newList:x,influencer_id:t.id},m=await S(route("influencer.addtolist"),d,!0);(f=m==null?void 0:m.data)!=null&&f.status?(u((w=m.data)==null?void 0:w.message),p([]),h("")):u.error((E=m.data)==null?void 0:E.message)}return e.createElement(e.Fragment,null,e.createElement("div",{className:n(l&&"bg-[#0077F2]"," w-full rounded-br-3xl mb-[5rem] h-40")},e.createElement("div",{className:"p-5 absolute top-[3rem] w-full"},e.createElement("div",{className:"bg-white shadow-header-card flex  items-center  rounded-md p-3  w-full space-x-3 "},e.createElement("div",{className:" mb-14 "},e.createElement("div",{className:n("h-[5rem] w-[5rem]","bg-gray-500 rounded-full overflow-hidden ")},e.createElement("img",{className:"mx-auto flex-shrink-0 object-cover w-full h-full",src:t.profile_photo_url,alt:""}))),e.createElement("div",{className:"w-full  md:mt-6"},e.createElement("div",{className:n("flex md:flex-row  flex-col  justify-between",l?"flex-wrap space-y-2 md:w-[25rem]":"")},e.createElement("div",{className:"flex flex-col"},e.createElement("span",{className:"text-h1 font-lexend  font-semibold"},t==null?void 0:t.full_name),e.createElement("span",{className:"text-t-xsx text-viralget-gray-400 font-lexend "},"@",t==null?void 0:t.username)),e.createElement("div",{className:"flex md:flex-row flex-col space-y-2  md:space-y-0 md:justify-between md:mt-0 mt-2 w-auto  md:space-x-2 "},e.createElement("div",{className:"flex  md:space-x-2  border-r border-viralget-gray-300 pr-2  h-space-16 "},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_45476)"},e.createElement("path",{d:"M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_45476"},e.createElement("rect",{width:"16",height:"16",fill:"white"})))),e.createElement("span",{className:"text-t-normal font-satoshi font-medium  text-viralget-grey"},t==null?void 0:t.location)),e.createElement("div",{className:n("flex md:space-x-2  pr-2  h-space-16 ",l?"":"border-r border-viralget-gray-300")},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_45465)"},e.createElement("path",{d:"M14.5 13.5L11 6.5L7.5 13.5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M8.5 11.5H13.5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M5.5 2V3.5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M1.5 3.5H9.5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M7.5 3.5C7.5 5.0913 6.86786 6.61742 5.74264 7.74264C4.61742 8.86786 3.0913 9.5 1.5 9.5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M3.84375 5.5C4.2573 6.66971 5.02329 7.68246 6.03626 8.3988C7.04922 9.11515 8.25934 9.49988 9.5 9.5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_45465"},e.createElement("rect",{width:"16",height:"16",fill:"white"})))),e.createElement("span",{className:"text-t-normal font-satoshi font-medium text-viralget-grey"},t.language)),!l&&e.createElement(e.Fragment,null,e.createElement("div",{className:"flex md:space-x-2 border-r border-viralget-gray-300 pr-2  h-space-16 "},e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_42571)"},e.createElement("path",{d:"M6.50391 8.77484C7.08273 9.97016 8.04929 10.9342 9.24609 11.51C9.33437 11.5518 9.43202 11.5699 9.52942 11.5625C9.62681 11.5551 9.72061 11.5225 9.80156 11.4678L11.5594 10.2936C11.637 10.2409 11.7268 10.2088 11.8202 10.2002C11.9137 10.1916 12.0078 10.2068 12.0937 10.2444L15.3844 11.6577C15.4968 11.7045 15.5908 11.7869 15.6518 11.8924C15.7128 11.9978 15.7374 12.1204 15.7219 12.2412C15.6176 13.0553 15.2202 13.8034 14.6042 14.3457C13.9882 14.8879 13.1957 15.1872 12.375 15.1873C9.83887 15.1873 7.40661 14.1799 5.61329 12.3865C3.81997 10.5932 2.8125 8.16097 2.8125 5.62484C2.81268 4.80415 3.1119 4.01165 3.65416 3.39562C4.19642 2.7796 4.94456 2.38226 5.75859 2.27796C5.87942 2.26244 6.00199 2.28707 6.10745 2.34806C6.2129 2.40904 6.29538 2.503 6.34219 2.61546L7.75547 5.91312C7.79222 5.99774 7.8076 6.0901 7.80024 6.18206C7.79288 6.27402 7.76302 6.36276 7.71328 6.44046L6.53906 8.2264C6.48679 8.30718 6.4561 8.40002 6.44995 8.49604C6.44379 8.59206 6.46237 8.68805 6.50391 8.77484V8.77484Z",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_42571"},e.createElement("rect",{width:"18",height:"18",fill:"white"})))),e.createElement("span",{className:"text-t-normal font-satoshi font-medium text-viralget-grey"},t.phone_number)),e.createElement("div",{className:"flex space-x-2"},e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_42561)"},e.createElement("path",{d:"M15.75 3.9375L9 10.125L2.25 3.9375",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M2.25 3.9375H15.75V13.5C15.75 13.6492 15.6907 13.7923 15.5852 13.8977C15.4798 14.0032 15.3367 14.0625 15.1875 14.0625H2.8125C2.66332 14.0625 2.52024 14.0032 2.41475 13.8977C2.30926 13.7923 2.25 13.6492 2.25 13.5V3.9375Z",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M7.76953 9L2.42578 13.9008",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M15.5742 13.9008L10.2305 9",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_42561"},e.createElement("rect",{width:"18",height:"18",fill:"white"})))),e.createElement("span",{className:"text-t-normal font-satoshi font-medium text-viralget-grey"},t.email))))),e.createElement("div",{className:"flex mt-space-16  w-full"},e.createElement("div",{className:"flex md:flex-row flex-col mr-3"},e.createElement("span",{className:"font-bold text-t-normal mr-1"},i(t==null?void 0:t.followers_count)," "),e.createElement("span",{className:"text-viralget-grey font-normal text-t-xsx  "}," followers ")),e.createElement("div",{className:"flex mr-3 md:flex-row flex-col"},e.createElement("span",{className:"font-bold text-t-normal mr-1"},i(t==null?void 0:t.tweet_count)),e.createElement("span",{className:"text-viralget-grey font-normal text-t-xsx"},"  tweets ")),e.createElement("div",{className:"flex md:flex-row flex-col"},e.createElement("span",{className:"font-bold text-t-normal mr-1"},i(t==null?void 0:t.following_count)," "),e.createElement("span",{className:"text-viralget-grey font-normal text-t-xsx"},"  following"))),e.createElement("div",{className:n("flex flex-wrap mt-2  ",l?"w-full":"md:w-space-500")},e.createElement("span",{className:"text-xsx-header text-viralget-gray-400  mr-2"},t.bio)),e.createElement("div",{className:"flex justify-between w-full mt-2"},e.createElement("div",{className:"my-3 flex space-x-2"}),!l&&e.createElement("div",{className:"flex md:flex-row flex-col w-full md:items-center justify-end  md:space-x-2  md:space-y-0  space-y-2"},v&&e.createElement(g,{buttonName:"Add to list",buttonIcon:e.createElement(j,{className:"w-5 h-5 "}),className:"border-viralget-red border  text-viralget-red"},e.createElement("div",{className:"w-[20rem]"},e.createElement("form",{className:"pt-2",onSubmit:y},c==null?void 0:c.map(a=>{if(!C(a.influencers))return e.createElement("div",{className:"flex justify-between  items-center p-4 py-2"},e.createElement("div",{className:"flex space-x-2 items-center"},e.createElement("input",{type:"checkbox",className:"h-4 w-4 rounded  accent-gray-700 ",value:a.id,checked:o.includes(a),onChange:r=>b(r,a)}),e.createElement("span",{className:" capitalize text-viralget-grey"},a.name)),e.createElement("span",{className:"text-viralget-grey "},a.influencers.length))}),e.createElement("div",{className:n("w-full mt-3 flex  p-3 space-x-2  ",c.length>0?" border-t":"")},e.createElement("input",{id:"keywords",name:"keywords",type:"text",value:x,onChange:a=>h(a.target.value),placeholder:"Enter list name",className:"block shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"}),e.createElement("button",{className:"bg-[#ffff]  border text-xs font-bold  px-2 text-[#748094] rounded-md"},"Create & Add"))))),e.createElement(g,{buttonName:"Export CSV",buttonIcon:e.createElement("img",{src:M,className:"w-4 h-4  mt-1"}),className:"border-viralget-gray-300 border   shadow-header-card "},e.createElement("div",{className:"p-3 flex  justify-center items-center"},e.createElement("span",{className:"font-normal  text-sm"},"Coming soon"))))))))))}const D=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{M as E,D as a,P as h};
