import{r as o,R as t}from"./app.7e00a9f5.js";import{A as s}from"./AuthenticatedLayout.2a3e786f.js";import{C as d}from"./Container.687bbeeb.js";import E from"./SearchBox.f1afc637.js";import S from"./index.44c89db8.js";import g from"./index.e9b9ef55.js";import m from"./index.d0b2c067.js";import"./api.88c0f7ed.js";import"./Toast.c8cf76b1.js";import{n as x}from"./helpers.f6e74315.js";import A from"./index.85cd00d1.js";import"./Logo.f4b34c14.js";import"./Container.865cc50d.js";import"./DropdownMenu.0c7584a8.js";import"./Avatar.f5635291.js";import"./Button.283433bd.js";import"./ChevronDownIcon.9bef5c3f.js";import"./transition.9084818f.js";import"./icons.8628d1ac.js";import"./XMarkIcon.ecf366b9.js";import"./Bars3CenterLeftIcon.8a3eaefc.js";import"./MagnifyingGlassIcon.829c12e2.js";import"./use-event-listener.545afb83.js";import"./SearchForm.68421c59.js";import"./moment.9709ab41.js";import"./Label.9c3e1f1b.js";import"./Typography.e3ffc660.js";import"./EmptyState.c1803e54.js";import"./BoltIcon.d04581ca.js";import"./InfluencerCard.109f1b49.js";import"./index.21a969cb.js";import"./Profile.f42f9f44.js";import"./header.8be3266c.js";import"./MenuDropDown.58bcfb6d.js";import"./influencerSize.73270c12.js";import"./audienceCard.34f62b3c.js";import"./card.5a805e98.js";import"./tweetList.c9a17b8c.js";import"./tweetCard.9d21776e.js";import"./profiling.538573ed.js";import"./footer.4c5a95d0.js";import"./searchCard.f8a69819.js";import"./featureCard.f1e4a2a8.js";function ft({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:n}){const[R,l]=o.exports.useState(!1),[C,c]=o.exports.useState(!1),[L,u]=o.exports.useState(!1);return t.createElement(s,{title:`Search through our database of ${x(n)}+ influencers`},t.createElement("main",{className:"flex-1 pb-8"},t.createElement(d,null,t.createElement(E,{categories:a,searchActive:()=>c(!0),loading:()=>u(!0),handleResult:f=>l(f)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(A,null),t.createElement(g,{data:i}),t.createElement(S,{data:p}))))))}export{ft as default};
