import{R as e,r as i}from"./app.7fa3bd1a.js";import{A as c}from"./AuthenticatedLayout.d343894f.js";import{C as s}from"./Container.bff3d1ec.js";import g from"./SearchBox.3f5a5e0c.js";import"./Typography.d87c0114.js";import{n as u}from"./helpers.97e11027.js";import"./api.e32f0351.js";import"./Toast.a5584f3a.js";import"./searchCard.0f692a8b.js";import p from"./list.634c6707.js";import{E as b}from"./EmptyState.65d049b4.js";import"./Logo.cfe81f18.js";import"./DropdownMenu.5220d945.js";import"./Avatar.c5c3e5b3.js";import"./Button.7add666f.js";import"./transition.e648784a.js";import"./ChevronDownIcon.fda40045.js";import"./icons.4ebce0a2.js";import"./MagnifyingGlassIcon.507479f6.js";import"./use-event-listener.b40040e7.js";import"./XMarkIcon.b13d806d.js";import"./Bars3CenterLeftIcon.634cd792.js";import"./SearchForm.850e3fe4.js";import"./moment.9709ab41.js";import"./Label.69cb16f0.js";import"./MenuDropDown.95701816.js";import"./EmptyState.c92d0e75.js";import"./BoltIcon.e937941a.js";import"./index.d9b5d34a.js";import"./Profile.81712c7f.js";import"./header.3c5d8273.js";import"./influencerSize.c8dd3783.js";import"./audienceCard.beb8faed.js";import"./card.afb5b9cb.js";import"./tweetList.5858594e.js";import"./tweetCard.87a54e97.js";import"./profiling.414706e8.js";import"./footer.55599d2b.js";import"./Modal.dd8a386a.js";import"./SimplePagination.05dd5d4b.js";function y(){return e.createElement("div",{role:"status",class:"p-4 space-y-4 w-full rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},e.createElement("div",{class:"flex justify-between items-center"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("span",{class:"sr-only"},"Loading..."))}function ae({list:r,categories:n,total_count:d}){var a,l,m;const[o,t]=i.exports.useState(!1);return e.createElement(c,{title:`Search through our database of ${u(d)}+ influencers`},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(s,null,e.createElement(g,{categories:n,searchActive:()=>t(!0),onLoading:()=>t(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10 my-6"},o?e.createElement(y,null):((a=Object.keys(r))==null?void 0:a.length)>0?e.createElement(e.Fragment,null,e.createElement(p,{data:r==null?void 0:r.data,count:(m=(l=r==null?void 0:r.meta)==null?void 0:l.total)!=null?m:0,paginationData:r})):e.createElement(b,{title:"No result found"}))))))}export{ae as default};
