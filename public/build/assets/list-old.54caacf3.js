import{r,u as m,R as t,L as o}from"./app.f61a9b1c.js";import"./moment.9709ab41.js";import"./constants.68a86a59.js";import{C as i}from"./Cards.b7aa5a9b.js";import{E as s}from"./EmptyState.553ec442.js";import{A as p}from"./AuthenticatedLayout.4f02caf9.js";import"./icons.311eba1f.js";import"./BoltIcon.05118bfb.js";import"./Logo.f52ef925.js";import"./helpers.244a457e.js";import"./DropdownMenu.e831ad3d.js";import"./Avatar.6f2adfe2.js";import"./Button.82ec0a3e.js";import"./transition.bedc9d89.js";import"./ChevronDownIcon.559d69e1.js";import"./MagnifyingGlassIcon.f9533829.js";import"./use-event-listener.9bd5fa08.js";import"./XMarkIcon.968763aa.js";import"./Bars3CenterLeftIcon.0c11d61e.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
