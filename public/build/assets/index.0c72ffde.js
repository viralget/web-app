import{R as e}from"./app.bfe5c952.js";import{T as m}from"./TitleText.699b3847.js";import{f as l}from"./helpers.9b72ca99.js";import"./moment.9709ab41.js";function i({data:a}){return console.log({data:a}),e.createElement("div",{className:"mt-8"},e.createElement("div",{className:""},e.createElement(m,{text:"Recent Searches"}),e.createElement("div",{className:"mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},a.map(t=>e.createElement("div",{key:t.keyword,className:" rounded-lg bg-white shadow"},e.createElement("div",{className:"p-5"},e.createElement("div",{className:"flex items-center"},e.createElement("div",{className:"w-0 flex-1"},e.createElement("dl",null,e.createElement("dt",{className:" text-sm font-medium text-gray-500"},t.keyword," ",e.createElement("a",{href:""},"+ 5 filters")))))),e.createElement("div",{className:"bg-gray-50 px-5 py-3"},e.createElement("div",{className:"text-sm flex justify-between"},e.createElement("a",{href:t.href,className:"font-medium text-cyan-700 hover:text-cyan-900"},t.results_count),e.createElement("span",{className:"text-gray-400"},l(t.created_at,!0)))))))))}export{i as default};
