import{r as u,u as M,R as t,d as T}from"./app.fb877f69.js";import{A as H}from"./AuthenticatedLayout.66d92136.js";import{B as G}from"./ButtonBack.f0ad1085.js";import{B as E}from"./Button.adfcbd9f.js";import{c as w,g as N}from"./helpers.472d4338.js";import"./UploadImage.f3d4df8a.js";import"./inline.c6606910.js";import"./StripePaymentButton.edcbcbe3.js";import{t as k}from"./Toast.4c3067f8.js";import"./steps.43d8f60f.js";import V from"./Details.7fdb8390.js";import q from"./Influencers.3235bc2c.js";import J from"./Contents.3422e963.js";import"./Logo.0a0803eb.js";import"./DropdownMenu.9377ac0d.js";import"./Avatar.2cb43144.js";import"./ChevronDownIcon.31a8b89e.js";import"./transition.fefcc9c4.js";import"./keyboard.67954041.js";import"./icons.632f1dd7.js";import"./XMarkIcon.8babeba5.js";import"./Bars3CenterLeftIcon.1a627152.js";import"./dialog.e87fead8.js";import"./description.a4cf72cc.js";import"./moment.9709ab41.js";import"./index.e8fcc329.js";import"./api.3fa01f7d.js";import"./Input.889e91d8.js";import"./Label.c3b5aba2.js";import"./MultiSelect.ace3b291.js";import"./Combination.fa2f02b4.js";import"./Select.daeb880f.js";import"./TextArea.0f58c920.js";function ze({user:K,isEdit:d=!1,campaign:e}){const f=new URLSearchParams(window.location.search).get("tab"),[o,v]=u.exports.useState(f!=null?f:"details"),[B,S]=u.exports.useState(null),[F,C]=u.exports.useState(0),[z,A]=u.exports.useState(0),[R,Q]=u.exports.useState(d?"Update Campaign":"Create Campaign"),{data:_,setData:l,post:x,processing:D,errors:W,reset:X}=M({title:e==null?void 0:e.campaign_name,social_network:e==null?void 0:e.social_network,campaign_type:e==null?void 0:e.campaign_type,budget:e==null?void 0:e.budget,keywords:e==null?void 0:e.tracked_keywords,start_date:e==null?void 0:e.campaign_start_date,end_date:e==null?void 0:e.campaign_end_date,description:e==null?void 0:e.campaign_description,brand_name:e==null?void 0:e.brand_name,location:e==null?void 0:e.target_location,gender:e==null?void 0:e.target_gender,age:e==null?void 0:e.target_age,interest:e==null?void 0:e.target_interest,reach:e==null?void 0:e.reach_goal,impression:e==null?void 0:e.impressions_goal,engagement:e==null?void 0:e.engagement_goal,conversion:e==null?void 0:e.conversion_goal,logo:"",about_us:e==null?void 0:e.about_us,campaign_goal:e==null?void 0:e.campaign_goal,campaign_message:e==null?void 0:e.campaign_message,key_objectives:e==null?void 0:e.campaign_key_objectives,channels:e==null?void 0:e.channels,timeline:e==null?void 0:e.timeline,mood_board:"",target_audience:e==null?void 0:e.target_audience,currency:e==null?void 0:e.currency,influencer_niche:e==null?void 0:e.influencer_niche,influencer_size:e==null?void 0:e.influencer_size,influencer_number:e==null?void 0:e.influencer_number,influencer_gender:e==null?void 0:e.influencer_gender,influencer_location:e==null?void 0:e.influencer_location,influencer_category:e==null?void 0:e.influencer_category}),b=r=>{l(r.target.name,N(r))},P=r=>{if(r.target.files&&r.target.files[0]){l("logo",r.target.files[0]);let s=new FileReader;s.onload=n=>{S(n.target.result)},s.readAsDataURL(r.target.files[0])}};u.exports.useEffect(()=>{d&&h(e.budget)},[]);const U=()=>{if(o==="details"){window.location.href="?tab=contents";return}if(o==="contents"){window.location.href="?tab=influencer";return}o==="influencer"&&T.Inertia.get(route("brief.view",{id:e==null?void 0:e.id}))};function j(r){r.preventDefault(),d?L():I()}const I=async()=>{x(route("brief.store"),{onSuccess:()=>{},onError:()=>{k.error("An error occurred")}})},L=async()=>{x(route("brief.update",{id:e==null?void 0:e.id}),{onSuccess:()=>{U()},onError:()=>{k.error("An error occurred")}})};function y(r){l(r.target.name,N(r));const s=r.target.value;h(s)}const h=r=>{const s=.15*Number(r),n=Number(r)+s;A(n),C(s)};return t.createElement(H,{title:"My Campaigns",smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-5 mb-10"},t.createElement(G,null),t.createElement("div",{className:"flex  justify-center mx-auto p-5 text-sm bg-gray-50 my-5"},t.createElement("div",{className:"flex space-x-5"},t.createElement("a",{href:"?tab=details",className:"font-bold  text-black  capitalize"},"campaign  details"),t.createElement("span",{className:"text-gray-300"},"|"),t.createElement("a",{href:"?tab=contents",className:w("font-bold  capitalize",o=="contents"||o=="influencer"?" text-black":"text-gray-300")},"content"),t.createElement("span",{className:"text-gray-300"},"|"),t.createElement("a",{href:"?tab=influencer",className:w("font-bold  capitalize",o=="influencer"?" text-black":"text-gray-300")},"influencers  detail"))),t.createElement("form",{onSubmit:j,className:"mt-10  bg-white shadow-sm md:p-5 p-3 w-full"},o=="details"?t.createElement(t.Fragment,null,t.createElement(V,{data:_,campaign:e,onHandleChange:b,setData:l})):o=="influencer"?t.createElement(q,{data:_,campaign:e,onHandleChange:b,setData:l,handleBudget:y,serviceFee:F,total:z}):t.createElement(t.Fragment,null,t.createElement(J,{data:_,campaign:e,onHandleChange:b,setData:l,handleBudget:y,displayFile:P,image:B})),t.createElement("div",{className:"text-center flex space-x-3 mt-4 md:max-w-md"},o=="details"?null:t.createElement(E,{type:"buton",className:"block w-full bg-white text-viralget-red",onClick:()=>v(o=="influencer"?"contents":"details")},"Back"),t.createElement(E,{type:"submit",usePrimary:!0,block:!0,processing:D},o=="details"||o=="contents"?"Next":R)))))}export{ze as default};
