import{r,u as m,R as t,L as o}from"./app.42b4834a.js";import"./moment.9709ab41.js";import"./constants.22cdecbc.js";import{C as i}from"./Cards.956b027d.js";import{E as s}from"./EmptyState.a460792b.js";import{A as p}from"./AuthenticatedLayout.0ec9c9a8.js";import"./icons.670af3a0.js";import"./BoltIcon.fbff2083.js";import"./Logo.dd6874f4.js";import"./helpers.d1e699d4.js";import"./DropdownMenu.951d63b3.js";import"./Avatar.9c13cb5d.js";import"./Button.4d86411c.js";import"./transition.2b3b6546.js";import"./ChevronDownIcon.f5acf336.js";import"./MagnifyingGlassIcon.931a1e59.js";import"./use-event-listener.924100de.js";import"./XMarkIcon.67cce9b5.js";import"./Bars3CenterLeftIcon.c49a5745.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
