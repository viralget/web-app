import{r as c,R as e}from"./app.a5286dc2.js";import"./moment.9709ab41.js";import{T as o}from"./Typography.2c002ce7.js";import"./Toast.b71ab449.js";import"./api.f37ec366.js";import n from"./searchCard.f160c07b.js";import"./helpers.2d6f622c.js";import"./MenuDropDown.8dc950a5.js";import"./transition.387e8173.js";import"./keyboard.ad91c4ea.js";function N({data:s,title:r,isSaved:t}){return c.exports.useState(!1),e.createElement("div",{className:"mt-space-60"},e.createElement("div",{className:""},e.createElement("div",{className:"flex items-center justify-between"},e.createElement(o,{variant:"h2",content:r!=null?r:"Recent Searches"}),t&&e.createElement("div",null,e.createElement("a",{href:route("savedsearches.page"),className:"text-t-normal font-bold  text-viralget-red"},"Show more"))),e.createElement("div",{className:"mt-space-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},s.map((a,m)=>JSON.parse(a.search_filters)&&e.createElement(n,{card:a,isSaved:t,key:m})))))}export{N as default};