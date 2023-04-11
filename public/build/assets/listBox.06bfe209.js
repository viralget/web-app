import{R as e}from"./app.86d821d2.js";function c({item:r,handleAddInfluencer:a}){const t=(()=>r.influencers.length<1?!1:r.influencers.map(i=>({image_url:i.profile_photo_url})))(),l=()=>e.createElement("div",{className:"bg-[#E8E9F1] flex justify-center w-35 h-[8.5rem] items-center rounded-md"},e.createElement("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_19881)"},e.createElement("path",{d:"M22 38.5C31.1127 38.5 38.5 31.1127 38.5 22C38.5 12.8873 31.1127 5.5 22 5.5C12.8873 5.5 5.5 12.8873 5.5 22C5.5 31.1127 12.8873 38.5 22 38.5Z",stroke:"#A5ABB5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M22 27.5C25.797 27.5 28.875 24.422 28.875 20.625C28.875 16.828 25.797 13.75 22 13.75C18.203 13.75 15.125 16.828 15.125 20.625C15.125 24.422 18.203 27.5 22 27.5Z",stroke:"#A5ABB5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M10.9688 34.2729C12.0033 32.2352 13.5819 30.5238 15.5295 29.3283C17.4772 28.1328 19.7178 27.5 22.0031 27.5C24.2884 27.5 26.5291 28.1328 28.4767 29.3283C30.4244 30.5238 32.003 32.2352 33.0375 34.2729",stroke:"#A5ABB5","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_19881"},e.createElement("rect",{width:"44",height:"44",fill:"white"})))));return e.createElement("div",{className:"w-full"},e.createElement("div",{className:"border rounded-md p-3 h-[19rem] "},t.length>0?e.createElement("a",{href:route("single.list",{id:r.id}),className:"grid grid-cols-2 gap-2"},t.slice(0,4).map(n=>e.createElement("div",null,e.createElement("img",{className:"w-40 h-35  rounded-md",src:n.image_url}))),t.length>4?"":t.length==3?[...Array(1)].map(()=>e.createElement(l,null)):t.length==2?[...Array(2)].map(()=>e.createElement(l,null)):t.length==1?[...Array(3)].map(()=>e.createElement(l,null)):""):e.createElement("div",{className:"flex flex-col justify-center items-center p-10 "},e.createElement("div",null,e.createElement("svg",{width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_19898)"},e.createElement("path",{d:"M22 27.5C25.797 27.5 28.875 24.422 28.875 20.625C28.875 16.828 25.797 13.75 22 13.75C18.203 13.75 15.125 16.828 15.125 20.625C15.125 24.422 18.203 27.5 22 27.5Z",stroke:"#748094","stroke-width":"2","stroke-miterlimit":"10"}),e.createElement("path",{d:"M10.9688 34.2729C12.0033 32.2352 13.5819 30.5238 15.5295 29.3283C17.4772 28.1328 19.7178 27.5 22.0031 27.5C24.2884 27.5 26.5291 28.1328 28.4767 29.3283C30.4244 30.5238 32.003 32.2352 33.0375 34.2729",stroke:"#748094","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M30.25 9.625H38.5",stroke:"#748094","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M34.375 5.5V13.75",stroke:"#748094","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M38.2938 19.4047C38.4327 20.2628 38.5017 21.1308 38.5 22C38.5 25.2634 37.5323 28.4535 35.7193 31.1669C33.9062 33.8803 31.3293 35.9952 28.3143 37.244C25.2993 38.4929 21.9817 38.8196 18.781 38.183C15.5803 37.5463 12.6403 35.9749 10.3327 33.6673C8.02518 31.3597 6.45371 28.4197 5.81705 25.219C5.18039 22.0183 5.50715 18.7007 6.756 15.6858C8.00484 12.6708 10.1197 10.0938 12.8331 8.28078C15.5465 6.46774 18.7366 5.50003 22 5.50003C22.8693 5.49832 23.7372 5.5673 24.5953 5.70628",stroke:"#748094","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_19898"},e.createElement("rect",{width:"44",height:"44",fill:"white"}))))),e.createElement("div",{className:"flex flex-col justify-center items-center"},e.createElement("span",{className:"text-center font-bold"},"Lists are great to  organize influencers"),e.createElement("button",{onClick:()=>a(),className:"border rounded-md py-2 px-5 mt-2 space-x-1 border-viralget-red flex justify-center items-center"},e.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{"clip-path":"url(#clip0_958_19912)"},e.createElement("path",{d:"M2.8125 9H15.1875",stroke:"#F37C38","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"}),e.createElement("path",{d:"M9 2.8125V15.1875",stroke:"#F37C38","stroke-width":"1.2","stroke-linecap":"round","stroke-linejoin":"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_19912"},e.createElement("rect",{width:"18",height:"18",fill:"white"})))),e.createElement("span",{className:"text-viralget-red font-bold"}," Add to list"))))),e.createElement("div",{className:"flex flex-col  py-2"},e.createElement("span",{className:"font-bold "},r.name),e.createElement("span",null,r.influencers.length," influencers")))}export{c as default};
