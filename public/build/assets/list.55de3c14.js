import{r as l,R as e}from"./app.0ebeabc9.js";import{E as g}from"./EmptyState.d3ab6885.js";const d=[{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"},{name:"Lindsay Walton",title:"Front-end Developer",email:"lindsay.walton@example.com",role:"Member"}];function y(...n){return n.filter(Boolean).join(" ")}function b({count:n,data:s}){const r=l.exports.useRef(),[c,o]=l.exports.useState(!1),[m,i]=l.exports.useState(!1),[a,p]=l.exports.useState([]);l.exports.useLayoutEffect(()=>{const t=a.length>0&&a.length<s.length;o(a.length===d.length),i(t),r.current&&(r.current.indeterminate=t)},[a]);function x(){p(c||m?[]:d),o(!c&&!m),i(!1)}return e.createElement("div",{className:"mt-3 flex flex-col"},e.createElement("div",{className:"inline-block min-w-full align-middle"},e.createElement("div",{className:"relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"},e.createElement("div",{className:"flex p-4 justify-between align-middle items-center"},e.createElement("div",null,e.createElement("h3",null,n," Influencers")),s.length>0&&e.createElement("div",{className:" top-0 flex  items-center space-x-3 bg-gray-50 sm:left-16"},e.createElement("button",{type:"button",disabled:a.length>0,className:"inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"},"Create Campaign List"))),s.length>0?e.createElement("table",{className:"min-w-full table-fixed divide-y divide-gray-300"},e.createElement("thead",{className:"bg-gray-100"},e.createElement("tr",null,e.createElement("th",{scope:"col",className:"relative w-12 px-6 sm:w-16 sm:px-8"},e.createElement("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-indigo-500 sm:left-6",ref:r,checked:c,onChange:x})),e.createElement("th",{scope:"col",className:"min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"},"Name"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Title"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Email"),e.createElement("th",{scope:"col",className:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Role"),e.createElement("th",{scope:"col",className:"relative py-3.5 pl-3 pr-4 sm:pr-6"},e.createElement("span",{className:"sr-only"},"Edit")))),e.createElement("tbody",{className:"divide-y divide-gray-200 bg-white"},s.map(t=>e.createElement("tr",{key:t.email,className:a.includes(t)?"bg-gray-50":void 0},e.createElement("td",{className:"relative w-12 px-6 sm:w-16 sm:px-8"},a.includes(t)&&e.createElement("div",{className:"absolute inset-y-0 left-0 w-0.5 bg-fuchsia-600"}),e.createElement("input",{type:"checkbox",className:"absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-indigo-500 sm:left-6",value:t.email,checked:a.includes(t),onChange:f=>setselected(f.target.checked?[...a,t]:a.filter(u=>u!==t))})),e.createElement("td",{className:y("whitespace-nowrap py-4 pr-3 text-sm font-medium",a.includes(t)?"text-fuchsia-600":"text-gray-900")},t.name),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.title),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.email),e.createElement("td",{className:"whitespace-nowrap px-3 py-4 text-sm text-gray-500"},t.role),e.createElement("td",{className:"whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"},e.createElement("a",{href:"#",className:"text-fuchsia-600 hover:text-fuchsia-900"},"Edit",e.createElement("span",{className:"sr-only"},", ",t.name))))))):e.createElement(g,null))))}export{b as default};
