import{r as o,R as t}from"./app.930910bc.js";import{A as s}from"./AuthenticatedLayout.f860a5e4.js";import{n as d}from"./helpers.af73b22b.js";import S from"./SearchBox.91431db7.js";import E from"./index.88c8f5ff.js";import x from"./index.452d3242.js";import m from"./index.06853bf6.js";import"./api.8332cf31.js";import"./Toast.8612a3b3.js";import g from"./index.faa88e19.js";import"./Logo.2d7368eb.js";import"./DropdownMenu.0cf26d0f.js";import"./Avatar.3dd8bb3a.js";import"./Button.77ab557b.js";import"./ChevronDownIcon.a48f38a5.js";import"./transition.2ee773ae.js";import"./icons.f21c8d9a.js";import"./XMarkIcon.60639be2.js";import"./Bars3CenterLeftIcon.5367c650.js";import"./MagnifyingGlassIcon.5cd70031.js";import"./use-event-listener.231909db.js";import"./moment.9709ab41.js";import"./SearchForm.20cccf24.js";import"./Label.5105b7eb.js";import"./Typography.68e5efeb.js";import"./EmptyState.a419f089.js";import"./BoltIcon.9a71c5f4.js";import"./InfluencerCard.3dabfc7a.js";import"./index.cc4e6827.js";import"./Profile.4fdfef2b.js";import"./header.97be307d.js";import"./MenuDropDown.bf948824.js";import"./influencerSize.dff096af.js";import"./audienceCard.925df604.js";import"./card.ff0da152.js";import"./tweetList.32ed18b2.js";import"./tweetCard.66e79430.js";import"./profiling.41d55ce8.js";import"./footer.1555200f.js";import"./searchCard.7d841831.js";import"./featureCard.49c76faf.js";function lt({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:n}){const[A,l]=o.exports.useState(!1),[R,c]=o.exports.useState(!1),[L,u]=o.exports.useState(!1);return t.createElement(s,{title:`Search through our database of ${d(n)}+ influencers`},t.createElement("main",{className:"flex-1 pb-8 px-10"},t.createElement(S,{categories:a,searchActive:()=>c(!0),loading:()=>u(!0),handleResult:f=>l(f)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(g,null),t.createElement(x,{data:i}),t.createElement(E,{data:p})))))}export{lt as default};