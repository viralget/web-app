import{r,u as m,R as t,L as o}from"./app.ab529ffa.js";import"./moment.9709ab41.js";import"./constants.f067d26d.js";import{C as i}from"./Cards.a8376aa1.js";import{E as s}from"./EmptyState.84721188.js";import{A as p}from"./AuthenticatedLayout.87e24e5e.js";import"./icons.ff85f760.js";import"./BoltIcon.86558697.js";import"./Logo.0c46464c.js";import"./helpers.22edbd67.js";import"./DropdownMenu.a21d6dd9.js";import"./Avatar.b35b95fc.js";import"./Button.eda3a464.js";import"./transition.420e093e.js";import"./ChevronDownIcon.0e7206bb.js";import"./MagnifyingGlassIcon.df899529.js";import"./use-event-listener.4bb9735f.js";import"./XMarkIcon.abe0249c.js";import"./Bars3CenterLeftIcon.ff117de4.js";function M({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{M as default};
