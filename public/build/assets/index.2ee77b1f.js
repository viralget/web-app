import{r as o,R as t}from"./app.4d8752af.js";import{A as f}from"./AuthenticatedLayout.feafbf8e.js";import"./moment.9709ab41.js";import s from"./SearchBox.b8d215bd.js";import d from"./index.fe0c4eac.js";import S from"./index.f23e8760.js";import m from"./index.da166aba.js";import"./api.e82b0d8b.js";import"./Toast.5da9d93d.js";import"./index.af3e2036.js";import E from"./index.c60da984.js";import"./Logo.6c5f8b14.js";import"./helpers.e2b0a119.js";import"./DropdownMenu.2ee7edb1.js";import"./Avatar.d2970f38.js";import"./Button.9164cdb2.js";import"./ChevronDownIcon.75da0352.js";import"./transition.7d14efaa.js";import"./keyboard.8e9991e5.js";import"./icons.737059da.js";import"./XMarkIcon.89bf4a7c.js";import"./Bars3CenterLeftIcon.aa7f6ed8.js";import"./dialog.db5b399f.js";import"./description.e3ed8b46.js";import"./SearchForm.88b24578.js";import"./Label.105f8b6c.js";import"./Typography.0cc56727.js";import"./Error.411963de.js";import"./index.07c7e244.js";import"./Combination.1e841dea.js";import"./Profile.6e6c55ba.js";import"./header.39fd94f7.js";import"./MenuDropDown.c8d93779.js";import"./influencerSize.d69ae3e6.js";import"./audienceCard.9c3dfcac.js";import"./QAS.c7be4e59.js";import"./index.e8fcc329.js";import"./card.bf88fac8.js";import"./profiling.1b77d989.js";import"./footer.db4d5252.js";import"./EmptyState.5a4ed5dc.js";import"./BoltIcon.ad37ef2b.js";import"./searchCard.c1350166.js";import"./featureCard.3b1fac86.js";function ut({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:x}){const[g,l]=o.exports.useState(!1),[A,n]=o.exports.useState(!1),[R,c]=o.exports.useState(!1);return t.createElement(f,{title:"Search through our database of influencers"},t.createElement("main",{className:"flex-1 pb-8 px-10"},t.createElement(s,{categories:a,searchActive:()=>n(!0),loading:()=>c(!0),handleResult:u=>l(u)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(E,null),t.createElement(S,{data:i}),t.createElement(d,{data:p})))))}export{ut as default};