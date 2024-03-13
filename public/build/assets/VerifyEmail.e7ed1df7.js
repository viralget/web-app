import{u as a,R as e,e as n,L as s}from"./app.a466af73.js";import{B as l}from"./Button.316dc283.js";import{A as u}from"./App.6ccaf7de.js";import{G as c}from"./Guest.166f9c3a.js";import"./helpers.d3ba62f0.js";import"./moment.9709ab41.js";import"./Header.e1eb3646.js";import"./NavLink.53c3e4e6.js";import"./Logo.714174cb.js";import"./DropdownMenu.78d4e618.js";import"./Avatar.e8b682c8.js";import"./female.264b94a6.js";import"./transition.fb7b2a55.js";import"./keyboard.7337a3d2.js";import"./ChevronDownIcon.482f6106.js";import"./constants.498ded21.js";function R({status:t}){const{post:i,processing:r}=a(),o=m=>{m.preventDefault(),i(route("verification.send"))};return e.createElement(u,null,e.createElement(n,{title:"Email Verification"}),e.createElement(c,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."),t==="verification-link-sent"&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},"A new verification link has been sent to the email address you provided during registration."),e.createElement("form",{onSubmit:o},e.createElement("div",{className:"mt-4 flex items-center justify-between"},e.createElement(l,{processing:r},"Resend Verification Email"),e.createElement(s,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900"},"Log Out")))))}export{R as default};