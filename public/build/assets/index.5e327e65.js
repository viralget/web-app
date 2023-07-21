import{r,R as t}from"./app.1fbb248a.js";import{G as M}from"./Guest.af6081cc.js";import{C as P,S as $,I as L,y as S,b as H,o as k,k as O,u as D,p as I,$ as C,l as F,d as G,e as V,g as b,r as j}from"./transition.9e4679b1.js";import"./Header.22ae3ce7.js";import"./helpers.1cd6bcc2.js";import"./moment.9709ab41.js";import"./Button.5abd8ba6.js";import"./Container.7f8ddde8.js";import"./Logo.6da8fed8.js";import"./NavLink.b1932728.js";import"./use-event-listener.c7464666.js";import"./DropdownMenu.d6253535.js";import"./Avatar.53a45213.js";import"./Button.e32771f9.js";import"./ChevronDownIcon.6e7e4e27.js";var A=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(A||{}),U=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(U||{});let W={[0]:e=>({...e,disclosureState:D(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,s){return e.buttonId===s.buttonId?e:{...e,buttonId:s.buttonId}},[3](e,s){return e.panelId===s.panelId?e:{...e,panelId:s.panelId}}},N=r.exports.createContext(null);N.displayName="DisclosureContext";function T(e){let s=r.exports.useContext(N);if(s===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,T),a}return s}let R=r.exports.createContext(null);R.displayName="DisclosureAPIContext";function Q(e){let s=r.exports.useContext(R);if(s===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Q),a}return s}let B=r.exports.createContext(null);B.displayName="DisclosurePanelContext";function _(){return r.exports.useContext(B)}function K(e,s){return D(s.type,W,e,s)}let X=r.exports.Fragment,Y=P(function(e,s){let{defaultOpen:a=!1,...i}=e,l=`headlessui-disclosure-button-${L()}`,o=`headlessui-disclosure-panel-${L()}`,u=r.exports.useRef(null),f=S(s,H(g=>{u.current=g},e.as===void 0||e.as===r.exports.Fragment)),x=r.exports.useRef(null),w=r.exports.useRef(null),p=r.exports.useReducer(K,{disclosureState:a?0:1,linkedPanel:!1,buttonRef:w,panelRef:x,buttonId:l,panelId:o}),[{disclosureState:d},c]=p;r.exports.useEffect(()=>c({type:2,buttonId:l}),[l,c]),r.exports.useEffect(()=>c({type:3,panelId:o}),[o,c]);let h=k(g=>{c({type:1});let y=V(u);if(!y)return;let q=(()=>g?g instanceof HTMLElement?g:g.current instanceof HTMLElement?g.current:y.getElementById(l):y.getElementById(l))();q==null||q.focus()}),E=r.exports.useMemo(()=>({close:h}),[h]),n=r.exports.useMemo(()=>({open:d===0,close:h}),[d,h]),m={ref:f};return t.createElement(N.Provider,{value:p},t.createElement(R.Provider,{value:E},t.createElement(O,{value:D(d,{[0]:I.Open,[1]:I.Closed})},C({ourProps:m,theirProps:i,slot:n,defaultTag:X,name:"Disclosure"}))))}),Z="button",z=P(function(e,s){let[a,i]=T("Disclosure.Button"),l=_(),o=l===null?!1:l===a.panelId,u=r.exports.useRef(null),f=S(u,s,o?null:a.buttonRef),x=k(n=>{var m;if(o){if(a.disclosureState===1)return;switch(n.key){case b.Space:case b.Enter:n.preventDefault(),n.stopPropagation(),i({type:0}),(m=a.buttonRef.current)==null||m.focus();break}}else switch(n.key){case b.Space:case b.Enter:n.preventDefault(),n.stopPropagation(),i({type:0});break}}),w=k(n=>{switch(n.key){case b.Space:n.preventDefault();break}}),p=k(n=>{var m;j(n.currentTarget)||e.disabled||(o?(i({type:0}),(m=a.buttonRef.current)==null||m.focus()):i({type:0}))}),d=r.exports.useMemo(()=>({open:a.disclosureState===0}),[a]),c=F(e,u),h=e,E=o?{ref:f,type:c,onKeyDown:x,onClick:p}:{ref:f,id:a.buttonId,type:c,"aria-expanded":e.disabled?void 0:a.disclosureState===0,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:x,onKeyUp:w,onClick:p};return C({ourProps:E,theirProps:h,slot:d,defaultTag:Z,name:"Disclosure.Button"})}),J="div",ee=$.RenderStrategy|$.Static,te=P(function(e,s){let[a,i]=T("Disclosure.Panel"),{close:l}=Q("Disclosure.Panel"),o=S(s,a.panelRef,d=>{i({type:d?4:5})}),u=G(),f=(()=>u!==null?u===I.Open:a.disclosureState===0)(),x=r.exports.useMemo(()=>({open:a.disclosureState===0,close:l}),[a,l]),w=e,p={ref:o,id:a.panelId};return t.createElement(B.Provider,{value:a.panelId},C({ourProps:p,theirProps:w,slot:x,defaultTag:J,features:ee,visible:f,name:"Disclosure.Panel"}))}),v=Object.assign(Y,{Button:z,Panel:te});const ae=[{question:"Which social networks are supported by ViralGet?",answer:"VirlaGet supports the highest-performing social media channel for organic reach, including Instagram and Twitter."},{question:"Do I get full access to Discovery if I subscribe to Basic plan?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},{question:"How does ViralGet work?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},{question:"What to consider when looking at QAS?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},{question:"What is QAS (Quality Audience Score) and how is it calculated?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},{question:"How ViralGet detect Instagram audience location?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."},{question:"How ViralGet detect audience interests?",answer:"I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."}],se=()=>t.createElement("svg",{width:"16",height:"2",viewBox:"0 0 16 2",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M1.125 1H14.875",stroke:"#748094","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),re=()=>t.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("g",{"clip-path":"url(#clip0_1046_8549)"},t.createElement("path",{d:"M3.125 10H16.875",stroke:"#748094","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),t.createElement("path",{d:"M10 3.125V16.875",stroke:"#748094","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_1046_8549"},t.createElement("rect",{width:"20",height:"20",fill:"white"}))));function ke(){return t.createElement(M,null,t.createElement("div",{className:"mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8"},t.createElement("div",{className:"mx-auto max-w-3xl "},t.createElement("div",{className:"text-center"},t.createElement("span",{className:"font-Lexend  text-[16px]  font-bold  text-viralget-red"},"FAQs")),t.createElement("h2",{className:"text-center text-3xl font-bold tracking-tight text-viralget-grey sm:text-3xl"},"\u{1F44B} Frequently asked questions"),t.createElement("div",{className:"flex flex-col items-center mt-3"},t.createElement("span",{className:"text-viralget-red  text-xs"},"We are glad having you here looking for the answer to your question,"),t.createElement("span",{className:"text-viralget-grey text-xs"},"this guide will help you learn more about our product and its features.")),t.createElement("dl",{className:"mt-6 space-y-6 "},ae.map(e=>t.createElement(v,{as:"div",key:e.question,className:"pt-6   shadow-md rounded p-3"},({open:s})=>t.createElement(t.Fragment,null,t.createElement("dt",{className:"text-lg"},t.createElement(v.Button,{className:"flex w-full items-start justify-between text-left text-gray-400"},t.createElement("span",{className:"font-medium text-viralget-grey  font-bold text-sm"},e.question),t.createElement("span",{className:"ml-6 flex h-7 items-center"},t.createElement("div",null,s?t.createElement(se,null):t.createElement(re,null))))),t.createElement(v.Panel,{as:"dd",className:"mt-2 pr-12"},t.createElement("p",{className:"text-base text-viralget-grey text-xs"},e.answer)))))))))}export{ke as default};
