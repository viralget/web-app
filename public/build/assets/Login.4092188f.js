import{R as e,u as f,r as E}from"./app.90e9de9b.js";import{B as g}from"./Button.7bbf185c.js";import{I as o}from"./Input.8165b629.js";import{L as c}from"./Label.4b33bc46.js";import{V as b}from"./ValidationErrors.6acc976b.js";import"./helpers.8a5284fe.js";import"./moment.9709ab41.js";function w({name:a,value:l,onChange:t,checked:m=!1}){return e.createElement("input",{type:"checkbox",checked:m,name:a,value:l,className:"rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50",onChange:s=>t(s)})}function I({status:a,canResetPassword:l}){const{data:t,setData:m,post:s,processing:u,errors:i,reset:p}=f({email:"",password:"",remember:""});E.exports.useEffect(()=>()=>{p("password")},[]);const n=r=>{m(r.target.name,r.target.value)},d=r=>{r.preventDefault(),s(route("admin.login"))};return e.createElement(e.Fragment,null,e.createElement("div",{className:"mx-auto w-full  p-5 "},a&&e.createElement("div",{className:"mb-4 font-medium text-sm text-green-600"},a),e.createElement(b,{errors:i}),e.createElement("div",{className:"flex justify-center items-center "},e.createElement("form",{onSubmit:d},e.createElement("div",null,e.createElement(c,{forInput:"email",value:"Email"}),e.createElement(o,{type:"text",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:n})),e.createElement("div",{className:"mt-4"},e.createElement(c,{forInput:"password",value:"Password"}),e.createElement(o,{type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:n})),e.createElement("div",{className:"block mt-4"},e.createElement("label",{className:"flex items-center"},e.createElement(w,{name:"remember",value:t.remember,onChange:n}),e.createElement("span",{className:"ml-2 text-sm text-gray-600"},"Remember me"))),e.createElement("div",{className:" items-center mt-4"},e.createElement(g,{className:"block w-full",processing:u},"Log in"))))))}export{I as default};
