import{r,u as m,R as t,L as o}from"./app.780eff62.js";import"./moment.9709ab41.js";import"./constants.ebbd4f9b.js";import{C as i}from"./Cards.a510a119.js";import{E as p}from"./EmptyState.c6875146.js";import{A as s}from"./AuthenticatedLayout.2573b046.js";import"./icons.83ef4a9d.js";import"./BoltIcon.7322f814.js";import"./Logo.495f3683.js";import"./helpers.7ca6c0b9.js";import"./DropdownMenu.a2a5c973.js";import"./Avatar.9ad1a030.js";import"./Button.32d25c84.js";import"./transition.6bd22465.js";import"./keyboard.719e37e3.js";import"./ChevronDownIcon.120231c8.js";import"./dialog.24800e4d.js";import"./description.c92e38c0.js";import"./XMarkIcon.cd699f57.js";import"./Bars3CenterLeftIcon.c2f2fd65.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
