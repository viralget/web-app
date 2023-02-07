import{R as e}from"./app.bfe5c952.js";import{e as x,f as p}from"./helpers.9b72ca99.js";import"./moment.9709ab41.js";function g({data:l,simpleData:t,paginationURL:a}){var c,d;const{total:r,links:n,per_page:m,from:f,to:y,prev_page_url:u,next_page_url:h,current_page:E,last_page:o}=l;return o==1?e.createElement(e.Fragment,null):e.createElement("div",{className:"mt-4 px-4 py-3 flex w-full items-center justify-between sm:px-6"},e.createElement("div",{className:"flex-1 flex justify-between sm:hidden"},e.createElement("a",{href:(c=t==null?void 0:t.prev)!=null?c:"#",className:`${(t==null?void 0:t.prev)==null&&"invisible"} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`},"Previous"),e.createElement("a",{href:(d=t==null?void 0:t.next)!=null?d:"#",className:`${(t==null?void 0:t.next)==null&&"invisible"} ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`},"Next")),e.createElement("div",{className:"hidden sm:flex-1 sm:flex items-center justify-center"},e.createElement("div",null,e.createElement("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},n.map((s,i)=>e.createElement("a",{key:i,href:a?a+"?page="+i:s.url,className:`${s.active?"bg-indigo-600 text-white":"bg-white text-gray-500"} border-gray-300  hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`},x(s.label)))))))}function w(l){const{data:t=[],paginationData:a}=l;return e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement("div",{className:"-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0"},e.createElement("table",{className:"min-w-full divide-y divide-gray-300"},e.createElement("thead",{className:"bg-gray-50"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"},"Influencer Name"),e.createElement("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"},"Gender"),e.createElement("th",{scope:"col",className:"hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"},"Signed Up On"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Verification Status"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Approval Status"),e.createElement("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6"},e.createElement("span",{className:"sr-only"},"View")))),e.createElement("tbody",{className:"divide-y divide-gray-200 bg-white"},t.length>0?t.map((r,n)=>{var m;return e.createElement("tr",{key:n},e.createElement("td",{className:"w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6"},e.createElement("a",{href:route("admin.influencers.whatsapp.show",{influencer:r.id})},r.name)),e.createElement("td",{className:"hidden px-3 py-4 text-sm text-gray-500 lg:table-cell"},r.gender),e.createElement("td",{className:"hidden px-3 py-4 text-sm text-gray-500 sm:table-cell"},p(r.created_at)),e.createElement("td",{className:"px-3 py-4 text-sm text-gray-500"},r.is_verified?"Verified":"Pending"),e.createElement("td",{className:"px-3 py-4 text-sm text-gray-500"},(m=r.approval_status)!=null?m:"Pending "),e.createElement("td",{className:"py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},e.createElement("a",{href:route("admin.influencers.whatsapp.show",{influencer:r.id}),className:"text-green-600 hover:text-green-900"},"View")))}):e.createElement("tr",{className:"text-sm text-gray-500"},e.createElement("td",{colSpan:5,className:"p-8"},"No record found")))))),a&&e.createElement(g,{data:a}))}export{w as default};