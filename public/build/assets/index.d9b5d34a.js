import{r as f,C as At,s as k,e as qe,f as Mt,R as W,D as Lt,i as Ut,g as j,h as jt,j as Ht,k as Wt}from"./app.7fa3bd1a.js";import Vt from"./Profile.81712c7f.js";import"./header.3c5d8273.js";import"./MenuDropDown.95701816.js";import"./transition.e648784a.js";import"./icons.4ebce0a2.js";import"./api.e32f0351.js";import"./Toast.a5584f3a.js";import"./helpers.97e11027.js";import"./moment.9709ab41.js";import"./influencerSize.c8dd3783.js";import"./audienceCard.beb8faed.js";import"./card.afb5b9cb.js";import"./tweetList.5858594e.js";import"./tweetCard.87a54e97.js";import"./profiling.414706e8.js";import"./footer.55599d2b.js";var be=function(){return be=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},be.apply(this,arguments)};function ge(e){return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Oe.apply(this,arguments)}function Kt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ye(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function zt(e,t,r){return t&&Ye(e.prototype,t),r&&Ye(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Gt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&we(e,t)}function we(e,t){return we=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},we(e,t)}function qt(e){var t=Xt();return function(){var n=te(e),o;if(t){var i=te(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return Yt(this,o)}}function Yt(e,t){if(t&&(ge(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(e)}function E(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Xt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function te(e){return te=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},te(e)}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ot=k("div",function(e){var t=e.$zIndex;return{position:"absolute",top:0,left:0,right:0,zIndex:t||null}});ot.displayName="Container";var it=function(e){Gt(r,e);var t=qt(r);function r(){var n;Kt(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=t.call.apply(t,[this].concat(i)),F(E(n),"state",{container:null}),F(E(n),"onEscape",function(){n.props.onEscape&&n.props.onEscape()}),F(E(n),"onKeyDown",function(u){n.props.onKeyDown&&n.props.onKeyDown(u)}),F(E(n),"onKeyUp",function(u){n.props.onKeyUp&&n.props.onKeyUp(u)}),F(E(n),"onKeyPress",function(u){n.props.onKeyPress&&n.props.onKeyPress(u)}),F(E(n),"onDocumentClick",function(u){n.props.onDocumentClick&&n.props.onDocumentClick(u)}),n}return zt(r,[{key:"componentDidMount",value:function(){this.context.addEscapeHandler(this.onEscape),this.context.addKeyDownHandler(this.onKeyDown),this.context.addKeyUpHandler(this.onKeyUp),this.context.addKeyPressHandler(this.onKeyPress),this.props.isHoverLayer||this.context.addDocClickHandler(this.onDocumentClick);var o=this.props,i=o.onMount,a=o.mountNode,u=o.host;if(a){i&&i();return}var s=u!==void 0,c=s?u:document.body;c&&this.addContainer(c)}},{key:"componentDidUpdate",value:function(o){var i=this.props,a=i.host,u=i.mountNode;u||(a&&a!==o.host&&o.host===null&&this.addContainer(a),o.isHoverLayer!=this.props.isHoverLayer&&(this.props.isHoverLayer?this.context.removeDocClickHandler(this.onDocumentClick):this.context.addDocClickHandler(this.onDocumentClick)))}},{key:"componentWillUnmount",value:function(){this.context.removeEscapeHandler(this.onEscape),this.context.removeKeyDownHandler(this.onKeyDown),this.context.removeKeyUpHandler(this.onKeyUp),this.context.removeKeyPressHandler(this.onKeyPress),this.context.removeDocClickHandler(this.onDocumentClick),this.props.onUnmount&&this.props.onUnmount();var o=this.props.host,i=this.state.container;o&&i&&o.contains(i)&&o.removeChild(i)}},{key:"addContainer",value:function(o){var i=this.props,a=i.index,u=i.mountNode,s=i.onMount;if(!u&&o){var c=o.ownerDocument.createElement("div"),l=typeof a=="number"?o.children[a]:null;l?o.insertBefore(c,l):o.appendChild(c),this.setState({container:c},function(){s&&s()})}}},{key:"render",value:function(){var o=this.state.container,i=this.props,a=i.children,u=i.mountNode,s=i.zIndex,c=s?f.exports.createElement(ot,{$zIndex:s},a):a;return typeof document<"u"?u?qe.createPortal(c,u):o?qe.createPortal(c,o):null:null}}]),r}(f.exports.Component);F(it,"contextType",Mt);function Qt(e){return f.exports.createElement(At,null,function(t){var r=t.host,n=t.zIndex;return f.exports.createElement(it,Oe({},e,{host:r,zIndex:n}))})}function Zt(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V.apply(this,arguments)}var xe="data-focus-lock",at="data-focus-lock-disabled",Jt="data-no-focus-lock",er="data-autofocus-inside",tr="data-no-autofocus";function rr(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function nr(e,t){var r=f.exports.useState(function(){return{value:e,callback:t,facade:{get current(){return r.value},set current(n){var o=r.value;o!==n&&(r.value=n,r.callback(n,o))}}}})[0];return r.callback=t,r.facade}function or(e,t){return nr(t||null,function(r){return e.forEach(function(n){return rr(n,r)})})}var pe={width:"1px",height:"0px",padding:0,overflow:"hidden",position:"fixed",top:"1px",left:"1px"};function ut(e){return e}function st(e,t){t===void 0&&(t=ut);var r=[],n=!1,o={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:e},useMedium:function(i){var a=t(i,n);return r.push(a),function(){r=r.filter(function(u){return u!==a})}},assignSyncMedium:function(i){for(n=!0;r.length;){var a=r;r=[],a.forEach(i)}r={push:function(u){return i(u)},filter:function(){return r}}},assignMedium:function(i){n=!0;var a=[];if(r.length){var u=r;r=[],u.forEach(i),a=r}var s=function(){var l=a;a=[],l.forEach(i)},c=function(){return Promise.resolve().then(s)};c(),r={push:function(l){a.push(l),c()},filter:function(l){return a=a.filter(l),r}}}};return o}function ke(e,t){return t===void 0&&(t=ut),st(e,t)}function ir(e){e===void 0&&(e={});var t=st(null);return t.options=be({async:!0,ssr:!1},e),t}var ct=ke({},function(e){var t=e.target,r=e.currentTarget;return{target:t,currentTarget:r}}),ft=ke(),ar=ke(),ur=ir({async:!0}),sr=[],Ne=f.exports.forwardRef(function(t,r){var n,o=f.exports.useState(),i=o[0],a=o[1],u=f.exports.useRef(),s=f.exports.useRef(!1),c=f.exports.useRef(null),l=t.children,d=t.disabled,v=t.noFocusGuards,p=t.persistentFocus,m=t.crossFrame,b=t.autoFocus;t.allowTextSelection;var g=t.group,w=t.className,N=t.whiteList,ie=t.hasPositiveIndices,q=t.shards,Y=q===void 0?sr:q,X=t.as,ae=X===void 0?"div":X,Q=t.lockProps,Z=Q===void 0?{}:Q,ue=t.sideCar,T=t.returnFocus,se=t.focusOptions,I=t.onActivation,M=t.onDeactivation,ce=f.exports.useState({}),fe=ce[0],J=f.exports.useCallback(function(){c.current=c.current||document&&document.activeElement,u.current&&I&&I(u.current),s.current=!0},[I]),le=f.exports.useCallback(function(){s.current=!1,M&&M(u.current)},[M]);f.exports.useEffect(function(){d||(c.current=null)},[]);var L=f.exports.useCallback(function(P){var U=c.current;if(U&&U.focus){var de=typeof T=="function"?T(U):T;if(de){var Ge=typeof de=="object"?de:void 0;c.current=null,P?Promise.resolve().then(function(){return U.focus(Ge)}):U.focus(Ge)}}},[T]),C=f.exports.useCallback(function(P){s.current&&ct.useMedium(P)},[]),ee=ft.useMedium,It=f.exports.useCallback(function(P){u.current!==P&&(u.current=P,a(P))},[]),Rt=V((n={},n[at]=d&&"disabled",n[xe]=g,n),Z),ze=v!==!0,Bt=ze&&v!=="tail",$t=or([r,It]);return f.exports.createElement(f.exports.Fragment,null,ze&&[f.exports.createElement("div",{key:"guard-first","data-focus-guard":!0,tabIndex:d?-1:0,style:pe}),ie?f.exports.createElement("div",{key:"guard-nearest","data-focus-guard":!0,tabIndex:d?-1:1,style:pe}):null],!d&&f.exports.createElement(ue,{id:fe,sideCar:ur,observed:i,disabled:d,persistentFocus:p,crossFrame:m,autoFocus:b,whiteList:N,shards:Y,onActivation:J,onDeactivation:le,returnFocus:L,focusOptions:se}),f.exports.createElement(ae,V({ref:$t},Rt,{className:w,onBlur:ee,onFocus:C}),l),Bt&&f.exports.createElement("div",{"data-focus-guard":!0,tabIndex:d?-1:0,style:pe}))});Ne.propTypes={};Ne.defaultProps={children:void 0,disabled:!1,returnFocus:!1,focusOptions:void 0,noFocusGuards:!1,autoFocus:!0,persistentFocus:!1,crossFrame:!0,hasPositiveIndices:void 0,allowTextSelection:void 0,group:void 0,className:void 0,whiteList:void 0,shards:void 0,as:"div",lockProps:{},onActivation:void 0,onDeactivation:void 0};const lt=Ne;function Se(e,t){return Se=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Se(e,t)}function cr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Se(e,t)}function K(e){return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(e)}function fr(e,t){if(K(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(K(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function lr(e){var t=fr(e,"string");return K(t)==="symbol"?t:String(t)}function dr(e,t,r){return t=lr(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pr(e,t){function r(n){return n.displayName||n.name||"Component"}return function(o){var i=[],a;function u(){a=e(i.map(function(c){return c.props})),t(a)}var s=function(c){cr(l,c);function l(){return c.apply(this,arguments)||this}l.peek=function(){return a};var d=l.prototype;return d.componentDidMount=function(){i.push(this),u()},d.componentDidUpdate=function(){u()},d.componentWillUnmount=function(){var p=i.indexOf(this);i.splice(p,1),u()},d.render=function(){return W.createElement(o,this.props)},l}(f.exports.PureComponent);return dr(s,"displayName","SideEffect("+r(o)+")"),s}}var O=function(e){for(var t=Array(e.length),r=0;r<e.length;++r)t[r]=e[r];return t},_e=function(e){return Array.isArray(e)?e:[e]},vr=function(e){if(e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e,null);return!t||!t.getPropertyValue?!1:t.getPropertyValue("display")==="none"||t.getPropertyValue("visibility")==="hidden"},dt=function(e){return e.parentNode&&e.parentNode.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.parentNode.host:e.parentNode},pt=function(e){return e===document||e&&e.nodeType===Node.DOCUMENT_NODE},mr=function(e,t){return!e||pt(e)||!vr(e)&&t(dt(e))},vt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=mr(t,vt.bind(void 0,e));return e.set(t,n),n},hr=function(e,t){return e&&!pt(e)?gr(e)?t(dt(e)):!1:!0},mt=function(e,t){var r=e.get(t);if(r!==void 0)return r;var n=hr(t,mt.bind(void 0,e));return e.set(t,n),n},ht=function(e){return e.dataset},yr=function(e){return e.tagName==="BUTTON"},yt=function(e){return e.tagName==="INPUT"},bt=function(e){return yt(e)&&e.type==="radio"},br=function(e){return!((yt(e)||yr(e))&&(e.type==="hidden"||e.disabled))},gr=function(e){var t=e.getAttribute(tr);return![!0,"true",""].includes(t)},Te=function(e){var t;return Boolean(e&&((t=ht(e))===null||t===void 0?void 0:t.focusGuard))},re=function(e){return!Te(e)},Or=function(e){return Boolean(e)},wr=function(e,t){var r=e.tabIndex-t.tabIndex,n=e.index-t.index;if(r){if(!e.tabIndex)return 1;if(!t.tabIndex)return-1}return r||n},gt=function(e,t,r){return O(e).map(function(n,o){return{node:n,index:o,tabIndex:r&&n.tabIndex===-1?(n.dataset||{}).focusGuard?0:-1:n.tabIndex}}).filter(function(n){return!t||n.tabIndex>=0}).sort(wr)},xr=["button:enabled","select:enabled","textarea:enabled","input:enabled","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[tabindex]","[contenteditable]","[autofocus]"],Ie=xr.join(","),Sr="".concat(Ie,", [data-focus-guard]"),Ot=function(e,t){var r;return O(((r=e.shadowRoot)===null||r===void 0?void 0:r.children)||e.children).reduce(function(n,o){return n.concat(o.matches(t?Sr:Ie)?[o]:[],Ot(o))},[])},Re=function(e,t){return e.reduce(function(r,n){return r.concat(Ot(n,t),n.parentNode?O(n.parentNode.querySelectorAll(Ie)).filter(function(o){return o===n}):[])},[])},_r=function(e){var t=e.querySelectorAll("[".concat(er,"]"));return O(t).map(function(r){return Re([r])}).reduce(function(r,n){return r.concat(n)},[])},Be=function(e,t){return O(e).filter(function(r){return vt(t,r)}).filter(function(r){return br(r)})},Xe=function(e,t){return t===void 0&&(t=new Map),O(e).filter(function(r){return mt(t,r)})},Ce=function(e,t,r){return gt(Be(Re(e,r),t),!0,r)},Qe=function(e,t){return gt(Be(Re(e),t),!1)},Cr=function(e,t){return Be(_r(e),t)},z=function(e,t){return e.shadowRoot?z(e.shadowRoot,t):Object.getPrototypeOf(e).contains!==void 0&&Object.getPrototypeOf(e).contains.call(e,t)?!0:O(e.children).some(function(r){return z(r,t)})},Pr=function(e){for(var t=new Set,r=e.length,n=0;n<r;n+=1)for(var o=n+1;o<r;o+=1){var i=e[n].compareDocumentPosition(e[o]);(i&Node.DOCUMENT_POSITION_CONTAINED_BY)>0&&t.add(o),(i&Node.DOCUMENT_POSITION_CONTAINS)>0&&t.add(n)}return e.filter(function(a,u){return!t.has(u)})},wt=function(e){return e.parentNode?wt(e.parentNode):e},$e=function(e){var t=_e(e);return t.filter(Boolean).reduce(function(r,n){var o=n.getAttribute(xe);return r.push.apply(r,o?Pr(O(wt(n).querySelectorAll("[".concat(xe,'="').concat(o,'"]:not([').concat(at,'="disabled"])')))):[n]),r},[])},xt=function(e){return e.activeElement?e.activeElement.shadowRoot?xt(e.activeElement.shadowRoot):e.activeElement:void 0},Ae=function(){return document.activeElement?document.activeElement.shadowRoot?xt(document.activeElement.shadowRoot):document.activeElement:void 0},Er=function(e){return e===document.activeElement},Fr=function(e){return Boolean(O(e.querySelectorAll("iframe")).some(function(t){return Er(t)}))},St=function(e){var t=document&&Ae();return!t||t.dataset&&t.dataset.focusGuard?!1:$e(e).some(function(r){return z(r,t)||Fr(r)})},Dr=function(){var e=document&&Ae();return e?O(document.querySelectorAll("[".concat(Jt,"]"))).some(function(t){return z(t,e)}):!1},kr=function(e,t){return t.filter(bt).filter(function(r){return r.name===e.name}).filter(function(r){return r.checked})[0]||e},Me=function(e,t){return bt(e)&&e.name?kr(e,t):e},Nr=function(e){var t=new Set;return e.forEach(function(r){return t.add(Me(r,e))}),e.filter(function(r){return t.has(r)})},Ze=function(e){return e[0]&&e.length>1?Me(e[0],e):e[0]},Je=function(e,t){return e.length>1?e.indexOf(Me(e[t],e)):t},_t="NEW_FOCUS",Tr=function(e,t,r,n){var o=e.length,i=e[0],a=e[o-1],u=Te(r);if(!(r&&e.indexOf(r)>=0)){var s=r!==void 0?t.indexOf(r):-1,c=n?t.indexOf(n):s,l=n?e.indexOf(n):-1,d=s-c,v=t.indexOf(i),p=t.indexOf(a),m=Nr(t),b=r!==void 0?m.indexOf(r):-1,g=b-(n?m.indexOf(n):s),w=Je(e,0),N=Je(e,o-1);if(s===-1||l===-1)return _t;if(!d&&l>=0)return l;if(s<=v&&u&&Math.abs(d)>1)return N;if(s>=p&&u&&Math.abs(d)>1)return w;if(d&&Math.abs(g)>1)return l;if(s<=v)return N;if(s>p)return w;if(d)return Math.abs(d)>1?l:(o+l+d)%o}},Ir=function(e){return function(t){var r,n=(r=ht(t))===null||r===void 0?void 0:r.autofocus;return t.autofocus||n!==void 0&&n!=="false"||e.indexOf(t)>=0}},Rr=function(e,t,r){var n=e.map(function(i){var a=i.node;return a}),o=Xe(n.filter(Ir(r)));return o&&o.length?Ze(o):Ze(Xe(t))},Pe=function(e,t){return t===void 0&&(t=[]),t.push(e),e.parentNode&&Pe(e.parentNode.host||e.parentNode,t),t},ve=function(e,t){for(var r=Pe(e),n=Pe(t),o=0;o<r.length;o+=1){var i=r[o];if(n.indexOf(i)>=0)return i}return!1},Ct=function(e,t,r){var n=_e(e),o=_e(t),i=n[0],a=!1;return o.filter(Boolean).forEach(function(u){a=ve(a||u,u)||a,r.filter(Boolean).forEach(function(s){var c=ve(i,s);c&&(!a||z(c,a)?a=c:a=ve(c,a))})}),a},Br=function(e,t){return e.reduce(function(r,n){return r.concat(Cr(n,t))},[])},$r=function(e,t){var r=new Map;return t.forEach(function(n){return r.set(n.node,n)}),e.map(function(n){return r.get(n)}).filter(Or)},Ar=function(e,t){var r=document&&Ae(),n=$e(e).filter(re),o=Ct(r||e,e,n),i=new Map,a=Qe(n,i),u=Ce(n,i).filter(function(p){var m=p.node;return re(m)});if(!(!u[0]&&(u=a,!u[0]))){var s=Qe([o],i).map(function(p){var m=p.node;return m}),c=$r(s,u),l=c.map(function(p){var m=p.node;return m}),d=Tr(l,s,r,t);if(d===_t){var v=Rr(a,l,Br(n,i));if(v)return{node:v};console.warn("focus-lock: cannot find any node to move focus into");return}return d===void 0?d:c[d]}},Mr=function(e){var t=$e(e).filter(re),r=Ct(e,e,t),n=new Map,o=Ce([r],n,!0),i=Ce(t,n).filter(function(a){var u=a.node;return re(u)}).map(function(a){var u=a.node;return u});return o.map(function(a){var u=a.node,s=a.index;return{node:u,index:s,lockItem:i.indexOf(u)>=0,guard:Te(u)}})},Lr=function(e,t){"focus"in e&&e.focus(t),"contentWindow"in e&&e.contentWindow&&e.contentWindow.focus()},me=0,he=!1,Ur=function(e,t,r){r===void 0&&(r={});var n=Ar(e,t);if(!he&&n){if(me>2){console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"),he=!0,setTimeout(function(){he=!1},1);return}me++,Lr(n.node,r.focusOptions),me--}};const Pt=Ur;function Et(e){var t=window,r=t.setImmediate;typeof r<"u"?r(e):setTimeout(e,1)}var jr=function(){return document&&document.activeElement===document.body},Hr=function(){return jr()||Dr()},$=null,B=null,A=null,G=!1,Wr=function(){return!0},Vr=function(t){return($.whiteList||Wr)(t)},Kr=function(t,r){A={observerNode:t,portaledElement:r}},zr=function(t){return A&&A.portaledElement===t};function et(e,t,r,n){var o=null,i=e;do{var a=n[i];if(a.guard)a.node.dataset.focusAutoGuard&&(o=a);else if(a.lockItem){if(i!==e)return;o=null}else break}while((i+=r)!==t);o&&(o.node.tabIndex=0)}var Gr=function(t){return t&&"current"in t?t.current:t},qr=function(t){return t?Boolean(G):G==="meanwhile"},Yr=function e(t,r,n){return r&&(r.host===t&&(!r.activeElement||n.contains(r.activeElement))||r.parentNode&&e(t,r.parentNode,n))},Xr=function(t,r){return r.some(function(n){return Yr(t,n,n)})},ne=function(){var t=!1;if($){var r=$,n=r.observed,o=r.persistentFocus,i=r.autoFocus,a=r.shards,u=r.crossFrame,s=r.focusOptions,c=n||A&&A.portaledElement,l=document&&document.activeElement;if(c){var d=[c].concat(a.map(Gr).filter(Boolean));if((!l||Vr(l))&&(o||qr(u)||!Hr()||!B&&i)&&(c&&!(St(d)||l&&Xr(l,d)||zr(l))&&(document&&!B&&l&&!i?(l.blur&&l.blur(),document.body.focus()):(t=Pt(d,B,{focusOptions:s}),A={})),G=!1,B=document&&document.activeElement),document){var v=document&&document.activeElement,p=Mr(d),m=p.map(function(b){var g=b.node;return g}).indexOf(v);m>-1&&(p.filter(function(b){var g=b.guard,w=b.node;return g&&w.dataset.focusAutoGuard}).forEach(function(b){var g=b.node;return g.removeAttribute("tabIndex")}),et(m,p.length,1,p),et(m,-1,-1,p))}}}return t},Ft=function(t){ne()&&t&&(t.stopPropagation(),t.preventDefault())},Le=function(){return Et(ne)},Qr=function(t){var r=t.target,n=t.currentTarget;n.contains(r)||Kr(n,r)},Zr=function(){return null},Dt=function(){G="just",setTimeout(function(){G="meanwhile"},0)},Jr=function(){document.addEventListener("focusin",Ft),document.addEventListener("focusout",Le),window.addEventListener("blur",Dt)},en=function(){document.removeEventListener("focusin",Ft),document.removeEventListener("focusout",Le),window.removeEventListener("blur",Dt)};function tn(e){return e.filter(function(t){var r=t.disabled;return!r})}function rn(e){var t=e.slice(-1)[0];t&&!$&&Jr();var r=$,n=r&&t&&t.id===r.id;$=t,r&&!n&&(r.onDeactivation(),e.filter(function(o){var i=o.id;return i===r.id}).length||r.returnFocus(!t)),t?(B=null,(!n||r.observed!==t.observed)&&t.onActivation(),ne(),Et(ne)):(en(),B=null)}ct.assignSyncMedium(Qr);ft.assignMedium(Le);ar.assignMedium(function(e){return e({moveFocusInside:Pt,focusInside:St})});const nn=pr(tn,rn)(Zr);var kt=f.exports.forwardRef(function(t,r){return f.exports.createElement(lt,V({sideCar:nn,ref:r},t))}),Nt=lt.propTypes||{};Nt.sideCar;Zt(Nt,["sideCar"]);kt.propTypes={};const on=kt;var Ee={default:"default",full:"full",auto:"auto"},R={default:"500px",full:"100%",auto:"auto"},ye={closeButton:"closeButton",backdrop:"backdrop",escape:"escape"},_={left:"left",right:"right",top:"top",bottom:"bottom"};function tt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?tt(Object(r),!0).forEach(function(n){S(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):tt(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function an(e,t){var r={maxWidth:"100%",maxHeight:"100%",width:R.default,height:R.full};return t===_.left||t===_.right?(r.height=R.full,Ee[e]?r.width=R[e]:typeof e=="string"&&(r.width=e)):(r.width=R.full,Ee[e]?r.height=R[e]:typeof e=="string"&&(r.height=e)),r}function un(e){var t=e.$anchor,r=e.$isVisible,n=e.$size,o=an(n,t),i=_.left,a=_.right,u=_.top,s=_.bottom;switch(t){case a:return x({transform:r?"translateX(0)":"translateX(".concat(o.width,")"),right:r?0:"-".concat(o.width),top:0},o);case i:return x({transform:r?"translateX(0)":"translateX(-".concat(o.width,")"),left:r?0:"-".concat(o.width),top:0},o);case s:return x({transform:r?"translateY(0)":"translateY(".concat(o.height,")"),left:0,bottom:r?"0":"-".concat(o.height)},o);case u:return x({transform:r?"translateY(0)":"translateY(-".concat(o.height,")"),left:0,top:r?"0":"-".concat(o.height)},o);default:return{}}}var Ue=k("div",function(e){return{position:"fixed",overflow:"auto",right:0,bottom:0,top:0,left:0}});Ue.displayName="StyledRoot";Ue.displayName="StyledRoot";var je=k("div",function(e){var t=e.$animating,r=e.$isOpen,n=e.$isVisible,o=e.$showBackdrop,i=e.$theme;return x({position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",touchAction:"none",opacity:n&&r&&o?1:0},t?{transitionProperty:"opacity",transitionDuration:i.animation.timing400,transitionTimingFunction:i.animation.easeOutCurve}:null)});je.displayName="StyledBackdrop";je.displayName="StyledBackdrop";var He=k("div",function(e){var t=e.$animating,r=e.$isOpen,n=e.$isVisible,o=e.$theme;return x(x({backgroundColor:o.colors.backgroundPrimary,borderTopLeftRadius:o.borders.surfaceBorderRadius,borderTopRightRadius:o.borders.surfaceBorderRadius,borderBottomRightRadius:o.borders.surfaceBorderRadius,borderBottomLeftRadius:o.borders.surfaceBorderRadius},un(e)),{},{opacity:n&&r?1:0,transitionProperty:t?"opacity, transform":null,transitionDuration:t?o.animation.timing400:null,transitionTimingFunction:t?o.animation.easeOutCurve:null,display:"flex",position:"fixed"})});He.displayName="StyledDrawerContainer";He.displayName="StyledDrawerContainer";var We=k("div",function(e){var t=e.$theme;return x(x({},t.typography.font200),{},{color:t.colors.contentPrimary,marginTop:t.sizing.scale900,marginBottom:t.sizing.scale900,marginLeft:t.sizing.scale900,marginRight:t.sizing.scale900,overflow:"auto",width:"100%"})});We.displayName="StyledDrawerBody";We.displayName="StyledDrawerBody";var Ve=k("button",function(e){var t,r=e.$theme,n=e.$isFocusVisible,o=r.direction==="rtl"?"left":"right";return t={background:"transparent",outline:0,paddingLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,fill:r.colors.primary,transitionProperty:"fill, border-color",transitionDuration:r.animation.timing200,borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftColor:"transparent",borderRightColor:"transparent",borderTopColor:"transparent",borderBottomColor:"transparent",":hover":{fill:r.colors.primary600},":focus":{outline:n?"3px solid ".concat(r.colors.accent):"none"},position:"absolute",top:r.sizing.scale500},S(t,o,r.sizing.scale500),S(t,"width",r.sizing.scale800),S(t,"height",r.sizing.scale800),S(t,"display","flex"),S(t,"justifyContent","center"),S(t,"alignItems","center"),S(t,"cursor","pointer"),t});Ve.displayName="StyledClose";Ve.displayName="StyledClose";var Ke=k("div",{display:"none"});Ke.displayName="Hidden";Ke.displayName="Hidden";function sn(e){return f.exports.createElement(Lt,{size:"inherit",color:"inherit",title:e.title})}function Fe(e){return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fe(e)}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},D.apply(this,arguments)}function H(e,t){return dn(e)||ln(e,t)||fn(e,t)||cn()}function cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fn(e,t){if(!!e){if(typeof e=="string")return rt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return rt(e,t)}}function rt(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function ln(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],o=!0,i=!1,a,u;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(n.push(a.value),!(t&&n.length===t));o=!0);}catch(s){i=!0,u=s}finally{try{!o&&r.return!=null&&r.return()}finally{if(i)throw u}}return n}}function dn(e){if(Array.isArray(e))return e}function pn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nt(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function vn(e,t,r){return t&&nt(e.prototype,t),r&&nt(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function mn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&De(e,t)}function De(e,t){return De=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},De(e,t)}function hn(e){var t=bn();return function(){var n=oe(e),o;if(t){var i=oe(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return yn(this,o)}}function yn(e,t){if(t&&(Fe(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function bn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function oe(e){return oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},oe(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Tt=function(e){mn(r,e);var t=hn(r);function r(){var n;pn(this,r);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=t.call.apply(t,[this].concat(i)),y(h(n),"animateOutTimer",void 0),y(h(n),"animateStartTimer",void 0),y(h(n),"lastFocus",null),y(h(n),"lastMountNodeOverflowStyle",null),y(h(n),"_refs",{}),y(h(n),"state",{isVisible:!1,mounted:!1,isFocusVisible:!1}),y(h(n),"handleFocus",function(u){Ut(u)&&n.setState({isFocusVisible:!0})}),y(h(n),"handleBlur",function(u){n.state.isFocusVisible!==!1&&n.setState({isFocusVisible:!1})}),y(h(n),"onEscape",function(){!n.props.closeable||n.triggerClose(ye.escape)}),y(h(n),"onBackdropClick",function(u){n.props.onBackdropClick&&n.props.onBackdropClick(u),n.props.closeable&&n.triggerClose(ye.backdrop)}),y(h(n),"onCloseClick",function(){n.triggerClose(ye.closeButton)}),y(h(n),"animateOutComplete",function(){n.setState({isVisible:!1})}),n}return vn(r,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"componentWillUnmount",value:function(){this.resetMountNodeScroll(),this.clearTimers()}},{key:"componentDidUpdate",value:function(o,i){var a=this.props.isOpen;(a!==o.isOpen||a&&this.state.mounted&&!i.mounted)&&(a?this.didOpen():this.didClose())}},{key:"disableMountNodeScroll",value:function(){if(this.props.showBackdrop){var o=this.getMountNode();this.lastMountNodeOverflowStyle=o.style.overflow||"",o.style.overflow="hidden"}}},{key:"resetMountNodeScroll",value:function(){if(this.props.showBackdrop){var o=this.getMountNode(),i=this.lastMountNodeOverflowStyle;o&&i!==null&&(o.style.overflow=i||"",this.lastMountNodeOverflowStyle=null)}}},{key:"getMountNode",value:function(){var o=this.props.mountNode;return o||document.body}},{key:"clearTimers",value:function(){this.animateOutTimer&&clearTimeout(this.animateOutTimer),this.animateStartTimer&&cancelAnimationFrame(this.animateStartTimer)}},{key:"didOpen",value:function(){var o=this,i=this.getRef("Root").current;i&&(i.scrollTop=0),this.clearTimers(),this.disableMountNodeScroll(),this.animateStartTimer=requestAnimationFrame(function(){o.setState({isVisible:!0})})}},{key:"didClose",value:function(){this.resetMountNodeScroll(),this.animateOutTimer=setTimeout(this.animateOutComplete,500)}},{key:"triggerClose",value:function(o){this.props.onClose&&o&&this.props.onClose({closeSource:o})}},{key:"getSharedProps",value:function(){var o=this.props,i=o.animate,a=o.isOpen,u=o.size,s=o.closeable,c=o.anchor,l=o.showBackdrop;return{$animating:i,$isVisible:this.state.isVisible,$isOpen:!!a,$size:u,$closeable:!!s,$anchor:c,$isFocusVisible:this.state.isFocusVisible,$showBackdrop:l}}},{key:"getChildren",value:function(){var o=this.props.children;return typeof o=="function"?o():o}},{key:"getRef",value:function(o){return this._refs[o]||(this._refs[o]=f.exports.createRef()),this._refs[o]}},{key:"renderDrawer",value:function(o){var i=this,a=this.props,u=a.overrides,s=u===void 0?{}:u,c=a.closeable,l=a.autoFocus,d=s.Root,v=s.DrawerContainer,p=s.DrawerBody,m=s.Backdrop,b=s.Close,g=j(d,Ue),w=H(g,2),N=w[0],ie=w[1],q=j(m,je),Y=H(q,2),X=Y[0],ae=Y[1],Q=j(v,He),Z=H(Q,2),ue=Z[0],T=Z[1],se=j(p,We),I=H(se,2),M=I[0],ce=I[1],fe=j(b,Ve),J=H(fe,2),le=J[0],L=J[1],C=this.getSharedProps();return f.exports.createElement(jt.Consumer,null,function(ee){return f.exports.createElement(on,{crossFrame:!1,returnFocus:!0,autoFocus:l,noFocusGuards:!0},f.exports.createElement(N,D({"data-baseweb":"drawer",ref:i.getRef("Root")},C,ie),f.exports.createElement(X,D({onClick:i.onBackdropClick},C,ae)),f.exports.createElement(ue,D({},C,T),f.exports.createElement(M,D({},C,ce),o),c?f.exports.createElement(le,D({"aria-label":ee.drawer.close,onClick:i.onCloseClick},C,L,{onFocus:Ht(L,i.handleFocus),onBlur:Wt(L,i.handleBlur)}),f.exports.createElement(sn,{title:ee.drawer.close})):null)))})}},{key:"render",value:function(){var o=this.state.mounted&&(this.props.isOpen||this.state.isVisible),i=o||this.props.renderAll?this.getChildren():null;return i?o?f.exports.createElement(Qt,{onEscape:this.onEscape,mountNode:this.props.mountNode},this.renderDrawer(i)):f.exports.createElement(Ke,null,i):null}}]),r}(f.exports.Component);y(Tt,"defaultProps",{animate:!0,closeable:!0,isOpen:!1,overrides:{},size:Ee.default,anchor:_.right,showBackdrop:!0,autoFocus:!0,renderAll:!1});const gn=Tt,On=({children:e})=>{const[t,r]=W.useState(!0);return W.createElement(gn,{isOpen:t,autoFocus:!0,onClose:()=>window.location.reload(!0),anchor:_.right,overrides:{DrawerBody:{style:({$theme:n})=>({marginRight:0,marginLeft:0,marginTop:0,marginBottom:0,textColor:"#fff"})},Close:{style:({$theme:n})=>({color:"#fff "})},DrawerContainer:{style:({$theme:n})=>({width:"35rem"})}}},e)};function Mn({influencer:e}){return W.createElement(On,null,W.createElement(Vt,{influencer:e,showBg:!0}))}export{Mn as default};
