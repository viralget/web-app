import{r,u as m,R as t,L as o}from"./app.9705ccd7.js";import"./moment.9709ab41.js";import"./constants.a3e6496a.js";import{C as i}from"./Cards.0cd85936.js";import{E as s}from"./EmptyState.bc8ddf40.js";import{A as p}from"./AuthenticatedLayout.5348e3b1.js";import"./icons.5b3d5e9c.js";import"./BoltIcon.339a573b.js";import"./Logo.7971ea1f.js";import"./helpers.a0d4af8f.js";import"./DropdownMenu.bec86342.js";import"./Avatar.c2b7cb07.js";import"./Button.b9e409fc.js";import"./transition.0d5c49d6.js";import"./ChevronDownIcon.1135a797.js";import"./dialog.f37d7edc.js";import"./use-event-listener.9ba33a42.js";import"./XMarkIcon.400237e8.js";import"./Bars3CenterLeftIcon.201370f5.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
