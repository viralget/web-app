import{R as e}from"./app.8d903797.js";import r from"./Dashboard.20aa3504.js";import{E as s}from"./EmptyState.0d3661c1.js";import{C as m}from"./Card.865cb0f8.js";import{n as c,c as o}from"./helpers.7271b81b.js";import"./Avatar.c6381ae4.js";import"./XMarkIcon.4df37c51.js";import"./transition.af433729.js";import"./keyboard.1f25139b.js";import"./dialog.578f05fb.js";import"./description.3a9ca01e.js";import"./BoltIcon.0e1d2346.js";import"./moment.9709ab41.js";function w({campaigns:a}){return console.log("campaigns:",a),e.createElement(r,{title:"Campaign Brief"},e.createElement("div",{className:"flex flex-col mt-2 "},e.createElement("div",{className:"inline-block min-w-full align-middle"},e.createElement(m,{usePadding:!1,useBorder:!0},e.createElement("div",{className:"relative overflow-hidden ring-1 ring-black border-0 ring-opacity-5"},e.createElement("div",{className:"flex justify-between p-4 items-center"},e.createElement("h3",{className:"font-bold text-gray-600"},a==null?void 0:a.length," Campaigns")),(a==null?void 0:a.length)>0?e.createElement("table",{className:"min-w-full table-fixed divide-y divide-gray-300 overflow-scroll"},e.createElement("thead",{className:"bg-gray-100 border-t border-b"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"#"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"User"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Campaign name"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Campaign Budget"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Status"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Start Date"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"End Date"),e.createElement("th",{scope:"col",className:" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Action"))),e.createElement("tbody",{className:"divide-y divide-gray-100 bg-white"},a.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},l+1),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.user.full_name),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.campaign_name),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},c(t.budget)),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},e.createElement("span",{className:o(" p-2 rounded-md text-white capitalize",t.status==="pending"||t.status==="in-progress"?"bg-yellow-400":t.status==="approved"?"bg-green-400":t.status==="completed"?"bg-blue-400":"bg-gray-400 text-black")},t.status)),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.campaign_state_date),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.campaign_end_date),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},e.createElement("div",{className:"flex flex-col space-y-3"},e.createElement("a",{href:route("admin.view.brief",{id:t.id}),className:"text-blue-400"}," View brief"))))))):e.createElement(s,null))))))}export{w as default};
