import{R as e,r as o,ao as g}from"./app.3c8b7c63.js";import{A as u}from"./AuthenticatedLayout.c1480d2d.js";import"./moment.9709ab41.js";import p from"./SearchBox.d2200055.js";import"./Typography.ee7b2b2c.js";import"./Error.04e54970.js";import"./Toast.8ab3596a.js";import"./api.ba72628e.js";import"./index.652d1a41.js";import"./searchCard.e546e700.js";import b from"./list.4180bff8.js";import{E as n}from"./EmptyState.27ce434b.js";import"./Logo.89335dd8.js";import"./helpers.9011d3ce.js";import"./DropdownMenu.20533771.js";import"./Avatar.94bf3a1f.js";import"./Button.5224f7f0.js";import"./transition.a540d6c7.js";import"./keyboard.d4e81411.js";import"./ChevronDownIcon.4bf86b45.js";import"./MagnifyingGlassIcon.e7eff129.js";import"./description.a1b17929.js";import"./XMarkIcon.cc363f15.js";import"./Bars3CenterLeftIcon.985c8dc8.js";import"./SearchForm.9cd39e16.js";import"./Label.b8e0b449.js";import"./Select.50cc4880.js";import"./index.e8fcc329.js";import"./MenuDropDown.6c281c4e.js";import"./EmptyState.84171bb4.js";import"./BoltIcon.359efe44.js";import"./index.4fa2f7cc.js";import"./Combination.53f0b609.js";import"./Profile.c89c4e13.js";import"./header.705ce6c4.js";import"./influencerSize.4f6da446.js";import"./audienceCard.6b567028.js";import"./QAS.237b3d56.js";import"./card.8c05518d.js";import"./profiling.4746e664.js";import"./footer.c913e5c4.js";import"./Modal.b5050628.js";import"./Card.659decda.js";import"./SimplePagination.c4d8e942.js";function y(){return e.createElement("div",{role:"status",class:"p-4 space-y-4 w-full rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},e.createElement("div",{class:"flex justify-between items-center"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("span",{class:"sr-only"},"Loading..."))}function de({list:r,categories:d,total_count:f,has_query:i}){var a,l,m;const[c,t]=o.exports.useState(!1),[s]=o.exports.useContext(g);return e.createElement(u,{smallHeader:!1,title:"Search through our database of influencers",bgColor:s.bg_color},e.createElement("main",{className:"flex-1 pb-8 px-10"},e.createElement(p,{categories:d,searchActive:()=>t(!0),onLoading:()=>t(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10 my-6"},c?e.createElement(y,null):i?((a=Object.keys(r))==null?void 0:a.length)>0?e.createElement(e.Fragment,null,e.createElement(b,{data:r==null?void 0:r.data,count:(m=(l=r==null?void 0:r.meta)==null?void 0:l.total)!=null?m:0,paginationData:r})):e.createElement(n,{title:"No result found"}):e.createElement(n,{title:"Please use the search filter to set your search preferences"})))))}export{de as default};
