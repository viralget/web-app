import{r as c,R as e}from"./app.1fbb248a.js";import"./moment.9709ab41.js";import{T as o}from"./Typography.339f1b3a.js";import"./Toast.fb0b306b.js";import"./api.e6f46c49.js";import n from"./searchCard.1869324b.js";import"./icons.f643128d.js";import"./helpers.1cd6bcc2.js";import"./MenuDropDown.670e04b0.js";import"./transition.9e4679b1.js";function N({data:s,title:r,isSaved:t}){return c.exports.useState(!1),e.createElement("div",{className:"mt-space-60"},e.createElement("div",{className:""},e.createElement("div",{className:"flex items-center justify-between"},e.createElement(o,{variant:"h2",content:r!=null?r:"Recent Searches"}),t&&e.createElement("div",null,e.createElement("a",{href:route("savedsearches.page"),className:"text-t-normal font-bold  text-viralget-red"},"Show more"))),e.createElement("div",{className:"mt-space-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"},s.map((a,m)=>JSON.parse(a.search_filters)&&e.createElement(n,{card:a,isSaved:t,key:m})))))}export{N as default};
