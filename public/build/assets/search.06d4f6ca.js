import{R as e,r as i}from"./app.996d016e.js";import{A as c}from"./AuthenticatedLayout.206fd8ec.js";import{C as s}from"./Container.3af7d19a.js";import g from"./SearchBox.0197ca7d.js";import"./Typography.9f2f7a5e.js";import{n as u}from"./helpers.48db9924.js";import"./api.25e07a73.js";import"./Toast.475862ec.js";import"./searchCard.4f4d6784.js";import p from"./list.536e770d.js";import{E as b}from"./EmptyState.14a829f7.js";import"./Logo.5a4d82ff.js";import"./DropdownMenu.476507f0.js";import"./Avatar.3ef9a82f.js";import"./Button.dcfe4146.js";import"./transition.a592a82d.js";import"./ChevronDownIcon.898d964a.js";import"./icons.252ca32f.js";import"./MagnifyingGlassIcon.0b8bed85.js";import"./use-event-listener.ba5db124.js";import"./XMarkIcon.1d282fc3.js";import"./Bars3CenterLeftIcon.3e0bc72c.js";import"./SearchForm.143b0a42.js";import"./moment.9709ab41.js";import"./Label.f5366339.js";import"./MenuDropDown.076f90a5.js";import"./EmptyState.cc2e9483.js";import"./BoltIcon.613f5973.js";import"./index.46304d9c.js";import"./Profile.9395e9d9.js";import"./header.b6b5f690.js";import"./influencerSize.4803b5b7.js";import"./audienceCard.125ac877.js";import"./card.b6564de7.js";import"./tweetList.1e68ec61.js";import"./tweetCard.e1803fe2.js";import"./profiling.d2d5fce9.js";import"./footer.037d0099.js";import"./Modal.6b2a7830.js";import"./SimplePagination.5db0e546.js";function y(){return e.createElement("div",{role:"status",class:"p-4 space-y-4 w-full rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"},e.createElement("div",{class:"flex justify-between items-center"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("div",{class:"flex justify-between items-center pt-4"},e.createElement("div",null,e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"}),e.createElement("div",{class:"w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"})),e.createElement("div",{class:"h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"})),e.createElement("span",{class:"sr-only"},"Loading..."))}function ae({list:r,categories:n,total_count:d}){var a,l,m;const[o,t]=i.exports.useState(!1);return e.createElement(c,{title:`Search through our database of ${u(d)}+ influencers`},e.createElement("main",{className:"flex-1 pb-8"},e.createElement(s,null,e.createElement(g,{categories:n,searchActive:()=>t(!0),onLoading:()=>t(!0)}),e.createElement("div",null,e.createElement("div",{className:"space-y-10 my-6"},o?e.createElement(y,null):((a=Object.keys(r))==null?void 0:a.length)>0?e.createElement(e.Fragment,null,e.createElement(p,{data:r==null?void 0:r.data,count:(m=(l=r==null?void 0:r.meta)==null?void 0:l.total)!=null?m:0,paginationData:r})):e.createElement(b,{title:"No result found"}))))))}export{ae as default};
