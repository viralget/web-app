import{r as n,R as e,u as R}from"./app.10e8d628.js";import{A}from"./AuthenticatedLayout.2448e9d9.js";import{U as T,t as S}from"./Toast.7671d6c0.js";import{i as F,I as E,T as U}from"./TextArea.a25e4980.js";import{S as k}from"./Select.d3895d5d.js";import{P as I,a as D}from"./icons.68dbae32.js";import{E as L,a as V}from"./EyeIcon.c4b8015c.js";import{g as H}from"./helpers.05ac4563.js";import"./Logo.3fffa135.js";import"./DropdownMenu.468ba300.js";import"./Avatar.b1f3d288.js";import"./Button.12ec73ad.js";import"./transition.9d8577f8.js";import"./keyboard.79068ade.js";import"./ChevronDownIcon.f97afd78.js";import"./dialog.29cdbad8.js";import"./description.811c7987.js";import"./XMarkIcon.9cb4bc15.js";import"./Bars3CenterLeftIcon.870894fa.js";import"./moment.9709ab41.js";function P({type:t="text",name:u,value:b,className:a,autoComplete:f,required:v,isFocused:_,onChange:h,secondary:g=!1,onBlur:N,label:l="",id:y="",ref:o,placeholder:w="",show:m=!1,icon:c}){const p=n.exports.useRef(),[r,i]=n.exports.useState(!1);return n.exports.useEffect(()=>{i(m)},[m]),n.exports.useEffect(()=>{_&&p.current.focus()},[]),e.createElement("div",{className:"flex flex-col items-start mb-3 relative "},l&&e.createElement("label",{htmlFor:y||u,className:"block text-sm font-medium mb-1 text-gray-700 w-full"},l),e.createElement("div",{className:"relative w-full"},e.createElement("input",{type:r?"text":"password",name:u,value:b,className:F+a,ref:o||p,autoComplete:f,required:v,onChange:x=>h(x),placeholder:w,onBlur:N}),e.createElement("div",{className:"absolute inset-y-0 right-0 p-3 bg-dark z-50 cursor-pointer",onClick:()=>i(!r)},r?e.createElement(L,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"}):e.createElement(V,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})),c&&e.createElement("div",{className:"absolute  bottom-5 left-3 "},c)))}function re({user:t}){var o,w,m,c,p,r,i,x,C;n.exports.useState(!1);const[u,b]=n.exports.useState((o=t==null?void 0:t.info)==null?void 0:o.image_url),{data:a,setData:f,post:v,processing:_,errors:h,reset:g}=R({company_name:(w=t==null?void 0:t.info)==null?void 0:w.company_name,first_name:(m=t.info)==null?void 0:m.first_name,last_name:(c=t.info)==null?void 0:c.last_name,email:(p=t.info)==null?void 0:p.email,current_password:"",new_password:"",file:"",company_type:(r=t.info)==null?void 0:r.company_type,job_title:(i=t.info)==null?void 0:i.job_title,company_website:(x=t.info)==null?void 0:x.company_website,company_bio:(C=t.info)==null?void 0:C.company_bio}),N=s=>{if(s.target.files&&s.target.files[0]){f("file",s.target.files[0]);let d=new FileReader;d.onload=j=>{b(j.target.result)},d.readAsDataURL(s.target.files[0])}};n.exports.useEffect(()=>()=>{g("new_password","current_password")},[]);const l=s=>{f(s.target.name,H(s))},y=s=>{s.preventDefault(),v("/update-settings",{onSuccess:d=>{S.success("Profile updated successfully"),g("new_password","current_password")},onError:d=>{S.error(d.error),g("new_password","current_password")}})};return e.createElement(A,{smallHeader:!0},e.createElement("div",{className:"overflow-hidden bg-white py-12 lg:px-10  px-5 "},e.createElement("div",{className:"relative mx-auto "},e.createElement("div",{className:"w-full"},e.createElement("div",{className:"border-b  border-viralget-gray-300 pb-space-32"},e.createElement("span",{className:"font-lexend font-bold text-t-xlg text-viralget-grey "},"Settings")),e.createElement("form",{onSubmit:y},e.createElement("div",{className:"mt-space-32  border-b  border-viralget-gray-300 pb-space-32"},e.createElement("div",{className:"flex flex-col"},e.createElement("span",{className:"text-t-xs font-lexend font-bold"},"Name and avatar"),e.createElement("span",{className:"mt-space-8 text-normal text-viralget-gray-400"},"Changing your name below will update your name on your profile.")),e.createElement("div",{className:"mt-space-28"},e.createElement(T,{displayFile:N,image:u})),e.createElement("div",{className:"mt-space-24"},e.createElement("div",{className:"flex  lg:flex-row flex-col  lg:w-auto  w-full lg:space-x-space-20 lg:space-y-0  space-y-space-20"},e.createElement(E,{type:"text",name:"first_name",label:"First Name",value:a.first_name,className:"mt-1 block   lg:w-space-245   w-full  ",placeholder:"Enter your first name",autoComplete:"first_name",onChange:l}),e.createElement(E,{type:"text",name:"last_name",label:"Last Name",value:a.last_name,className:"mt-1 block w-full  lg:w-space-245 ",autoComplete:"family_name",placeholder:"Enter your last name",onChange:l})),e.createElement("div",{className:"mt-space-32 flex space-x-space-16"},e.createElement("button",{className:"px-space-28 py-space-8 bg-viralget-gray-300 rounded-md"},"Save")))),e.createElement("div",{className:"mt-space-32  border-b  border-viralget-gray-300 pb-space-32"},e.createElement("div",{className:"flex flex-col"},e.createElement("span",{className:"text-t-xs font-lexend font-bold"},"Company info"),e.createElement("span",{className:"mt-space-8 text-normal text-viralget-gray-400"},"Update your company information here")),e.createElement("div",{className:"mt-space-24"},e.createElement("div",{className:"flex  lg:flex-row flex-col  lg:w-auto  w-full lg:space-x-space-20  lg:space-y-0 space-y-space-20"},e.createElement(k,{options:[{name:"Brand",value:"brand"},{name:"Agency",value:"agency"}],name:"company_type",value:a.company_type,onChange:l,label:"Company type",defaultOptionText:"Select company type",className:"lg:w-space-245 ",defaultValue:a.company_type}),e.createElement(E,{type:"text",name:"company_name",label:"Company name",value:a==null?void 0:a.company_name,className:"mt-1 h-11 block w-full  lg:w-space-245 ",autoComplete:"company_name",placeholder:"Enter company name",onChange:l})),e.createElement("div",{className:"flex  lg:flex-row flex-col  lg:w-auto  w-full lg:space-x-space-20 lg:space-y-0 space-y-space-20 mt-space-20"},e.createElement(k,{options:[{name:"C-level / VP",value:"c-level/vp"},{name:"Director",value:"director"},{name:"Manager/Team Lead",value:"manager/team-lead"},{name:"Team member",value:"team-member"},{name:"Executive",value:"executive"},{name:"Assistant",value:"assistant"},{name:"Independent professional",value:"independent-professional"}],name:"job_title",value:a.job_title,onChange:l,label:"Job title",defaultOptionText:"Select job title",defaultValue:a.job_title,className:"lg:w-space-245  w-full"}),e.createElement(E,{type:"text",name:"company_website",label:"Company Website",value:a.company_website,className:"mt-1 h-11 block w-full  lg:w-space-245 ",autoComplete:"company_website",placeholder:"Enter company website",onChange:l})),e.createElement("div",{className:"w-auto mt-space-20"},e.createElement(U,{name:"company_bio",label:"Company bio",value:a.company_bio,className:"mt-1 h-20 block lg:w-space-510",autoComplete:"company_bio",placeholder:"Enter company bio",onChange:l})),e.createElement("div",{className:"mt-space-32 flex space-x-space-16"},e.createElement("button",{className:"px-space-28 py-space-8 bg-viralget-gray-300 rounded-md"},"Save")))),e.createElement("div",{className:"mt-space-32  lg:w-space-510"},e.createElement("div",{className:"flex flex-col"},e.createElement("span",{className:"text-t-xs font-lexend font-bold"},"Security settings"),e.createElement("span",{className:"mt-space-8 text-normal text-viralget-gray-400"},"Note that if you signed in with a connected account, you are using that account\u2019s login information and we cannot change or reset those passwords here.")),e.createElement("div",{className:"mt-space-24"},e.createElement("div",{className:"w-auto mt-space-20"},e.createElement(P,{type:"password",label:"Enter current password",name:"current_password",value:a.current_password,className:"mt-1 block w-full pl-10",autoComplete:"new-password",onChange:l,placeholder:"Enter current password",icon:e.createElement(I,null)})),e.createElement("div",{className:"w-auto mt-space-20"},e.createElement(P,{type:"password",label:"Enter new password",name:"new_password",value:a.new_password,className:"mt-1 block w-full pl-10 ",autoComplete:"new-password",onChange:l,placeholder:"Enter new password",icon:e.createElement(I,null)})),e.createElement("div",{className:"mt-space-20"},e.createElement("div",{className:"flex flex-col "},e.createElement("span",{className:"text-t-xs font-lexend font-bold"},"Reset Password"),e.createElement("span",{className:"mt-space-8 text-normal text-viralget-gray-400"},"If you just forgot your password, don\u2019t worry \u2013 we got you!")),e.createElement("div",{className:"mt-space-20"},e.createElement("a",{href:route("create.forgot.password"),className:"flex rounded-[8px]  py-space-12  items-center justify-center  space-x-3 text-viralget-red border border-viralget-red w-space-176"},e.createElement(D,{className:"text-viralget-red",stroke:"red"}),e.createElement("span",null," Reset password")))),e.createElement("div",{className:"mt-space-32 flex space-x-space-16"},e.createElement("button",{className:"px-space-28 py-space-8 bg-viralget-gray-300 rounded-md"},"Save")))))))))}export{re as default};
