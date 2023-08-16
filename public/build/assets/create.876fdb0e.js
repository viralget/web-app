import{r as u,u as M,R as t,l as T}from"./app.cc07e7b9.js";import{A as H}from"./AuthenticatedLayout.72a7fd55.js";import{B as G}from"./ButtonBack.a6f4d1de.js";import{B as E}from"./Button.5e698576.js";import{c as w,g as N}from"./helpers.2e537a8b.js";import"./UploadImage.94f72692.js";import"./inline.c6606910.js";import"./StripePaymentButton.b6a0b378.js";import{t as k}from"./Toast.78628752.js";import"./steps.c3903783.js";import V from"./Details.3f3eac74.js";import q from"./Influencers.05fabd95.js";import J from"./Contents.4ca84f1d.js";import"./Logo.e9ffbce2.js";import"./DropdownMenu.0378d2df.js";import"./Avatar.2bebdc68.js";import"./ChevronDownIcon.800126ac.js";import"./transition.f0c9e4b4.js";import"./keyboard.ada55ee2.js";import"./XMarkIcon.7b1b4a07.js";import"./Bars3CenterLeftIcon.0d23949b.js";import"./MagnifyingGlassIcon.cfa08924.js";import"./description.fd5bffa3.js";import"./moment.9709ab41.js";import"./index.e8fcc329.js";import"./api.45d803cc.js";import"./Input.61401512.js";import"./Label.cb6fd0e5.js";import"./MultiSelect.3c276f1c.js";import"./Combination.290a6df6.js";import"./Select.13aa2671.js";import"./TextArea.da14dc06.js";function Ce({user:K,isEdit:d=!1,campaign:e}){const f=new URLSearchParams(window.location.search).get("tab"),[o,B]=u.exports.useState(f!=null?f:"details"),[S,v]=u.exports.useState(null),[F,C]=u.exports.useState(0),[z,A]=u.exports.useState(0),[R,Q]=u.exports.useState(d?"Update Campaign":"Create Campaign"),{data:_,setData:l,post:x,processing:D,errors:W,reset:X}=M({title:e==null?void 0:e.campaign_name,social_network:e==null?void 0:e.social_network,campaign_type:e==null?void 0:e.campaign_type,budget:e==null?void 0:e.budget,keywords:e==null?void 0:e.tracked_keywords,start_date:e==null?void 0:e.campaign_start_date,end_date:e==null?void 0:e.campaign_end_date,description:e==null?void 0:e.campaign_description,brand_name:e==null?void 0:e.brand_name,location:e==null?void 0:e.target_location,gender:e==null?void 0:e.target_gender,age:e==null?void 0:e.target_age,interest:e==null?void 0:e.target_interest,reach:e==null?void 0:e.reach_goal,impression:e==null?void 0:e.impressions_goal,engagement:e==null?void 0:e.engagement_goal,conversion:e==null?void 0:e.conversion_goal,logo:"",about_us:e==null?void 0:e.about_us,campaign_goal:e==null?void 0:e.campaign_goal,campaign_message:e==null?void 0:e.campaign_message,key_objectives:e==null?void 0:e.campaign_key_objectives,channels:e==null?void 0:e.channels,timeline:e==null?void 0:e.timeline,mood_board:"",target_audience:e==null?void 0:e.target_audience,currency:e==null?void 0:e.currency,influencer_niche:e==null?void 0:e.influencer_niche,influencer_size:e==null?void 0:e.influencer_size,influencer_number:e==null?void 0:e.influencer_number,influencer_gender:e==null?void 0:e.influencer_gender,influencer_location:e==null?void 0:e.influencer_location,influencer_category:e==null?void 0:e.influencer_category}),b=r=>{l(r.target.name,N(r))},P=r=>{if(r.target.files&&r.target.files[0]){l("logo",r.target.files[0]);let s=new FileReader;s.onload=n=>{v(n.target.result)},s.readAsDataURL(r.target.files[0])}};u.exports.useEffect(()=>{d&&h(e.budget)},[]);const U=()=>{if(o==="details"){window.location.href="?tab=contents";return}if(o==="contents"){window.location.href="?tab=influencer";return}o==="influencer"&&T.Inertia.get(route("brief.show",{id:e==null?void 0:e.id}))};function j(r){r.preventDefault(),d?L():I()}const I=async()=>{x(route("brief.store"),{onSuccess:()=>{},onError:()=>{k.error("An error occurred")}})},L=async()=>{x(route("brief.update",{id:e==null?void 0:e.id}),{onSuccess:()=>{U()},onError:()=>{k.error("An error occurred")}})};function y(r){l(r.target.name,N(r));const s=r.target.value;h(s)}const h=r=>{const s=.15*Number(r),n=Number(r)+s;A(n),C(s)};return t.createElement(H,{title:"My Campaigns",smallHeader:!0},t.createElement("div",{className:"bg-white h-screen  mt-3 px-5 mb-10"},t.createElement(G,null),t.createElement("div",{className:"flex  justify-center mx-auto p-5 text-sm bg-gray-50 my-5"},t.createElement("div",{className:"flex space-x-5"},t.createElement("a",{href:"?tab=details",className:"font-bold  text-black  capitalize"},"campaign  details"),t.createElement("span",{className:"text-gray-300"},"|"),t.createElement("a",{href:"?tab=contents",className:w("font-bold  capitalize",o=="contents"||o=="influencer"?" text-black":"text-gray-300")},"content"),t.createElement("span",{className:"text-gray-300"},"|"),t.createElement("a",{href:"?tab=influencer",className:w("font-bold  capitalize",o=="influencer"?" text-black":"text-gray-300")},"influencers  detail"))),t.createElement("form",{onSubmit:j,className:"mt-10  bg-white shadow-sm md:p-5 p-3 w-full"},o=="details"?t.createElement(t.Fragment,null,t.createElement(V,{data:_,campaign:e,onHandleChange:b,setData:l})):o=="influencer"?t.createElement(q,{data:_,campaign:e,onHandleChange:b,setData:l,handleBudget:y,serviceFee:F,total:z}):t.createElement(t.Fragment,null,t.createElement(J,{data:_,campaign:e,onHandleChange:b,setData:l,handleBudget:y,displayFile:P,image:S})),t.createElement("div",{className:"text-center flex space-x-3 mt-4 md:max-w-md"},o=="details"?null:t.createElement(E,{type:"buton",className:"block w-full bg-white text-viralget-red",onClick:()=>B(o=="influencer"?"contents":"details")},"Back"),t.createElement(E,{type:"submit",usePrimary:!0,block:!0,processing:D},o=="details"||o=="contents"?"Next":R)))))}export{Ce as default};
