import{u as a,R as e,e as n,L as s}from"./app.cc1b4b7f.js";import{B as l}from"./Button.bab9d053.js";import{A as u}from"./App.6292b18e.js";import{G as c}from"./Guest.8e8412e1.js";import"./helpers.79175ac7.js";import"./moment.9709ab41.js";import"./Header.0d176ef3.js";import"./NavLink.ca463c0d.js";import"./Logo.3cf4f9d0.js";import"./DropdownMenu.51111d0b.js";import"./Avatar.f3c04361.js";import"./female.264b94a6.js";import"./transition.fa9b55da.js";import"./keyboard.038209bc.js";import"./ChevronDownIcon.4e5b83d6.js";import"./constants.d05a5560.js";function R({status:t}){const{post:i,processing:r}=a(),o=m=>{m.preventDefault(),i(route("verification.send"))};return e.createElement(u,null,e.createElement(n,{title:"Email Verification"}),e.createElement(c,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."),t==="verification-link-sent"&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},"A new verification link has been sent to the email address you provided during registration."),e.createElement("form",{onSubmit:o},e.createElement("div",{className:"mt-4 flex items-center justify-between"},e.createElement(l,{processing:r},"Resend Verification Email"),e.createElement(s,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900"},"Log Out")))))}export{R as default};
