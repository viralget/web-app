import{r as o,R as t}from"./app.3f282e6a.js";import{A as s}from"./AuthenticatedLayout.38fe579f.js";import{C as d}from"./Container.0115d0ec.js";import E from"./SearchBox.fb134660.js";import S from"./index.de322203.js";import g from"./index.f2ba4efc.js";import m from"./index.c06303aa.js";import"./api.08690673.js";import"./Toast.045341b4.js";import{n as x}from"./helpers.45c51b5b.js";import A from"./index.173d9b44.js";import"./Logo.4e39a7f0.js";import"./Container.1d0449f0.js";import"./DropdownMenu.ed3c245e.js";import"./Avatar.bd40c0aa.js";import"./Button.6dcc44c5.js";import"./ChevronDownIcon.7861a5d0.js";import"./transition.3ee5d279.js";import"./icons.0b0bbee5.js";import"./XMarkIcon.7f323b9c.js";import"./Bars3CenterLeftIcon.fee97835.js";import"./MagnifyingGlassIcon.617d4dd9.js";import"./use-event-listener.8f6fdd62.js";import"./SearchForm.96f20ee7.js";import"./moment.9709ab41.js";import"./Label.ebad8184.js";import"./Typography.bc2e380e.js";import"./EmptyState.a6b9db9d.js";import"./BoltIcon.8ecbd493.js";import"./InfluencerCard.e5fcf85a.js";import"./index.452cceca.js";import"./Profile.937ca584.js";import"./header.3de7dd89.js";import"./MenuDropDown.74ee7fea.js";import"./influencerSize.2db511ca.js";import"./audienceCard.97e4578e.js";import"./card.da593b1c.js";import"./tweetList.f85489be.js";import"./tweetCard.6a06d233.js";import"./profiling.59bd6bc6.js";import"./footer.d1cddab3.js";import"./searchCard.792787f8.js";import"./featureCard.151abbd0.js";function ft({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:n}){const[R,l]=o.exports.useState(!1),[C,c]=o.exports.useState(!1),[L,u]=o.exports.useState(!1);return t.createElement(s,{title:`Search through our database of ${x(n)}+ influencers`},t.createElement("main",{className:"flex-1 pb-8"},t.createElement(d,null,t.createElement(E,{categories:a,searchActive:()=>c(!0),loading:()=>u(!0),handleResult:f=>l(f)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(A,null),t.createElement(g,{data:i}),t.createElement(S,{data:p}))))))}export{ft as default};
