import{r as a,R as C,L as ae}from"./app.996d016e.js";import{C as V,I as G,y as H,b as ue,n as z,j as te,o as b,L as se,F as pe,N as ie,k as ce,u as K,p as j,$ as W,g as R,r as oe,l as ve,S as q,d as ne,O as L,T as N,e as de}from"./transition.a592a82d.js";import{E as fe,n as re,h as U,a as _,s as A}from"./use-event-listener.ba5db124.js";var Pe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Pe||{}),me=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(me||{});let be={[0]:e=>({...e,popoverState:K(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,r){return e.button===r.button?e:{...e,button:r.button}},[3](e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},[4](e,r){return e.panel===r.panel?e:{...e,panel:r.panel}},[5](e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},J=a.exports.createContext(null);J.displayName="PopoverContext";function Q(e){let r=a.exports.useContext(J);if(r===null){let o=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Q),o}return r}let X=a.exports.createContext(null);X.displayName="PopoverAPIContext";function Y(e){let r=a.exports.useContext(X);if(r===null){let o=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Y),o}return r}let Z=a.exports.createContext(null);Z.displayName="PopoverGroupContext";function le(){return a.exports.useContext(Z)}let ee=a.exports.createContext(null);ee.displayName="PopoverPanelContext";function Se(){return a.exports.useContext(ee)}function xe(e,r){return K(r.type,be,e,r)}let ye="div",Ee=V(function(e,r){var o;let P=`headlessui-popover-button-${G()}`,l=`headlessui-popover-panel-${G()}`,c=a.exports.useRef(null),E=H(r,ue(t=>{c.current=t})),$=a.exports.useReducer(xe,{popoverState:1,button:null,buttonId:P,panel:null,panelId:l,beforePanelSentinel:a.exports.createRef(),afterPanelSentinel:a.exports.createRef()}),[{popoverState:d,button:s,panel:n,beforePanelSentinel:F,afterPanelSentinel:h},m]=$,p=z((o=c.current)!=null?o:s);a.exports.useEffect(()=>m({type:3,buttonId:P}),[P,m]),a.exports.useEffect(()=>m({type:5,panelId:l}),[l,m]);let v=a.exports.useMemo(()=>{if(!s||!n)return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D==null?void 0:D.contains(s))^Number(D==null?void 0:D.contains(n)))return!0;let t=te(),u=t.indexOf(s),f=(u+t.length-1)%t.length,k=(u+1)%t.length,w=t[f],M=t[k];return!n.contains(w)&&!n.contains(M)},[s,n]),S=a.exports.useMemo(()=>({buttonId:P,panelId:l,close:()=>m({type:1})}),[P,l,m]),x=le(),g=x==null?void 0:x.registerPopover,B=b(()=>{var t;return(t=x==null?void 0:x.isFocusWithinPopoverGroup())!=null?t:(p==null?void 0:p.activeElement)&&((s==null?void 0:s.contains(p.activeElement))||(n==null?void 0:n.contains(p.activeElement)))});a.exports.useEffect(()=>g==null?void 0:g(S),[g,S]),fe(p==null?void 0:p.defaultView,"focus",t=>{var u,f,k,w;d===0&&(B()||!s||!n||(f=(u=F.current)==null?void 0:u.contains)!=null&&f.call(u,t.target)||(w=(k=h.current)==null?void 0:k.contains)!=null&&w.call(k,t.target)||m({type:1}))},!0),se([s,n],(t,u)=>{m({type:1}),pe(u,ie.Loose)||(t.preventDefault(),s==null||s.focus())},d===0);let T=b(t=>{m({type:1});let u=(()=>t?t instanceof HTMLElement?t:"current"in t&&t.current instanceof HTMLElement?t.current:s:s)();u==null||u.focus()}),i=a.exports.useMemo(()=>({close:T,isPortalled:v}),[T,v]),I=a.exports.useMemo(()=>({open:d===0,close:T}),[d,T]),y=e,O={ref:E};return C.createElement(J.Provider,{value:$},C.createElement(X.Provider,{value:i},C.createElement(ce,{value:K(d,{[0]:j.Open,[1]:j.Closed})},W({ourProps:O,theirProps:y,slot:I,defaultTag:ye,name:"Popover"}))))}),$e="button",ge=V(function(e,r){let[o,P]=Q("Popover.Button"),{isPortalled:l}=Y("Popover.Button"),c=a.exports.useRef(null),E=`headlessui-focus-sentinel-${G()}`,$=le(),d=$==null?void 0:$.closeOthers,s=Se(),n=s===null?!1:s===o.panelId,F=H(c,r,n?null:t=>t&&P({type:2,button:t})),h=H(c,r),m=z(c),p=b(t=>{var u,f,k;if(n){if(o.popoverState===1)return;switch(t.key){case R.Space:case R.Enter:t.preventDefault(),(f=(u=t.target).click)==null||f.call(u),P({type:1}),(k=o.button)==null||k.focus();break}}else switch(t.key){case R.Space:case R.Enter:t.preventDefault(),t.stopPropagation(),o.popoverState===1&&(d==null||d(o.buttonId)),P({type:0});break;case R.Escape:if(o.popoverState!==0)return d==null?void 0:d(o.buttonId);if(!c.current||(m==null?void 0:m.activeElement)&&!c.current.contains(m.activeElement))return;t.preventDefault(),t.stopPropagation(),P({type:1});break}}),v=b(t=>{n||t.key===R.Space&&t.preventDefault()}),S=b(t=>{var u,f;oe(t.currentTarget)||e.disabled||(n?(P({type:1}),(u=o.button)==null||u.focus()):(t.preventDefault(),t.stopPropagation(),o.popoverState===1&&(d==null||d(o.buttonId)),P({type:0}),(f=o.button)==null||f.focus()))}),x=b(t=>{t.preventDefault(),t.stopPropagation()}),g=o.popoverState===0,B=a.exports.useMemo(()=>({open:g}),[g]),T=ve(e,c),i=e,I=n?{ref:h,type:T,onKeyDown:p,onClick:S}:{ref:F,id:o.buttonId,type:T,"aria-expanded":e.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:p,onKeyUp:v,onClick:S,onMouseDown:x},y=re(),O=b(()=>{let t=o.panel;if(!t)return;function u(){K(y.current,{[A.Forwards]:()=>L(t,N.First),[A.Backwards]:()=>L(t,N.Last)})}u()});return C.createElement(C.Fragment,null,W({ourProps:I,theirProps:i,slot:B,defaultTag:$e,name:"Popover.Button"}),g&&!n&&l&&C.createElement(U,{id:E,features:_.Focusable,as:"button",type:"button",onFocus:O}))}),Ie="div",he=q.RenderStrategy|q.Static,Ce=V(function(e,r){let[{popoverState:o},P]=Q("Popover.Overlay"),l=H(r),c=`headlessui-popover-overlay-${G()}`,E=ne(),$=(()=>E!==null?E===j.Open:o===0)(),d=b(n=>{if(oe(n.currentTarget))return n.preventDefault();P({type:1})}),s=a.exports.useMemo(()=>({open:o===0}),[o]);return W({ourProps:{ref:l,id:c,"aria-hidden":!0,onClick:d},theirProps:e,slot:s,defaultTag:Ie,features:he,visible:$,name:"Popover.Overlay"})}),ke="div",Te=q.RenderStrategy|q.Static,Oe=V(function(e,r){let{focus:o=!1,...P}=e,[l,c]=Q("Popover.Panel"),{close:E,isPortalled:$}=Y("Popover.Panel"),d=`headlessui-focus-sentinel-before-${G()}`,s=`headlessui-focus-sentinel-after-${G()}`,n=a.exports.useRef(null),F=H(n,r,i=>{c({type:4,panel:i})}),h=z(n),m=ne(),p=(()=>m!==null?m===j.Open:l.popoverState===0)(),v=b(i=>{var I;switch(i.key){case R.Escape:if(l.popoverState!==0||!n.current||(h==null?void 0:h.activeElement)&&!n.current.contains(h.activeElement))return;i.preventDefault(),i.stopPropagation(),c({type:1}),(I=l.button)==null||I.focus();break}});a.exports.useEffect(()=>{var i;e.static||l.popoverState===1&&((i=e.unmount)!=null?i:!0)&&c({type:4,panel:null})},[l.popoverState,e.unmount,e.static,c]),a.exports.useEffect(()=>{if(!o||l.popoverState!==0||!n.current)return;let i=h==null?void 0:h.activeElement;n.current.contains(i)||L(n.current,N.First)},[o,n,l.popoverState]);let S=a.exports.useMemo(()=>({open:l.popoverState===0,close:E}),[l,E]),x={ref:F,id:l.panelId,onKeyDown:v,onBlur:o&&l.popoverState===0?i=>{var I,y,O,t,u;let f=i.relatedTarget;!f||!n.current||(I=n.current)!=null&&I.contains(f)||(c({type:1}),(((O=(y=l.beforePanelSentinel.current)==null?void 0:y.contains)==null?void 0:O.call(y,f))||((u=(t=l.afterPanelSentinel.current)==null?void 0:t.contains)==null?void 0:u.call(t,f)))&&f.focus({preventScroll:!0}))}:void 0,tabIndex:-1},g=re(),B=b(()=>{let i=n.current;if(!i)return;function I(){K(g.current,{[A.Forwards]:()=>{L(i,N.First)},[A.Backwards]:()=>{var y;(y=l.button)==null||y.focus({preventScroll:!0})}})}I()}),T=b(()=>{let i=n.current;if(!i)return;function I(){K(g.current,{[A.Forwards]:()=>{var y,O,t;if(!l.button)return;let u=te(),f=u.indexOf(l.button),k=u.slice(0,f+1),w=[...u.slice(f+1),...k];for(let M of w.slice())if(((O=(y=M==null?void 0:M.id)==null?void 0:y.startsWith)==null?void 0:O.call(y,"headlessui-focus-sentinel-"))||((t=l.panel)==null?void 0:t.contains(M))){let D=w.indexOf(M);D!==-1&&w.splice(D,1)}L(w,N.First,!1)},[A.Backwards]:()=>L(i,N.Last)})}I()});return C.createElement(ee.Provider,{value:l.panelId},p&&$&&C.createElement(U,{id:d,ref:l.beforePanelSentinel,features:_.Focusable,as:"button",type:"button",onFocus:B}),W({ourProps:x,theirProps:P,slot:S,defaultTag:ke,features:Te,visible:p,name:"Popover.Panel"}),p&&$&&C.createElement(U,{id:s,ref:l.afterPanelSentinel,features:_.Focusable,as:"button",type:"button",onFocus:T}))}),we="div",Be=V(function(e,r){let o=a.exports.useRef(null),P=H(o,r),[l,c]=a.exports.useState([]),E=b(p=>{c(v=>{let S=v.indexOf(p);if(S!==-1){let x=v.slice();return x.splice(S,1),x}return v})}),$=b(p=>(c(v=>[...v,p]),()=>E(p))),d=b(()=>{var p;let v=de(o);if(!v)return!1;let S=v.activeElement;return(p=o.current)!=null&&p.contains(S)?!0:l.some(x=>{var g,B;return((g=v.getElementById(x.buttonId))==null?void 0:g.contains(S))||((B=v.getElementById(x.panelId))==null?void 0:B.contains(S))})}),s=b(p=>{for(let v of l)v.buttonId!==p&&v.close()}),n=a.exports.useMemo(()=>({registerPopover:$,unregisterPopover:E,isFocusWithinPopoverGroup:d,closeOthers:s}),[$,E,d,s]),F=a.exports.useMemo(()=>({}),[]),h=e,m={ref:P};return C.createElement(Z.Provider,{value:n},W({ourProps:m,theirProps:h,slot:F,defaultTag:we,name:"Popover.Group"}))}),Me=Object.assign(Ee,{Button:ge,Overlay:Ce,Panel:Oe,Group:Be});function Le({href:e,children:r}){return C.createElement(ae,{href:e,className:"inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"},r)}export{Le as N,Me as m};
