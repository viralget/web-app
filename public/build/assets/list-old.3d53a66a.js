import{r,u as m,R as t,L as o}from"./app.cfa87233.js";import"./Header.a99102cc.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.e10b4298.js";import{E as p}from"./EmptyState.29a2dec2.js";import{A as s}from"./AuthenticatedLayout.eeaea291.js";import"./helpers.8e68b09e.js";import"./Button.0b273469.js";import"./Container.2e4e0b15.js";import"./Logo.34232885.js";import"./NavLink.33ad73e3.js";import"./transition.51c0a6cd.js";import"./use-event-listener.a8bfdd6f.js";import"./DropdownMenu.1256307f.js";import"./Avatar.13addecb.js";import"./Button.70b8162a.js";import"./ChevronDownIcon.c8078286.js";import"./BoltIcon.d8673744.js";import"./Container.e09f9fbd.js";import"./icons.b1eea619.js";import"./MagnifyingGlassIcon.053e766c.js";import"./XMarkIcon.83322849.js";import"./Bars3CenterLeftIcon.120ae351.js";function z({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{z as default};
