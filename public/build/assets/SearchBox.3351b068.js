import{R as r}from"./app.59e47cf7.js";import s from"./SearchForm.695c8bea.js";function d(e){const n=a=>{const c=window.location.search,t=new URLSearchParams(c);t.set(a.target.name,a.target.value),t.set("page",1),o()},o=async a=>{e.onLoading&&e.onLoading(!0)};return r.createElement("div",{className:"mx-auto shadow bg-white lg:px-8 pt-1 -mt-10 relative z-10 rounded-lg overflow-hidden"},r.createElement(s,{className:"",handleChange:n,...e}))}export{d as default};
