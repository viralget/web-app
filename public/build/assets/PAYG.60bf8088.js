import{a as d,r as a,R as e}from"./app.4d8752af.js";import{B as f}from"./Button.9164cdb2.js";import"./index.es.58c57964.js";import"./PaystackPaymentButton.05cfbd34.js";import"./StripePaymentButton.f3826f0e.js";import{i as y}from"./helpers.e2b0a119.js";import{c as x}from"./inline.c6606910.js";import{a as g}from"./api.e82b0d8b.js";import{t as c}from"./Toast.5da9d93d.js";import"./index.e8fcc329.js";import"./moment.9709ab41.js";function B({plan:b}){const{auth:m}=d().props,{user:l}=m,s=19e3;a.exports.useState("");const[E,r]=a.exports.useState("Continue"),[w,n]=a.exports.useState(!1);function i(t){t.preventDefault(),n(!0),r("Initiating payment..."),new x().newTransaction({key:"pk_live_3c0c5c796849b1f432db34306cd8a23478cd0d7a",email:l.email,amount:s*100,reference:new Date().getTime().toString(),onSuccess:o=>{console.log({transaction:o}),p(o.reference)},onCancel:()=>{console.log("You need this, stay back!")}})}async function p(t){r("Verifying payment.."),(await g(route("payments.verify",{reference:t}))).data.status?(c.success("Payment verification successful"),setTimeout(function(){window.location.href=route("billings.index")},2e3)):c.error("Something went wrong"),n(!1)}return e.createElement("div",{className:"bg-gray-50"},e.createElement("div",{className:"mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8"},e.createElement("h2",{className:"text-xl text-extrabold"},"Access influencers based on your needs"),e.createElement("p",null,"Get a compiled list of 60 influencers of any size in any industry of your choosing."),e.createElement("form",{className:""},e.createElement("div",{className:"mt-10 lg:mt-0"},e.createElement("div",{className:"mt-4 rounded-lg border border-gray-200 bg-white shadow-sm"},e.createElement("h3",{className:"sr-only"},"Items in your cart"),e.createElement("dl",{className:"space-y-6 border-gray-200 px-4 py-6 sm:px-6"},e.createElement("div",{className:"flex items-center justify-between pt-6"},e.createElement("dt",{className:"text-base font-medium"},"Total"),e.createElement("dd",{className:"text-base font-medium text-gray-900"},y," ",s,"  ",e.createElement("s",{className:"text-red-600"},"60,000")))),e.createElement("div",{className:"border-t border-gray-200 px-4 py-6 sm:px-6"},e.createElement(f,{isDark:!0,block:!0,className:"block",onClick:i},"Pre-Order now"))),e.createElement("p",{className:"text-sm my-5"},"First 60 business owners/brands to pre-order gets an extra 15 influencers *. Offer valid until 24th of July, 2023")))))}export{B as default};