import{u as a,R as e,H as n,L as s}from"./app.b8dc28e7.js";import{B as l}from"./Button.77051eeb.js";import{A as u}from"./App.78b5e318.js";import{G as c}from"./Guest.28636590.js";import"./Header.274fc2a7.js";import"./helpers.1ee73257.js";import"./moment.9709ab41.js";import"./NavLink.cd0acb38.js";import"./transition.5e7d37a2.js";import"./use-event-listener.d7048f55.js";import"./Logo.c71b12f0.js";import"./DropdownMenu.732ee26b.js";import"./Avatar.fe8c7533.js";import"./ChevronDownIcon.1228e289.js";import"./constants.1d4f79a4.js";import"./icons.c2716e1a.js";function R({status:t}){const{post:i,processing:r}=a(),o=m=>{m.preventDefault(),i(route("verification.send"))};return e.createElement(u,null,e.createElement(n,{title:"Email Verification"}),e.createElement(c,null,e.createElement("div",{className:"mb-4 text-sm text-gray-600"},"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."),t==="verification-link-sent"&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},"A new verification link has been sent to the email address you provided during registration."),e.createElement("form",{onSubmit:o},e.createElement("div",{className:"mt-4 flex items-center justify-between"},e.createElement(l,{processing:r},"Resend Verification Email"),e.createElement(s,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900"},"Log Out")))))}export{R as default};