import{r as t,R as e}from"./app.7a8cc838.js";import{A as f}from"./AuthenticatedLayout.7d7deb13.js";import{C as d}from"./Avatar.255cbeae.js";import E from"./SearchBox.42f08ebe.js";import h from"./index.cee83263.js";import g from"./index.7a7377a0.js";import S from"./index.3bbabdba.js";import x from"./list.9c9fd511.js";import{T as v}from"./Table.c9e868f7.js";import"./Logo.7972f87f.js";import"./helpers.d2084c65.js";import"./moment.9709ab41.js";import"./DropdownMenu.c7d027cc.js";import"./Button.4c189675.js";import"./SearchForm.1a6e1cfe.js";import"./api.64a0a7e9.js";import"./TitleText.840e300f.js";import"./EmptyState.a541ce9e.js";import"./InfluencerCard.1bd7461c.js";import"./Badge.d238ee4c.js";import"./Toast.ae19a22b.js";function M({search_history:r,top_categories:a,top_influencers:o,categories:m}){const[n,l]=t.exports.useState(!1),[i,s]=t.exports.useState(!1),[c,p]=t.exports.useState(!1);return e.createElement(f,{title:"Search through our database of 33.5m+ influencers"},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(d,null,e.createElement(E,{categories:m,searchActive:()=>s(!0),loading:()=>p(!0),handleResult:u=>l(u)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10"},i?e.createElement(e.Fragment,null,c?e.createElement(v,null):e.createElement(x,{data:n})):e.createElement(e.Fragment,null,r.length>0&&e.createElement(S,{data:r}),e.createElement(g,{data:a}),e.createElement(h,{data:o})))))))}export{M as default};
