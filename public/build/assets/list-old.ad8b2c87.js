import{r,u as m,R as t,L as o}from"./app.7179bf09.js";import"./moment.9709ab41.js";import"./constants.48562a6a.js";import{C as i}from"./Cards.3d92940d.js";import{E as p}from"./EmptyState.7148fb1f.js";import{A as s}from"./AuthenticatedLayout.4ac2f3eb.js";import"./icons.63ea3f8d.js";import"./BoltIcon.481f7d00.js";import"./Logo.466f055b.js";import"./helpers.0557fa85.js";import"./DropdownMenu.02b2b6f4.js";import"./Avatar.ed1856cd.js";import"./Button.e49676a1.js";import"./transition.c8990606.js";import"./keyboard.6d843577.js";import"./ChevronDownIcon.e12a2f77.js";import"./dialog.b6f54463.js";import"./description.44a2c872.js";import"./XMarkIcon.b673d200.js";import"./Bars3CenterLeftIcon.a04a926a.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
