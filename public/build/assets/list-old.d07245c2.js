import{r,u as m,R as t,L as o}from"./app.1c913cf1.js";import"./moment.9709ab41.js";import"./constants.5e369956.js";import{C as i}from"./Cards.cdbf96fc.js";import{E as s}from"./EmptyState.2ec4933d.js";import{A as p}from"./AuthenticatedLayout.bdfeaab1.js";import"./icons.11924ea0.js";import"./BoltIcon.d68ac127.js";import"./Logo.48decb7f.js";import"./helpers.beb1c8b7.js";import"./DropdownMenu.db4312d8.js";import"./Avatar.aeb0ea87.js";import"./Button.15b318ee.js";import"./transition.8d3ddadf.js";import"./ChevronDownIcon.013e32ee.js";import"./MagnifyingGlassIcon.05914e77.js";import"./use-event-listener.846a618b.js";import"./XMarkIcon.9ebe036f.js";import"./Bars3CenterLeftIcon.69684dda.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
