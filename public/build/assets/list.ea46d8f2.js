import{r,u as m,R as t,L as o}from"./app.99ebc690.js";import"./moment.9709ab41.js";import"./constants.2e2ca7bb.js";import{C as i}from"./Cards.9001ff45.js";import{E as s}from"./EmptyState.666ba87c.js";import{A as p}from"./AuthenticatedLayout.2d9cd1df.js";import"./icons.b9ab2f98.js";import"./BoltIcon.1ca9f3b2.js";import"./Logo.53fabd9b.js";import"./helpers.f6fe0a0f.js";import"./DropdownMenu.afe335ae.js";import"./Avatar.df7a5a4e.js";import"./Button.4f04a0eb.js";import"./transition.1dfe175a.js";import"./ChevronDownIcon.756e4dc7.js";import"./dialog.9b51167e.js";import"./XMarkIcon.839fb30a.js";import"./Bars3CenterLeftIcon.bede4937.js";function F({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(p,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(s,{title:"You have created no campaign list yet"}))}export{F as default};
