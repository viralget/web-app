import{u as n,R as e,H as m,L as s}from"./app.ef72d8ff.js";import{B as l}from"./Button.3b17f06e.js";import{A as u}from"./App.0ca4f155.js";import{G as c}from"./Guest.164110cf.js";import"./helpers.906d158c.js";import"./moment.9709ab41.js";import"./Header.a75c8b0d.js";import"./NavLink.0a117f97.js";import"./Avatar.7f192217.js";import"./Logo.324d06e0.js";import"./DropdownMenu.8cc8bbb8.js";import"./Badge.fae55b39.js";function N({status:t}){const{post:i,processing:r}=n(),o=a=>{a.preventDefault(),i(route("verification.send"))};return e.createElement(u,null,e.createElement(m,{title:"Email Verification"}),e.createElement(c,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."),t==="verification-link-sent"&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},"A new verification link has been sent to the email address you provided during registration."),e.createElement("form",{onSubmit:o},e.createElement("div",{className:"mt-4 flex items-center justify-between"},e.createElement(l,{processing:r},"Resend Verification Email"),e.createElement(s,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900"},"Log Out")))))}export{N as default};
