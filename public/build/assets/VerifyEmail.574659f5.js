import{u as a,R as e,H as n,L as s}from"./app.7179bf09.js";import{B as l}from"./Button.e49676a1.js";import{A as u}from"./App.51554eaf.js";import{G as c}from"./Guest.8387e54d.js";import"./helpers.0557fa85.js";import"./moment.9709ab41.js";import"./Header.7a51fd3a.js";import"./NavLink.bf2953a2.js";import"./Logo.466f055b.js";import"./DropdownMenu.02b2b6f4.js";import"./Avatar.ed1856cd.js";import"./transition.c8990606.js";import"./keyboard.6d843577.js";import"./ChevronDownIcon.e12a2f77.js";import"./constants.48562a6a.js";import"./icons.63ea3f8d.js";function R({status:t}){const{post:i,processing:r}=a(),o=m=>{m.preventDefault(),i(route("verification.send"))};return e.createElement(u,null,e.createElement(n,{title:"Email Verification"}),e.createElement(c,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."),t==="verification-link-sent"&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},"A new verification link has been sent to the email address you provided during registration."),e.createElement("form",{onSubmit:o},e.createElement("div",{className:"mt-4 flex items-center justify-between"},e.createElement(l,{processing:r},"Resend Verification Email"),e.createElement(s,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900"},"Log Out")))))}export{R as default};
