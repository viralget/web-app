import{r as a,u as m,R as t,L as o}from"./app.ef72d8ff.js";import"./Header.a75c8b0d.js";import"./moment.9709ab41.js";import{C as s}from"./Cards.0653c2a9.js";import{E as i}from"./EmptyState.8f92f34f.js";import{A as n}from"./AuthenticatedLayout.c8c4576d.js";import"./helpers.906d158c.js";import"./NavLink.0a117f97.js";import"./Avatar.7f192217.js";import"./Logo.324d06e0.js";import"./DropdownMenu.8cc8bbb8.js";import"./Button.3b17f06e.js";import"./Badge.fae55b39.js";function R({campaigns:e}){a.exports.useState(!1);const{data:p,setData:c,post:l,processing:u,errors:f,reset:r}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return a.exports.useEffect(()=>()=>{r("password","password_confirmation")},[]),t.createElement(n,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(s,{data:e})):t.createElement(i,{title:"You have created no campaign list yet"}))}export{R as default};
