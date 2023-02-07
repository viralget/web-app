import{r as a,R as w}from"./app.fa9ae017.js";const we=typeof window>"u"||typeof document>"u";let T=we?a.exports.useEffect:a.exports.useLayoutEffect;function P(e){let t=a.exports.useRef(e);return T(()=>{t.current=e},[e]),t}function He(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function $(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,o,u,i){return n.addEventListener(o,u,i),r.add(()=>n.removeEventListener(o,u,i))},requestAnimationFrame(...n){let o=requestAnimationFrame(...n);return r.add(()=>cancelAnimationFrame(o))},nextFrame(...n){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...n))},setTimeout(...n){let o=setTimeout(...n);return r.add(()=>clearTimeout(o))},microTask(...n){let o={current:!0};return He(()=>{o.current&&n[0]()}),r.add(()=>{o.current=!1})},add(n){return e.push(n),()=>{let o=e.indexOf(n);if(o>=0){let[u]=e.splice(o,1);u()}}},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return r}function Q(){let[e]=a.exports.useState($);return a.exports.useEffect(()=>()=>e.dispose(),[e]),e}let E=function(e){let t=P(e);return w.useCallback((...r)=>t.current(...r),[t])},Z={serverHandoffComplete:!1};function le(){let[e,t]=a.exports.useState(Z.serverHandoffComplete);return a.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),a.exports.useEffect(()=>{Z.serverHandoffComplete===!1&&(Z.serverHandoffComplete=!0)},[]),e}var xe;let Ue=0;function be(){return++Ue}let ce=(xe=w.useId)!=null?xe:function(){let e=le(),[t,r]=w.useState(e?be:null);return T(()=>{t===null&&r(be())},[t]),t!=null?""+t:void 0};function I(e,t,...r){if(e in t){let o=t[e];return typeof o=="function"?o(...r):o}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,I),n}function W(e){return we?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let ue=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var ie=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(ie||{}),qe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(qe||{}),Be=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Be||{});function Ie(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ue))}var de=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(de||{});function fe(e,t=0){var r;return e===((r=W(e))==null?void 0:r.body)?!1:I(t,{[0](){return e.matches(ue)},[1](){let n=e;for(;n!==null;){if(n.matches(ue))return!0;n=n.parentElement}return!1}})}function Se(e){let t=W(e);$().nextFrame(()=>{t&&!fe(t.activeElement,0)&&Qe(e)})}function Qe(e){e==null||e.focus({preventScroll:!0})}let We=["textarea","input"].join(",");function _e(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,We))!=null?r:!1}function Te(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),u=t(n);if(o===null||u===null)return 0;let i=o.compareDocumentPosition(u);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Ke(e,t){return Ve(Ie(),t,!0,e)}function Ve(e,t,r=!0,n=null){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?r?Te(e):e:Ie(e);n=n!=null?n:o.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(n))-1;if(t&4)return Math.max(0,u.indexOf(n))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},l=0,d=u.length,m;do{if(l>=d||l+d<=0)return 0;let v=s+l;if(t&16)v=(v+d)%d;else{if(v<0)return 3;if(v>=d)return 1}m=u[v],m==null||m.focus(p),l+=i}while(m!==o.activeElement);return t&6&&_e(m)&&m.select(),m.hasAttribute("tabindex")||m.setAttribute("tabindex","0"),2}function ee(e,t,r){let n=P(t);a.exports.useEffect(()=>{function o(u){n.current(u)}return document.addEventListener(e,o,r),()=>document.removeEventListener(e,o,r)},[e,r])}function Ge(e,t,r=!0){let n=a.exports.useRef(!1);a.exports.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function o(i,s){if(!n.current||i.defaultPrevented)return;let p=function d(m){return typeof m=="function"?d(m()):Array.isArray(m)||m instanceof Set?m:[m]}(e),l=s(i);if(l!==null&&!!l.getRootNode().contains(l)){for(let d of p){if(d===null)continue;let m=d instanceof HTMLElement?d:d.current;if(m!=null&&m.contains(l))return}return!fe(l,de.Loose)&&l.tabIndex!==-1&&i.preventDefault(),t(i,l)}}let u=a.exports.useRef(null);ee("mousedown",i=>{var s,p;n.current&&(u.current=((p=(s=i.composedPath)==null?void 0:s.call(i))==null?void 0:p[0])||i.target)},!0),ee("click",i=>{!u.current||(o(i,()=>u.current),u.current=null)},!0),ee("blur",i=>o(i,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ge(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function ze(e,t){let[r,n]=a.exports.useState(()=>ge(e));return T(()=>{n(ge(e))},[e.type,e.as]),T(()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[r,t]),r}let Re=Symbol();function Ot(e,t=!0){return Object.assign(e,{[Re]:t})}function M(...e){let t=a.exports.useRef(e);a.exports.useEffect(()=>{t.current=e},[e]);let r=E(n=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(n):o.current=n)});return e.every(n=>n==null||(n==null?void 0:n[Re]))?void 0:r}function Je({container:e,accept:t,walk:r,enabled:n=!0}){let o=a.exports.useRef(t),u=a.exports.useRef(r);a.exports.useEffect(()=>{o.current=t,u.current=r},[t,r]),T(()=>{if(!e||!n)return;let i=W(e);if(!i)return;let s=o.current,p=u.current,l=Object.assign(m=>s(m),{acceptNode:s}),d=i.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;d.nextNode();)p(d.currentNode)},[e,n,o,u])}function Ye(e){throw new Error("Unexpected object: "+e)}var R=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(R||{});function Xe(e,t){let r=t.resolveItems();if(r.length<=0)return null;let n=t.resolveActiveIndex(),o=n!=null?n:-1,u=(()=>{switch(e.focus){case 0:return r.findIndex(i=>!t.resolveDisabled(i));case 1:{let i=r.slice().reverse().findIndex((s,p,l)=>o!==-1&&l.length-p-1>=o?!1:!t.resolveDisabled(s));return i===-1?i:r.length-1-i}case 2:return r.findIndex((i,s)=>s<=o?!1:!t.resolveDisabled(i));case 3:{let i=r.slice().reverse().findIndex(s=>!t.resolveDisabled(s));return i===-1?i:r.length-1-i}case 4:return r.findIndex(i=>t.resolveId(i)===e.id);case 5:return null;default:Ye(e)}})();return u===-1?n:u}var B=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(B||{}),F=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(F||{});function D({ourProps:e,theirProps:t,slot:r,defaultTag:n,features:o,visible:u=!0,name:i}){let s=Fe(t,e);if(u)return q(s,r,n,i);let p=o!=null?o:0;if(p&2){let{static:l=!1,...d}=s;if(l)return q(d,r,n,i)}if(p&1){let{unmount:l=!0,...d}=s;return I(l?0:1,{[0](){return null},[1](){return q({...d,hidden:!0,style:{display:"none"}},r,n,i)}})}return q(s,r,n,i)}function q(e,t={},r,n){let{as:o=r,children:u,refName:i="ref",...s}=te(e,["unmount","static"]),p=e.ref!==void 0?{[i]:e.ref}:{},l=typeof u=="function"?u(t):u;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let m=!1,v=[];for(let[h,c]of Object.entries(t))typeof c=="boolean"&&(m=!0),c===!0&&v.push(h);m&&(d["data-headlessui-state"]=v.join(" "))}if(o===a.exports.Fragment&&Object.keys(Ee(s)).length>0){if(!a.exports.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));return a.exports.cloneElement(l,Object.assign({},Fe(l.props,Ee(te(s,["ref"]))),d,p,Ze(l.ref,p.ref)))}return a.exports.createElement(o,Object.assign({},te(s,["ref"]),o!==a.exports.Fragment&&p,o!==a.exports.Fragment&&d),l)}function Ze(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function Fe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let o in n)o.startsWith("on")&&typeof n[o]=="function"?(r[o]!=null||(r[o]=[]),r[o].push(n[o])):t[o]=n[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](o,...u){let i=r[n];for(let s of i){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;s(o,...u)}}});return t}function N(e){var t;return Object.assign(a.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Ee(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function te(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function et(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=(t==null?void 0:t.getAttribute("disabled"))==="";return n&&tt(r)?!1:n}function tt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let rt="div";var nt=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(nt||{});let Dt=N(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return D({ourProps:o,theirProps:n,slot:{},defaultTag:rt,name:"Hidden"})}),pe=a.exports.createContext(null);pe.displayName="OpenClosedContext";var C=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(C||{});function me(){return a.exports.useContext(pe)}function Pe({value:e,children:t}){return w.createElement(pe.Provider,{value:e},t)}var y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(y||{});function ot(e,t,r){let n=P(t);a.exports.useEffect(()=>{function o(u){n.current(u)}return window.addEventListener(e,o,r),()=>window.removeEventListener(e,o,r)},[e,r])}var ut=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ut||{});function Mt(){let e=a.exports.useRef(0);return ot("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Le(){let e=a.exports.useRef(!1);return T(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function it(...e){return a.exports.useMemo(()=>W(...e),[...e])}function kt(e,t,r,n){let o=P(r);a.exports.useEffect(()=>{e=e!=null?e:window;function u(i){o.current(i)}return e.addEventListener(t,u,n),()=>e.removeEventListener(t,u,n)},[e,t,n])}var st=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(st||{}),at=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(at||{}),lt=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(lt||{});function re(e,t=r=>r){let r=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,n=Te(t(e.items.slice()),u=>u.dataRef.current.domRef.current),o=r?n.indexOf(r):null;return o===-1&&(o=null),{items:n,activeItemIndex:o}}let ct={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,t)=>{var r;let n=re(e),o=Xe(t,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...e,...n,searchQuery:"",activeItemIndex:o,activationTrigger:(r=t.trigger)!=null?r:1}},[3]:(e,t)=>{let r=e.searchQuery!==""?0:1,n=e.searchQuery+t.value.toLowerCase(),o=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+r).concat(e.items.slice(0,e.activeItemIndex+r)):e.items).find(i=>{var s;return((s=i.dataRef.current.textValue)==null?void 0:s.startsWith(n))&&!i.dataRef.current.disabled}),u=o?e.items.indexOf(o):-1;return u===-1||u===e.activeItemIndex?{...e,searchQuery:n}:{...e,searchQuery:n,activeItemIndex:u,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,t)=>{let r=re(e,n=>[...n,{id:t.id,dataRef:t.dataRef}]);return{...e,...r}},[6]:(e,t)=>{let r=re(e,n=>{let o=n.findIndex(u=>u.id===t.id);return o!==-1&&n.splice(o,1),n});return{...e,...r,activationTrigger:1}}},ve=a.exports.createContext(null);ve.displayName="MenuContext";function _(e){let t=a.exports.useContext(ve);if(t===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,_),r}return t}function dt(e,t){return I(t.type,ct,e,t)}let ft=a.exports.Fragment,pt=N(function(e,t){let r=a.exports.useReducer(dt,{menuState:1,buttonRef:a.exports.createRef(),itemsRef:a.exports.createRef(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:n,itemsRef:o,buttonRef:u},i]=r,s=M(t);Ge([u,o],(v,h)=>{var c;i({type:1}),fe(h,de.Loose)||(v.preventDefault(),(c=u.current)==null||c.focus())},n===0);let p=E(()=>{i({type:1})}),l=a.exports.useMemo(()=>({open:n===0,close:p}),[n,p]),d=e,m={ref:s};return w.createElement(ve.Provider,{value:r},w.createElement(Pe,{value:I(n,{[0]:C.Open,[1]:C.Closed})},D({ourProps:m,theirProps:d,slot:l,defaultTag:ft,name:"Menu"})))}),mt="button",vt=N(function(e,t){var r;let[n,o]=_("Menu.Button"),u=M(n.buttonRef,t),i=`headlessui-menu-button-${ce()}`,s=Q(),p=E(c=>{switch(c.key){case y.Space:case y.Enter:case y.ArrowDown:c.preventDefault(),c.stopPropagation(),o({type:0}),s.nextFrame(()=>o({type:2,focus:R.First}));break;case y.ArrowUp:c.preventDefault(),c.stopPropagation(),o({type:0}),s.nextFrame(()=>o({type:2,focus:R.Last}));break}}),l=E(c=>{switch(c.key){case y.Space:c.preventDefault();break}}),d=E(c=>{if(et(c.currentTarget))return c.preventDefault();e.disabled||(n.menuState===0?(o({type:1}),s.nextFrame(()=>{var b;return(b=n.buttonRef.current)==null?void 0:b.focus({preventScroll:!0})})):(c.preventDefault(),o({type:0})))}),m=a.exports.useMemo(()=>({open:n.menuState===0}),[n]),v=e,h={ref:u,id:i,type:ze(e,n.buttonRef),"aria-haspopup":!0,"aria-controls":(r=n.itemsRef.current)==null?void 0:r.id,"aria-expanded":e.disabled?void 0:n.menuState===0,onKeyDown:p,onKeyUp:l,onClick:d};return D({ourProps:h,theirProps:v,slot:m,defaultTag:mt,name:"Menu.Button"})}),ht="div",xt=B.RenderStrategy|B.Static,bt=N(function(e,t){var r,n;let[o,u]=_("Menu.Items"),i=M(o.itemsRef,t),s=it(o.itemsRef),p=`headlessui-menu-items-${ce()}`,l=Q(),d=me(),m=(()=>d!==null?d===C.Open:o.menuState===0)();a.exports.useEffect(()=>{let f=o.itemsRef.current;!f||o.menuState===0&&f!==(s==null?void 0:s.activeElement)&&f.focus({preventScroll:!0})},[o.menuState,o.itemsRef,s]),Je({container:o.itemsRef.current,enabled:o.menuState===0,accept(f){return f.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:f.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(f){f.setAttribute("role","none")}});let v=E(f=>{var g,A;switch(l.dispose(),f.key){case y.Space:if(o.searchQuery!=="")return f.preventDefault(),f.stopPropagation(),u({type:3,value:f.key});case y.Enter:if(f.preventDefault(),f.stopPropagation(),u({type:1}),o.activeItemIndex!==null){let{dataRef:S}=o.items[o.activeItemIndex];(A=(g=S.current)==null?void 0:g.domRef.current)==null||A.click()}Se(o.buttonRef.current);break;case y.ArrowDown:return f.preventDefault(),f.stopPropagation(),u({type:2,focus:R.Next});case y.ArrowUp:return f.preventDefault(),f.stopPropagation(),u({type:2,focus:R.Previous});case y.Home:case y.PageUp:return f.preventDefault(),f.stopPropagation(),u({type:2,focus:R.First});case y.End:case y.PageDown:return f.preventDefault(),f.stopPropagation(),u({type:2,focus:R.Last});case y.Escape:f.preventDefault(),f.stopPropagation(),u({type:1}),$().nextFrame(()=>{var S;return(S=o.buttonRef.current)==null?void 0:S.focus({preventScroll:!0})});break;case y.Tab:f.preventDefault(),f.stopPropagation(),u({type:1}),$().nextFrame(()=>{Ke(o.buttonRef.current,f.shiftKey?ie.Previous:ie.Next)});break;default:f.key.length===1&&(u({type:3,value:f.key}),l.setTimeout(()=>u({type:4}),350));break}}),h=E(f=>{switch(f.key){case y.Space:f.preventDefault();break}}),c=a.exports.useMemo(()=>({open:o.menuState===0}),[o]),b=e,x={"aria-activedescendant":o.activeItemIndex===null||(r=o.items[o.activeItemIndex])==null?void 0:r.id,"aria-labelledby":(n=o.buttonRef.current)==null?void 0:n.id,id:p,onKeyDown:v,onKeyUp:h,role:"menu",tabIndex:0,ref:i};return D({ourProps:x,theirProps:b,slot:c,defaultTag:ht,features:xt,visible:m,name:"Menu.Items"})}),gt=a.exports.Fragment,Et=N(function(e,t){let{disabled:r=!1,...n}=e,[o,u]=_("Menu.Item"),i=`headlessui-menu-item-${ce()}`,s=o.activeItemIndex!==null?o.items[o.activeItemIndex].id===i:!1,p=a.exports.useRef(null),l=M(t,p);T(()=>{if(o.menuState!==0||!s||o.activationTrigger===0)return;let f=$();return f.requestAnimationFrame(()=>{var g,A;(A=(g=p.current)==null?void 0:g.scrollIntoView)==null||A.call(g,{block:"nearest"})}),f.dispose},[p,s,o.menuState,o.activationTrigger,o.activeItemIndex]);let d=a.exports.useRef({disabled:r,domRef:p});T(()=>{d.current.disabled=r},[d,r]),T(()=>{var f,g;d.current.textValue=(g=(f=p.current)==null?void 0:f.textContent)==null?void 0:g.toLowerCase()},[d,p]),T(()=>(u({type:5,id:i,dataRef:d}),()=>u({type:6,id:i})),[d,i]);let m=E(()=>{u({type:1})}),v=E(f=>{if(r)return f.preventDefault();u({type:1}),Se(o.buttonRef.current)}),h=E(()=>{if(r)return u({type:2,focus:R.Nothing});u({type:2,focus:R.Specific,id:i})}),c=E(()=>{r||s||u({type:2,focus:R.Specific,id:i,trigger:0})}),b=E(()=>{r||!s||u({type:2,focus:R.Nothing})}),x=a.exports.useMemo(()=>({active:s,disabled:r,close:m}),[s,r,m]);return D({ourProps:{id:i,ref:l,role:"menuitem",tabIndex:r===!0?void 0:-1,"aria-disabled":r===!0?!0:void 0,disabled:void 0,onClick:v,onFocus:h,onPointerMove:c,onMouseMove:c,onPointerLeave:b,onMouseLeave:b},theirProps:n,slot:x,defaultTag:gt,name:"Menu.Item"})}),jt=Object.assign(pt,{Button:vt,Items:bt,Item:Et});function yt(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function ne(e,...t){e&&t.length>0&&e.classList.add(...t)}function oe(e,...t){e&&t.length>0&&e.classList.remove(...t)}var se=(e=>(e.Ended="ended",e.Cancelled="cancelled",e))(se||{});function wt(e,t){let r=$();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:o}=getComputedStyle(e),[u,i]=[n,o].map(s=>{let[p=0]=s.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,d)=>d-l);return p});if(u+i!==0){let s=[];s.push(r.addEventListener(e,"transitionrun",p=>{p.target===p.currentTarget&&(s.splice(0).forEach(l=>l()),s.push(r.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(t("ended"),s.splice(0).forEach(d=>d()))}),r.addEventListener(e,"transitioncancel",l=>{l.target===l.currentTarget&&(t("cancelled"),s.splice(0).forEach(d=>d()))})))}))}else t("ended");return r.add(()=>t("cancelled")),r.dispose}function It(e,t,r,n){let o=r?"enter":"leave",u=$(),i=n!==void 0?yt(n):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=I(o,{enter:()=>t.enter,leave:()=>t.leave}),p=I(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=I(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return oe(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),ne(e,...s,...l),u.nextFrame(()=>{oe(e,...l),ne(e,...p),wt(e,d=>(d==="ended"&&(oe(e,...s),ne(e,...t.entered)),i(d)))}),u.dispose}function St({container:e,direction:t,classes:r,onStart:n,onStop:o}){let u=Le(),i=Q(),s=P(t);T(()=>{let p=$();i.add(p.dispose);let l=e.current;if(!!l&&s.current!=="idle"&&!!u.current)return p.dispose(),n.current(s.current),p.add(It(l,r.current,s.current==="enter",d=>{p.dispose(),I(d,{[se.Ended](){o.current(s.current)},[se.Cancelled]:()=>{}})})),p.dispose},[t])}function O(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let K=a.exports.createContext(null);K.displayName="TransitionContext";var Tt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Tt||{});function Rt(){let e=a.exports.useContext(K);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ft(){let e=a.exports.useContext(V);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let V=a.exports.createContext(null);V.displayName="NestingContext";function G(e){return"children"in e?G(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function $e(e,t){let r=P(e),n=a.exports.useRef([]),o=Le(),u=Q(),i=E((h,c=F.Hidden)=>{let b=n.current.findIndex(({el:x})=>x===h);b!==-1&&(I(c,{[F.Unmount](){n.current.splice(b,1)},[F.Hidden](){n.current[b].state="hidden"}}),u.microTask(()=>{var x;!G(n)&&o.current&&((x=r.current)==null||x.call(r))}))}),s=E(h=>{let c=n.current.find(({el:b})=>b===h);return c?c.state!=="visible"&&(c.state="visible"):n.current.push({el:h,state:"visible"}),()=>i(h,F.Unmount)}),p=a.exports.useRef([]),l=a.exports.useRef(Promise.resolve()),d=a.exports.useRef({enter:[],leave:[],idle:[]}),m=E((h,c,b)=>{p.current.splice(0),t&&(t.chains.current[c]=t.chains.current[c].filter(([x])=>x!==h)),t==null||t.chains.current[c].push([h,new Promise(x=>{p.current.push(x)})]),t==null||t.chains.current[c].push([h,new Promise(x=>{Promise.all(d.current[c].map(([f,g])=>g)).then(()=>x())})]),c==="enter"?l.current=l.current.then(()=>t==null?void 0:t.wait.current).then(()=>b(c)):b(c)}),v=E((h,c,b)=>{Promise.all(d.current[c].splice(0).map(([x,f])=>f)).then(()=>{var x;(x=p.current.shift())==null||x()}).then(()=>b(c))});return a.exports.useMemo(()=>({children:n,register:s,unregister:i,onStart:m,onStop:v,wait:l,chains:d}),[s,i,n,m,v,d,l])}function Pt(){}let Lt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ye(e){var t;let r={};for(let n of Lt)r[n]=(t=e[n])!=null?t:Pt;return r}function $t(e){let t=a.exports.useRef(ye(e));return a.exports.useEffect(()=>{t.current=ye(e)},[e]),t}let Ct="div",Ce=B.RenderStrategy,Ne=N(function(e,t){let{beforeEnter:r,afterEnter:n,beforeLeave:o,afterLeave:u,enter:i,enterFrom:s,enterTo:p,entered:l,leave:d,leaveFrom:m,leaveTo:v,...h}=e,c=a.exports.useRef(null),b=M(c,t),x=h.unmount?F.Unmount:F.Hidden,{show:f,appear:g,initial:A}=Rt(),[S,z]=a.exports.useState(f?"visible":"hidden"),he=Ft(),{register:k,unregister:j}=he,J=a.exports.useRef(null);a.exports.useEffect(()=>k(c),[k,c]),a.exports.useEffect(()=>{if(x===F.Hidden&&!!c.current){if(f&&S!=="visible"){z("visible");return}return I(S,{hidden:()=>j(c),visible:()=>k(c)})}},[S,c,k,j,f,x]);let Ae=P({enter:O(i),enterFrom:O(s),enterTo:O(p),entered:O(l),leave:O(d),leaveFrom:O(m),leaveTo:O(v)}),H=$t({beforeEnter:r,afterEnter:n,beforeLeave:o,afterLeave:u}),Y=le();a.exports.useEffect(()=>{if(Y&&S==="visible"&&c.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[c,S,Y]);let X=A&&!g,Oe=(()=>!Y||X||J.current===f?"idle":f?"enter":"leave")(),De=E(L=>I(L,{enter:()=>H.current.beforeEnter(),leave:()=>H.current.beforeLeave(),idle:()=>{}})),Me=E(L=>I(L,{enter:()=>H.current.afterEnter(),leave:()=>H.current.afterLeave(),idle:()=>{}})),U=$e(()=>{z("hidden"),j(c)},he);St({container:c,classes:Ae,direction:Oe,onStart:P(L=>{U.onStart(c,L,De)}),onStop:P(L=>{U.onStop(c,L,Me),L==="leave"&&!G(U)&&(z("hidden"),j(c))})}),a.exports.useEffect(()=>{!X||(x===F.Hidden?J.current=null:J.current=f)},[f,X,S]);let ke=h,je={ref:b};return w.createElement(V.Provider,{value:U},w.createElement(Pe,{value:I(S,{visible:C.Open,hidden:C.Closed})},D({ourProps:je,theirProps:ke,defaultTag:Ct,features:Ce,visible:S==="visible",name:"Transition.Child"})))}),ae=N(function(e,t){let{show:r,appear:n=!1,unmount:o,...u}=e,i=a.exports.useRef(null),s=M(i,t);le();let p=me();if(r===void 0&&p!==null&&(r=I(p,{[C.Open]:!0,[C.Closed]:!1})),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,d]=a.exports.useState(r?"visible":"hidden"),m=$e(()=>{d("hidden")}),[v,h]=a.exports.useState(!0),c=a.exports.useRef([r]);T(()=>{v!==!1&&c.current[c.current.length-1]!==r&&(c.current.push(r),h(!1))},[c,r]);let b=a.exports.useMemo(()=>({show:r,appear:n,initial:v}),[r,n,v]);a.exports.useEffect(()=>{if(r)d("visible");else if(!G(m))d("hidden");else{let f=i.current;if(!f)return;let g=f.getBoundingClientRect();g.x===0&&g.y===0&&g.width===0&&g.height===0&&d("hidden")}},[r,m]);let x={unmount:o};return w.createElement(V.Provider,{value:m},w.createElement(K.Provider,{value:b},D({ourProps:{...x,as:a.exports.Fragment,children:w.createElement(Ne,{ref:s,...x,...u})},theirProps:{},defaultTag:a.exports.Fragment,features:Ce,visible:l==="visible",name:"Transition"})))}),Nt=N(function(e,t){let r=a.exports.useContext(K)!==null,n=me()!==null;return w.createElement(w.Fragment,null,!r&&n?w.createElement(ae,{ref:t,...e}):w.createElement(Ne,{ref:t,...e}))}),Ht=Object.assign(ae,{Child:Nt,Root:ae});export{D as $,Te as A,N as C,kt as E,fe as F,ce as I,Ge as L,qe as M,de as N,Ve as O,B as S,Ot as T,Ht as W,Pe as a,y as b,Mt as c,Ie as d,nt as e,me as f,ie as g,Dt as h,W as i,ut as j,le as k,Le as l,Qe as m,it as n,E as o,C as p,jt as q,et as r,ze as s,He as t,I as u,T as v,we as w,$ as x,M as y,P as z};
