import{r as a,R as t}from"./app.6bd3d49e.js";import{A as E}from"./AuthenticatedLayout.07dad5af.js";import{B as w}from"./ButtonBack.82bf84fe.js";import x from"./MetricsHeader.c7fa1e8a.js";import y from"./Overview.0ac1b090.js";import L from"./Contributors.816eb675.js";import S from"./TweetPerformance.f99f3cc0.js";import{g as b,p as v}from"./api.0d2305ff.js";import{t as A}from"./Toast.ca4562ce.js";import{E as B}from"./EmptyState.a31c5323.js";import{L as F}from"./Loading.237276db.js";import"./Logo.a62604e0.js";import"./helpers.f9a3a7a8.js";import"./moment.9709ab41.js";import"./DropdownMenu.7455aaf7.js";import"./Avatar.4162ac4b.js";import"./Button.05a84e12.js";import"./ChevronDownIcon.5f03e14f.js";import"./transition.e8971a74.js";import"./keyboard.f9bd8e17.js";import"./icons.5b2438c2.js";import"./XMarkIcon.3111fecc.js";import"./Bars3CenterLeftIcon.a6102b4b.js";import"./dialog.8a7dea09.js";import"./description.ff5cdbbf.js";import"./card.83b31127.js";import"./ContributorsCard.7fa870b0.js";import"./tweetCard.2d633be2.js";import"./BoltIcon.b88e7e49.js";import"./LottieAnimation.d3bf09cd.js";const M="http://extractor.viralget.io/twitter/",R=async i=>{const e=await b(M+"extract-keywords?keyword="+i);return e.data.status?e.data.data:!1},mt=({search:i,result:e,keyword:s,updated_at:l})=>{const[f,m]=a.exports.useState(!0),[u,c]=a.exports.useState(!1),[r,d]=a.exports.useState(e!=null?e:null);a.exports.useEffect(()=>{console.log({metrics:r}),r?(m(!1),c(!0)):n()},[]);const n=async()=>{m(!0);const o=await R(s);o?(d(o),c(!0),g(o)):A.error("Error fetching keyword data"),m(!1)},g=async o=>{const p={result:o,keyword:s},h=await v(route("metrics.campaign.store"),p,!0);console.log({response:h,data:p})};return t.createElement(E,{showSearchForm:!1,smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-10 mb-10"},f?t.createElement(F,null):u?t.createElement(t.Fragment,null,t.createElement(w,{href:route("track.campaign.page")}),t.createElement(x,{metrics:r,updated_at:l,onRefetch:()=>n()}),t.createElement(y,{metrics:r}),t.createElement(L,{metrics:r}),t.createElement(S,{metrics:r,keyword:s})):t.createElement(B,{title:"An error occurred",subtitle:"We are having troubles fetching data at the moment. Please try again"})))};export{mt as default};
