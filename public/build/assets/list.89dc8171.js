import{r,u as m,R as t,L as o}from"./app.8353904a.js";import"./moment.9709ab41.js";import"./constants.23d9a3bb.js";import{C as i}from"./Cards.38b6df7b.js";import{E as s}from"./EmptyState.239b8655.js";import{A as p}from"./AuthenticatedLayout.1e5f28db.js";import"./icons.52d064f7.js";import"./BoltIcon.3b04b581.js";import"./Logo.f2579e65.js";import"./helpers.fa0f1e93.js";import"./DropdownMenu.44234692.js";import"./Avatar.8c346e43.js";import"./Button.e0ff9521.js";import"./transition.6ba21d63.js";import"./ChevronDownIcon.7fb27605.js";import"./MagnifyingGlassIcon.daf526b2.js";import"./use-event-listener.ac26c421.js";import"./XMarkIcon.d3aba1fb.js";import"./Bars3CenterLeftIcon.e3381303.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
