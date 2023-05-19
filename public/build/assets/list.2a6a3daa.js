import{r as a,R as e}from"./app.3f7f0ea0.js";import{E as O}from"./EmptyState.762e9ef4.js";import{p as v}from"./api.ab8885c9.js";import{t as p}from"./Toast.5f12d99d.js";import $ from"./index.708c1ed6.js";import{M as E}from"./MenuDropDown.600a4f11.js";import{M as U}from"./Modal.a189cf83.js";import{E as k}from"./header.bb3e2235.js";import{n as S,g as H}from"./helpers.a4e89aae.js";import{C as Q}from"./Card.8fdb8f1b.js";import{A as V}from"./Avatar.c072116e.js";import{S as W}from"./SimplePagination.219bf41f.js";import"./BoltIcon.19a711de.js";import"./Profile.900a69a7.js";import"./influencerSize.4f529ac8.js";import"./moment.9709ab41.js";import"./audienceCard.a404d32d.js";import"./card.ce3694d3.js";import"./tweetList.c8152720.js";import"./tweetCard.39432158.js";import"./profiling.81db60f3.js";import"./footer.c9ffdcde.js";import"./icons.22485185.js";import"./transition.8a9c2d4e.js";function q({title:s,titleId:n,...r},m){return a.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:m,"aria-labelledby":n},r),s?a.exports.createElement("title",{id:n},s):null,a.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"}))}const G=a.exports.forwardRef(q),J=G;function K({title:s,titleId:n,...r},m){return a.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:m,"aria-labelledby":n},r),s?a.exports.createElement("title",{id:n},s):null,a.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"}))}const T=a.exports.forwardRef(K),X=T;function Y({title:s,titleId:n,...r},m){return a.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:m,"aria-labelledby":n},r),s?a.exports.createElement("title",{id:n},s):null,a.exports.createElement("path",{fillRule:"evenodd",d:"M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"}))}const Z=a.exports.forwardRef(Y),ee=Z;function te({type:s,text:n}){return e.createElement(e.Fragment,null,e.createElement("span",{className:"inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800"},n))}function ae(...s){return s.filter(Boolean).join(" ")}function Ce(s){const{count:n,data:r,paginationData:m}=s,f=a.exports.useRef(),[u,h]=a.exports.useState(!1),[w,b]=a.exports.useState(!1),[l,y]=a.exports.useState([]);a.exports.useState(!1);const[F,C]=a.exports.useState(!1),[I,j]=a.exports.useState(!1),[M,P]=a.exports.useState([]),[R,A]=a.exports.useState([]),[x,N]=a.exports.useState(!1);function g(){N(!x)}a.exports.useLayoutEffect(()=>{const t=l.length>0&&l.length<r.length;h(l.length===r.length),b(t),f.current&&(f.current.indeterminate=t)},[l]);function _(){y(u||w?[]:r),h(!u&&!w),b(!1)}const B=(t,i)=>{y(t.target.checked?[...l,i]:l.filter(o=>o.id!==i.id))},L=async t=>{var d;t.preventDefault();const o={queryData:new URLSearchParams(window.location.search).toString(),name:R},c=await v(route("influencers.search.store"),o,!0);(d=c==null?void 0:c.data)!=null&&d.status?(p("Search stored successfully!"),C(!0)):p.error("An error occured")};function D(t){t&&(j(!0),P(t))}async function z(){var c;const i={data:l.map(d=>({id:d.id}))},o=await v(route("create.profiling"),i,!0);(c=o==null?void 0:o.data)!=null&&c.status?(N(!x),p.success("Profile saved successfully")):p.error("An error occured")}return e.createElement("div",{className:"flex flex-col"},I?e.createElement($,{influencer:M}):null,e.createElement("div",{className:"inline-block min-w-full align-middle"},e.createElement(Q,{usePadding:!1,useBorder:!0},e.createElement("div",{className:"relative overflow-hidden ring-1 ring-black border-0 ring-opacity-5"},e.createElement("div",{className:"flex p-4 justify-between align-middle items-center"},e.createElement("div",null,e.createElement("h3",{className:"font-bold text-gray-600"},S(n)," ",n>0?"Influencers":"Influencer"),e.createElement("div",null,e.createElement(U,{iDisplay:x,handleModal:()=>g()},e.createElement("div",{className:"bg-white p-2  px-4 rounded-md  w-[22rem]"},e.createElement("div",{className:"flex space-x-4 px- py-2 justify-between border-b w-full "},e.createElement("div",{className:"flex flex-col border-r pr-5 "},e.createElement("span",{className:"text-xs font-bold"},"Available to profile "),e.createElement("span",{className:"text-viralget-red text-xs font-bold"},"20 influencers")),e.createElement("div",{className:"flex flex-col"},e.createElement("span",{className:"text-xs font-bold"},"Available to store "),e.createElement("span",{className:"text-viralget-red text-xs font-bold"}," ",l.length," influencers")),e.createElement("div",{className:"flex items-center justify-end ml-5"},e.createElement("button",{onClick:()=>g()},e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_50325)"},e.createElement("path",{d:"M13.0625 5L5 13.0625",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M13.0625 13.0625L5 5",stroke:"#748094","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_50325"},e.createElement("rect",{width:"18",height:"18",fill:"white"}))))))),e.createElement("div",{className:"mt-2 overflow-y-scroll  no-scrollbar flex space-x-2 pb-5 mt-3"},l.slice(0,2).map(t=>e.createElement("div",{className:"bg-[#F5F5F5] px-3 py-1 rounded-md  flex items-center justify-center "},e.createElement("div",{className:"mr-2 w-7 h-7"},e.createElement("img",{className:"w-7 h-7 rounded-full",src:t.profile_photo_url})),e.createElement("span",{className:"text-xs font-bold text-black "},t.username," "))),l.length>2?e.createElement("div",{className:"bg-[#F5F5F5] px-1 py-1 rounded-md w-full flex items-center justify-center "},e.createElement("span",{className:"text-xs font-bold text-black w-[1.5rem]  text-center"},l.length-2+" +"," ")):""),e.createElement("div",{className:"flex justify-center items-center text-center w-full mt-1"},e.createElement("span",{className:"text-xs font-normal"},"will be profiled & added to your profile")),e.createElement("div",{className:"flex  justify-center items-center w-full mt-2 mb-4"},e.createElement("button",{onClick:z,className:"bg-viralget-red py-3  font-bold rounded-md px-4 h-9 text-white  flex items-center text-center"},"Profile influencers")))))),e.createElement("div",null,(r==null?void 0:r.length)>0&&e.createElement("div",{className:" top-0 flex  items-center space-x-3 bg-gray-50 sm:left-16"},l.length>0&&e.createElement("button",{type:"button",onClick:()=>g(),className:"inline-flex items-center rounded border border-viralget-red h-9  bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"},e.createElement(X,{className:"w-4 h-4 mr-2  text-viralget-red"}),e.createElement("span",{className:"text-viralget-red font-bold"},"  Profile influencers (",l.length,")")),e.createElement(E,{buttonName:l.length>0?"Export "+l.length+" influencers":"Export influencers",buttonIcon:e.createElement("img",{src:k,className:"mt-1 w-3 h-3 "})},e.createElement("div",{className:"p-3 flex flex-col  justify-center items-center"},e.createElement("span",{className:" mt-2 text-sm"},"Feature coming soon"))),e.createElement(E,{buttonName:"Export CSV",buttonIcon:e.createElement("img",{src:k,className:"mt-1 w-3 h-3 "})},e.createElement("div",{className:"p-3 flex  justify-center items-center"},e.createElement("span",{className:"font-normal  text-sm"},"Feature coming soon"))),!F&&e.createElement(E,{buttonName:"Save Search",buttonIcon:e.createElement(J,{className:"w-5 h-5 "})},e.createElement("div",{className:"p-3"},e.createElement("form",null,e.createElement("div",null,e.createElement("input",{id:"keywords",name:"keywords",type:"text",onChange:t=>A(H(t)),placeholder:"Enter search name",className:"block w-full shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"})),e.createElement("div",{className:"w-full mt-3"},e.createElement("button",{onClick:L,className:"bg-[#F5F5F5] w-full p-2 rounded-md"},"Save search")))))))),r.length>0?e.createElement("table",{className:"min-w-full table-fixed divide-y divide-gray-300"},e.createElement("thead",{className:"bg-gray-100 border-t border-b"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:"relative w-12 px-6 sm:w-16 sm:px-8"},e.createElement("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded bg-[#3E4555] border-gray-300 text-[#3E4555] focus:[#3E4555] sm:left-6",ref:f,checked:u,onChange:_})),e.createElement("th",{scope:"col",className:"min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Influencer"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Followers"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Quality audience"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"ER"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"QAS"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Social links"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Category"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Location"))),e.createElement("tbody",{className:"divide-y divide-gray-100 bg-white"},r.map(t=>{var i,o;return e.createElement("tr",{key:t.email,className:l.includes(t)?"bg-gray-50":void 0},e.createElement("td",{className:"relative w-12 px-6 sm:w-16 sm:px-8"},l.includes(t)&&e.createElement("div",{className:"absolute inset-y-0 left-0 w-0.5 bg-gray-900"}),e.createElement("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded  accent-gray-700 sm:left-6",value:t.email,checked:l.includes(t),onChange:c=>B(c,t)})),e.createElement("td",{className:ae("whitespace-nowrap py-4 pr-3 text-sm cursor-pointer",(l.includes(t),"text-gray-900"))},e.createElement("a",{onClick:()=>D(t),className:"text-left"},e.createElement("div",{className:"flex items-center"},e.createElement(V,{url:t.profile_photo_url}),e.createElement("div",{className:"ml-3"},e.createElement("span",{className:"font-medium flex items-center "},t.username," ",t.is_verified&&e.createElement(ee,{className:"text-blue-400  w-4 h-4 rounded-full ml-2"})),e.createElement("span",{className:"block text-gray-400 text-md"},t.full_name))))),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},S(t.followers_count)),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},"10%"),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},"10%"),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},e.createElement(te,{text:"Good"})),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-blue-400"},e.createElement("a",{href:"https://twitter.com/"+t.username,target:"_blank"},e.createElement("svg",{className:"h-5 w-5","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"},e.createElement("path",{d:"M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"})))),e.createElement("td",{className:"whitespace-nowrap px-3 py-4  w-60 text-sm text-gray-500"},e.createElement("div",{className:"flex flex-wrap space-x-3"},((i=t==null?void 0:t.categories)==null?void 0:i.length)>2?e.createElement(e.Fragment,null,t.categories.splice(0,2).map(c=>e.createElement("span",{className:"bg-[#F5F5F5] p-2  text-xs rounded-md"},c.name)),e.createElement("span",{className:"bg-[#F5F5F5] p-2  text-xs rounded-md"},t.categories.length-2," +")):(o=t==null?void 0:t.categories)==null?void 0:o.map(c=>e.createElement("span",{className:"bg-[#F5F5F5] p-2  text-xs rounded-md"},c.name," ")))),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.location))}))):e.createElement(O,null)),m&&e.createElement(W,{data:m,useSimple:!0}))))}export{Ce as default};
