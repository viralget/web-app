import{R as e,r as o,ap as g}from"./app.a466af73.js";import{A as p}from"./AuthenticatedLayout.26c321da.js";import"./moment.9709ab41.js";import u from"./SearchBox.320b067c.js";import"./Typography.af1391d7.js";import"./Error.83e550df.js";import"./Toast.76c83788.js";import"./api.c27b3b5d.js";import"./index.b9e2ff58.js";import"./searchCard.178a7dcd.js";import b from"./list.b353fe10.js";import{E as n}from"./EmptyState.a5e6ec13.js";import"./Logo.714174cb.js";import"./helpers.d3ba62f0.js";import"./DropdownMenu.78d4e618.js";import"./Avatar.e8b682c8.js";import"./female.264b94a6.js";import"./Button.316dc283.js";import"./transition.fb7b2a55.js";import"./keyboard.7337a3d2.js";import"./ChevronDownIcon.482f6106.js";import"./MagnifyingGlassIcon.92d07edc.js";import"./description.83cb4e7c.js";import"./XMarkIcon.09d263fd.js";import"./Bars3CenterLeftIcon.edacef9e.js";import"./SearchForm.89daf57d.js";import"./Label.e25fdef1.js";import"./Select.7ed72ad5.js";import"./defaults.d4c22331.js";import"./index.e8fcc329.js";import"./MenuDropDown.88162ac4.js";import"./EmptyState.1a3b1927.js";import"./BoltIcon.f375ee46.js";import"./index.3c088cea.js";import"./Combination.99a0ef9a.js";import"./Profile.04dae431.js";import"./header.0b52085c.js";import"./Avatar.4db74bc0.js";import"./influencerSize.be2aa4d3.js";import"./audienceCard.dbd3dbaf.js";import"./QAS.4a51c17e.js";import"./card.04fa1d63.js";import"./profiling.6ac010ac.js";import"./footer.cf5e6db5.js";import"./Modal.8b263e5c.js";import"./Card.fba60cf4.js";import"./SimplePagination.a3016dcf.js";function y(){return e.createElement("div",{role:"status",class:"p-4 space-y-4 w-full rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},e.createElement("div",{class:"flex justify-between items-center"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("span",{class:"sr-only"},"Loading..."))}function se({list:r,categories:d,total_count:f,has_query:i}){var a,l,m;const[c,t]=o.exports.useState(!1),[s]=o.exports.useContext(g);return e.createElement(p,{smallHeader:!1,title:"Search through our database of influencers",bgColor:s.bg_color},e.createElement("main",{className:"flex-1 pb-8 px-10"},e.createElement(u,{categories:d,searchActive:()=>t(!0),onLoading:()=>t(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10 my-6"},c?e.createElement(y,null):i?((a=Object.keys(r))==null?void 0:a.length)>0?e.createElement(e.Fragment,null,e.createElement(b,{data:r==null?void 0:r.data,count:(m=(l=r==null?void 0:r.meta)==null?void 0:l.total)!=null?m:0,paginationData:r})):e.createElement(n,{title:"No result found"}):e.createElement(n,{title:"Please use the search filter to set your search preferences"})))))}export{se as default};