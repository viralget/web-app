import{C as u,$ as f,l as s}from"./transition.967ee8c1.js";import{r as d}from"./app.86d821d2.js";let c="div";var l=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(l||{});let m=u(function(e,r){let{features:t=1,...n}=e,o={ref:r,"aria-hidden":(t&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return f({ourProps:o,theirProps:n,slot:{},defaultTag:c,name:"Hidden"})});function p(e,r,t){let n=s(r);d.exports.useEffect(()=>{function o(i){n.current(i)}return window.addEventListener(e,o,t),()=>window.removeEventListener(e,o,t)},[e,t])}var w=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(w||{});function E(){let e=d.exports.useRef(0);return p("keydown",r=>{r.key==="Tab"&&(e.current=r.shiftKey?1:0)},!0),e}function x(e,r,t,n){let o=s(t);d.exports.useEffect(()=>{e=e!=null?e:window;function i(a){o.current(a)}return e.addEventListener(r,i,n),()=>e.removeEventListener(r,i,n)},[e,r,n])}export{x as E,w as a,m as h,E as n,l as s};
