import{r as o,R as t}from"./app.7179bf09.js";import{A as f}from"./AuthenticatedLayout.e810a987.js";import"./moment.9709ab41.js";import s from"./SearchBox.9a9d6acb.js";import d from"./index.d5e4ba5d.js";import S from"./index.06ffa87e.js";import m from"./index.70f42e76.js";import"./api.3a01e3bc.js";import"./Toast.b8ef6e60.js";import"./index.205a2ddc.js";import E from"./index.8fc2ec87.js";import"./Logo.466f055b.js";import"./helpers.0557fa85.js";import"./DropdownMenu.b9126ff9.js";import"./Avatar.ed1856cd.js";import"./Button.e49676a1.js";import"./ChevronDownIcon.e12a2f77.js";import"./transition.c8990606.js";import"./keyboard.6d843577.js";import"./icons.63ea3f8d.js";import"./XMarkIcon.b673d200.js";import"./Bars3CenterLeftIcon.a04a926a.js";import"./dialog.b6f54463.js";import"./description.44a2c872.js";import"./SearchForm.0b5c6bda.js";import"./Label.dbd7e4d9.js";import"./Typography.9449933d.js";import"./EmptyState.dac176c7.js";import"./BoltIcon.481f7d00.js";import"./InfluencerCard.a458585b.js";import"./index.c5f10a93.js";import"./Combination.1e50b68b.js";import"./Profile.a8b18f14.js";import"./header.08b711e6.js";import"./MenuDropDown.4f182e44.js";import"./influencerSize.3ea44b65.js";import"./audienceCard.a14515b6.js";import"./QAS.8efe88cc.js";import"./index.e8fcc329.js";import"./card.db37a2fd.js";import"./profiling.904dd9f5.js";import"./footer.b6e58316.js";import"./searchCard.9a9f3ebf.js";import"./featureCard.e41baca2.js";function ut({saved_search:e,search_history:r,top_categories:i,top_influencers:p,categories:a,total_count:x}){const[g,l]=o.exports.useState(!1),[A,n]=o.exports.useState(!1),[R,c]=o.exports.useState(!1);return t.createElement(f,{title:"Search through our database of influencers"},t.createElement("main",{className:"flex-1 pb-8 px-10"},t.createElement(s,{categories:a,searchActive:()=>n(!0),loading:()=>c(!0),handleResult:u=>l(u)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(r==null?void 0:r.length)>0&&t.createElement(m,{data:r}),t.createElement(E,null),t.createElement(S,{data:i}),t.createElement(d,{data:p})))))}export{ut as default};