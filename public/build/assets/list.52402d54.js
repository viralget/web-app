import{r as a,u as m,R as t,L as o}from"./app.fa9ae017.js";import"./Header.48e2549c.js";import"./moment.9709ab41.js";import{C as i}from"./Cards.7f2908d4.js";import{E as s}from"./EmptyState.1947b265.js";import{A as p}from"./AuthenticatedLayout.3070d905.js";import"./helpers.b2771b92.js";import"./NavLink.fe6390ef.js";import"./transition.d2b3a59f.js";import"./Logo.c41f3eb8.js";import"./DropdownMenu.2fabc3af.js";import"./Avatar.82493784.js";import"./Button.f8776a67.js";import"./ChevronDownIcon.04451e65.js";import"./Badge.f6525559.js";import"./XMarkIcon.839dacd9.js";function k({campaigns:e}){a.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:r}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return a.exports.useEffect(()=>()=>{r("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{k as default};
