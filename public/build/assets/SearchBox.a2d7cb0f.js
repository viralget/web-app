import{r as l,R as n,d as u}from"./app.bfe5c952.js";import d from"./SearchForm.4ed6ffe4.js";import"./api.6141d88d.js";import"./Select.916540bd.js";import"./Label.97f51d5a.js";import"./moment.9709ab41.js";function x(e){var r;const[c,o]=l.exports.useState(""),s=a=>{const m=window.location.search,t=new URLSearchParams(m);t.set(a.target.name,a.target.value),t.set("page",1),o(t)},i=async a=>{a.preventDefault(),e.onLoading&&e.onLoading(!0),e.searchActive(!0),u.Inertia.get(route("influencers.search")+"?"+c.toString())};return n.createElement("div",{className:"mx-auto -mt-12 relative z-10 rounded-lg overflow-hidden"},n.createElement(d,{className:"",categories:(r=e==null?void 0:e.categories)!=null?r:[],handleChange:s,handleSubmit:i,...e}))}export{x as default};
