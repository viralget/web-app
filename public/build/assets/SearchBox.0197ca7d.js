import{r as h,R as g,l as L}from"./app.996d016e.js";import P from"./SearchForm.143b0a42.js";import"./api.25e07a73.js";import"./moment.9709ab41.js";import"./Label.f5366339.js";import"./XMarkIcon.1d282fc3.js";function B(e){var i;const[d,f]=h.exports.useState(""),[n,o]=h.exports.useState([]),S=(t,a,c)=>{var u,m;if(((u=t==null?void 0:t.target)==null?void 0:u.value.length)===0)return;const R=window.location.search,s=new URLSearchParams(R),D=(m=t==null?void 0:t.target)!=null&&m.value?t.target.value:t.value,l=[...n.filter(r=>r.name!=a),{name:a,query:c,value:D}];o(l),l.forEach(r=>{s.set(r.query,r.value)}),s.set("page",1),f(s)},v=async t=>{t.preventDefault(),e.onLoading&&e.onLoading(!0),L.Inertia.get(route("influencers.search")+"?"+d.toString())},x=t=>{const a=n.filter(c=>c.name!=t.name);o(a)};return g.createElement("div",{className:"mx-auto -mt-12 relative z-1 rounded-lg"},g.createElement(P,{getSearches:n,handleFiltering:x,categories:(i=e==null?void 0:e.categories)!=null?i:[],handleChange:S,handleSubmit:v,...e}))}export{B as default};
