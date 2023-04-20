import{r as n,R as e}from"./app.7fa3bd1a.js";import"./moment.9709ab41.js";import{L as j}from"./Label.69cb16f0.js";import{X as O}from"./XMarkIcon.b13d806d.js";function P({title:l,titleId:i,...d},p){return n.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:p,"aria-labelledby":i},d),l?n.exports.createElement("title",{id:i},l):null,n.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))}const M=n.exports.forwardRef(P),U=M;function q({title:l,titleId:i,...d},p){return n.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:p,"aria-labelledby":i},d),l?n.exports.createElement("title",{id:i},l):null,n.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))}const z=n.exports.forwardRef(q),D=z;function B({title:l,titleId:i,...d},p){return n.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:p,"aria-labelledby":i},d),l?n.exports.createElement("title",{id:i},l):null,n.exports.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"}))}const F=n.exports.forwardRef(B),G=F,$=({label:l,name:i,options:d,onChange:p,defaultOptionText:E,useSelectedOptions:y})=>{const S="Select an option",[k,x]=n.exports.useState(!1),[u,b]=n.exports.useState(E!=null?E:S),[f,w]=n.exports.useState(y!=null?y:[]),N=n.exports.useRef(null);L(N);const h=(a,s,o)=>{var c;b((c=s.name)!=null?c:o);let r=f;r.includes(o)?r.pop(o):r.push(o),console.log({_selectedOptions:r}),w(r),a.target.value=r,p(a)};function L(a){n.exports.useEffect(()=>{function s(o){a.current&&!a.current.contains(o.target)&&x(!1)}return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[a])}const m=()=>{w([]),b(S)};return e.createElement("div",{className:"relative"},l&&e.createElement(j,{for:i,value:l}),e.createElement("div",{onClick:()=>x(!k),className:"w-full py-3 px-0 rounded bg-white text-sm font-medium leading-none text-gray-800 flex items-center justify-between cursor-pointer"},e.createElement("div",{className:"flex justify-between w-full"},e.createElement("span",null,u),e.createElement("span",null,f.length>1&&e.createElement("span",{className:"text-xs bg-gray-100 text-gray-500 rounded p-1 mr-1"},"+",f.length-1))),e.createElement("div",null,f.length>0?e.createElement(O,{className:"w-3 h-3 z-1",onClick:m}):k?e.createElement(G,{className:"w-3 h-3"}):e.createElement(D,{className:"w-3 h-3"}))),k&&e.createElement("div",{ref:N,className:"absolute z-10 -left-2 w-full"},e.createElement("div",{className:"mt-2 w-64 p-2 h-auto bg-white shadow rounded"},l&&e.createElement("h4",{className:"h4 px-2 font-bold"},l),d.length&&d.map((a,s)=>{var r,c;const o=(r=a.value)!=null?r:a.name;return e.createElement("div",{className:"flex py-2 px-2 items-center text-sm justify-between cursor-pointer hover:bg-gray-50",key:s,onClick:v=>h(v,a,o)},e.createElement("div",{className:"flex items-center"},e.createElement("div",{className:"flex items-center"},e.createElement("p",{className:"leading-normal ml-2 text-gray-800"},(c=a.name)!=null?c:a.value))),f.includes(o)&&e.createElement(U,{className:"w-4 text-black h-4"}))}))))},g=$;function K({keywords:l,location:i,category:d,salaryRange:p,dateRange:E,workmode:y,jobType:S,showFull:k=!1,handleSubmit:x,handleChange:u,className:b,categories:f,getSearches:w,handleFiltering:N}){n.exports.useEffect(()=>{L(w)},[w]),n.exports.useEffect(()=>{C()},[]);const[h,L]=n.exports.useState(w!=null?w:[]),m=new URLSearchParams(window.location.search).get("influencer_location"),a=new URLSearchParams(window.location.search).get("size"),s=new URLSearchParams(window.location.search).get("audience_location"),o=new URLSearchParams(window.location.search).get("influencer_qas"),r=new URLSearchParams(window.location.search).get("category"),c=new URLSearchParams(window.location.search).get("position"),v=new URLSearchParams(window.location.search).get("keywords"),C=()=>{let t=[];m&&t.push({query:"influencer_location",name:"Influencer Location",value:m==null?void 0:m.split(",")}),a&&t.push({query:"size",name:"Influencer Size",value:a.split(",")}),s&&t.push({query:"audience_location",name:"Audience Location",value:s==null?void 0:s.split(",")}),o&&t.push({query:"influencer_qas",name:"Influencer Qas",value:o==null?void 0:o.split(",")}),r&&t.push({query:"category",name:"Category",value:r==null?void 0:r.split(",")}),c&&t.push({query:"position",name:"Position",value:c==null?void 0:c.split(",")}),v&&t.push({query:"keywords",name:"Keywords",value:v}),L(t)};return e.createElement("div",{className:b},e.createElement("form",{action:"#",onSubmit:x,className:"sm:mx-auto lg:mx-0"},e.createElement("div",{className:"hidden md:grid grid-cols-5 gap-4 bg-white shadow px-5 p-4 rounded-md"},e.createElement("div",{className:"md:pr-6 md:border-r border-gray-100"},e.createElement(g,{options:[{name:"Any",value:""},{name:"Nigeria",value:"Nigeria"},{name:"Ghana",value:"Ghana"}],onChange:t=>u(t,"Influencer Location","influencer_location"),label:"Influencer Location",defaultOptionText:m,useSelectedOptions:m==null?void 0:m.split(",")})),e.createElement("div",{className:"md:pr-6 md:border-r border-gray-100"},e.createElement(g,{options:[{name:"Any",value:""},{name:"Nano (1000 - 10,000)",value:"10000"},{name:"Micro (10,000 - 50,000)",value:"50000"},{name:"Mid Tier (50,000 - 500k)",value:"500000"},{name:"Macro (500k - 1m)",value:"1000000"}],onChange:t=>u(t,"Influencer Size","size"),label:"Influencer Size",defaultOptionText:a,useSelectedOptions:a==null?void 0:a.split(",")})),e.createElement("div",{className:"md:pr-6 md:border-r"},e.createElement(g,{options:[{name:"Any",value:""},{name:"Nigeria",value:"Nigeria"},{name:"Ghana",value:"Ghana"}],onChange:t=>u(t,"Audience Location","audience_location"),label:"Audience Location",defaultOptionText:s,useSelectedOptions:s==null?void 0:s.split(",")})),e.createElement("div",{className:"md:pr-6 md:border-r border-gray-100"},e.createElement(g,{options:[{name:"Any",value:""},{name:"Excellent >90",value:"excellent"},{name:"Very Good >80",value:"very good"},{name:"Good >60",value:"good"},{name:"Average >40",value:"average"},{name:"Poor >25",value:"poor"}],onChange:t=>u(t,"Influencer QAS","influencer_qas"),label:"Influencer QAS",defaultOptionText:o,useSelectedOptions:o==null?void 0:o.split(",")})),e.createElement("div",{className:"flex items-center sm:mt-0 sm:ml-3"},e.createElement("button",{onClick:x,className:" w-full py-2  rounded-md shadow bg-orange-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "},"Search"))),e.createElement("div",{className:"sm:flex items-center align-middle my-3 space-x-2"},e.createElement("div",{className:"flex-initial w-64 bg-white shadow rounded-md py-1 px-3 "},e.createElement(g,{options:f,name:"category",onChange:t=>u(t,"Category","category"),defaultOptionText:r||"Category",useSelectedOptions:r==null?void 0:r.split(",")})),e.createElement("div",{className:" flex flex-1 rounded-md shadow bg-white p-1 px-3"},e.createElement("div",{className:"w-64 border-r border-gray-100 pr-3"},e.createElement(g,{options:[{name:"Anywhere"},{name:"In Bio",value:"bio"},{name:"In Contents",value:"contents"}],name:"category",onChange:t=>u(t,"Position","position"),className:"text-xs",useBorder:!1,useSelectedOptions:c==null?void 0:c.split(","),defaultOptionText:c||"Anywhere"})),e.createElement("input",{id:"keywords",name:"keywords",type:"text",defaultValue:v||l,onChange:t=>u(t,"Keywords","keywords"),placeholder:"Find influencers by keywords or hashtag",className:"block w-full px-3  flex-grow  text-sm rounded-none rounded-r-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"}))),(h==null?void 0:h.length)>0&&e.createElement("div",{class:"flex  -mt-3 mb-3 flex-wrap p-3 text-sm"},h.map((t,R)=>e.createElement("div",{className:" p-2 mr-3 mt-2  flex ",key:R},e.createElement("span",{className:"font-normal"},t.name,": "),Array.isArray(t==null?void 0:t.value)?t.value.map((I,A)=>e.createElement("span",{className:"ml-2 text-viralget-grey"},"  ",I," ",A+1===t.value.length?"":","," ")):e.createElement("span",{className:"ml-2 text-viralget-grey"},"  ",t.value," "),e.createElement("span",{className:"ml-2 mt-1 cursor-pointer",onClick:()=>N(t)},e.createElement("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("g",{clipPath:"url(#clip0_958_74924)"},e.createElement("path",{d:"M10.1595 3.89062L3.88867 10.1615",stroke:"#748094",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),e.createElement("path",{d:"M10.1595 10.1615L3.88867 3.89062",stroke:"#748094",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),e.createElement("defs",null,e.createElement("clipPath",{id:"clip0_958_74924"},e.createElement("rect",{width:"14",height:"14",fill:"white"}))))))))))}export{K as default};
