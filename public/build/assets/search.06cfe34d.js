import{r as m,R as t}from"./app.f189a042.js";import{A as c}from"./AuthenticatedLayout.78e967c2.js";import{C as l}from"./Container.46fb5e97.js";import s from"./SearchBox.55a269a1.js";import"./moment.9709ab41.js";import u from"./list.db5bf175.js";import{T as f}from"./Table.324c6949.js";import{P as d}from"./Pagination.db87c3a8.js";import"./Logo.571a0bf1.js";import"./helpers.a1938207.js";import"./DropdownMenu.2749d27a.js";import"./Avatar.baedbf25.js";import"./Button.e518d366.js";import"./transition.51d39479.js";import"./ChevronDownIcon.91e724bb.js";import"./XMarkIcon.7ab3396d.js";import"./use-event-listener.62720cc9.js";import"./ScaleIcon.c98b071d.js";import"./UsersIcon.2b776fe0.js";import"./SearchForm.28bba1fd.js";import"./Label.1b6e2288.js";import"./api.fd47b037.js";import"./EmptyState.73759767.js";import"./Toast.107cc381.js";import"./index.cfe83842.js";import"./Profile.f9bbef40.js";import"./header.cbbbe973.js";import"./influencerSize.b55ce939.js";import"./audienceCard.9aaf7e64.js";import"./card.1330adad.js";import"./tweetList.cedd7090.js";import"./tweetCard.e01668a5.js";import"./profiling.f771da16.js";import"./footer.cff7d216.js";import"./MenuDropDown.77086689.js";import"./Modal.40449f3d.js";function _({list:e,categories:a}){var r,o;const[E,i]=m.exports.useState(!1),[p,n]=m.exports.useState(!1);return t.createElement(c,{title:"Search through our database of 33.5m+ influencers"},t.createElement("main",{className:"flex-1 pb-8"},t.createElement(l,null,t.createElement(s,{categories:a,searchActive:()=>i(!0),loading:()=>n(!0)}),t.createElement("div",null,t.createElement("div",{className:"space-y-10"},p?t.createElement(f,null):t.createElement(t.Fragment,null,t.createElement(u,{data:e.data,count:(o=(r=e==null?void 0:e.meta)==null?void 0:r.total)!=null?o:0}),t.createElement(d,{data:e.meta})))))))}export{_ as default};