import{R as e}from"./app.a466af73.js";import{C as a}from"./Card.fba60cf4.js";import"./moment.9709ab41.js";import"./index.b9e2ff58.js";import o from"./tweetCard.d2b00637.js";import{S as r}from"./SectionTitle.d7a76a20.js";import{E as s}from"./EmptyState.a5e6ec13.js";import"./helpers.d3ba62f0.js";import"./index.e8fcc329.js";import"./BoltIcon.f375ee46.js";function S({influencer:t}){var i,d,n;return t==null||t.metrics,e.createElement("div",{className:"space-y-5"},e.createElement("div",null,e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Best Performing Content"}),e.createElement("div",{className:"grid  md:grid-cols-3  grid-cols-1  md:gap-2  gap-y-3 mt-5"},t.best_performing_tweets?(i=t.best_performing_tweets)==null?void 0:i.map((m,l)=>e.createElement(o,{tweet:m,key:l})):e.createElement("p",null,"No data available")))),e.createElement("div",null,e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Best Performing Video"}),e.createElement("div",{className:"grid  md:grid-cols-3  grid-cols-1  md:gap-2  gap-y-3 mt-5"},t.best_performing_videos?(d=t.best_performing_videos)==null?void 0:d.map((m,l)=>e.createElement(o,{isMedia:!0,tweet:m,key:l})):e.createElement("p",null,"No data available")))),e.createElement("div",null,e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Recent tweets"}),e.createElement("div",{className:"grid  md:grid-cols-3  grid-cols-1  md:gap-2  gap-y-3 mt-5"},t.recent_tweets?(n=t.recent_tweets)==null?void 0:n.map((m,l)=>e.createElement(o,{tweet:m,key:l})):e.createElement("p",null,"No data available")))),e.createElement("div",{className:"flex space-x-3"},e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Content type"}),e.createElement(s,{title:"Coming soon"})),e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Activity"}),e.createElement(s,{title:"Coming soon"})),e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Likes-comments-shares-ratio"}),e.createElement(s,{title:"Coming soon"}))),e.createElement(a,{useBorder:!0,useShadow:!1},e.createElement(r,{title:"Likes spread"}),e.createElement(s,{title:"Coming soon"})))}export{S as default};