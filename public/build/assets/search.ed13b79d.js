import{r as t,R as e}from"./app.ef72d8ff.js";import{A as l,C as n}from"./AuthenticatedLayout.c8c4576d.js";import s from"./SearchBox.454002ec.js";import"./moment.9709ab41.js";import p from"./list.df8c9949.js";import{T as u}from"./Table.6d73b1f4.js";import"./Logo.324d06e0.js";import"./helpers.906d158c.js";import"./DropdownMenu.8cc8bbb8.js";import"./Avatar.7f192217.js";import"./Button.3b17f06e.js";import"./SearchForm.8839bbe9.js";import"./Select.b0563996.js";import"./Label.1cdc2674.js";import"./api.cef708f3.js";import"./EmptyState.b8661fcc.js";import"./Badge.fae55b39.js";import"./Toast.e042df11.js";function q({list:r,count:a,categories:o}){const[f,m]=t.exports.useState(!1),[i,c]=t.exports.useState(!1);return e.createElement(l,{title:"Search through our database of 33.5m+ influencers"},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(n,null,e.createElement(s,{categories:o,searchActive:()=>m(!0),loading:()=>c(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10"},i?e.createElement(u,null):e.createElement(p,{data:r,count:a}))))))}export{q as default};
