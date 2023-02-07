import{u as n,R as e,H as m,L as s}from"./app.d049b2b6.js";import{B as l}from"./Button.7d093bd4.js";import{A as u}from"./App.74b3e4fe.js";import{G as c}from"./Guest.f3ef3d98.js";import"./helpers.5a7a7c47.js";import"./moment.9709ab41.js";import"./Header.54ec550e.js";import"./NavLink.7ebfd9bd.js";import"./Avatar.ac3f19d7.js";import"./Logo.9ef0f0fc.js";import"./DropdownMenu.668532dc.js";import"./Badge.2fc8ec37.js";function N({status:t}){const{post:i,processing:r}=n(),o=a=>{a.preventDefault(),i(route("verification.send"))};return e.createElement(u,null,e.createElement(m,{title:"Email Verification"}),e.createElement(c,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."),t==="verification-link-sent"&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},"A new verification link has been sent to the email address you provided during registration."),e.createElement("form",{onSubmit:o},e.createElement("div",{className:"mt-4 flex items-center justify-between"},e.createElement(l,{processing:r},"Resend Verification Email"),e.createElement(s,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900"},"Log Out")))))}export{N as default};