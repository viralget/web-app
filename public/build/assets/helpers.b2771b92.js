import"./app.fa9ae017.js";import{h as a}from"./moment.9709ab41.js";function c(...e){return e.filter(Boolean).join(" ")}function i(e){return e.target.type==="checkbox"?e.target.checked:e.target.value}function m(e,o=!1,r="LL"){return o?a(e).fromNow():a(e).format(r)}function f(e){return String(e).replace(/&laquo;/g,"\xAB").replace(/&raquo;/g,"\xBB")}function v(e,o=1){const r=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],l=/\.0+$|(\.[0-9]*[1-9])0+$/;var t=r.slice().reverse().find(function(n){return e>=n.value});return t?(e/t.value).toFixed(o).replace(l,"$1")+t.symbol:"0"}export{c,f as e,m as f,i as g,v as n};
