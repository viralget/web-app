import{r as d,R as e,u as k}from"./app.1fbb248a.js";import{B as N}from"./Button.e32771f9.js";import{I as r}from"./Input.0297fa53.js";import{L as q}from"./Label.91d8e5c2.js";import{t as y}from"./Toast.fb0b306b.js";import{g as S}from"./helpers.1cd6bcc2.js";import{V as _}from"./ValidationErrors.0ebe3388.js";import{H as A}from"./Header.82c309be.js";import{C as W}from"./CheckIcon.49e7c6f7.js";import"./moment.9709ab41.js";import"./Button.5abd8ba6.js";import"./Container.7f8ddde8.js";import"./Logo.6da8fed8.js";import"./NavLink.b1932728.js";import"./transition.9e4679b1.js";import"./use-event-listener.c7464666.js";import"./DropdownMenu.ba897c9a.js";import"./Avatar.53a45213.js";import"./ChevronDownIcon.6e7e4e27.js";function b({name:m,value:c,className:s,autoComplete:t,disabled:u=!1,required:p,isFocused:f,onChange:o,secondary:a=!1,label:i="",id:l="",explainer:v="",options:E=[],defaultOptionText:g,defaultValue:x,capitalize:w=!0,useBorder:C=!0}){const h=d.exports.useRef();return d.exports.useEffect(()=>{f&&h.current.focus()},[]),d.exports.useEffect(()=>{},[E]),e.createElement("div",{className:"flex flex-col items-start space-y-1"},i&&e.createElement(q,{for:l||m,value:i}),v&&e.createElement("p",{className:"text-sm text-gray-400 mb-1"},v),e.createElement("select",{id:l||m,name:m,disabled:u,ref:h,className:`focus:ring-gray-400 ${w&&"capitalize"} ${C&&"border"}  indent-1 py-3 focus:border-gray-400 block w-full px-2  sm:text-sm border-gray-300 rounded-md ${a&&"bg-gray-100"} `+s+"border border-gray-300",defaultValue:x,required:p,onChange:n=>o(n)},e.createElement("option",{value:""},g!=null?g:"Select option"),E.length&&E.map((n,V)=>e.createElement("option",{value:n.value||n.value==""?n.value:n.name,className:"capitalize",key:V},n.name.replace("-"," ")))))}function D({title:m,message:c,actionText:s,link:t}){return e.createElement("div",{className:"space-y-5  text-center py-8 min-h-fit"},e.createElement("div",{className:"mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100"},e.createElement(W,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})),e.createElement("h1",{className:"text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},m),e.createElement("p",{className:"text-center text-gray-800 mt-3"},c),e.createElement(N,{href:t},s))}function O({influencers:m}){const[c,s]=d.exports.useState(!1),{data:t,setData:u,post:p,processing:f,errors:o}=k({}),a=l=>{u(l.target.name,S(l))},i=l=>{l.preventDefault(),p(route("whatsapp-influencers.store"),{onSuccess:()=>{y("Data submitted successfully! Your login details has been sent to your mailbox"),s(!0)},onError:()=>{y.error("An error occured")}})};return e.createElement("div",null,e.createElement(A,null),e.createElement("main",null,c?e.createElement(D,{title:"Kudos!",message:"You're only a step away. Our team would reach out to you once your request has been confirmed.",link:route("home"),actionText:"Return home"}):e.createElement("div",{className:"max-w-lg mx-auto p-5"},e.createElement("div",{className:" text-center space-y-5"},e.createElement("h2",{className:"mt-6 text-4xl font-bold tracking-tight text-gray-900"},"Earn N50,000 - N250,000 Monthly Advertising on Your WhatsApp."),e.createElement("p",null,"Join our WhatsApp Amplifiers Network")),e.createElement("div",{className:"mt-8 space-y-5"},o&&e.createElement(_,{errors:o}),e.createElement("form",{onSubmit:i,className:"space-y-2"},e.createElement("div",null,e.createElement(r,{type:"text",name:"name",label:"Your Name",required:!0,defaultValue:t.name,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(r,{type:"email",name:"email",label:"Email Address",required:!0,defaultValue:t.email,className:"mt-1 block w-full",onChange:a})),e.createElement("div",{className:"grid md:grid-cols-2 gap-5"},e.createElement("div",null,e.createElement(b,{name:"gender",label:"Gender",required:!0,defaultValue:t.gender,options:[{name:"Male"},{name:"Female"}],onChange:a})),e.createElement("div",null,e.createElement(b,{name:"marital_status",label:"Marital Status",required:!0,defaultValue:t.marital_status,options:[{name:"Single"},{name:"Married"},{name:"Divorced"},{name:"Widowed"},{name:"Others"}],onChange:a}))),e.createElement("div",null,e.createElement(r,{type:"number",name:"age",label:"Age",required:!0,defaultValue:t.age,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(r,{type:"text",name:"occupation",label:"Occupation",required:!0,defaultValue:t.occupation,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(r,{type:"text",name:"whatsapp_number",label:"Whatsapp phone number",required:!0,defaultValue:t.whatsapp_phone_number,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(r,{type:"number",min:"0",step:"1",name:"average_views",label:"Average Whatsapp Views",required:!0,defaultValue:t.average_whatsapp_views,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(r,{type:"file",name:"video_evidence",accepts:"video/mp4,video/x-m4v,video/*",label:"Video Evidence of WhatsApp Views",required:!0,onChange:l=>u("video_evidence",l.target.files[0]),className:"mt-1 block w-full"})),e.createElement("div",{className:"grid md:grid-cols-2 gap-5"},e.createElement("div",null,e.createElement(r,{type:"text",name:"country",label:"Country",required:!0,defaultValue:t.country,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(r,{type:"text",name:"state",label:"State",required:!0,defaultValue:t.state,className:"mt-1 block w-full",onChange:a}))),e.createElement("div",null,e.createElement(b,{name:"parental_status",label:"Are you a parent?",required:!0,defaultValue:t.parental_status,options:[{name:"Yes"},{name:"No"}],onChange:a})),e.createElement("div",null,e.createElement(r,{type:"text",name:"interests",label:"Interests",required:!0,defaultValue:t.interests,className:"mt-1 block w-full",onChange:a})),e.createElement("div",{className:"text-center space-y-2 mt-4"},e.createElement(N,{type:"submit",className:"block w-full",processing:f},"Submit Data")))))))}export{O as default};
