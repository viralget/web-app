import{r,u as m,R as t,L as o}from"./app.8b78a5c0.js";import"./Header.eef9c745.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.8a63a730.js";import{E as p}from"./EmptyState.74c33f67.js";import{A as s}from"./AuthenticatedLayout.05f9ade2.js";import"./helpers.db1be364.js";import"./Button.ae4c1254.js";import"./Container.274dfa30.js";import"./Logo.67d040d0.js";import"./NavLink.5ef8c7f8.js";import"./transition.1883d475.js";import"./use-event-listener.a303da5c.js";import"./DropdownMenu.285e828b.js";import"./Avatar.819832ad.js";import"./Button.4ce5f974.js";import"./ChevronDownIcon.122ecf9d.js";import"./BoltIcon.ec4040f8.js";import"./Container.93561f43.js";import"./icons.fd20f7c7.js";import"./MagnifyingGlassIcon.978bcf97.js";import"./XMarkIcon.ba993933.js";import"./Bars3CenterLeftIcon.e10ca5c8.js";function z({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{z as default};
