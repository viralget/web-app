import{r,R as t}from"./app.205b4436.js";import{A as n}from"./AuthenticatedLayout.92a84d17.js";import{C as c}from"./Container.654da3a0.js";import l from"./SearchBox.1994e4d6.js";import"./moment.9709ab41.js";import s from"./list.589ea01d.js";import{T as u}from"./Table.03a04291.js";import{P as f}from"./Pagination.19e49070.js";import"./Logo.b83f5b82.js";import"./helpers.52df7248.js";import"./DropdownMenu.15697592.js";import"./Avatar.9391da93.js";import"./Button.606c1caa.js";import"./transition.8a5d88ce.js";import"./ChevronDownIcon.36b1330f.js";import"./XMarkIcon.237c85f6.js";import"./use-event-listener.85d478f0.js";import"./ScaleIcon.c0f31121.js";import"./UsersIcon.1287f36c.js";import"./SearchForm.70e34737.js";import"./Label.66492c50.js";import"./api.2028c5db.js";import"./EmptyState.b405a518.js";import"./Toast.a83586ec.js";import"./index.65e47cc2.js";import"./Profile.6a251971.js";import"./influencerSize.e3eeadcf.js";import"./audienceCard.f02b637b.js";import"./card.3b14f857.js";import"./tweetList.6b857faa.js";import"./tweetCard.9c768142.js";import"./profiling.441f399b.js";import"./footer.63d80a9d.js";function W({list:e,count:o,categories:a}){const[d,m]=r.exports.useState(!1),[i,p]=r.exports.useState(!1);return t.createElement(n,{title:"Search through our database of 33.5m+ influencers"},t.createElement("main",{className:"flex-1 pb-8"},t.createElement(c,null,t.createElement(l,{categories:a,searchActive:()=>m(!0),loading:()=>p(!0)}),t.createElement("div",null,t.createElement("div",{className:"space-y-10"},i?t.createElement(u,null):t.createElement(t.Fragment,null,t.createElement(s,{data:e.data,count:o}),t.createElement(f,{data:e.meta})))))))}export{W as default};
