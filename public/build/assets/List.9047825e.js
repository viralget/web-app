import{R as e}from"./app.71a75db1.js";import{f as n}from"./helpers.91236dcf.js";import{P as c}from"./Pagination.2b75d3be.js";import"./moment.9709ab41.js";import"./SimplePagination.e18fd06d.js";function f(s){const{data:a=[],paginationData:l}=s;return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("div",{className:"-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0"},e.createElement("table",{className:"min-w-full divide-y divide-gray-300"},e.createElement("thead",{className:"bg-gray-50"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},"Influencer Name"),e.createElement("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},"Gender"),e.createElement("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"},"Signed Up On"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Verification Status"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Approval Status"),e.createElement("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6"},e.createElement("span",{className:"sr-only"},"View")))),e.createElement("tbody",{className:"divide-y divide-gray-200 bg-white"},a.length>0?a.map((t,r)=>{var m;return e.createElement("tr",{key:r},e.createElement("td",{className:"w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6"},e.createElement("a",{href:route("admin.influencers.whatsapp.show",{influencer:t.id})},t.name)),e.createElement("td",{className:"hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"},t.gender),e.createElement("td",{className:"hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"},n(t.created_at)),e.createElement("td",{className:"px-3 py-4 text-sm text-gray-500"},t.is_verified?"Verified":"Pending"),e.createElement("td",{className:"px-3 py-4 text-sm text-gray-500"},(m=t.approval_status)!=null?m:"Pending "),e.createElement("td",{className:"py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},e.createElement("a",{href:route("admin.influencers.whatsapp.show",{influencer:t.id}),className:"text-green-600 hover:text-green-900"},"View")))}):e.createElement("tr",{className:"text-sm text-gray-500"},e.createElement("td",{colSpan:5,className:"p-8"},"No record found")))))),l&&e.createElement(c,{data:l}))}export{f as default};
