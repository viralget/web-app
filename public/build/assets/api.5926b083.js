import{e as p}from"./app.13a136bb.js";let m={};p.create({baseURL:"/"});const o=p.create({baseURL:"/"});o.interceptors.request.use((e,r)=>e,e=>{});const i=document.querySelector('meta[name="csrf-token"]');i&&`${i.getAttribute("content")}`;const l=async(e,r,s=!1)=>{try{return s?await o.post(e,r,m):await o.post(e,r)}catch(t){return d(t)}},d=e=>{var r,s,t,a,n,c,u;return console.log({error:e}),{error:(s=(r=e.response)==null?void 0:r.data)!=null?s:"An error occurred",message:(n=(a=(t=e.response)==null?void 0:t.data)==null?void 0:a.message)!=null?n:"An error occurred",errors:(u=(c=e.response)==null?void 0:c.data)==null?void 0:u.errors,status:!1}};export{l as p};
