import{r,u as m,R as t,L as o}from"./app.fb877f69.js";import"./moment.9709ab41.js";import"./constants.b2ad5a7f.js";import{C as i}from"./Cards.4123b3eb.js";import{E as p}from"./EmptyState.d05d59b8.js";import{A as s}from"./AuthenticatedLayout.91fa9106.js";import"./icons.632f1dd7.js";import"./BoltIcon.390ecefe.js";import"./Logo.0a0803eb.js";import"./helpers.472d4338.js";import"./DropdownMenu.3033b609.js";import"./Avatar.2cb43144.js";import"./Button.adfcbd9f.js";import"./transition.fefcc9c4.js";import"./keyboard.67954041.js";import"./ChevronDownIcon.31a8b89e.js";import"./dialog.e87fead8.js";import"./description.a4cf72cc.js";import"./XMarkIcon.8babeba5.js";import"./Bars3CenterLeftIcon.1a627152.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
