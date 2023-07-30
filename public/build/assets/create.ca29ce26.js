import{r as s,u as T,R as e,G as z}from"./app.b9917e06.js";import{A as G}from"./AuthenticatedLayout.19a9c35b.js";import{B as A}from"./ButtonBack.06833304.js";import{B as g}from"./Button.cfdcba50.js";import{c as d,g as y}from"./helpers.78219879.js";import"./UploadImage.c06b3ef0.js";import{c as M}from"./inline.c6606910.js";import{S as V}from"./StripePaymentButton.6cbf9f74.js";import{t as j}from"./Toast.3711fa7a.js";import"./steps.1652f610.js";import H from"./Details.8edd59d8.js";import I from"./Influencers.d16518c1.js";import L from"./Contents.bb67be25.js";import"./Logo.8fb280c2.js";import"./DropdownMenu.96249001.js";import"./Avatar.9750c799.js";import"./ChevronDownIcon.04c3e77b.js";import"./transition.a5983d67.js";import"./keyboard.36a7f5d3.js";import"./icons.140e276c.js";import"./XMarkIcon.584a20e6.js";import"./Bars3CenterLeftIcon.55a1125a.js";import"./dialog.7fcf58de.js";import"./description.2571d529.js";import"./moment.9709ab41.js";import"./index.e8fcc329.js";import"./api.50d4d3c0.js";import"./Input.b93f4058.js";import"./Label.610c3a99.js";import"./MultiSelect.a76c656b.js";import"./select.c5b14128.js";import"./Combination.d7154277.js";import"./TextArea.773433bc.js";import"./Select.0dc28602.js";function Se({user:c}){const[a,m]=s.exports.useState("details"),[b,x]=s.exports.useState(null),[U,E]=s.exports.useState(0),[l,_]=s.exports.useState(0),[N,w]=s.exports.useState({});s.exports.useState(!1);const[k,p]=s.exports.useState("Pay & Create Campaign"),{data:n,setData:i,post:h,processing:S,errors:W,reset:v}=T({title:"",social_network:"",campaign_type:"",budget:"",keywords:"",start_date:"",end_date:"",description:"",brand_name:"",location:"",gender:"",age:"",interest:"",reach:"",impression:"",engagement:"",conversion:"",logo:"",about_us:"",campaign_goal:"",campaign_message:"",key_objectives:"",channels:"",timeline:"",mood_board:"",target_audience:"",currency:"NGN",influencer_niche:"",influencer_size:"",influencer_number:"",influencer_gender:"",influencer_location:"",influencer_category:""});s.exports.useEffect(()=>{w({email:c.email,amount_usd:l,metadata:{...n,email:c.email},paymentDataExtras:{},type:"paid-listing",paymentVerificationRoute:route("general.payments.verify"),successRedirectsTo:route("preorder.success")})},[n]);const u=t=>{i(t.target.name,y(t))},C=t=>{if(t.target.files&&t.target.files[0]){i("logo",t.target.files[0]);let r=new FileReader;r.onload=o=>{x(o.target.result)},r.readAsDataURL(t.target.files[0])}};function B(t){if(t.preventDefault(),a==="details"){m("contents");return}if(a==="contents"){m("influencer");return}n.currency==="NGN"&&F()}function F(){p("initiating payment..."),new M().newTransaction({key:"pk_live_3c0c5c796849b1f432db34306cd8a23478cd0d7a",email:c.email,amount:l*100,reference:new Date().getTime().toString(),metadata:{...n,platform:n.social_network,email:c.email},onSuccess:r=>{const o={reference:r.reference,payment_gateway:"paystack"};P(o)},onCancel:()=>{console.log("You need this, stay back!")}})}async function P(t){p("Verifying payment..");const r=await z.post(route("general.payments.verify"),t);r!=null&&r.data.status?D():j.error("Something went wrong")}const D=async()=>{p("Creating campaign.."),h(route("brief.store")),v(),window.location.href=route("brief.success")};function f(t){i(t.target.name,y(t));const r=t.target.value,o=.15*Number(r),R=Number(r)+o;_(R),E(o)}return e.createElement(G,{title:"My Campaigns",smallHeader:!0},e.createElement("div",{className:"bg-white h-screen  mt-3 px-5 mb-10"},e.createElement(A,null),e.createElement("div",{className:"flex  justify-center mx-auto p-5 text-sm bg-gray-50 my-5"},e.createElement("div",{className:"flex space-x-5"},e.createElement("span",{className:"font-bold  text-viralget-red  capitalize"},"campaign  details"),e.createElement("span",{className:"text-gray-300"},"|"),e.createElement("span",{className:d("font-bold  capitalize",a=="contents"||a=="influencer"?"text-viralget-red":"text-gray-300")},"content"),e.createElement("span",{className:"text-gray-300"},"|"),e.createElement("span",{className:d("font-bold  capitalize",a=="influencer"?"text-viralget-red":"text-gray-300")},"influencers  detail"))),e.createElement("form",{onSubmit:B,className:"mt-10  bg-white shadow-sm md:p-5 p-3 w-full"},a=="details"?e.createElement(e.Fragment,null,e.createElement(H,{data:n,onHandleChange:u,setData:i})):a=="influencer"?e.createElement(I,{data:n,onHandleChange:u,setData:i,handleBudget:f}):e.createElement(e.Fragment,null,e.createElement(L,{data:n,onHandleChange:u,setData:i,handleBudget:f,displayFile:C,image:b})),e.createElement("div",{className:"text-center flex space-x-3 mt-4 md:max-w-md"},a=="details"?null:e.createElement(g,{type:"buton",className:"block w-full bg-white text-viralget-red",onClick:()=>m(a=="influencer"?"contents":"details")},"Back"),n.currency=="NGN"?e.createElement(g,{type:"submit",usePrimary:!0,block:!0,processing:S},a=="details"||a=="contents"?"Next":k):e.createElement(V,{...N,amount:l},"Pay & Create Campaign")))))}export{Se as default};
