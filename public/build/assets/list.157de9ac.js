import{r,u as m,R as t,L as o}from"./app.1827a039.js";import"./Header.6e5792f2.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.6a6bbd2e.js";import{E as p}from"./EmptyState.60d9dcf0.js";import{A as s}from"./AuthenticatedLayout.85a65cb9.js";import"./helpers.71728009.js";import"./Button.6f1fd5d6.js";import"./Container.9b547d74.js";import"./Logo.42c6638f.js";import"./NavLink.510bb90a.js";import"./transition.4d544b59.js";import"./use-event-listener.b75a85e4.js";import"./DropdownMenu.d5705e44.js";import"./Avatar.6b54cce9.js";import"./Button.4d26f290.js";import"./ChevronDownIcon.4b40f5a1.js";import"./BoltIcon.673eaf2b.js";import"./Container.d7884ca7.js";import"./icons.dcda97a9.js";import"./MagnifyingGlassIcon.d230fa44.js";import"./XMarkIcon.ca8442ef.js";import"./Bars3CenterLeftIcon.3a459ffb.js";function z({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{z as default};
