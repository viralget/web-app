import{r,u as m,R as t,L as o}from"./app.2148b6e9.js";import"./Header.c5647828.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.0b09e0ad.js";import{E as p}from"./EmptyState.2a151183.js";import{A as s}from"./AuthenticatedLayout.f8b95c97.js";import"./helpers.ccb7bbea.js";import"./NavLink.c7483603.js";import"./transition.d973e996.js";import"./use-event-listener.dd7f7c61.js";import"./Container.74fbd380.js";import"./Logo.3022f7e2.js";import"./DropdownMenu.1c6c447d.js";import"./Avatar.c55f5105.js";import"./Button.500114af.js";import"./ChevronDownIcon.7925e1a4.js";import"./Container.1cc0cd5c.js";import"./XMarkIcon.a3033c15.js";import"./ScaleIcon.da2ab7bd.js";import"./UsersIcon.664e1341.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
