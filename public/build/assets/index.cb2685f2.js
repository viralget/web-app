import{r as c,R as e}from"./app.8353904a.js";import"./moment.9709ab41.js";import{T as o}from"./Typography.758b8593.js";import"./Toast.a4861c3c.js";import"./api.bd938ba5.js";import n from"./searchCard.ded5919d.js";import"./icons.52d064f7.js";import"./helpers.fa0f1e93.js";import"./MenuDropDown.26899de2.js";import"./transition.6ba21d63.js";function N({data:s,title:r,isSaved:t}){return c.exports.useState(!1),e.createElement("div",{className:"mt-space-60"},e.createElement("div",{className:""},e.createElement("div",{className:"flex items-center justify-between"},e.createElement(o,{variant:"h2",content:r!=null?r:"Recent Searches"}),t&&e.createElement("div",null,e.createElement("a",{href:route("savedsearches.page"),className:"text-t-normal font-bold  text-viralget-red"},"Show more"))),e.createElement("div",{className:"mt-space-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},s.map((a,m)=>JSON.parse(a.search_filters)&&e.createElement(n,{card:a,isSaved:t,key:m})))))}export{N as default};