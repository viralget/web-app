import{r as t,R as e}from"./app.22e06bd3.js";import{A as u}from"./AuthenticatedLayout.a8fba15a.js";import{C as f}from"./Avatar.d6ab54cf.js";import d from"./SearchBox.b606bc4a.js";import E from"./index.a6ec85bc.js";import h from"./index.92128289.js";import S from"./index.dbd95e16.js";import g from"./list.1ec8c07b.js";import{T as x}from"./Table.c300b3b1.js";import"./Logo.be5f54d8.js";import"./Button.eaf39404.js";import"./moment.0d47bed0.js";import"./DropdownMenu.c55ab1a3.js";import"./SearchForm.9f0df521.js";import"./TitleText.092a6716.js";import"./EmptyState.0462708a.js";function z({search_history:a,top_categories:r,top_influencers:o}){const[m,l]=t.exports.useState(!1),[n,s]=t.exports.useState(!1),[c,i]=t.exports.useState(!1);return console.log({search_history:a,top_categories:r,top_influencers:o}),e.createElement(u,{title:"Search through our database of 33.5m+ influencers"},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(f,null,e.createElement(d,{searchActive:()=>s(!0),loading:()=>i(!0),handleResult:p=>l(p)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10"},n?e.createElement(e.Fragment,null,c?e.createElement(x,null):e.createElement(g,{data:m})):e.createElement(e.Fragment,null,e.createElement(S,{data:a}),e.createElement(h,{data:r}),e.createElement(E,{data:o})))))))}export{z as default};