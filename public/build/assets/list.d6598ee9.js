import{r,u as m,R as t,L as o}from"./app.cd2afafc.js";import"./moment.9709ab41.js";import"./constants.108f777a.js";import{C as i}from"./Cards.1664dbd0.js";import{E as s}from"./EmptyState.b5c36241.js";import{A as p}from"./AuthenticatedLayout.ee973d0a.js";import"./icons.c01f0542.js";import"./BoltIcon.18ac207b.js";import"./Logo.bf9fd7ad.js";import"./helpers.94bbc4f4.js";import"./DropdownMenu.5e7a01e0.js";import"./Avatar.bd5d596e.js";import"./Button.cf384359.js";import"./transition.3779ede8.js";import"./ChevronDownIcon.1441ac5c.js";import"./MagnifyingGlassIcon.c1eec207.js";import"./use-event-listener.11bc31c3.js";import"./XMarkIcon.c1c5843b.js";import"./Bars3CenterLeftIcon.e91814f6.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
