import{r as a,R as I,L as te}from"./app.f189a042.js";import{C as j,I as G,y as H,T as ue,n as z,d as oe,o as x,L as se,F as ie,N as pe,a as ce,u as K,p as W,$ as V,b as R,r as ne,s as ve,S as q,c as re,O as L,e as N,f as de}from"./transition.51d39479.js";import{E as fe,n as le,h as U,s as _,a as A}from"./use-event-listener.62720cc9.js";import{c as be}from"./helpers.a1938207.js";var me=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(me||{}),xe=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(xe||{});let Pe={[0]:e=>({...e,popoverState:K(e.popoverState,{[0]:1,[1]:0})}),[1](e){return e.popoverState===1?e:{...e,popoverState:1}},[2](e,r){return e.button===r.button?e:{...e,button:r.button}},[3](e,r){return e.buttonId===r.buttonId?e:{...e,buttonId:r.buttonId}},[4](e,r){return e.panel===r.panel?e:{...e,panel:r.panel}},[5](e,r){return e.panelId===r.panelId?e:{...e,panelId:r.panelId}}},J=a.exports.createContext(null);J.displayName="PopoverContext";function Q(e){let r=a.exports.useContext(J);if(r===null){let o=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Q),o}return r}let X=a.exports.createContext(null);X.displayName="PopoverAPIContext";function Y(e){let r=a.exports.useContext(X);if(r===null){let o=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,Y),o}return r}let Z=a.exports.createContext(null);Z.displayName="PopoverGroupContext";function ae(){return a.exports.useContext(Z)}let ee=a.exports.createContext(null);ee.displayName="PopoverPanelContext";function ge(){return a.exports.useContext(ee)}function Se(e,r){return K(r.type,Pe,e,r)}let ye="div",Ee=j(function(e,r){var o;let c=`headlessui-popover-button-${G()}`,n=`headlessui-popover-panel-${G()}`,v=a.exports.useRef(null),y=H(r,ue(t=>{v.current=t})),E=a.exports.useReducer(Se,{popoverState:1,button:null,buttonId:c,panel:null,panelId:n,beforePanelSentinel:a.exports.createRef(),afterPanelSentinel:a.exports.createRef()}),[{popoverState:f,button:s,panel:l,beforePanelSentinel:F,afterPanelSentinel:w},m]=E,i=z((o=v.current)!=null?o:s);a.exports.useEffect(()=>m({type:3,buttonId:c}),[c,m]),a.exports.useEffect(()=>m({type:5,panelId:n}),[n,m]);let d=a.exports.useMemo(()=>{if(!s||!l)return!1;for(let D of document.querySelectorAll("body > *"))if(Number(D==null?void 0:D.contains(s))^Number(D==null?void 0:D.contains(l)))return!0;let t=oe(),u=t.indexOf(s),b=(u+t.length-1)%t.length,C=(u+1)%t.length,B=t[b],M=t[C];return!l.contains(B)&&!l.contains(M)},[s,l]),P=a.exports.useMemo(()=>({buttonId:c,panelId:n,close:()=>m({type:1})}),[c,n,m]),g=ae(),h=g==null?void 0:g.registerPopover,O=x(()=>{var t;return(t=g==null?void 0:g.isFocusWithinPopoverGroup())!=null?t:(i==null?void 0:i.activeElement)&&((s==null?void 0:s.contains(i.activeElement))||(l==null?void 0:l.contains(i.activeElement)))});a.exports.useEffect(()=>h==null?void 0:h(P),[h,P]),fe(i==null?void 0:i.defaultView,"focus",t=>{var u,b,C,B;f===0&&(O()||!s||!l||(b=(u=F.current)==null?void 0:u.contains)!=null&&b.call(u,t.target)||(B=(C=w.current)==null?void 0:C.contains)!=null&&B.call(C,t.target)||m({type:1}))},!0),se([s,l],(t,u)=>{m({type:1}),ie(u,pe.Loose)||(t.preventDefault(),s==null||s.focus())},f===0);let k=x(t=>{m({type:1});let u=(()=>t?t instanceof HTMLElement?t:"current"in t&&t.current instanceof HTMLElement?t.current:s:s)();u==null||u.focus()}),p=a.exports.useMemo(()=>({close:k,isPortalled:d}),[k,d]),$=a.exports.useMemo(()=>({open:f===0,close:k}),[f,k]),S=e,T={ref:y};return I.createElement(J.Provider,{value:E},I.createElement(X.Provider,{value:p},I.createElement(ce,{value:K(f,{[0]:W.Open,[1]:W.Closed})},V({ourProps:T,theirProps:S,slot:$,defaultTag:ye,name:"Popover"}))))}),he="button",$e=j(function(e,r){let[o,c]=Q("Popover.Button"),{isPortalled:n}=Y("Popover.Button"),v=a.exports.useRef(null),y=`headlessui-focus-sentinel-${G()}`,E=ae(),f=E==null?void 0:E.closeOthers,s=ge(),l=s===null?!1:s===o.panelId,F=H(v,r,l?null:t=>t&&c({type:2,button:t})),w=H(v,r),m=z(v),i=x(t=>{var u,b,C;if(l){if(o.popoverState===1)return;switch(t.key){case R.Space:case R.Enter:t.preventDefault(),(b=(u=t.target).click)==null||b.call(u),c({type:1}),(C=o.button)==null||C.focus();break}}else switch(t.key){case R.Space:case R.Enter:t.preventDefault(),t.stopPropagation(),o.popoverState===1&&(f==null||f(o.buttonId)),c({type:0});break;case R.Escape:if(o.popoverState!==0)return f==null?void 0:f(o.buttonId);if(!v.current||(m==null?void 0:m.activeElement)&&!v.current.contains(m.activeElement))return;t.preventDefault(),t.stopPropagation(),c({type:1});break}}),d=x(t=>{l||t.key===R.Space&&t.preventDefault()}),P=x(t=>{var u,b;ne(t.currentTarget)||e.disabled||(l?(c({type:1}),(u=o.button)==null||u.focus()):(t.preventDefault(),t.stopPropagation(),o.popoverState===1&&(f==null||f(o.buttonId)),c({type:0}),(b=o.button)==null||b.focus()))}),g=x(t=>{t.preventDefault(),t.stopPropagation()}),h=o.popoverState===0,O=a.exports.useMemo(()=>({open:h}),[h]),k=ve(e,v),p=e,$=l?{ref:w,type:k,onKeyDown:i,onClick:P}:{ref:F,id:o.buttonId,type:k,"aria-expanded":e.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:i,onKeyUp:d,onClick:P,onMouseDown:g},S=le(),T=x(()=>{let t=o.panel;if(!t)return;function u(){K(S.current,{[A.Forwards]:()=>L(t,N.First),[A.Backwards]:()=>L(t,N.Last)})}u()});return I.createElement(I.Fragment,null,V({ourProps:$,theirProps:p,slot:O,defaultTag:he,name:"Popover.Button"}),h&&!l&&n&&I.createElement(U,{id:y,features:_.Focusable,as:"button",type:"button",onFocus:T}))}),Ie="div",we=q.RenderStrategy|q.Static,Ce=j(function(e,r){let[{popoverState:o},c]=Q("Popover.Overlay"),n=H(r),v=`headlessui-popover-overlay-${G()}`,y=re(),E=(()=>y!==null?y===W.Open:o===0)(),f=x(l=>{if(ne(l.currentTarget))return l.preventDefault();c({type:1})}),s=a.exports.useMemo(()=>({open:o===0}),[o]);return V({ourProps:{ref:n,id:v,"aria-hidden":!0,onClick:f},theirProps:e,slot:s,defaultTag:Ie,features:we,visible:E,name:"Popover.Overlay"})}),ke="div",Te=q.RenderStrategy|q.Static,Be=j(function(e,r){let{focus:o=!1,...c}=e,[n,v]=Q("Popover.Panel"),{close:y,isPortalled:E}=Y("Popover.Panel"),f=`headlessui-focus-sentinel-before-${G()}`,s=`headlessui-focus-sentinel-after-${G()}`,l=a.exports.useRef(null),F=H(l,r,p=>{v({type:4,panel:p})}),w=z(l),m=re(),i=(()=>m!==null?m===W.Open:n.popoverState===0)(),d=x(p=>{var $;switch(p.key){case R.Escape:if(n.popoverState!==0||!l.current||(w==null?void 0:w.activeElement)&&!l.current.contains(w.activeElement))return;p.preventDefault(),p.stopPropagation(),v({type:1}),($=n.button)==null||$.focus();break}});a.exports.useEffect(()=>{var p;e.static||n.popoverState===1&&((p=e.unmount)!=null?p:!0)&&v({type:4,panel:null})},[n.popoverState,e.unmount,e.static,v]),a.exports.useEffect(()=>{if(!o||n.popoverState!==0||!l.current)return;let p=w==null?void 0:w.activeElement;l.current.contains(p)||L(l.current,N.First)},[o,l,n.popoverState]);let P=a.exports.useMemo(()=>({open:n.popoverState===0,close:y}),[n,y]),g={ref:F,id:n.panelId,onKeyDown:d,onBlur:o&&n.popoverState===0?p=>{var $,S,T,t,u;let b=p.relatedTarget;!b||!l.current||($=l.current)!=null&&$.contains(b)||(v({type:1}),(((T=(S=n.beforePanelSentinel.current)==null?void 0:S.contains)==null?void 0:T.call(S,b))||((u=(t=n.afterPanelSentinel.current)==null?void 0:t.contains)==null?void 0:u.call(t,b)))&&b.focus({preventScroll:!0}))}:void 0,tabIndex:-1},h=le(),O=x(()=>{let p=l.current;if(!p)return;function $(){K(h.current,{[A.Forwards]:()=>{L(p,N.First)},[A.Backwards]:()=>{var S;(S=n.button)==null||S.focus({preventScroll:!0})}})}$()}),k=x(()=>{let p=l.current;if(!p)return;function $(){K(h.current,{[A.Forwards]:()=>{var S,T,t;if(!n.button)return;let u=oe(),b=u.indexOf(n.button),C=u.slice(0,b+1),B=[...u.slice(b+1),...C];for(let M of B.slice())if(((T=(S=M==null?void 0:M.id)==null?void 0:S.startsWith)==null?void 0:T.call(S,"headlessui-focus-sentinel-"))||((t=n.panel)==null?void 0:t.contains(M))){let D=B.indexOf(M);D!==-1&&B.splice(D,1)}L(B,N.First,!1)},[A.Backwards]:()=>L(p,N.Last)})}$()});return I.createElement(ee.Provider,{value:n.panelId},i&&E&&I.createElement(U,{id:f,ref:n.beforePanelSentinel,features:_.Focusable,as:"button",type:"button",onFocus:O}),V({ourProps:g,theirProps:c,slot:P,defaultTag:ke,features:Te,visible:i,name:"Popover.Panel"}),i&&E&&I.createElement(U,{id:s,ref:n.afterPanelSentinel,features:_.Focusable,as:"button",type:"button",onFocus:k}))}),Oe="div",Fe=j(function(e,r){let o=a.exports.useRef(null),c=H(o,r),[n,v]=a.exports.useState([]),y=x(i=>{v(d=>{let P=d.indexOf(i);if(P!==-1){let g=d.slice();return g.splice(P,1),g}return d})}),E=x(i=>(v(d=>[...d,i]),()=>y(i))),f=x(()=>{var i;let d=de(o);if(!d)return!1;let P=d.activeElement;return(i=o.current)!=null&&i.contains(P)?!0:n.some(g=>{var h,O;return((h=d.getElementById(g.buttonId))==null?void 0:h.contains(P))||((O=d.getElementById(g.panelId))==null?void 0:O.contains(P))})}),s=x(i=>{for(let d of n)d.buttonId!==i&&d.close()}),l=a.exports.useMemo(()=>({registerPopover:E,unregisterPopover:y,isFocusWithinPopoverGroup:f,closeOthers:s}),[E,y,f,s]),F=a.exports.useMemo(()=>({}),[]),w=e,m={ref:c};return I.createElement(Z.Provider,{value:l},V({ourProps:m,theirProps:w,slot:F,defaultTag:Oe,name:"Popover.Group"}))}),Ge=Object.assign(Ee,{Button:$e,Overlay:Ce,Panel:Be,Group:Fe});const De={solid:"group inline-flex items-center justify-center rounded-full py-3 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",outline:"group inline-flex ring-1 items-center justify-center rounded-full py-3 px-4 text-sm focus:outline-none"},Re={solid:{slate:"bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",blue:"bg-orange-600 text-white hover:text-slate-100 hover:bg-orange-500 active:bg-blue-800 active:text-orange-100 focus-visible:outline-orange-600",white:"bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"},outline:{slate:"ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-orange-600 focus-visible:ring-slate-300",white:"ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"}};function He({variant:e="solid",color:r="slate",className:o,href:c,...n}){return o=be(De[e],Re[e][r],o),c?I.createElement(te,{href:c,className:o,...n}):I.createElement("button",{className:o,...n})}function Ke({href:e,children:r}){return I.createElement(te,{href:e,className:"inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"},r)}export{He as B,Ke as N,Ge as m};