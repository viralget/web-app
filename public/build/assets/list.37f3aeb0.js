import{r,u as m,R as t,L as o}from"./app.143d6e98.js";import"./moment.9709ab41.js";import"./constants.26a0d554.js";import{C as i}from"./Cards.bbcb23bf.js";import{E as p}from"./EmptyState.8cb38959.js";import{A as s}from"./AuthenticatedLayout.fdc9bd56.js";import"./icons.3ea9c792.js";import"./BoltIcon.d17bc66b.js";import"./Logo.e1f60c90.js";import"./helpers.74990fcd.js";import"./DropdownMenu.7a12ea22.js";import"./Avatar.a9871ebb.js";import"./Button.a6fe9c4a.js";import"./transition.3e63c81b.js";import"./keyboard.972901a7.js";import"./ChevronDownIcon.a8310255.js";import"./dialog.47bdf4ad.js";import"./description.0ab9d965.js";import"./XMarkIcon.547ee6c6.js";import"./Bars3CenterLeftIcon.1c1746af.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{campaigns:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
