import{R as e,L as n}from"./app.2148b6e9.js";import{T as i}from"./TitleText.e334b1e4.js";import{f as o}from"./helpers.ccb7bbea.js";import"./moment.9709ab41.js";function u({data:c,title:s}){return e.createElement("div",{className:"mt-8"},e.createElement("div",{className:""},e.createElement(i,{text:s!=null?s:"Recent Searches"}),e.createElement("div",{className:"mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},c.map((t,m)=>{const a=JSON.parse(t.search_filters);return a&&e.createElement("div",{key:m,className:" rounded-lg bg-white shadow-lg overflow-hidden"},e.createElement(n,{href:route("influencers.search")+"?"+t.query},e.createElement("div",{className:"p-5"},e.createElement("div",{className:"flex items-center"},e.createElement("div",{className:"w-0 flex-1"},e.createElement("dl",null,e.createElement("dt",{className:" text-sm font-medium text-gray-500 space-x-1"},Object.keys(a).length>0&&Object.keys(a).splice(0,2).map((r,l)=>e.createElement("span",{className:"capitalize",key:l},r,":",a[r],", ")),e.createElement("a",{href:""},"+ 5 filters"))))))),e.createElement("div",{className:" px-5 py-3"},e.createElement("div",{className:"text-sm flex justify-between"},e.createElement("a",{href:t.href,className:"font-medium text-cyan-700 hover:text-cyan-900"},t.results_count),e.createElement("span",{className:"text-gray-400"},o(t.created_at,!0)))))}))))}export{u as default};
