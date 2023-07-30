import{r as u,R as c,b as be}from"./app.b9917e06.js";import{o as x,s as ae,C as w,y as E,a as U,u as k,O as N,T as V,$ as b,t as z,h as C,M as ye,b as K,e as $e,c as Pe,d as ie,S as re,I as A,f as Re,r as Te,m as Ce}from"./keyboard.36a7f5d3.js";import{h as W,s as Y,F as De,k as Fe}from"./description.2571d529.js";import{n as O,f as ue,s as ke,p as ne,L as Ae}from"./transition.a5983d67.js";function se(e,o){let t=u.exports.useRef([]),n=x(e);u.exports.useEffect(()=>{let r=[...t.current];for(let[i,l]of o.entries())if(t.current[i]!==l){let a=n(o,r);return t.current=o,a}},[n,...o])}function Se(e,o,t){let n=ae(o);u.exports.useEffect(()=>{function r(i){n.current(i)}return window.addEventListener(e,r,t),()=>window.removeEventListener(e,r,t)},[e,t])}var G=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(G||{});function Me(){let e=u.exports.useRef(0);return Se("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}function J(e,o,t,n){let r=ae(t);u.exports.useEffect(()=>{e=e!=null?e:window;function i(l){r.current(l)}return e.addEventListener(o,i,n),()=>e.removeEventListener(o,i,n)},[e,o,n])}let Le="div";var ce=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(ce||{});let F=Object.assign(w(function(e,o){let t=u.exports.useRef(null),n=E(t,o),{initialFocus:r,containers:i,features:l=30,...a}=e;U()||(l=1);let s=O(t);Oe({ownerDocument:s},Boolean(l&16));let d=Ie({ownerDocument:s,container:t,initialFocus:r},Boolean(l&2));Be({ownerDocument:s,container:t,containers:i,previousActiveElement:d},Boolean(l&8));let f=Me(),m=x(()=>{let y=t.current;!y||k(f.current,{[G.Forwards]:()=>N(y,V.First),[G.Backwards]:()=>N(y,V.Last)})}),I={ref:n};return c.createElement(c.Fragment,null,Boolean(l&4)&&c.createElement(W,{as:"button",type:"button",onFocus:m,features:Y.Focusable}),b({ourProps:I,theirProps:a,defaultTag:Le,name:"FocusTrap"}),Boolean(l&4)&&c.createElement(W,{as:"button",type:"button",onFocus:m,features:Y.Focusable}))}),{features:ce});function Oe({ownerDocument:e},o){let t=u.exports.useRef(null);J(e==null?void 0:e.defaultView,"focusout",r=>{!o||t.current||(t.current=r.target)},!0),se(()=>{o||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&C(t.current),t.current=null)},[o]);let n=u.exports.useRef(!1);u.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,z(()=>{!n.current||(C(t.current),t.current=null)})}),[])}function Ie({ownerDocument:e,container:o,initialFocus:t},n){let r=u.exports.useRef(null),i=ue();return se(()=>{if(!n)return;let l=o.current;!l||z(()=>{if(!i.current)return;let a=e==null?void 0:e.activeElement;if(t!=null&&t.current){if((t==null?void 0:t.current)===a){r.current=a;return}}else if(l.contains(a)){r.current=a;return}t!=null&&t.current?C(t.current):N(l,V.First)===ye.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.current=e==null?void 0:e.activeElement})},[n]),r}function Be({ownerDocument:e,container:o,containers:t,previousActiveElement:n},r){let i=ue();J(e==null?void 0:e.defaultView,"focus",l=>{if(!r||!i.current)return;let a=new Set(t==null?void 0:t.current);a.add(o);let s=n.current;if(!s)return;let d=l.target;d&&d instanceof HTMLElement?je(a,d)?(n.current=d,C(d)):(l.preventDefault(),l.stopPropagation(),C(s)):C(n.current)},!0)}function je(e,o){var t;for(let n of e)if((t=n.current)!=null&&t.contains(o))return!0;return!1}let T=new Set,h=new Map;function oe(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function le(e){let o=h.get(e);!o||(o["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",o["aria-hidden"]),e.inert=o.inert)}function Ne(e,o=!0){K(()=>{if(!o||!e.current)return;let t=e.current,n=$e(t);if(n){T.add(t);for(let r of h.keys())r.contains(t)&&(le(r),h.delete(r));return n.querySelectorAll("body > *").forEach(r=>{if(r instanceof HTMLElement){for(let i of T)if(r.contains(i))return;T.size===1&&(h.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),oe(r))}}),()=>{if(T.delete(t),T.size>0)n.querySelectorAll("body > *").forEach(r=>{if(r instanceof HTMLElement&&!h.has(r)){for(let i of T)if(r.contains(i))return;h.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),oe(r)}});else for(let r of h.keys())le(r),h.delete(r)}}},[o])}let de=u.exports.createContext(!1);function Ve(){return u.exports.useContext(de)}function H(e){return c.createElement(de.Provider,{value:e.force},e.children)}function We(e){let o=Ve(),t=u.exports.useContext(fe),n=O(e),[r,i]=u.exports.useState(()=>{if(!o&&t!==null||ie)return null;let l=n==null?void 0:n.getElementById("headlessui-portal-root");if(l)return l;if(n===null)return null;let a=n.createElement("div");return a.setAttribute("id","headlessui-portal-root"),n.body.appendChild(a)});return u.exports.useEffect(()=>{r!==null&&(n!=null&&n.body.contains(r)||n==null||n.body.appendChild(r))},[r,n]),u.exports.useEffect(()=>{o||t!==null&&i(t.current)},[t,i,o]),r}let Ye=u.exports.Fragment,Ge=w(function(e,o){let t=e,n=u.exports.useRef(null),r=E(Pe(f=>{n.current=f}),o),i=O(n),l=We(n),[a]=u.exports.useState(()=>{var f;return ie?null:(f=i==null?void 0:i.createElement("div"))!=null?f:null}),s=U(),d=u.exports.useRef(!1);return K(()=>{if(d.current=!1,!(!l||!a))return l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a)),()=>{d.current=!0,z(()=>{var f;!d.current||!l||!a||(l.removeChild(a),l.childNodes.length<=0&&((f=l.parentElement)==null||f.removeChild(l)))})}},[l,a]),s?!l||!a?null:be.exports.createPortal(b({ourProps:{ref:r},theirProps:t,defaultTag:Ye,name:"Portal"}),a):null}),He=u.exports.Fragment,fe=u.exports.createContext(null),_e=w(function(e,o){let{target:t,...n}=e,r={ref:E(o)};return c.createElement(fe.Provider,{value:t},b({ourProps:r,theirProps:n,defaultTag:He,name:"Popover.Group"}))}),_=Object.assign(Ge,{Group:_e}),Q=u.exports.createContext(()=>{});Q.displayName="StackContext";var q=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(q||{});function qe(){return u.exports.useContext(Q)}function Ue({children:e,onUpdate:o,type:t,element:n,enabled:r}){let i=qe(),l=x((...a)=>{o==null||o(...a),i(...a)});return K(()=>{let a=r===void 0||r===!0;return a&&l(0,t,n),()=>{a&&l(1,t,n)}},[l,t,n,r]),c.createElement(Q.Provider,{value:l},e)}function ze(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var Ke=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ke||{}),Je=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Je||{});let Qe={[0](e,o){return e.titleId===o.id?e:{...e,titleId:o.id}}},L=u.exports.createContext(null);L.displayName="DialogContext";function S(e){let o=u.exports.useContext(L);if(o===null){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return o}function Xe(e,o){u.exports.useEffect(()=>{var t;if(!o||!e)return;let n=Ce();function r(a,s,d){let f=a.style.getPropertyValue(s);return Object.assign(a.style,{[s]:d}),n.add(()=>{Object.assign(a.style,{[s]:f})})}let i=e.documentElement,l=((t=e.defaultView)!=null?t:window).innerWidth-i.clientWidth;if(r(i,"overflow","hidden"),l>0){let a=i.clientWidth-i.offsetWidth,s=l-a;r(i,"paddingRight",`${s}px`)}if(ze()){let a=window.pageYOffset;r(i,"position","fixed"),r(i,"marginTop",`-${a}px`),r(i,"width","100%"),n.add(()=>window.scrollTo(0,a))}return n.dispose},[e,o])}function Ze(e,o){return k(o.type,Qe,e,o)}let et="div",tt=re.RenderStrategy|re.Static,rt=w(function(e,o){let{open:t,onClose:n,initialFocus:r,__demoMode:i=!1,...l}=e,[a,s]=u.exports.useState(0),d=ke();t===void 0&&d!==null&&(t=k(d,{[ne.Open]:!0,[ne.Closed]:!1}));let f=u.exports.useRef(new Set),m=u.exports.useRef(null),I=E(m,o),y=u.exports.useRef(null),D=O(m),X=e.hasOwnProperty("open")||d!==null,Z=e.hasOwnProperty("onClose");if(!X&&!Z)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!X)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!Z)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof t!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${t}`);if(typeof n!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);let g=t?0:1,[$,pe]=u.exports.useReducer(Ze,{titleId:null,descriptionId:null,panelRef:u.exports.createRef()}),P=x(()=>n(!1)),ee=x(p=>pe({type:0,id:p})),B=U()?i?!1:g===0:!1,M=a>1,me=u.exports.useContext(L)!==null,ge=M?"parent":"leaf";Ne(m,M?B:!1),Ae(()=>{var p,R;return[...Array.from((p=D==null?void 0:D.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?p:[]).filter(v=>!(!(v instanceof HTMLElement)||v.contains(y.current)||$.panelRef.current&&v.contains($.panelRef.current))),(R=$.panelRef.current)!=null?R:m.current]},P,B&&!M),J(D==null?void 0:D.defaultView,"keydown",p=>{p.defaultPrevented||p.key===Re.Escape&&g===0&&(M||(p.preventDefault(),p.stopPropagation(),P()))}),Xe(D,g===0&&!me),u.exports.useEffect(()=>{if(g!==0||!m.current)return;let p=new IntersectionObserver(R=>{for(let v of R)v.boundingClientRect.x===0&&v.boundingClientRect.y===0&&v.boundingClientRect.width===0&&v.boundingClientRect.height===0&&P()});return p.observe(m.current),()=>p.disconnect()},[g,m,P]);let[ve,he]=Fe(),xe=`headlessui-dialog-${A()}`,we=u.exports.useMemo(()=>[{dialogState:g,close:P,setTitleId:ee},$],[g,$,P,ee]),te=u.exports.useMemo(()=>({open:g===0}),[g]),Ee={ref:I,id:xe,role:"dialog","aria-modal":g===0?!0:void 0,"aria-labelledby":$.titleId,"aria-describedby":ve};return c.createElement(Ue,{type:"Dialog",enabled:g===0,element:m,onUpdate:x((p,R,v)=>{R==="Dialog"&&k(p,{[q.Add](){f.current.add(v),s(j=>j+1)},[q.Remove](){f.current.add(v),s(j=>j-1)}})})},c.createElement(H,{force:!0},c.createElement(_,null,c.createElement(L.Provider,{value:we},c.createElement(_.Group,{target:m},c.createElement(H,{force:!1},c.createElement(he,{slot:te,name:"Dialog.Description"},c.createElement(F,{initialFocus:r,containers:f,features:B?k(ge,{parent:F.features.RestoreFocus,leaf:F.features.All&~F.features.FocusLock}):F.features.None},b({ourProps:Ee,theirProps:l,slot:te,defaultTag:et,features:tt,visible:g===0,name:"Dialog"})))))))),c.createElement(W,{features:Y.Hidden,ref:y}))}),nt="div",ot=w(function(e,o){let[{dialogState:t,close:n}]=S("Dialog.Overlay"),r=E(o),i=`headlessui-dialog-overlay-${A()}`,l=x(s=>{if(s.target===s.currentTarget){if(Te(s.currentTarget))return s.preventDefault();s.preventDefault(),s.stopPropagation(),n()}}),a=u.exports.useMemo(()=>({open:t===0}),[t]);return b({ourProps:{ref:r,id:i,"aria-hidden":!0,onClick:l},theirProps:e,slot:a,defaultTag:nt,name:"Dialog.Overlay"})}),lt="div",at=w(function(e,o){let[{dialogState:t},n]=S("Dialog.Backdrop"),r=E(o),i=`headlessui-dialog-backdrop-${A()}`;u.exports.useEffect(()=>{if(n.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[n.panelRef]);let l=u.exports.useMemo(()=>({open:t===0}),[t]);return c.createElement(H,{force:!0},c.createElement(_,null,b({ourProps:{ref:r,id:i,"aria-hidden":!0},theirProps:e,slot:l,defaultTag:lt,name:"Dialog.Backdrop"})))}),it="div",ut=w(function(e,o){let[{dialogState:t},n]=S("Dialog.Panel"),r=E(o,n.panelRef),i=`headlessui-dialog-panel-${A()}`,l=u.exports.useMemo(()=>({open:t===0}),[t]),a=x(s=>{s.stopPropagation()});return b({ourProps:{ref:r,id:i,onClick:a},theirProps:e,slot:l,defaultTag:it,name:"Dialog.Panel"})}),st="h2",ct=w(function(e,o){let[{dialogState:t,setTitleId:n}]=S("Dialog.Title"),r=`headlessui-dialog-title-${A()}`,i=E(o);u.exports.useEffect(()=>(n(r),()=>n(null)),[r,n]);let l=u.exports.useMemo(()=>({open:t===0}),[t]);return b({ourProps:{ref:i,id:r},theirProps:e,slot:l,defaultTag:st,name:"Dialog.Title"})}),gt=Object.assign(rt,{Backdrop:at,Panel:ut,Overlay:ot,Title:ct,Description:De});export{gt as g};