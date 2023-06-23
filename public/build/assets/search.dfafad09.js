import{R as e,r as c}from"./app.0f8ffcca.js";import{A as s}from"./AuthenticatedLayout.53840dcf.js";import"./moment.9709ab41.js";import g from"./SearchBox.4d7d4db9.js";import"./Typography.b59e5868.js";import"./api.0c8921bf.js";import"./Toast.46f077f5.js";import"./index.2775ba3f.js";import"./searchCard.7516cb69.js";import u from"./list.c1e730f1.js";import{E as d}from"./EmptyState.332cadc0.js";import"./Logo.66fe3582.js";import"./helpers.178dcc0c.js";import"./DropdownMenu.fc8d9874.js";import"./Avatar.f7c4c44b.js";import"./Button.76a23ed0.js";import"./transition.aac9cd30.js";import"./ChevronDownIcon.c26aeca4.js";import"./icons.91f88e70.js";import"./MagnifyingGlassIcon.8f19b47d.js";import"./use-event-listener.f6360f6b.js";import"./XMarkIcon.75c65206.js";import"./Bars3CenterLeftIcon.c5e4713c.js";import"./SearchForm.6fad78ca.js";import"./Label.73f0b69e.js";import"./MenuDropDown.2e5401df.js";import"./EmptyState.c6b58af6.js";import"./BoltIcon.6b33e38d.js";import"./index.71069d18.js";import"./Profile.34de2f4f.js";import"./header.24024ec1.js";import"./influencerSize.936314ed.js";import"./audienceCard.c27d43d8.js";import"./card.b57394c4.js";import"./profiling.2f54dbf7.js";import"./footer.1e4ca3e1.js";import"./Modal.541c80ed.js";import"./Card.ae6030cb.js";import"./SimplePagination.dd4f6cd4.js";function p(){return e.createElement("div",{role:"status",class:"p-4 space-y-4 w-full rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},e.createElement("div",{class:"flex justify-between items-center"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("span",{class:"sr-only"},"Loading..."))}function re({list:r,categories:o,total_count:b,has_query:t}){var l,m,n;const[i,a]=c.exports.useState(!1);return console.log({has_query:t}),e.createElement(s,{title:"Search through our database of influencers"},e.createElement("main",{className:"flex-1 pb-8 px-10"},e.createElement(g,{categories:o,searchActive:()=>a(!0),onLoading:()=>a(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10 my-6"},i?e.createElement(p,null):t?((l=Object.keys(r))==null?void 0:l.length)>0?e.createElement(e.Fragment,null,e.createElement(u,{data:r==null?void 0:r.data,count:(n=(m=r==null?void 0:r.meta)==null?void 0:m.total)!=null?n:0,paginationData:r})):e.createElement(d,{title:"No result found"}):e.createElement(d,{title:"Please use the search filter to set your search preferences"})))))}export{re as default};