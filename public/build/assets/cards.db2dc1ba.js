import{R as e}from"./app.5107a46e.js";function m({campaigns:l}){return e.createElement("div",{className:"mt-2  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"},(l==null?void 0:l.length)>0&&l.map(t=>{var r,a;return e.createElement("a",{href:route("campaigns.show",{id:t.id})},e.createElement("div",{className:"overflow-hidden border-gray-300 border rounded-lg text-gray-700"},e.createElement("div",{class:"container px-5 py-2 mx-auto "},e.createElement("div",{class:"flex flex-wrap -m-1 md:-m-2"},((r=t.influencers)==null?void 0:r.length)>0&&((a=t.influencers)==null?void 0:a.map(c=>e.createElement("div",{class:"flex flex-wrap w-1/2"},e.createElement("div",{class:"w-full p-1 md:p-2"},e.createElement("img",{alt:"gallery",class:"block object-cover object-center w-full h-100 rounded-lg",src:c.profile_banner_url})))))))),e.createElement("p",{className:"mt-3 text-md text-bold"},t.title))}))}export{m as default};
