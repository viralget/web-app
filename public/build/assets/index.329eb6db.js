import{R as e}from"./app.fb877f69.js";import{E as s}from"./EmptyState.d05d59b8.js";import{A as m}from"./AuthenticatedLayout.91fa9106.js";import{C as o}from"./Card.cbd19e9b.js";import{n as c,c as p}from"./helpers.472d4338.js";import{B as n}from"./Button.adfcbd9f.js";import"./BoltIcon.390ecefe.js";import"./Logo.0a0803eb.js";import"./DropdownMenu.3033b609.js";import"./Avatar.2cb43144.js";import"./transition.fefcc9c4.js";import"./keyboard.67954041.js";import"./ChevronDownIcon.31a8b89e.js";import"./icons.632f1dd7.js";import"./dialog.e87fead8.js";import"./description.a4cf72cc.js";import"./XMarkIcon.8babeba5.js";import"./Bars3CenterLeftIcon.1a627152.js";import"./moment.9709ab41.js";function j({campaigns:a}){return e.createElement(m,{title:"My Campaigns"},e.createElement("div",{className:"flex flex-col md:p-5"},e.createElement("div",{className:"inline-block min-w-full align-middle space-y-5"},e.createElement(n,{usePrimary:!0,href:route("brief.create")},(a==null?void 0:a.length)>0?"Create a new campaign":"Create your first campaign"),e.createElement(o,{usePadding:!1,useBorder:!0},e.createElement("div",{className:"relative overflow-hidden ring-1 ring-black border-0 ring-opacity-5"},e.createElement("div",{className:"flex justify-between p-4 items-center"},e.createElement("h3",{className:"font-bold text-gray-600"},a==null?void 0:a.length," Campaigns")),(a==null?void 0:a.length)>0?e.createElement("table",{className:"min-w-full table-fixed divide-y divide-gray-300 overflow-scroll"},e.createElement("thead",{className:"bg-gray-100 border-t border-b"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"#"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Campaign name"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Campaign Budget"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Status"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Start Date"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"End Date"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Action"))),e.createElement("tbody",{className:"divide-y divide-gray-100 bg-white"},a.map((t,r)=>{var l;return e.createElement("tr",{key:r},e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},r+1),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.campaign_name),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},c((l=t==null?void 0:t.budget)!=null?l:0)),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},e.createElement("span",{className:p(" p-2 rounded-md text-white capitalize",t.status==="pending"||t.status==="in-progress"?"bg-yellow-400":t.status==="approved"?"bg-green-400":t.status==="completed"?"bg-blue-400":t.status==="rejected"?"bg-red-400":"bg-gray-400 text-black")},t.status)),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.campaign_state_date),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.campaign_end_date),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},e.createElement("div",{className:"flex flex-col space-y-3"},e.createElement("a",{href:route("brief.view",{id:t.id}),className:"text-blue-400"}," View brief"),e.createElement("a",{href:route("brief.edit",{id:t.id}),className:"text-blue-400"}," Edit brief"))))}))):e.createElement(s,null))))))}export{j as default};
