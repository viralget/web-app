import{r as o,R as t}from"./app.ab4375db.js";import{A as s}from"./AuthenticatedLayout.b1a1262e.js";import{C as d}from"./Container.ac1eb9ee.js";import E from"./SearchBox.b2b46b9e.js";import S from"./index.b4974698.js";import g from"./index.e8e6c236.js";import m from"./index.9610d0fc.js";import"./api.0ac6b9c4.js";import"./Toast.9e47edb0.js";import{n as x}from"./helpers.1aabcc8a.js";import A from"./index.f563618a.js";import"./Logo.5c5c3589.js";import"./Container.63a73b22.js";import"./DropdownMenu.5396da25.js";import"./Avatar.88512d88.js";import"./Button.602275ee.js";import"./ChevronDownIcon.3ac76160.js";import"./transition.ea4128c3.js";import"./icons.52843256.js";import"./XMarkIcon.49639096.js";import"./Bars3CenterLeftIcon.1dff2f3d.js";import"./MagnifyingGlassIcon.156c1da6.js";import"./use-event-listener.c21c19f8.js";import"./SearchForm.ee123382.js";import"./moment.9709ab41.js";import"./Label.5bd7486a.js";import"./Typography.df2a5ba3.js";import"./EmptyState.ddc2daab.js";import"./BoltIcon.a1c29a88.js";import"./InfluencerCard.5cd14497.js";import"./index.01b58bbc.js";import"./Profile.6002fae0.js";import"./header.9ea86cae.js";import"./MenuDropDown.32677e3b.js";import"./influencerSize.909d5743.js";import"./audienceCard.5785c634.js";import"./card.c7a2bf9c.js";import"./tweetList.9fed568d.js";import"./tweetCard.b8963a95.js";import"./profiling.5cef302f.js";import"./footer.b31ed9ad.js";import"./searchCard.32d5bf5e.js";import"./featureCard.7b5ba197.js";function ft({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:n}){const[R,l]=o.exports.useState(!1),[C,c]=o.exports.useState(!1),[L,u]=o.exports.useState(!1);return t.createElement(s,{title:`Search through our database of ${x(n)}+ influencers`},t.createElement("main",{className:"flex-1 pb-8"},t.createElement(d,null,t.createElement(E,{categories:a,searchActive:()=>c(!0),loading:()=>u(!0),handleResult:f=>l(f)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(A,null),t.createElement(g,{data:i}),t.createElement(S,{data:p}))))))}export{ft as default};
