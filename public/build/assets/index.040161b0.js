import{R as e,a as p,r}from"./app.83d13ff0.js";import v from"./header.c6452cb8.js";import{J as N,K as P}from"./icons.cddab33b.js";import{B as S}from"./Button.32ee3ec9.js";import{c as C}from"./inline.c6606910.js";import{g as T}from"./api.e6e3e43f.js";import{t as o}from"./Toast.77fd2752.js";import"./Logo.7aa9be73.js";import"./helpers.2931a4a5.js";import"./moment.9709ab41.js";import"./DropdownMenu.e242c317.js";import"./Avatar.2ce58c32.js";import"./Button.46d21652.js";import"./transition.f90d5671.js";import"./keyboard.6f147604.js";import"./ChevronDownIcon.a47b1c51.js";const _="https://viralget.test/build/assets/paystack_logo.71b2c6a2.png",j=()=>e.createElement("div",{className:"p-space-16 w-full  bg-viralget-red-100 space-x-2 rounded-md flex items-center justify-center"},e.createElement(N,null),e.createElement("span",{className:"text-t-normal  font-normal"},"Your card won't be charged until the end of the free trial period. ")),I=n=>{const{auth:s}=p().props,{user:c}=s,{plan_id:d,plan:u,public_key:f}=n,[l,g]=r.exports.useState(""),[y,m]=r.exports.useState("Continue"),[x,i]=r.exports.useState(!1);function h(){i(!0),m("Initiating payment..."),new C().newTransaction({key:f,email:c.email,amount:1,reference:new Date().getTime().toString(),plan:u.plan_code,onSuccess:a=>{E(a.reference)},onCancel:()=>{console.log("You need this, stay back!")}})}function E(t){m("Verifying payment.."),T(route("user.verify.payment",{reference:t,plan_id:d})).then(a=>{a.data.status?(o.success("Payment verification successful"),setTimeout(function(){window.location.href="/select-social"},2e3)):o.error("Something went wrong")}).catch(a=>{console.log("error:",a),o.error("Something went wrong")}).finally(()=>i(!1))}function w(t){const a=t.target.name;g(a)}function k(){l==="paystack"&&h()}const b=({value:t})=>e.createElement("div",{className:"flex justify-between  items-center rounded-[8px] border border-viraget-gray-300 p-space-20"},e.createElement("div",{className:"flex space-x-3 items-center"},e.createElement("input",{id:t,name:t,value:t,checked:l=="paystack",onChange:w,type:"checkbox",className:"h-4 w-4 rounded  accent-viralget-red  text-white bg-white"}),e.createElement("span",{className:"text-t-xsx capitalize font-medium font-lexend"},t)),t==="card"?e.createElement(P,{className:"w-space-68 h-space-12"}):t==="paystack"?e.createElement("img",{src:_,className:"w-space-68 h-space-12"}):null);return e.createElement("div",null,e.createElement("div",{className:"w-full flex items-center mt-space-80 px-space-10  justify-center"},e.createElement("div",{className:"flex flex-col "},e.createElement("span",{className:"font-bold font-lexend lg:text-t-xlg  text-t-lg text-center "},"Payment method"),e.createElement("div",{className:"mt-space-20"},e.createElement(j,null)),e.createElement("div",{className:"mt-space-20 flex flex-col space-y-4"},e.createElement(b,{value:"paystack"})),e.createElement("div",{className:"text-left mt-space-20"},e.createElement(S,{className:"block w-auto bg-viralget-red rounded-[8px]  px-space-40",processing:x,onClick:k},y)))))},G=n=>{const{auth:s}=p().props,{user:c}=s;return e.createElement(e.Fragment,null,e.createElement(v,{user:c}),e.createElement(I,{...n}))};export{I as PaymentProccess,G as default};
