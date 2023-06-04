import{R as e}from"./app.ab529ffa.js";import{E as s}from"./EmptyState.270e3850.js";import{T as o}from"./Typography.c33eea1f.js";import"./BoltIcon.86558697.js";function g({data:a}){return e.createElement("div",{className:"mt-space-60"},e.createElement("div",{className:"flex  justify-between  w-full"},e.createElement(o,{variant:"h2",content:"Top Categories"}),e.createElement("div",null,e.createElement("a",{href:route("allcategories.page"),className:"text-xs font-bold  text-viralget-red"},"View all"))),(a==null?void 0:a.length)>0?e.createElement("div",{className:"mt-space-20 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"},a.map((t,r)=>{var l;return e.createElement("a",{href:`/search/?category=${t.name}`,key:r},e.createElement("div",{className:"relative"},e.createElement("div",{className:"relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-fuchsia-600 "},e.createElement("img",{src:(l=t.image_url)!=null?l:"/images/categories/"+t.name+".png",alt:t.imageAlt,className:"h-full w-full object-cover object-center"})),e.createElement("div",{className:"absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden rounded-lg p-4"},e.createElement("div",{"aria-hidden":"true",className:"absolute inset-x-0 bottom-0 top-0 h-full bg-black opacity-20"}),e.createElement("h3",{className:" relative text-t-xs font-lexend font-bold text-white capitalize "},t.name))))})):e.createElement(s,null))}export{g as default};