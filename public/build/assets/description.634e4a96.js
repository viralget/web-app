import{C as d,$ as u,I as m,y as h,b as x,o as g}from"./keyboard.ad91c4ea.js";import{r as s,R as v}from"./app.a5286dc2.js";let w="div";var b=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(b||{});let T=d(function(e,r){let{features:t=1,...o}=e,n={ref:r,"aria-hidden":(t&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return u({ourProps:n,theirProps:o,slot:{},defaultTag:w,name:"Hidden"})}),c=s.exports.createContext(null);function f(){let e=s.exports.useContext(c);if(e===null){let r=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(r,f),r}return e}function k(){let[e,r]=s.exports.useState([]);return[e.length>0?e.join(" "):void 0,s.exports.useMemo(()=>function(t){let o=g(a=>(r(i=>[...i,a]),()=>r(i=>{let l=i.slice(),p=l.indexOf(a);return p!==-1&&l.splice(p,1),l}))),n=s.exports.useMemo(()=>({register:o,slot:t.slot,name:t.name,props:t.props}),[o,t.slot,t.name,t.props]);return v.createElement(c.Provider,{value:n},t.children)},[r])]}let P="p",y=d(function(e,r){let t=f(),o=`headlessui-description-${m()}`,n=h(r);x(()=>t.register(o),[o,t.register]);let a=e,i={ref:n,...t.props,id:o};return u({ourProps:i,theirProps:a,slot:t.slot||{},defaultTag:P,name:t.name||"Description"})});export{y as F,T as h,k,b as s};