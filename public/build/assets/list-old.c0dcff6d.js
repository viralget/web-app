import{r,u as m,R as t,L as o}from"./app.83d13ff0.js";import"./moment.9709ab41.js";import"./constants.945ba413.js";import{C as i}from"./Cards.5e6de8ae.js";import{E as p}from"./EmptyState.1bb39e5e.js";import{A as s}from"./AuthenticatedLayout.5bb1ec1e.js";import"./icons.cddab33b.js";import"./BoltIcon.948840a0.js";import"./Logo.7aa9be73.js";import"./helpers.2931a4a5.js";import"./DropdownMenu.e242c317.js";import"./Avatar.2ce58c32.js";import"./Button.46d21652.js";import"./transition.f90d5671.js";import"./keyboard.6f147604.js";import"./ChevronDownIcon.a47b1c51.js";import"./dialog.630d34b0.js";import"./description.58785d12.js";import"./XMarkIcon.bed56f10.js";import"./Bars3CenterLeftIcon.2401e058.js";function Y({campaigns:e}){r.exports.useState(!1);const{data:n,setData:c,post:l,processing:u,errors:f,reset:a}=m({company_name:"",first_name:"",last_name:"",email:"",password:""});return r.exports.useEffect(()=>()=>{a("password","password_confirmation")},[]),t.createElement(s,{title:"My Campaigns",subtitle:t.createElement(o,{href:route("campaigns.create")},e.length>0?"Create a new campaign":"Create your first campaign")},e.length>0?t.createElement("div",{className:"mx-10"},t.createElement(i,{data:e})):t.createElement(p,{title:"You have created no campaign list yet"}))}export{Y as default};
