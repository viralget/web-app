import{r as o,R as t}from"./app.ea44319b.js";import{A as h}from"./AuthenticatedLayout.0a2ff087.js";import{B as E}from"./ButtonBack.23a937fd.js";import w from"./MetricsHeader.2b2f85d7.js";import x from"./Overview.99bbc5ee.js";import y from"./Contributors.1205b821.js";import L from"./TweetPerformance.ae84f646.js";import{g as S,a as b}from"./api.526e08f0.js";import{t as v}from"./Toast.293a0c1c.js";import{E as A}from"./EmptyState.5508e759.js";import{L as B}from"./Loading.8fa5bdad.js";import"./Logo.ae4aa33e.js";import"./helpers.2c6296bd.js";import"./moment.9709ab41.js";import"./DropdownMenu.a1ab961c.js";import"./Avatar.6ccefe61.js";import"./Button.df288f59.js";import"./ChevronDownIcon.ca311321.js";import"./transition.9773836c.js";import"./keyboard.90499666.js";import"./XMarkIcon.e4157076.js";import"./Bars3CenterLeftIcon.d6c601f9.js";import"./MagnifyingGlassIcon.e01f1ad2.js";import"./description.a23524f9.js";import"./card.486a3a6b.js";import"./ContributorsCard.17762591.js";import"./tweetCard.4fb6b175.js";import"./BoltIcon.5accbbd3.js";import"./LottieAnimation.5e620066.js";const F="http://extractor.viralget.io/twitter/",M=async i=>{const e=await S(F+"extract-keywords?keyword="+i);return e.data.status?e.data.data:!1},ot=({search:i,result:e,keyword:s,updated_at:p})=>{const[l,m]=o.exports.useState(!0),[f,c]=o.exports.useState(!1),[r,u]=o.exports.useState(e!=null?e:null);o.exports.useEffect(()=>{r?(m(!1),c(!0)):n()},[]);const n=async()=>{m(!0);const a=await M(s);a?(u(a),c(!0),d(a)):v.error("Error fetching keyword data"),m(!1)},d=async a=>{const g={result:a,keyword:s};await b(route("metrics.campaign.store"),g,!0)};return t.createElement(h,{showSearchForm:!1,smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-10 mb-10"},l?t.createElement(B,null):f?t.createElement(t.Fragment,null,t.createElement(E,{href:route("track.campaign.page")}),t.createElement(w,{metrics:r,updated_at:p,onRefetch:()=>n()}),t.createElement(x,{metrics:r}),t.createElement(y,{metrics:r}),t.createElement(L,{metrics:r,keyword:s})):t.createElement(A,{title:"An error occurred",subtitle:"We are having troubles fetching data at the moment. Please try again"})))};export{ot as default};
