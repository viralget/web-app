import{r,u as m,R as t,L as o}from"./app.dbd691cb.js";import"./moment.9709ab41.js";import"./constants.afdaf571.js";import{C as i}from"./Cards.a600fe27.js";import{E as s}from"./EmptyState.6a4cb655.js";import{A as p}from"./AuthenticatedLayout.bef16d6f.js";import"./icons.2ad42469.js";import"./BoltIcon.6d0caefb.js";import"./Logo.b8beb92a.js";import"./helpers.49ed959a.js";import"./DropdownMenu.e9f40c03.js";import"./Avatar.43653b4b.js";import"./Button.2f72a46a.js";import"./transition.21c47197.js";import"./ChevronDownIcon.41b6b884.js";import"./dialog.0ffcc4d6.js";import"./use-event-listener.54cef30f.js";import"./XMarkIcon.bd9a7605.js";import"./Bars3CenterLeftIcon.777b0af1.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
