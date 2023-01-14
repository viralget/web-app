import{r as i,R as e}from"./app.22e06bd3.js";import"./moment.0d47bed0.js";function l({name:o,value:g,className:f,autoComplete:E,disabled:t=!1,required:c,isFocused:s,onChange:p,secondary:m=!1,label:a,id:n="",explainer:y="",options:d=[],defaultOptionText:u,defaultValue:b,capitalize:x=!0}){const v=i.exports.useRef();return i.exports.useEffect(()=>{s&&v.current.focus()},[]),i.exports.useEffect(()=>{},[d]),e.createElement("div",{className:"flex flex-col items-start "},a&&e.createElement("label",{htmlFor:n||o,className:"block text-sm text-gray-500 mb-1"},a),y&&e.createElement("p",{className:"text-sm text-gray-400 mb-1"},y),e.createElement("select",{id:n||o,name:o,disabled:t,ref:v,className:`focus:ring-gray-400 ${x&&"capitalize"} focus:ring-0 focus:border-gray-400 block w-full py-2.5 sm:text-sm border-gray-300 rounded-md ${m&&"bg-gray-100"} `+f,defaultValue:b,required:c,onChange:r=>p(r)},e.createElement("option",{value:""},u!=null?u:"Select option"),d.length&&d.map((r,A)=>e.createElement("option",{value:r.value||r.value==""?r.value:r.name,className:"capitalize",key:A},r.name.replace("-"," ")))))}function h({keywords:o,location:g,category:f,salaryRange:E,dateRange:t,workmode:c,jobType:s,showFull:p=!1,handleSubmit:m,handleChange:a,className:n}){return e.createElement("div",{className:n},e.createElement("form",{action:"#",onSubmit:m,className:"sm:mx-auto lg:mx-0"},e.createElement("div",{className:"hidden md:grid grid-cols-7 gap-4 bg-white shadow px-3 py-5 rounded-md"},e.createElement("div",{className:"md:pr-2 md:border-r border-gray-100"},e.createElement(l,{options:[{name:"Any",value:""}],name:"influencer_location",value:c,onChange:a,label:"Influencer Location",defaultOptionText:"Any"})),e.createElement("div",{className:"md:pr-2 md:border-r border-gray-100"},e.createElement(l,{options:[{name:"Any",value:""}],name:"size",value:s,onChange:a,label:"Influencer Size",defaultOptionText:"Any"})),e.createElement("div",{className:"md:pr-2 md:border-r"},e.createElement(l,{options:[{name:"Any",value:""}],name:"audience_location",value:t,onChange:a,label:"Audience Location",defaultOptionText:"Any"})),e.createElement("div",{className:"md:pr-2 md:border-r"},e.createElement(l,{options:[{name:"Any",value:""}],name:"age",value:t,onChange:a,label:"Audience Age",defaultOptionText:"Any"})),e.createElement("div",{className:"md:pr-2 md:border-r border-gray-100"},e.createElement(l,{options:[{name:"Any",value:""}],name:"qas",value:t,onChange:a,label:"QAS",defaultOptionText:"Any"})),e.createElement("div",{className:""},e.createElement(l,{options:[{name:"Any",value:""}],name:"gender",value:t,onChange:a,label:"Audience Gender",defaultOptionText:"Any"})),e.createElement("div",{className:"mt-3 sm:mt-0 sm:ml-3"},e.createElement("button",{onClick:m,className:" w-full py-3.5 px-2  rounded-md shadow bg-orange-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "},"Search"))),e.createElement("div",{className:"sm:flex items-center align-middle my-3 space-x-2"},e.createElement("div",{className:"bg-white shadow rounded py-1 px-3 overflow-hidden"},e.createElement(l,{options:[{name:"Any Category",value:1}],name:"category",value:t,onChange:a,defaultOptionText:"Any Category"})),e.createElement("div",{className:"flex-1"},e.createElement("input",{id:"keywords",name:"keywords",type:"text",defaultValue:o,onChange:a,placeholder:"Find influencers by keywords or hashtag",className:"block w-full shadow px-3 py-3  rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"})))))}export{h as default};