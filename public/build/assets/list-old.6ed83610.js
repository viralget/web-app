import{r,u as m,R as t,L as o}from"./app.ef97b136.js";import"./moment.9709ab41.js";import"./constants.ae60c5cc.js";import{C as i}from"./Cards.64880237.js";import{E as p}from"./EmptyState.59cd206b.js";import{A as s}from"./AuthenticatedLayout.73521b43.js";import"./icons.db65d536.js";import"./BoltIcon.7bca0ae5.js";import"./Logo.af875a77.js";import"./helpers.b846ab1c.js";import"./DropdownMenu.a920b8f6.js";import"./Avatar.cd7bc408.js";import"./Button.82b8dff3.js";import"./transition.221ffef5.js";import"./keyboard.c3cf8e47.js";import"./ChevronDownIcon.8e4e7f70.js";import"./dialog.3e4d922b.js";import"./description.b3a25052.js";import"./XMarkIcon.58f123d1.js";import"./Bars3CenterLeftIcon.b9d0184a.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
