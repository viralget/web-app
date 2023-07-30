import{r as m,u as D,R as e,G as R}from"./app.b9917e06.js";import{A as G}from"./AuthenticatedLayout.19a9c35b.js";import{B as A}from"./ButtonBack.06833304.js";import{B as x}from"./Button.cfdcba50.js";import{I as l,M as U}from"./MultiSelect.0b50597c.js";import{T as o}from"./TextArea.773433bc.js";import{c as b,a as f,g as y}from"./helpers.78219879.js";import{U as L}from"./UploadImage.c06b3ef0.js";import{S as v}from"./Select.bfb13258.js";import{c as W}from"./inline.c6606910.js";import{S as H}from"./StripePaymentButton.6cbf9f74.js";import{t as O}from"./Toast.3711fa7a.js";import K from"./steps.1652f610.js";import Y from"./Details.8edd59d8.js";import"./Logo.8fb280c2.js";import"./DropdownMenu.96249001.js";import"./Avatar.9750c799.js";import"./ChevronDownIcon.04c3e77b.js";import"./transition.a5983d67.js";import"./keyboard.36a7f5d3.js";import"./icons.140e276c.js";import"./XMarkIcon.584a20e6.js";import"./Bars3CenterLeftIcon.55a1125a.js";import"./dialog.7fcf58de.js";import"./description.2571d529.js";import"./Label.610c3a99.js";import"./Label.24168fe9.js";import"./select.c5b14128.js";import"./Combination.d7154277.js";import"./Input.b93f4058.js";import"./moment.9709ab41.js";import"./index.e8fcc329.js";import"./api.50d4d3c0.js";import"./MultiSelect.a76c656b.js";function Se({user:u}){const[r,d]=m.exports.useState("details"),[h,w]=m.exports.useState(null),[N,_]=m.exports.useState(0),[p,C]=m.exports.useState(0),[k,z]=m.exports.useState({});m.exports.useState(!1);const[q,g]=m.exports.useState("Pay & Create Campaign"),{data:t,setData:i,post:V,processing:S,errors:J,reset:I}=D({title:"",social_network:"",campaign_type:"",budget:"",keywords:"",start_date:"",end_date:"",description:"",brand_name:"",location:"",gender:"",age:"",interest:"",reach:"",impression:"",engagement:"",conversion:"",logo:"",about_us:"",campaign_goal:"",campaign_message:"",key_objectives:"",channels:"",timeline:"",mood_board:"",target_audience:"",currency:"NGN",influencer_niche:"",influencer_size:"",influencer_number:"",influencer_gender:"",influencer_location:"",influencer_category:""});m.exports.useEffect(()=>{z({email:u.email,amount_usd:p,metadata:{...t,email:u.email},paymentDataExtras:{},type:"paid-listing",paymentVerificationRoute:route("general.payments.verify"),successRedirectsTo:route("preorder.success")})},[t]);const a=n=>{i(n.target.name,y(n))},T=n=>{if(n.target.files&&n.target.files[0]){i("logo",n.target.files[0]);let c=new FileReader;c.onload=s=>{w(s.target.result)},c.readAsDataURL(n.target.files[0])}};function j(n){if(n.preventDefault(),r==="details"){d("contents");return}if(r==="contents"){d("influencer");return}t.currency==="NGN"&&B()}function B(){g("initiating payment..."),new W().newTransaction({key:"pk_live_3c0c5c796849b1f432db34306cd8a23478cd0d7a",email:u.email,amount:p*100,reference:new Date().getTime().toString(),metadata:{...t,platform:t.social_network,email:u.email},onSuccess:c=>{const s={reference:c.reference,payment_gateway:"paystack"};M(s)},onCancel:()=>{console.log("You need this, stay back!")}})}async function M(n){g("Verifying payment..");const c=await R.post(route("general.payments.verify"),n);c!=null&&c.data.status?P():O.error("Something went wrong")}const P=async()=>{g("Creating campaign.."),V(route("brief.store")),I(),window.location.href=route("brief.success")};function E(n){i(n.target.name,y(n));const c=n.target.value,s=.15*Number(c),F=Number(c)+s;C(F),_(s)}return e.createElement(G,{title:"My Campaigns",smallHeader:!0},e.createElement("div",{className:"bg-white h-screen  mt-3 px-5 mb-10"},e.createElement(A,null),e.createElement(K,{activeTab:r,onChangeTab:d}),e.createElement("div",{className:"flex  justify-center mx-auto"},e.createElement("div",{className:"flex space-x-5"},e.createElement("span",{className:"font-bold  text-viralget-red  capitalize"},"campaign  details"),e.createElement("span",{className:"text-gray-300"},"|"),e.createElement("span",{className:b("font-bold  capitalize",r=="contents"||r=="influencer"?"text-viralget-red":"text-gray-200")},"content"),e.createElement("span",{className:"text-gray-300"},"|"),e.createElement("span",{className:b("font-bold  capitalize",r=="influencer"?"text-viralget-red":"text-gray-200")},"influencers  detail"))),e.createElement("form",{onSubmit:j,className:"mt-10  bg-white shadow-sm md:p-5 p-3 w-full"},r=="details"?e.createElement(e.Fragment,null,e.createElement(Y,{data:t,onHandleChange:a,setData:i}),e.createElement("div",{className:"flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full"},e.createElement("div",{className:"form-group w-full"},e.createElement("span",{className:"text-t-lg-x  capitalize font-bold "},"main info"),e.createElement("div",{className:"inputs  mt-5 w-full flex flex-col space-y-4"},e.createElement("div",null,e.createElement(l,{type:"text",name:"title",label:"Campaign Title",required:!0,placeholder:"input campaign title",defaultValue:t.title,onChange:a})),e.createElement("div",null,e.createElement(U,{options:[{value:"Instagram"},{value:"Twitter"}],label:"Social Platform",name:"social_network",required:!0,onChange:n=>i("social_network",[...n].join(","))})),e.createElement("div",{class:"max-w-lg"},e.createElement("p",{class:"text-sm text-gray-500"},"Select Campaign Type"),e.createElement("div",{class:"mt-4 flex space-x-3"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"public",onChange:a,name:"campaign_type",value:"public",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"public",class:"ml-3 block text-sm font-medium text-gray-700"},"Public")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"private",onChange:a,name:"campaign_type",value:"private",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"private",class:"ml-3 block text-sm font-medium text-gray-700"},"Private"))))),e.createElement("div",{className:"mt-10"},e.createElement("span",{className:"text-t-lg-x  capitalize font-bold mt-10"},"Tracked keywords"),e.createElement("div",{className:"inputs  mt-5 w-full flex flex-col space-y-4"},e.createElement("div",null,e.createElement(l,{type:"text",name:"keywords",label:"keywords",required:!0,placeholder:"field(@handle, #hastag, keywords, phrase)",defaultValue:t.keywords,onChange:a}))))),e.createElement("div",{className:"form-group w-full"},e.createElement("span",{className:"text-t-lg-x  capitalize font-bold "},"about campaign"),e.createElement("div",{className:"inputs  mt-5 w-full flex flex-col space-y-4"},e.createElement("div",null,e.createElement(l,{type:"date",name:"start_date",label:"Start date",required:!0,placeholder:"input start date",defaultValue:t.start_date,onChange:a})),e.createElement("div",null,e.createElement(l,{type:"date",name:"end_date",label:"End date",required:!0,placeholder:"input end date",defaultValue:t.end_date,onChange:a})),e.createElement("div",null,e.createElement(o,{type:"text",name:"description",label:"Description (about campaign)",className:"mt-1 block w-full h-32",defaultValue:t.description,onChange:a,required:!0})),e.createElement("div",null,e.createElement(l,{type:"text",name:"brand_name",label:"Company/brand/Product",required:!0,placeholder:"input compnay/brand/product",defaultValue:t.brand_name,onChange:a}))))),e.createElement("div",{className:"flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full mt-5"},e.createElement("div",{className:"form-group w-full"},e.createElement("span",{className:"text-t-lg-x  capitalize font-bold "},"Target"),e.createElement("div",{className:"inputs  mt-5 w-full flex flex-col space-y-4"},e.createElement("div",null,e.createElement(l,{type:"text",name:"location",label:"Location",required:!0,placeholder:"input location",defaultValue:t.location,onChange:a})),e.createElement("div",{class:"max-w-lg"},e.createElement("p",{class:"text-sm text-gray-500"},"Gender"),e.createElement("div",{class:"mt-4 flex space-x-3"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"male",onChange:a,name:"gender",value:"male",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"male",class:"ml-3 block text-sm font-medium text-gray-700"},"Male")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"female",name:"gender",onChange:a,value:"female",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"female",class:"ml-3 block text-sm font-medium text-gray-700"},"Female")))),e.createElement("div",null,e.createElement(l,{type:"text",name:"age",label:"Age range",required:!0,placeholder:"input age(E.g: 19-30)",defaultValue:t.age,onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"interest",label:"Interest",required:!0,placeholder:"input interest",defaultValue:t.interest,onChange:a})))),e.createElement("div",{className:"form-group w-full"},e.createElement("span",{className:"text-t-lg-x  capitalize font-bold "},"campaign goals"),e.createElement("div",{className:"inputs  mt-5 w-full flex flex-col space-y-4"},e.createElement("div",null,e.createElement(l,{type:"text",name:"reach",label:"Reach",required:!0,placeholder:"Input reach",defaultValue:t.reach,onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"impression",label:"Impression/View",required:!0,placeholder:"Input impression",defaultValue:t.impression,onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"engagement",label:"Engagement",required:!0,placeholder:"Input engagement",defaultValue:t.engagement,onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"conversion",label:"Conversion",required:!0,placeholder:"Input conversion",defaultValue:t.conversion,onChange:a})))))):r=="influencer"?e.createElement("div",{className:"flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full mt-5"},e.createElement("div",{className:"w-full"},e.createElement("div",null,e.createElement("div",{className:"flex w-full items-center"},e.createElement("div",{className:""},e.createElement(v,{options:[{name:"Nano",value:"nano"},{name:"Micro",value:"micro"},{name:"Macro",value:"macro"},{name:"Mid-tier",value:"mid-tier"},{name:"Mega",value:"mega"}],name:"influencer_size",value:t.influencer_size,onChange:a,label:"Size",defaultOptionText:"Select size",required:!0})),e.createElement("div",{className:"w-full"},e.createElement(l,{type:"number",name:"influencer_number",label:"Influencer Number",required:!0,placeholder:"input number(please work with the selected size)",defaultValue:t.influencer_number,onChange:E}))),t.influencer_size&&e.createElement("div",{className:"mt-3 shadow-md p-2"},e.createElement("span",{className:"font-bold text-sm"},"Minimum cost per influencers"),e.createElement("div",{className:"flex justify-between  w-full border-b  pb-2"},e.createElement("span",null,"Plartforms"),e.createElement("span",null,"Followers"),e.createElement("span",null,"Cost")),e.createElement("div",{className:"flex justify-between  w-full   my-2 mt-2"},e.createElement("span",null,"Instagram"),e.createElement("span",null,t.influencer_size==="nano"?"10,000":t.influencer_size==="micro"?"10,000 - 100,000":t.influencer_size==="mid-tier"?"100,001 - 500,000":t.influencer_size==="macro"?"500,001 - 1,000,000":t.influencer_size==="mega"?"1,000,00 above":""),e.createElement("span",null," ",t.influencer_size==="nano"?"N50,000":t.influencer_size==="micro"?"N150,000":t.influencer_size==="mid-tier"?"N350,000":t.influencer_size==="macro"?"N750,000":t.influencer_size==="mega"?"N1,500.000":"")),e.createElement("div",{className:"flex justify-between   w-full   my-2"},e.createElement("span",null,"Twitter"),e.createElement("span",null,t.influencer_size==="nano"?"10,000":t.influencer_size==="micro"?"10,000 - 100,000":t.influencer_size==="mid-tier"?"100,001 - 500,000":t.influencer_size==="macro"?"500,001 - 1,000,000":t.influencer_size==="mega"?"1,000,00 above":""),e.createElement("span",null," ",t.influencer_size==="nano"?" N3,500":t.influencer_size==="micro"?"N7,500":t.influencer_size==="mid-tier"?"N20,500":t.influencer_size==="macro"?"N35,500":t.influencer_size==="mega"?"N65,000":"")))),e.createElement("div",{className:"flex w-full items-center mt-4"},e.createElement("div",{className:""},e.createElement(v,{options:[{name:"Naira",value:"NGN"},{name:"Dollar",value:"USD"}],name:"currency",value:t.currency,onChange:a,label:"Currency",defaultOptionText:"Select Currency",required:!0})),e.createElement("div",{className:"w-full"},e.createElement(l,{type:"number",name:"budget",label:"Budget",required:!0,placeholder:"input campaign budget (E.g: 3000000)",defaultValue:t.budget,onChange:E}))),e.createElement("div",{className:"w-full mt-4"},e.createElement(l,{type:"text",name:"influencer_niche",label:"Influencer Niche",required:!0,placeholder:"input influencer niche",defaultValue:t.influencer_niche,onChange:a}))),e.createElement("div",{className:"w-full"},e.createElement("div",{className:"w-full "},e.createElement(l,{type:"text",name:"influencer_category",label:"Influencer Category",required:!0,placeholder:"input influencer category",defaultValue:t.influencer_category,onChange:a})),e.createElement("div",{className:"w-full mt-4"},e.createElement(l,{type:"text",name:"influencer_location",label:"Influencer Location",required:!0,placeholder:"input influencer location",defaultValue:t.influencer_location,onChange:a})),e.createElement("div",{class:"w-full mt-4"},e.createElement("p",{class:"text-sm text-gray-500"},"Influencer Gender"),e.createElement("div",{class:"mt-4 flex space-x-3"},e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"male",onChange:a,name:"influencer_gender",value:"male",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"male",class:"ml-3 block text-sm font-medium text-gray-700"},"Male")),e.createElement("div",{class:"flex items-center"},e.createElement("input",{id:"female",name:"influencer_gender",onChange:a,value:"female",type:"radio",class:"h-4 w-4 accent-viralget-red border-gray-300 text-viralget-red focus:ring-viralget-red"}),e.createElement("label",{for:"female",class:"ml-3 block text-sm font-medium text-gray-700"},"Female")))))):e.createElement("div",{className:"w-full"},e.createElement("div",{className:"mt-space-20  mb-space-20 md:w-full  max-w-sm"},e.createElement(L,{displayFile:T,image:h,name:"logo",isRequired:!0})),e.createElement("div",{className:"flex md:flex-row flex-col md:space-x-5 md:space-y-0  space-y-4 w-full"},e.createElement("div",{className:"w-full"},e.createElement("div",{className:"mt-5"},e.createElement(o,{type:"text",name:"about_us",label:"About us",placeholder:"2-3 sentences  explaining what your company does.",className:"mt-1 block w-full h-32",defaultValue:t.about_us,onChange:a,required:!0})),e.createElement("div",{className:"mt-5"},e.createElement(o,{type:"text",name:"campaign_goal",label:"Campaign goal",placeholder:"1-2 sentences  describing the campaign and what you hope to accomplish.",className:"mt-1 block w-full h-32",defaultValue:t.campaign_goal,onChange:a,required:!0})),e.createElement("div",{className:"mt-5"},e.createElement(o,{type:"text",name:"campaign_message",label:"Campaign message",placeholder:"Specific information that the influencer should include in post captions",className:"mt-1 block w-full h-32",defaultValue:t.campaign_message,onChange:a,required:!0}))),e.createElement("div",{className:"w-full flex flex-col  space-y-5"},e.createElement("div",{className:"mt-5"},e.createElement(o,{type:"text",name:"key_objectives",label:"Key objectives",placeholder:"What are you hoping to accomplish (brand awareness, engagement, etc.)",className:"mt-1 block w-full h-32",defaultValue:t.key_objectives,onChange:a,required:!0})),e.createElement("div",{className:"hidden"},e.createElement(l,{type:"text",name:"channels",label:"Channel",required:!0,placeholder:"Input channel",defaultValue:t.social_network,onChange:a})),e.createElement("div",null,e.createElement(l,{type:"text",name:"timeline",label:"Timeline",required:!0,placeholder:"Input timeline",defaultValue:t.timeline,onChange:a})),e.createElement("div",null,e.createElement(l,{type:"file",name:"mood_board",accept:".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf",label:"Mood board",required:!0,placeholder:"Input mood board",defaultValue:t.mood_board,onChange:n=>i("mood_board",n.target.files[0])})),e.createElement("div",null,e.createElement(l,{type:"text",name:"target_audience",label:"Target audience",required:!0,placeholder:"Input target audience",defaultValue:t.target_audience,onChange:a}))))),t.budget&&t.influencer_number&&e.createElement("div",{className:"bg-white shadow-md  md:max-w-md p-5 w-full mt-3 flex flex-col space-y-3"},e.createElement("div",{className:"flex justify-between"},e.createElement("span",{className:"w-full"},"Budget:"),e.createElement("span",{className:"text-left w-full"},t.currency," ",f(t.budget))),e.createElement("div",{className:"flex justify-between"},e.createElement("span",{className:"w-full"},"Budget Per Influencer :"),e.createElement("span",{className:"text-left w-full"},t.currency," ",f(Number(t.budget)/Number(t.influencer_number)))),e.createElement("div",{className:"flex justify-between"},e.createElement("span",{className:"w-full"},"Service fee(15%):"),e.createElement("span",{className:"text-left w-full"},t.currency," ",f(N))),e.createElement("div",{className:"flex justify-between"},e.createElement("span",{className:"w-full"},"Total:"),e.createElement("span",{className:"text-left w-[10rem] "},t.currency," ",f(p)))),e.createElement("div",{className:"text-center flex space-x-3 mt-4 md:max-w-md"},r=="details"?null:e.createElement(x,{type:"buton",className:"block w-full bg-white text-viralget-red",onClick:()=>d(r=="influencer"?"contents":"details")},"Back"),t.currency=="NGN"?e.createElement(x,{type:"submit",className:"block w-full bg-viralget-red  text-white",processing:S},r=="details"||r=="contents"?"Next":q):e.createElement(H,{...k,amount:p},"Pay & Create Campaign")))))}export{Se as default};