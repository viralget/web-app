import{r,u as m,R as t,L as o}from"./app.f27d36e6.js";import"./moment.9709ab41.js";import"./constants.1b0cc910.js";import{C as i}from"./Cards.3d332660.js";import{E as s}from"./EmptyState.27a05879.js";import{A as p}from"./AuthenticatedLayout.c46d5416.js";import"./icons.9c5f082c.js";import"./BoltIcon.68030427.js";import"./Logo.55487a95.js";import"./helpers.e7bfb897.js";import"./DropdownMenu.6c3cbd68.js";import"./Avatar.a968a661.js";import"./Button.8262f4e6.js";import"./transition.3892f6a6.js";import"./ChevronDownIcon.a99e1602.js";import"./MagnifyingGlassIcon.4739051d.js";import"./use-event-listener.291bdebd.js";import"./XMarkIcon.b08585e5.js";import"./Bars3CenterLeftIcon.8fe316fa.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
