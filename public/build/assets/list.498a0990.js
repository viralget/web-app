import{r,u as m,R as t,L as o}from"./app.9e52e815.js";import"./Header.f8550294.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.4ac501fe.js";import{E as p}from"./EmptyState.3ba8950b.js";import{A as s}from"./AuthenticatedLayout.c4ac43d5.js";import"./helpers.8ec957ed.js";import"./NavLink.46581278.js";import"./transition.6051146c.js";import"./use-event-listener.f1fd7cc5.js";import"./Container.b7a50bef.js";import"./Logo.c3de3e60.js";import"./DropdownMenu.d0266945.js";import"./Avatar.17e8cdac.js";import"./Button.7b765ab7.js";import"./ChevronDownIcon.39782350.js";import"./Container.f8d14bb0.js";import"./XMarkIcon.bed4b07e.js";import"./ScaleIcon.de43aecc.js";import"./UsersIcon.edc9a12e.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
