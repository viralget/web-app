import{r as t,R as e}from"./app.fa9ae017.js";import{A as f,C as d}from"./AuthenticatedLayout.3070d905.js";import E from"./SearchBox.3a013041.js";import h from"./index.213f9e5f.js";import g from"./index.c9c293e1.js";import S from"./index.81e532f3.js";import x from"./list.bc482ed4.js";import{T as v}from"./Table.e7500bbe.js";import"./Logo.c41f3eb8.js";import"./helpers.b2771b92.js";import"./moment.9709ab41.js";import"./DropdownMenu.2fabc3af.js";import"./Avatar.82493784.js";import"./Button.f8776a67.js";import"./transition.d2b3a59f.js";import"./ChevronDownIcon.04451e65.js";import"./XMarkIcon.839dacd9.js";import"./SearchForm.f675248f.js";import"./Select.409b02fd.js";import"./Label.8efc0239.js";import"./api.8e07b279.js";import"./TitleText.3c254d5f.js";import"./EmptyState.3c0e78bf.js";import"./InfluencerCard.48797afc.js";import"./Badge.f6525559.js";import"./Toast.a90870cd.js";function V({search_history:r,top_categories:a,top_influencers:o,categories:m}){const[i,n]=t.exports.useState(!1),[l,s]=t.exports.useState(!1),[c,p]=t.exports.useState(!1);return e.createElement(f,{title:"Search through our database of 33.5m+ influencers"},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(d,null,e.createElement(E,{categories:m,searchActive:()=>s(!0),loading:()=>p(!0),handleResult:u=>n(u)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10"},l?e.createElement(e.Fragment,null,c?e.createElement(v,null):e.createElement(x,{data:i})):e.createElement(e.Fragment,null,r.length>0&&e.createElement(S,{data:r}),e.createElement(g,{data:a}),e.createElement(h,{data:o})))))))}export{V as default};
