import{R as e,f as r}from"./app.a466af73.js";import{C as g}from"./Card.fba60cf4.js";import{a as d}from"./helpers.d3ba62f0.js";import"./index.b9e2ff58.js";import p from"./card.04fa1d63.js";import{S as f}from"./SectionTitle.d7a76a20.js";import"./moment.9709ab41.js";import"./index.e8fcc329.js";function V({influencer:a}){var s,i,c;const{engagement_rate:h,global_rank:C,country_rank:x,category_rank:y,avg_cpe:o,avg_cpm:l,avg_cpv:m,avg_cpc:t,reach:A,impressions:N,media_value:n}=a==null?void 0:a.metrics,E=[{title:"Average CPE",icon:e.createElement(r,null),score:(s=o==null?void 0:o.score)!=null?s:"no data"},{title:"Average CPM",icon:e.createElement(r,null),score:(i=l==null?void 0:l.score)!=null?i:"no data"},{title:"Average CPC",icon:e.createElement(r,null),score:t!=null&&t.score?d(t==null?void 0:t.score):"-"},{title:"Average CPV",icon:e.createElement(r,null),score:(c=m==null?void 0:m.score)!=null?c:"-"}];return e.createElement("div",{className:"grid md:grid-cols-2 gap-3"},e.createElement("div",null,e.createElement(g,{useBorder:!0,useShadow:!1},e.createElement(f,{title:"Influencer media value"}),e.createElement("p",{className:"font-semibold text-4xl font-lexend py-5 "}," $",d(n==null?void 0:n.score)),e.createElement("p",{className:"text-sm text-gray-500 py-5"},"Estimated cost to gain the same reach ",e.createElement("br",null),"through paid social ad with similar audience"))),e.createElement("div",{className:"grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  "},E.map(u=>e.createElement(p,{item:u}))))}export{V as default};