import{r as t,R as e}from"./app.d049b2b6.js";import{A as l,C as n}from"./AuthenticatedLayout.12d98f47.js";import s from"./SearchBox.cd563991.js";import"./moment.9709ab41.js";import p from"./list.1f529246.js";import{T as u}from"./Table.803966e6.js";import"./Logo.9ef0f0fc.js";import"./helpers.5a7a7c47.js";import"./DropdownMenu.668532dc.js";import"./Avatar.ac3f19d7.js";import"./Button.7d093bd4.js";import"./SearchForm.d2ad3d52.js";import"./Select.0303545d.js";import"./Label.f467f503.js";import"./api.6967ddd7.js";import"./EmptyState.8acf260d.js";import"./Badge.2fc8ec37.js";import"./Toast.46444165.js";function q({list:r,count:a,categories:o}){const[f,m]=t.exports.useState(!1),[i,c]=t.exports.useState(!1);return e.createElement(l,{title:"Search through our database of 33.5m+ influencers"},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(n,null,e.createElement(s,{categories:o,searchActive:()=>m(!0),loading:()=>c(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10"},i?e.createElement(u,null):e.createElement(p,{data:r,count:a}))))))}export{q as default};