import{r as a,u as m,R as t,L as o}from"./app.bfe5c952.js";import"./Header.04cf76ad.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.06e2a644.js";import{E as s}from"./EmptyState.151fa798.js";import{A as p}from"./AuthenticatedLayout.e985d773.js";import"./helpers.9b72ca99.js";import"./NavLink.2bb2e47a.js";import"./transition.f872f084.js";import"./Logo.7284f7a0.js";import"./DropdownMenu.e13c1937.js";import"./Avatar.05574b46.js";import"./Button.a47378ea.js";import"./ChevronDownIcon.2b712fbb.js";import"./Badge.819188fd.js";import"./XMarkIcon.95644809.js";function k({campaigns:e}){a.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:r}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return a.exports.useEffect(()=>()=>{r("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{k as default};
