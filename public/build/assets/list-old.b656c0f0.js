import{r,u as m,R as t,L as o}from"./app.efac1b8a.js";import"./moment.9709ab41.js";import"./constants.6f44972a.js";import{C as i}from"./Cards.e85b88a4.js";import{E as s}from"./EmptyState.5c443a60.js";import{A as p}from"./AuthenticatedLayout.adc450ac.js";import"./icons.bbcceca8.js";import"./BoltIcon.c5208cf2.js";import"./Logo.6c7ce603.js";import"./helpers.1f6d9b57.js";import"./DropdownMenu.5099d1a4.js";import"./Avatar.f295226b.js";import"./Button.487c53ef.js";import"./transition.109b6580.js";import"./ChevronDownIcon.3a7e4868.js";import"./MagnifyingGlassIcon.c56fe3e4.js";import"./use-event-listener.b152f621.js";import"./XMarkIcon.ef1f5901.js";import"./Bars3CenterLeftIcon.68753ebe.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
