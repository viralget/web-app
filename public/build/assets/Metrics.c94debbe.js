import{r as o,R as t}from"./app.ef97b136.js";import{A as E}from"./AuthenticatedLayout.e54863e8.js";import{B as w}from"./ButtonBack.a8601cce.js";import x from"./MetricsHeader.22670341.js";import y from"./Overview.49bb54d7.js";import L from"./Contributors.da35443c.js";import S from"./TweetPerformance.20bcb4f6.js";import{g as b,a as v}from"./api.65976c53.js";import{t as A}from"./Toast.4fee7037.js";import{E as B}from"./EmptyState.59cd206b.js";import{L as F}from"./Loading.f01e2125.js";import"./Logo.af875a77.js";import"./helpers.b846ab1c.js";import"./moment.9709ab41.js";import"./DropdownMenu.8a6a0250.js";import"./Avatar.cd7bc408.js";import"./Button.82b8dff3.js";import"./ChevronDownIcon.8e4e7f70.js";import"./transition.221ffef5.js";import"./keyboard.c3cf8e47.js";import"./icons.db65d536.js";import"./XMarkIcon.58f123d1.js";import"./Bars3CenterLeftIcon.b9d0184a.js";import"./dialog.3e4d922b.js";import"./description.b3a25052.js";import"./card.8ecb00fa.js";import"./ContributorsCard.2fac57be.js";import"./tweetCard.7fcab281.js";import"./BoltIcon.7bca0ae5.js";import"./LottieAnimation.0e04b2f2.js";const M="http://extractor.viralget.io/twitter/",R=async i=>{const e=await b(M+"extract-keywords?keyword="+i);return e.data.status?e.data.data:!1},mt=({search:i,result:e,keyword:s,updated_at:l})=>{const[f,m]=o.exports.useState(!0),[u,c]=o.exports.useState(!1),[r,d]=o.exports.useState(e!=null?e:null);o.exports.useEffect(()=>{console.log({metrics:r}),r?(m(!1),c(!0)):n()},[]);const n=async()=>{m(!0);const a=await R(s);a?(d(a),c(!0),g(a)):A.error("Error fetching keyword data"),m(!1)},g=async a=>{const p={result:a,keyword:s},h=await v(route("metrics.campaign.store"),p,!0);console.log({response:h,data:p})};return t.createElement(E,{showSearchForm:!1,smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-10 mb-10"},f?t.createElement(F,null):u?t.createElement(t.Fragment,null,t.createElement(w,{href:route("track.campaign.page")}),t.createElement(x,{metrics:r,updated_at:l,onRefetch:()=>n()}),t.createElement(y,{metrics:r}),t.createElement(L,{metrics:r}),t.createElement(S,{metrics:r,keyword:s})):t.createElement(B,{title:"An error occurred",subtitle:"We are having troubles fetching data at the moment. Please try again"})))};export{mt as default};
