import"./app.7179bf09.js";import{h as l}from"./moment.9709ab41.js";function g(...e){return e.filter(Boolean).join(" ")}function s(e){return e.target.type==="checkbox"?e.target.checked:e.target.value}function i(e,a=!1,t="LL"){return a?l(e).fromNow():l(e).format(t)}function f(e){return String(e).replace(/&laquo;/g,"\xAB").replace(/&raquo;/g,"\xBB")}function k(e,a=1){const t=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],n=/\.0+$|(\.[0-9]*[1-9])0+$/;var r=t.slice().reverse().find(function(u){return e>=u.value});return r?(e/r.value).toFixed(a).replace(n,"$1")+r.symbol:"0"}const c="\u20A6";function y(e){let a;switch(console.log({score:e}),!0){case e<25:a="Poor";break;case(e<=40&&e>=25):a="Average";break;case(e<=60&&e>=40):a="Good";break;case(e<=80&&e>=60):a="Very Good";break;case e>=80:a="Excellent";break}return a}function x(e){let a;switch(!0){case e<25:a="bg-red-50 text-red-500";break;case(e<=40&&e>=25):a="bg-blue-50 text-blue-500";break;case(e<=60&&e>40):a="bg-yellow-50 text-yellow-500";break;case(e<=80&&e>60):a="bg-green-50 text-green-500";break;case e>=90:a="bg-green-100 text-green-900";break;default:a="bg-gray-100 text-gray-900";break}return a}function v(e){let a;switch(!0){case e<25:a="bg-red-50 text-red-500";break;case(e<=40&&e>=25):a="bg-blue-50 text-blue-500";break;case(e<=60&&e>40):a="bg-yellow-50 text-yellow-500";break;case(e<=80&&e>60):a="bg-green-50 text-green-500";break;case e>=90:a="bg-green-100 text-green-900";break;default:a="bg-gray-100 text-gray-900";break}return a}function m(e){let a;switch(!0){case e<=40:a="Not Safe";break;case(e<=60&&e>=40):a="Quite Safe";break;case(e<=80&&e>=60):a="Safe";break;case e>=80:a="Very Safe";break}return a}function d(e,a,t){return t.indexOf(e)===a}export{m as a,x as b,g as c,y as d,f as e,i as f,s as g,c as h,k as n,d as o,v as s};
