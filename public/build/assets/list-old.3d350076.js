import{r,u as m,R as t,L as o}from"./app.4d2f5633.js";import"./moment.9709ab41.js";import"./constants.56a14352.js";import{C as i}from"./Cards.c4d97cd4.js";import{E as s}from"./EmptyState.5aa0ba6b.js";import{A as p}from"./AuthenticatedLayout.c6641685.js";import"./icons.27b37c45.js";import"./BoltIcon.8c688622.js";import"./Logo.2dc38a4a.js";import"./helpers.a3aa19f3.js";import"./DropdownMenu.0726fb99.js";import"./Avatar.623cd1a5.js";import"./Button.3ee7282a.js";import"./transition.8e05f3e9.js";import"./ChevronDownIcon.ceaa0855.js";import"./MagnifyingGlassIcon.3734d241.js";import"./use-event-listener.c919b4cc.js";import"./XMarkIcon.951910be.js";import"./Bars3CenterLeftIcon.3d4e4cf4.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
