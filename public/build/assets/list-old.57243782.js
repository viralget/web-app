import{r,u as m,R as t,L as o}from"./app.d3683383.js";import"./Header.bd964b0e.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.b7f8e6c3.js";import{E as p}from"./EmptyState.75076985.js";import{A as s}from"./AuthenticatedLayout.dcedbd0c.js";import"./helpers.fa82645d.js";import"./Button.ecafe007.js";import"./Container.ad9158e5.js";import"./Logo.9f4e84aa.js";import"./NavLink.42c5559b.js";import"./transition.5edbca99.js";import"./use-event-listener.d0bb8610.js";import"./DropdownMenu.8a283b71.js";import"./Avatar.eab25eba.js";import"./Button.2acf1c12.js";import"./ChevronDownIcon.d6525fbf.js";import"./BoltIcon.f8961d9d.js";import"./Container.1bb84ca7.js";import"./icons.d0e960f1.js";import"./MagnifyingGlassIcon.66e9dbdf.js";import"./XMarkIcon.2799caee.js";import"./Bars3CenterLeftIcon.888f2bc0.js";function z({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{z as default};
