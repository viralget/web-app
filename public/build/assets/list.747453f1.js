import{r,u as m,R as t,L as o}from"./app.aa8cffa1.js";import"./moment.9709ab41.js";import"./constants.a38f6622.js";import{C as i}from"./Cards.69c62b63.js";import{E as s}from"./EmptyState.60cd1d69.js";import{A as p}from"./AuthenticatedLayout.8aaa949b.js";import"./icons.2b1ab55c.js";import"./BoltIcon.6c60d611.js";import"./Logo.0ece8bbc.js";import"./helpers.9020a9ed.js";import"./DropdownMenu.33622f09.js";import"./Avatar.d2220e24.js";import"./Button.749d679a.js";import"./transition.3e108733.js";import"./ChevronDownIcon.43fb4119.js";import"./MagnifyingGlassIcon.a1760b8e.js";import"./use-event-listener.37000337.js";import"./XMarkIcon.a5dfa479.js";import"./Bars3CenterLeftIcon.f5a5616c.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
