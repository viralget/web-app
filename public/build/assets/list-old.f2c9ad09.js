import{r,u as m,R as t,L as o}from"./app.77203491.js";import"./moment.9709ab41.js";import"./constants.208af3b4.js";import{C as i}from"./Cards.140f6649.js";import{E as p}from"./EmptyState.efa70aba.js";import{A as s}from"./AuthenticatedLayout.fd8ac3d8.js";import"./icons.f7df5e95.js";import"./BoltIcon.6d9ed497.js";import"./Logo.600b807d.js";import"./helpers.70ae48cb.js";import"./DropdownMenu.741d2748.js";import"./Avatar.143e7a63.js";import"./Button.f9465674.js";import"./transition.ee589441.js";import"./keyboard.bfbc2aa9.js";import"./ChevronDownIcon.1b86b0e6.js";import"./dialog.d6ea6a65.js";import"./description.32154af2.js";import"./XMarkIcon.6cd82f8f.js";import"./Bars3CenterLeftIcon.19b428f2.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
