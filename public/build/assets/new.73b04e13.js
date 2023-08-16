import{R as e,r as g,u as h}from"./app.cc07e7b9.js";import{B as d}from"./Button.5e698576.js";import{I as l}from"./Input.61401512.js";import{S as s}from"./Select.13aa2671.js";import{t as i}from"./Toast.78628752.js";import{g as b}from"./helpers.2e537a8b.js";import{V as v}from"./ValidationErrors.4e35c008.js";import{H as y}from"./Header.68890ae5.js";import{C as N}from"./CheckIcon.4d216260.js";import"./Label.cb6fd0e5.js";import"./moment.9709ab41.js";import"./Error.882d4675.js";import"./NavLink.98bbd975.js";import"./Logo.e9ffbce2.js";import"./DropdownMenu.e38eddb9.js";import"./Avatar.2bebdc68.js";import"./transition.f0c9e4b4.js";import"./keyboard.ada55ee2.js";import"./ChevronDownIcon.800126ac.js";import"./constants.91c69332.js";function x({title:u,message:n,actionText:m,link:t}){return e.createElement("div",{className:"space-y-5  text-center py-8 min-h-fit"},e.createElement("div",{className:"mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100"},e.createElement(N,{className:"h-10 w-10 text-green-600","aria-hidden":"true"})),e.createElement("h1",{className:"text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},u),e.createElement("p",{className:"text-center text-gray-800 mt-3"},n),e.createElement(d,{href:t},m))}function J({influencers:u}){const[n,m]=g.exports.useState(!1),{data:t,setData:o,post:p,processing:f,errors:c}=h({}),a=r=>{o(r.target.name,b(r))},E=r=>{r.preventDefault(),p(route("whatsapp-influencers.store"),{onSuccess:()=>{i("Data submitted successfully! Your login details has been sent to your mailbox"),m(!0)},onError:()=>{i.error("An error occured")}})};return e.createElement("div",null,e.createElement(y,null),e.createElement("main",null,n?e.createElement(x,{title:"Kudos!",message:"You're only a step away. Our team would reach out to you once your request has been confirmed.",link:route("home"),actionText:"Return home"}):e.createElement("div",{className:"max-w-lg mx-auto p-5"},e.createElement("div",{className:" text-center space-y-5"},e.createElement("h2",{className:"mt-6 text-4xl font-bold tracking-tight text-gray-900"},"Earn N50,000 - N250,000 Monthly Advertising on Your WhatsApp."),e.createElement("p",null,"Join our WhatsApp Amplifiers Network")),e.createElement("div",{className:"mt-8 space-y-5"},c&&e.createElement(v,{errors:c}),e.createElement("form",{onSubmit:E,className:"space-y-2"},e.createElement("div",null,e.createElement(l,{type:"text",name:"name",label:"Your Name",required:!0,defaultValue:t.name,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(l,{type:"email",name:"email",label:"Email Address",required:!0,defaultValue:t.email,className:"mt-1 block w-full",onChange:a})),e.createElement("div",{className:"grid md:grid-cols-2 gap-5"},e.createElement("div",null,e.createElement(s,{name:"gender",label:"Gender",required:!0,defaultValue:t.gender,options:[{name:"Male"},{name:"Female"}],onChange:a})),e.createElement("div",null,e.createElement(s,{name:"marital_status",label:"Marital Status",required:!0,defaultValue:t.marital_status,options:[{name:"Single"},{name:"Married"},{name:"Divorced"},{name:"Widowed"},{name:"Others"}],onChange:a}))),e.createElement("div",null,e.createElement(l,{type:"number",name:"age",label:"Age",required:!0,defaultValue:t.age,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"occupation",label:"Occupation",required:!0,defaultValue:t.occupation,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"whatsapp_number",label:"Whatsapp phone number",required:!0,defaultValue:t.whatsapp_phone_number,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(l,{type:"number",min:"0",step:"1",name:"average_views",label:"Average Whatsapp Views",required:!0,defaultValue:t.average_whatsapp_views,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(l,{type:"file",name:"video_evidence",accepts:"video/mp4,video/x-m4v,video/*",label:"Video Evidence of WhatsApp Views",required:!0,onChange:r=>o("video_evidence",r.target.files[0]),className:"mt-1 block w-full"})),e.createElement("div",{className:"grid md:grid-cols-2 gap-5"},e.createElement("div",null,e.createElement(l,{type:"text",name:"country",label:"Country",required:!0,defaultValue:t.country,className:"mt-1 block w-full",onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"state",label:"State",required:!0,defaultValue:t.state,className:"mt-1 block w-full",onChange:a}))),e.createElement("div",null,e.createElement(s,{name:"parental_status",label:"Are you a parent?",required:!0,defaultValue:t.parental_status,options:[{name:"Yes"},{name:"No"}],onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"interests",label:"Interests",required:!0,defaultValue:t.interests,className:"mt-1 block w-full",onChange:a})),e.createElement("div",{className:"text-center space-y-2 mt-4"},e.createElement(d,{type:"submit",className:"block w-full",processing:f},"Submit Data")))))))}export{J as default};
