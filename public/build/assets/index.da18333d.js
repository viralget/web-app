import{r as o,R as t}from"./app.b8dc28e7.js";import{A as f}from"./AuthenticatedLayout.eaf9c41b.js";import"./moment.9709ab41.js";import s from"./SearchBox.c4184286.js";import d from"./index.ae751caf.js";import S from"./index.29a54d74.js";import m from"./index.ee09cd9d.js";import"./api.1ab407be.js";import"./Toast.e7c9aca9.js";import"./index.432d6924.js";import E from"./index.ffee065e.js";import"./Logo.c71b12f0.js";import"./helpers.1ee73257.js";import"./DropdownMenu.6cf1b143.js";import"./Avatar.fe8c7533.js";import"./Button.77051eeb.js";import"./ChevronDownIcon.1228e289.js";import"./transition.5e7d37a2.js";import"./icons.c2716e1a.js";import"./XMarkIcon.68535ac2.js";import"./Bars3CenterLeftIcon.d862e50f.js";import"./MagnifyingGlassIcon.c3782c73.js";import"./use-event-listener.d7048f55.js";import"./SearchForm.c1d0c194.js";import"./Label.bb26b72b.js";import"./Typography.133e823c.js";import"./EmptyState.386c59ff.js";import"./BoltIcon.2047f22e.js";import"./InfluencerCard.801479cb.js";import"./index.4ae2ca18.js";import"./Profile.6f0ae120.js";import"./header.ed4b94db.js";import"./MenuDropDown.871b681b.js";import"./influencerSize.148a5000.js";import"./audienceCard.49a77cb9.js";import"./QAS.b1c98829.js";import"./card.8ba75417.js";import"./profiling.f6d0f09a.js";import"./footer.fa49a20a.js";import"./searchCard.ff3998d4.js";import"./featureCard.1cbbfc94.js";function lt({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:x}){const[g,l]=o.exports.useState(!1),[A,n]=o.exports.useState(!1),[R,c]=o.exports.useState(!1);return t.createElement(f,{title:"Search through our database of influencers"},t.createElement("main",{className:"flex-1 pb-8 px-10"},t.createElement(s,{categories:a,searchActive:()=>n(!0),loading:()=>c(!0),handleResult:u=>l(u)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(E,null),t.createElement(S,{data:i}),t.createElement(d,{data:p})))))}export{lt as default};
