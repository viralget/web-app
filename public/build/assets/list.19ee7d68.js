import{r,u as m,R as t,L as o}from"./app.71a75db1.js";import"./moment.9709ab41.js";import"./constants.b8277449.js";import{C as i}from"./Cards.3f9ef391.js";import{E as s}from"./EmptyState.83f86775.js";import{A as p}from"./AuthenticatedLayout.fb1b2d88.js";import"./icons.65f2ebe7.js";import"./BoltIcon.2cfbb96e.js";import"./Logo.854edb19.js";import"./helpers.91236dcf.js";import"./DropdownMenu.0afbd710.js";import"./Avatar.036a65c5.js";import"./Button.e3d75a02.js";import"./transition.a64233e9.js";import"./ChevronDownIcon.7bd09380.js";import"./dialog.8eb1eeb8.js";import"./use-event-listener.4b827b00.js";import"./XMarkIcon.864ca17c.js";import"./Bars3CenterLeftIcon.8dcd4188.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
