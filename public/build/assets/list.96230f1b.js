import{r,u as m,R as t,L as o}from"./app.5d4b715a.js";import"./moment.9709ab41.js";import"./constants.052ef8d1.js";import{C as i}from"./Cards.8458f75b.js";import{E as s}from"./EmptyState.1deb5506.js";import{A as p}from"./AuthenticatedLayout.89b4fa83.js";import"./icons.02b6501b.js";import"./BoltIcon.f9b44cfd.js";import"./Logo.80dc23f4.js";import"./helpers.2fc4ed3c.js";import"./DropdownMenu.cbc8b527.js";import"./Avatar.2b240254.js";import"./Button.0cfb2a88.js";import"./transition.28868ee4.js";import"./ChevronDownIcon.c454bb36.js";import"./MagnifyingGlassIcon.d5e2ebed.js";import"./use-event-listener.387b91c2.js";import"./XMarkIcon.eb8097f2.js";import"./Bars3CenterLeftIcon.9572362a.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
