import{R as r}from"./app.7179bf09.js";import{e as a}from"./helpers.0557fa85.js";import{S as f}from"./SimplePagination.4b018027.js";function _({data:l,simpleData:e,paginationURL:t,useSimple:m}){var i,o;const{total:g,links:d,per_page:s,from:u,to:b,prev_page_url:v,next_page_url:y,current_page:h,last_page:x}=l;return x==1?r.createElement(r.Fragment,null):m?r.createElement(f,{data:l,paginationURL:t}):r.createElement("div",{className:"mt-4 px-4 py-3 flex w-full items-center justify-between sm:px-6"},r.createElement("div",{className:"flex-1 flex justify-between sm:hidden"},r.createElement("a",{href:(i=e==null?void 0:e.prev)!=null?i:"#",className:`${(e==null?void 0:e.prev)==null&&"invisible"} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`},"Previous"),r.createElement("a",{href:(o=e==null?void 0:e.next)!=null?o:"#",className:`${(e==null?void 0:e.next)==null&&"invisible"} ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`},"Next")),r.createElement("div",{className:"hidden sm:flex-1 sm:flex items-center justify-center"},r.createElement("div",null,r.createElement("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},d.map((n,c)=>r.createElement("a",{key:c,href:t?t+"?page="+c:n.url,className:`${n.active?"bg-indigo-600 text-white":"bg-white text-gray-500"} border-gray-300  hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`},a(n.label)))))))}export{_ as P};
