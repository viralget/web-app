import{R as e}from"./app.8a5edb59.js";import{A as n}from"./Auth.c6ebd278.js";import"./Logo.86a9ab7f.js";const o=l=>{const{auth:t}=l,a=new URLSearchParams(window.location.search).get("token");return e.createElement(n,{type:"confirmation"},e.createElement("div",null,e.createElement("div",{className:"flex flex-col"},a?e.createElement("span",{className:"font-lexend font-bold   text-t-lg-x"},"Ops! ",e.createElement("br",null)," Token Expired"):e.createElement("span",{className:"font-lexend font-bold   text-t-lg-x"},"Great! ",e.createElement("br",null)," Now confirm your email"),a?e.createElement(e.Fragment,null,e.createElement("span",{className:"font-medium text-t-xsx mt-space-12  text-viralget-gray-400"},"We\u2019ve sent an email to ",e.createElement("span",{className:"text-viralget-grey  font-bold "},t.user.email)," "),e.createElement("span",{className:"font-medium text-t-xsx  text-viralget-gray-400"},"While it can only last for  10 minutes. but don't worry.  "),e.createElement("div",{className:"mt-space-12"},e.createElement("span",{className:"font-normal text-t-normal  text-viralget-gray-400"},"Request new link?")," ",e.createElement("a",{href:route("resend.email"),className:"text-viralget-red font-bold text-t-normal"}," Click to resend"))):e.createElement(e.Fragment,null,e.createElement("span",{className:"font-medium text-t-xsx mt-space-12  text-viralget-gray-400"},"We\u2019ve sent an email to ",e.createElement("span",{className:"text-viralget-grey  font-bold "},t.user.email)," "),e.createElement("span",{className:"font-medium text-t-xsx  text-viralget-gray-400"},"Click the button inside to confirm your email"),e.createElement("div",{className:"mt-space-12"},e.createElement("span",{className:"font-normal text-t-normal  text-viralget-gray-400"},"Didn\u2019t receive the email?")," ",e.createElement("a",{href:route("resend.email"),className:"text-viralget-red font-bold text-t-normal"}," Click to resend"))))))};export{o as default};
