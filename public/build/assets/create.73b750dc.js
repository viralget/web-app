import{u as p,R as e}from"./app.a466af73.js";import{g as i}from"./helpers.d3ba62f0.js";import{S as f}from"./Select.7ed72ad5.js";import{T as d}from"./TextArea.b7bd8c08.js";import{B as b}from"./Button.fb66a06d.js";import{t as E}from"./Toast.352ecc60.js";import"./moment.9709ab41.js";import"./Label.e25fdef1.js";import"./Input.4df9007e.js";function j({handleModalClose:a,campaign_briefs_id:l}){const{data:r,setData:s,post:m,processing:n,errors:g,reset:c}=p({status:"",report_note:"",campaign_briefs_id:l}),o=t=>{s(t.target.name,i(t))};function u(t){t.preventDefault(),m(route("create.report")),c(),a(),E.success("Report reply created successfully"),setTimeout(function(){window.location.reload()},1e3)}return e.createElement("div",{className:"bg-white md:w-[30rem] mx-auto"},e.createElement("div",{className:"flex justify-between p-5"},e.createElement("h2",{className:"font-bold text-t-lg  capitalize"},"Reply a report"),e.createElement("button",{onClick:a},"x")),e.createElement("form",{onSubmit:u,className:" bg-white shadow-sm md:p-5 p-3 w-full"},e.createElement("div",null,e.createElement("div",{className:"mt-2"},e.createElement(f,{options:[{name:"Approved",value:"approved"},{name:"Rejected",value:"rejected"}],name:"status",label:"Status",defaultOptionText:"Select status",required:!0,defaultValue:r.status,onChange:o})),e.createElement("div",{className:"col-span-full mt-2"},e.createElement(d,{type:"text",name:"report_note",label:"Report Note",placeholder:"Some note about the report",className:"mt-1 block w-full h-32",defaultValue:r.report_note,onChange:o})),e.createElement(b,{type:"submit",usePrimary:!0,className:"w-full mt-3",processing:n},"Reply"))))}export{j as default};