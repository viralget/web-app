import{r as a,R as t}from"./app.7179bf09.js";import{A as E}from"./AuthenticatedLayout.e810a987.js";import{B as w}from"./ButtonBack.d61501bc.js";import x from"./MetricsHeader.268fb317.js";import y from"./Overview.2232977d.js";import L from"./Contributors.44df68c2.js";import S from"./TweetPerformance.13af8f05.js";import{g as b,p as v}from"./api.3a01e3bc.js";import{t as A}from"./Toast.b8ef6e60.js";import{E as B}from"./EmptyState.7148fb1f.js";import{L as F}from"./Loading.6c3d4546.js";import"./Logo.466f055b.js";import"./helpers.0557fa85.js";import"./moment.9709ab41.js";import"./DropdownMenu.b9126ff9.js";import"./Avatar.ed1856cd.js";import"./Button.e49676a1.js";import"./ChevronDownIcon.e12a2f77.js";import"./transition.c8990606.js";import"./keyboard.6d843577.js";import"./icons.63ea3f8d.js";import"./XMarkIcon.b673d200.js";import"./Bars3CenterLeftIcon.a04a926a.js";import"./dialog.b6f54463.js";import"./description.44a2c872.js";import"./card.db37a2fd.js";import"./ContributorsCard.884c9563.js";import"./tweetCard.1b6155b7.js";import"./BoltIcon.481f7d00.js";import"./LottieAnimation.ad3712cc.js";const M="http://extractor.viralget.io/twitter/",R=async i=>{const e=await b(M+"extract-keywords?keyword="+i);return e.data.status?e.data.data:!1},mt=({search:i,result:e,keyword:s,updated_at:l})=>{const[f,m]=a.exports.useState(!0),[u,c]=a.exports.useState(!1),[r,d]=a.exports.useState(e!=null?e:null);a.exports.useEffect(()=>{console.log({metrics:r}),r?(m(!1),c(!0)):n()},[]);const n=async()=>{m(!0);const o=await R(s);o?(d(o),c(!0),g(o)):A.error("Error fetching keyword data"),m(!1)},g=async o=>{const p={result:o,keyword:s},h=await v(route("metrics.campaign.store"),p,!0);console.log({response:h,data:p})};return t.createElement(E,{showSearchForm:!1,smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-10 mb-10"},f?t.createElement(F,null):u?t.createElement(t.Fragment,null,t.createElement(w,{href:route("track.campaign.page")}),t.createElement(x,{metrics:r,updated_at:l,onRefetch:()=>n()}),t.createElement(y,{metrics:r}),t.createElement(L,{metrics:r}),t.createElement(S,{metrics:r,keyword:s})):t.createElement(B,{title:"An error occurred",subtitle:"We are having troubles fetching data at the moment. Please try again"})))};export{mt as default};
