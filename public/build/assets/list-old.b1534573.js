import{r,u as m,R as t,L as o}from"./app.6bd3d49e.js";import"./moment.9709ab41.js";import"./constants.c93e588b.js";import{C as i}from"./Cards.8692e437.js";import{E as p}from"./EmptyState.a31c5323.js";import{A as s}from"./AuthenticatedLayout.693b15fa.js";import"./icons.5b2438c2.js";import"./BoltIcon.b88e7e49.js";import"./Logo.a62604e0.js";import"./helpers.f9a3a7a8.js";import"./DropdownMenu.149dc579.js";import"./Avatar.4162ac4b.js";import"./Button.05a84e12.js";import"./transition.e8971a74.js";import"./keyboard.f9bd8e17.js";import"./ChevronDownIcon.5f03e14f.js";import"./dialog.8a7dea09.js";import"./description.ff5cdbbf.js";import"./XMarkIcon.3111fecc.js";import"./Bars3CenterLeftIcon.a6102b4b.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
