import{r,u as m,R as t,L as o}from"./app.b0d4b6c9.js";import"./moment.9709ab41.js";import"./constants.6bd99f79.js";import{C as i}from"./Cards.ea916b27.js";import{E as p}from"./EmptyState.1816de33.js";import{A as s}from"./AuthenticatedLayout.852b45c4.js";import"./icons.fddec647.js";import"./BoltIcon.a6bde5b2.js";import"./Logo.d35e91ae.js";import"./helpers.bd94e2b3.js";import"./DropdownMenu.e4b2ac07.js";import"./Avatar.b77886cd.js";import"./Button.e5d8274d.js";import"./transition.7764310f.js";import"./keyboard.77da338c.js";import"./ChevronDownIcon.54abeab7.js";import"./dialog.495a1596.js";import"./description.f44caaba.js";import"./XMarkIcon.265f50b4.js";import"./Bars3CenterLeftIcon.7817080b.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
