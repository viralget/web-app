import{r as t,R as e}from"./app.7a8cc838.js";import{A as l}from"./AuthenticatedLayout.7d7deb13.js";import{C as n}from"./Avatar.255cbeae.js";import s from"./SearchBox.42f08ebe.js";import"./moment.9709ab41.js";import p from"./list.9c9fd511.js";import{T as u}from"./Table.c9e868f7.js";import"./Logo.7972f87f.js";import"./helpers.d2084c65.js";import"./DropdownMenu.c7d027cc.js";import"./Button.4c189675.js";import"./SearchForm.1a6e1cfe.js";import"./api.64a0a7e9.js";import"./EmptyState.a541ce9e.js";import"./Badge.d238ee4c.js";import"./Toast.ae19a22b.js";function B({list:r,count:a,categories:o}){const[f,m]=t.exports.useState(!1),[i,c]=t.exports.useState(!1);return e.createElement(l,{title:"Search through our database of 33.5m+ influencers"},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(n,null,e.createElement(s,{categories:o,searchActive:()=>m(!0),loading:()=>c(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10"},i?e.createElement(u,null):e.createElement(p,{data:r,count:a}))))))}export{B as default};
