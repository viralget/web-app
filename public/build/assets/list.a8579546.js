import{r,u as m,R as t,L as o}from"./app.0a64e69d.js";import"./moment.9709ab41.js";import"./constants.3482fab1.js";import{C as i}from"./Cards.b1cb940e.js";import{E as s}from"./EmptyState.a833f6c6.js";import{A as p}from"./AuthenticatedLayout.73806391.js";import"./icons.012970c6.js";import"./BoltIcon.8140cf00.js";import"./Logo.7dc1f417.js";import"./helpers.0b0703df.js";import"./DropdownMenu.1b034dea.js";import"./Avatar.19102743.js";import"./Button.6350f983.js";import"./transition.ebbf8b62.js";import"./ChevronDownIcon.11e1d4a7.js";import"./dialog.3a7c4868.js";import"./XMarkIcon.adaa851a.js";import"./Bars3CenterLeftIcon.bcd411af.js";function F({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{F as default};
