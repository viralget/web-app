import{r as o,R as t}from"./app.967a1591.js";import{A as f}from"./AuthenticatedLayout.0f2c3575.js";import"./moment.9709ab41.js";import s from"./SearchBox.c1945cbd.js";import d from"./index.8a114336.js";import S from"./index.f8e8a5ce.js";import m from"./index.79c92e43.js";import"./api.759e3c35.js";import"./Toast.f221f688.js";import"./index.1a17b8f0.js";import E from"./index.a3aabe41.js";import"./Logo.3d0616df.js";import"./helpers.0121b814.js";import"./DropdownMenu.85fd52c8.js";import"./Avatar.18c80614.js";import"./Button.e8758542.js";import"./ChevronDownIcon.521f002b.js";import"./transition.6fa5566d.js";import"./icons.baaf8888.js";import"./XMarkIcon.5cb193fb.js";import"./Bars3CenterLeftIcon.b9396473.js";import"./dialog.00cef36e.js";import"./SearchForm.96b694d4.js";import"./Label.79fdb5a3.js";import"./Typography.2aec2029.js";import"./EmptyState.2d024024.js";import"./BoltIcon.2f7a027e.js";import"./InfluencerCard.74359648.js";import"./index.50c2907c.js";import"./Combination.0c5a25dd.js";import"./Profile.55d4c7ed.js";import"./header.d4db5e26.js";import"./MenuDropDown.df14e5e4.js";import"./influencerSize.5fb6c6a4.js";import"./audienceCard.2d7c16cc.js";import"./QAS.e0f306f1.js";import"./card.8d366cc7.js";import"./profiling.ddc744fa.js";import"./footer.2c4d0d8b.js";import"./searchCard.ddd751d1.js";import"./featureCard.391a3161.js";function lt({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:x}){const[g,l]=o.exports.useState(!1),[A,n]=o.exports.useState(!1),[R,c]=o.exports.useState(!1);return t.createElement(f,{title:"Search through our database of influencers"},t.createElement("main",{className:"flex-1 pb-8 px-10"},t.createElement(s,{categories:a,searchActive:()=>n(!0),loading:()=>c(!0),handleResult:u=>l(u)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(E,null),t.createElement(S,{data:i}),t.createElement(d,{data:p})))))}export{lt as default};
