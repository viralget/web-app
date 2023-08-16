import{p as g,r as l,B as fe,K as de,A as v,V as pe,G as me,J as he,R as w}from"./app.cc07e7b9.js";import{a as ye,L as ge}from"./Combination.290a6df6.js";import be from"./Profile.afdcf42f.js";import"./header.79d3c989.js";import"./MenuDropDown.c643e396.js";import"./transition.f0c9e4b4.js";import"./keyboard.ada55ee2.js";import"./api.45d803cc.js";import"./Toast.78628752.js";import"./helpers.2e537a8b.js";import"./moment.9709ab41.js";import"./influencerSize.640f15e0.js";import"./audienceCard.37164ec4.js";import"./index.a41bcc47.js";import"./index.e8fcc329.js";import"./QAS.66a14d77.js";import"./card.520b66d8.js";import"./profiling.7caefe1b.js";import"./footer.fd59cb7e.js";var R={default:"default",full:"full",auto:"auto"},y={default:"500px",full:"100%",auto:"auto"},k={closeButton:"closeButton",backdrop:"backdrop",escape:"escape"},m={left:"left",right:"right",top:"top",bottom:"bottom"};function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?z(Object(r),!0).forEach(function(o){p(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e,t){var r={maxWidth:"100%",maxHeight:"100%",width:y.default,height:y.full};return t===m.left||t===m.right?(r.height=y.full,R[e]?r.width=y[e]:typeof e=="string"&&(r.width=e)):(r.width=y.full,R[e]?r.height=y[e]:typeof e=="string"&&(r.height=e)),r}function Oe(e){var t=e.$anchor,r=e.$isVisible,o=e.$size,n=ve(o,t),i=m.left,a=m.right,s=m.top,f=m.bottom;switch(t){case a:return d({transform:r?"translateX(0)":"translateX(".concat(n.width,")"),right:r?0:"-".concat(n.width),top:0},n);case i:return d({transform:r?"translateX(0)":"translateX(-".concat(n.width,")"),left:r?0:"-".concat(n.width),top:0},n);case f:return d({transform:r?"translateY(0)":"translateY(".concat(n.height,")"),left:0,bottom:r?"0":"-".concat(n.height)},n);case s:return d({transform:r?"translateY(0)":"translateY(-".concat(n.height,")"),left:0,top:r?"0":"-".concat(n.height)},n);default:return{}}}var D=g("div",function(e){return{position:"fixed",overflow:"auto",right:0,bottom:0,top:0,left:0}});D.displayName="StyledRoot";D.displayName="StyledRoot";var T=g("div",function(e){var t=e.$animating,r=e.$isOpen,o=e.$isVisible,n=e.$showBackdrop,i=e.$theme;return d({position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",touchAction:"none",opacity:o&&r&&n?1:0},t?{transitionProperty:"opacity",transitionDuration:i.animation.timing400,transitionTimingFunction:i.animation.easeOutCurve}:null)});T.displayName="StyledBackdrop";T.displayName="StyledBackdrop";var N=g("div",function(e){var t=e.$animating,r=e.$isOpen,o=e.$isVisible,n=e.$theme;return d(d({backgroundColor:n.colors.backgroundPrimary,borderTopLeftRadius:n.borders.surfaceBorderRadius,borderTopRightRadius:n.borders.surfaceBorderRadius,borderBottomRightRadius:n.borders.surfaceBorderRadius,borderBottomLeftRadius:n.borders.surfaceBorderRadius},Oe(e)),{},{opacity:o&&r?1:0,transitionProperty:t?"opacity, transform":null,transitionDuration:t?n.animation.timing400:null,transitionTimingFunction:t?n.animation.easeOutCurve:null,display:"flex",position:"fixed"})});N.displayName="StyledDrawerContainer";N.displayName="StyledDrawerContainer";var x=g("div",function(e){var t=e.$theme;return d(d({},t.typography.font200),{},{color:t.colors.contentPrimary,marginTop:t.sizing.scale900,marginBottom:t.sizing.scale900,marginLeft:t.sizing.scale900,marginRight:t.sizing.scale900,overflow:"auto",width:"100%"})});x.displayName="StyledDrawerBody";x.displayName="StyledDrawerBody";var E=g("button",function(e){var t,r=e.$theme,o=e.$isFocusVisible,n=r.direction==="rtl"?"left":"right";return t={background:"transparent",outline:0,paddingLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,fill:r.colors.primary,transitionProperty:"fill, border-color",transitionDuration:r.animation.timing200,borderLeftWidth:"1px",borderRightWidth:"1px",borderTopWidth:"1px",borderBottomWidth:"1px",borderLeftStyle:"solid",borderRightStyle:"solid",borderTopStyle:"solid",borderBottomStyle:"solid",borderLeftColor:"transparent",borderRightColor:"transparent",borderTopColor:"transparent",borderBottomColor:"transparent",":hover":{fill:r.colors.primary600},":focus":{outline:o?"3px solid ".concat(r.colors.accent):"none"},position:"absolute",top:r.sizing.scale500},p(t,n,r.sizing.scale500),p(t,"width",r.sizing.scale800),p(t,"height",r.sizing.scale800),p(t,"display","flex"),p(t,"justifyContent","center"),p(t,"alignItems","center"),p(t,"cursor","pointer"),t});E.displayName="StyledClose";E.displayName="StyledClose";var F=g("div",{display:"none"});F.displayName="Hidden";F.displayName="Hidden";function we(e){return l.exports.createElement(fe,{size:"inherit",color:"inherit",title:e.title})}function P(e){return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},h.apply(this,arguments)}function O(e,t){return Be(e)||Ce(e,t)||_e(e,t)||Se()}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(e,t){if(!!e){if(typeof e=="string")return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return W(e,t)}}function W(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function Ce(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o=[],n=!0,i=!1,a,s;try{for(r=r.call(e);!(n=(a=r.next()).done)&&(o.push(a.value),!(t&&o.length===t));n=!0);}catch(f){i=!0,s=f}finally{try{!n&&r.return!=null&&r.return()}finally{if(i)throw s}}return o}}function Be(e){if(Array.isArray(e))return e}function ke(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function H(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function Re(e,t,r){return t&&H(e.prototype,t),r&&H(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&$(e,t)}function $(e,t){return $=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,n){return o.__proto__=n,o},$(e,t)}function $e(e){var t=Te();return function(){var o=S(e),n;if(t){var i=S(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return De(this,n)}}function De(e,t){if(t&&(P(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return u(e)}function u(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Te(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},S(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U=function(e){Pe(r,e);var t=$e(r);function r(){var o;ke(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return o=t.call.apply(t,[this].concat(i)),c(u(o),"animateOutTimer",void 0),c(u(o),"animateStartTimer",void 0),c(u(o),"lastFocus",null),c(u(o),"lastMountNodeOverflowStyle",null),c(u(o),"_refs",{}),c(u(o),"state",{isVisible:!1,mounted:!1,isFocusVisible:!1}),c(u(o),"handleFocus",function(s){de(s)&&o.setState({isFocusVisible:!0})}),c(u(o),"handleBlur",function(s){o.state.isFocusVisible!==!1&&o.setState({isFocusVisible:!1})}),c(u(o),"onEscape",function(){!o.props.closeable||o.triggerClose(k.escape)}),c(u(o),"onBackdropClick",function(s){o.props.onBackdropClick&&o.props.onBackdropClick(s),o.props.closeable&&o.triggerClose(k.backdrop)}),c(u(o),"onCloseClick",function(){o.triggerClose(k.closeButton)}),c(u(o),"animateOutComplete",function(){o.setState({isVisible:!1})}),o}return Re(r,[{key:"componentDidMount",value:function(){this.setState({mounted:!0})}},{key:"componentWillUnmount",value:function(){this.resetMountNodeScroll(),this.clearTimers()}},{key:"componentDidUpdate",value:function(n,i){var a=this.props.isOpen;(a!==n.isOpen||a&&this.state.mounted&&!i.mounted)&&(a?this.didOpen():this.didClose())}},{key:"disableMountNodeScroll",value:function(){if(this.props.showBackdrop){var n=this.getMountNode();this.lastMountNodeOverflowStyle=n.style.overflow||"",n.style.overflow="hidden"}}},{key:"resetMountNodeScroll",value:function(){if(this.props.showBackdrop){var n=this.getMountNode(),i=this.lastMountNodeOverflowStyle;n&&i!==null&&(n.style.overflow=i||"",this.lastMountNodeOverflowStyle=null)}}},{key:"getMountNode",value:function(){var n=this.props.mountNode;return n||document.body}},{key:"clearTimers",value:function(){this.animateOutTimer&&clearTimeout(this.animateOutTimer),this.animateStartTimer&&cancelAnimationFrame(this.animateStartTimer)}},{key:"didOpen",value:function(){var n=this,i=this.getRef("Root").current;i&&(i.scrollTop=0),this.clearTimers(),this.disableMountNodeScroll(),this.animateStartTimer=requestAnimationFrame(function(){n.setState({isVisible:!0})})}},{key:"didClose",value:function(){this.resetMountNodeScroll(),this.animateOutTimer=setTimeout(this.animateOutComplete,500)}},{key:"triggerClose",value:function(n){this.props.onClose&&n&&this.props.onClose({closeSource:n})}},{key:"getSharedProps",value:function(){var n=this.props,i=n.animate,a=n.isOpen,s=n.size,f=n.closeable,_=n.anchor,C=n.showBackdrop;return{$animating:i,$isVisible:this.state.isVisible,$isOpen:!!a,$size:s,$closeable:!!f,$anchor:_,$isFocusVisible:this.state.isFocusVisible,$showBackdrop:C}}},{key:"getChildren",value:function(){var n=this.props.children;return typeof n=="function"?n():n}},{key:"getRef",value:function(n){return this._refs[n]||(this._refs[n]=l.exports.createRef()),this._refs[n]}},{key:"renderDrawer",value:function(n){var i=this,a=this.props,s=a.overrides,f=s===void 0?{}:s,_=a.closeable,C=a.autoFocus,X=f.Root,Y=f.DrawerContainer,G=f.DrawerBody,K=f.Backdrop,Z=f.Close,q=v(X,D),V=O(q,2),J=V[0],Q=V[1],ee=v(K,T),j=O(ee,2),te=j[0],re=j[1],oe=v(Y,N),A=O(oe,2),ne=A[0],ie=A[1],ae=v(G,x),M=O(ae,2),se=M[0],le=M[1],ue=v(Z,E),I=O(ue,2),ce=I[0],B=I[1],b=this.getSharedProps();return l.exports.createElement(pe.Consumer,null,function(L){return l.exports.createElement(ye,{crossFrame:!1,returnFocus:!0,autoFocus:C,noFocusGuards:!0},l.exports.createElement(J,h({"data-baseweb":"drawer",ref:i.getRef("Root")},b,Q),l.exports.createElement(te,h({onClick:i.onBackdropClick},b,re)),l.exports.createElement(ne,h({},b,ie),l.exports.createElement(se,h({},b,le),n),_?l.exports.createElement(ce,h({"aria-label":L.drawer.close,onClick:i.onCloseClick},b,B,{onFocus:me(B,i.handleFocus),onBlur:he(B,i.handleBlur)}),l.exports.createElement(we,{title:L.drawer.close})):null)))})}},{key:"render",value:function(){var n=this.state.mounted&&(this.props.isOpen||this.state.isVisible),i=n||this.props.renderAll?this.getChildren():null;return i?n?l.exports.createElement(ge,{onEscape:this.onEscape,mountNode:this.props.mountNode},this.renderDrawer(i)):l.exports.createElement(F,null,i):null}}]),r}(l.exports.Component);c(U,"defaultProps",{animate:!0,closeable:!0,isOpen:!1,overrides:{},size:R.default,anchor:m.right,showBackdrop:!0,autoFocus:!0,renderAll:!1});const Ne=U,xe=({children:e})=>{const[t,r]=w.useState(!0);return w.createElement(Ne,{isOpen:t,autoFocus:!0,onClose:()=>window.location.reload(!0),anchor:m.right,overrides:{DrawerBody:{style:({$theme:o})=>({marginRight:0,marginLeft:0,marginTop:0,marginBottom:0,textColor:"#fff"})},Close:{style:({$theme:o})=>({color:"#fff "})},DrawerContainer:{style:({$theme:o})=>({width:"35rem"})}}},e)};function Qe({influencer:e}){return w.createElement(xe,null,w.createElement(be,{influencer:e,showBg:!0}))}export{Qe as default};
