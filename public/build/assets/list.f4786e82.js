import{r,u as m,R as t,L as o}from"./app.205b4436.js";import"./Header.59de2843.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.8c50f804.js";import{E as p}from"./EmptyState.a777b5bf.js";import{A as s}from"./AuthenticatedLayout.92a84d17.js";import"./helpers.52df7248.js";import"./NavLink.e3982540.js";import"./transition.8a5d88ce.js";import"./use-event-listener.85d478f0.js";import"./Container.2d03e1e6.js";import"./Logo.b83f5b82.js";import"./DropdownMenu.15697592.js";import"./Avatar.9391da93.js";import"./Button.606c1caa.js";import"./ChevronDownIcon.36b1330f.js";import"./Container.654da3a0.js";import"./XMarkIcon.237c85f6.js";import"./ScaleIcon.c0f31121.js";import"./UsersIcon.1287f36c.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
