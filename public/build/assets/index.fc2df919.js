import{r as t,R as e}from"./app.19c40a43.js";import{A as f}from"./AuthenticatedLayout.94b2a4b2.js";import{C as d}from"./Avatar.37fd89d2.js";import E from"./SearchBox.bee3d07a.js";import h from"./index.b1be83ea.js";import g from"./index.39330423.js";import S from"./index.f0970d44.js";import x from"./list.7530bd27.js";import{T as v}from"./Table.7913ffbc.js";import"./Logo.a9fff1a8.js";import"./helpers.44f09a2c.js";import"./moment.9709ab41.js";import"./DropdownMenu.e6284ba0.js";import"./Button.7d935796.js";import"./SearchForm.6800f56f.js";import"./api.21efb3b7.js";import"./TitleText.b9305c16.js";import"./EmptyState.30dfc0de.js";import"./InfluencerCard.47c95a5d.js";import"./Badge.5a5c87ab.js";import"./Toast.a2324d4f.js";function M({search_history:r,top_categories:a,top_influencers:o,categories:m}){const[n,l]=t.exports.useState(!1),[i,s]=t.exports.useState(!1),[c,p]=t.exports.useState(!1);return e.createElement(f,{title:"Search through our database of 33.5m+ influencers"},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(d,null,e.createElement(E,{categories:m,searchActive:()=>s(!0),loading:()=>p(!0),handleResult:u=>l(u)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10"},i?e.createElement(e.Fragment,null,c?e.createElement(v,null):e.createElement(x,{data:n})):e.createElement(e.Fragment,null,r.length>0&&e.createElement(S,{data:r}),e.createElement(g,{data:a}),e.createElement(h,{data:o})))))))}export{M as default};