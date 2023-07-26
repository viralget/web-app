import{r as i,R as s,a as K}from"./app.7179bf09.js";import{B as U}from"./Button.e49676a1.js";import{p as Y}from"./api.3a01e3bc.js";import{t as C}from"./Toast.b8ef6e60.js";import{h as F}from"./helpers.0557fa85.js";import{c as J}from"./inline.c6606910.js";import"./moment.9709ab41.js";var f=[];function V(){var e="https://js.paystack.co/v1/inline.js",n=i.exports.useState({loaded:!1,error:!1}),r=n[0],t=n[1];return i.exports.useEffect(function(){if(f.includes(e))t({loaded:!0,error:!1});else{f.push(e);var a=document.createElement("script");a.src=e,a.async=!0;var o=function(){t({loaded:!0,error:!1})},l=function(){var c=f.indexOf(e);c>=0&&f.splice(c,1),a.remove(),t({loaded:!0,error:!0})};return a.addEventListener("load",o),a.addEventListener("complete",o),a.addEventListener("error",l),document.body.appendChild(a),function(){a.removeEventListener("load",o),a.removeEventListener("error",l)}}},[e]),[r.loaded,r.error]}var W=function(e){var n=window.PaystackPop&&window.PaystackPop.setup(e);n&&n.openIframe()};function H(e){var n=V(),r=n[0],t=n[1],a=e.publicKey,o=e.firstname,l=e.lastname,c=e.phone,y=e.email,p=e.amount,u=e.reference,m=e.metadata,d=m===void 0?{}:m,b=e.currency,j=b===void 0?"NGN":b,z=e.channels,h=e.label,_=h===void 0?"":h,x=e.plan,I=x===void 0?"":x,g=e.quantity,L=g===void 0?"":g,P=e.subaccount,T=P===void 0?"":P,E=e.transaction_charge,q=E===void 0?0:E,w=e.bearer,D=w===void 0?"account":w,G=e.split,R=e.split_code;function A(k,S){if(t)throw new Error("Unable to load paystack inline script");if(r){var B={callback:k||function(){return null},onClose:S||function(){return null},key:a,ref:u,email:y,firstname:o,lastname:l,phone:c,amount:p,currency:j,plan:I,quantity:L,"data-custom-button":e["data-custom-button"]||"",channels:z,subaccount:T,transaction_charge:q,bearer:D,label:_,metadata:d,split:G,split_code:R};W(B)}}return i.exports.useEffect(function(){if(t)throw new Error("Unable to load paystack inline script")},[t]),A}var v=function(){return v=Object.assign||function(n){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},v.apply(this,arguments)};function N(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r}var O=i.exports.createContext({initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),M=function(e){var n=e.children,r=e.onSuccess,t=e.onClose,a=N(e,["children","onSuccess","onClose"]),o=H(a);return s.createElement(O.Provider,{value:{initializePayment:o,onSuccess:r,onClose:t}},n)},Q=function(e){var n=e.children,r=e.ref,t=i.exports.useContext(O),a=t.initializePayment,o=t.onSuccess,l=t.onClose,c=function(){return a(o,l)};return n({initializePayment:c,ref:r})};i.exports.forwardRef(function(e,n){var r=e.children,t=e.onSuccess,a=e.onClose,o=N(e,["children","onSuccess","onClose"]),l=t||function(){return null},c=a||function(){return null};return s.createElement(M,v({},o,{onSuccess:l,onClose:c}),s.createElement(Q,{ref:n},r))});function re({plan:e}){const{auth:n}=K().props,{user:r}=n,t=19e3;i.exports.useState("");const[a,o]=i.exports.useState("Continue"),[l,c]=i.exports.useState(!1);function y(u){u.preventDefault(),c(!0),o("Initiating payment..."),new J().newTransaction({key:"pk_live_3c0c5c796849b1f432db34306cd8a23478cd0d7a",email:r.email,amount:t*100,reference:new Date().getTime().toString(),onSuccess:d=>{console.log({transaction:d}),p(d.reference)},onCancel:()=>{console.log("You need this, stay back!")}})}async function p(u){o("Verifying payment.."),(await Y(route("payments.verify",{reference:u}))).data.status?(C.success("Payment verification successful"),setTimeout(function(){window.location.href=route("billings.index")},2e3)):C.error("Something went wrong"),c(!1)}return s.createElement("div",{className:"bg-gray-50"},s.createElement("div",{className:"mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8"},s.createElement("h2",{className:"text-xl text-extrabold"},"Access influencers based on your needs"),s.createElement("p",null,"Get a compiled list of 60 influencers of any size in any industry of your choosing."),s.createElement("form",{className:""},s.createElement("div",{className:"mt-10 lg:mt-0"},s.createElement("div",{className:"mt-4 rounded-lg border border-gray-200 bg-white shadow-sm"},s.createElement("h3",{className:"sr-only"},"Items in your cart"),s.createElement("dl",{className:"space-y-6 border-gray-200 px-4 py-6 sm:px-6"},s.createElement("div",{className:"flex items-center justify-between pt-6"},s.createElement("dt",{className:"text-base font-medium"},"Total"),s.createElement("dd",{className:"text-base font-medium text-gray-900"},F," ",t,"  ",s.createElement("s",{className:"text-red-600"},"60,000")))),s.createElement("div",{className:"border-t border-gray-200 px-4 py-6 sm:px-6"},s.createElement(U,{isDark:!0,block:!0,className:"block",onClick:y},"Pre-Order now"))),s.createElement("p",{className:"text-sm my-5"},"First 60 business owners/brands to pre-order gets an extra 15 influencers *. Offer valid until 24th of July, 2023")))))}export{re as default};