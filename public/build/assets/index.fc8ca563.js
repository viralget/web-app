import{r,ap as f,R as t}from"./app.a5286dc2.js";import{A as d}from"./AuthenticatedLayout.61488cf8.js";import"./moment.9709ab41.js";import x from"./SearchBox.64d9aefd.js";import S from"./index.3c7a161e.js";import E from"./index.f83311f7.js";import m from"./index.814591de.js";import"./api.f37ec366.js";import"./Toast.b71ab449.js";import"./index.e2dba388.js";import g from"./index.9aaa1489.js";import"./Logo.b596dad6.js";import"./helpers.2d6f622c.js";import"./DropdownMenu.f9ded14a.js";import"./Avatar.690af831.js";import"./Button.0729b9af.js";import"./ChevronDownIcon.cc65d417.js";import"./transition.387e8173.js";import"./keyboard.ad91c4ea.js";import"./XMarkIcon.7d4eb9dd.js";import"./Bars3CenterLeftIcon.c3f31784.js";import"./MagnifyingGlassIcon.3dbb9aff.js";import"./description.634e4a96.js";import"./SearchForm.1a268991.js";import"./Label.d4b2c1d3.js";import"./Select.9651cb9e.js";import"./Typography.2c002ce7.js";import"./Error.1d773553.js";import"./index.9d848634.js";import"./Combination.10452ea6.js";import"./Profile.5c6cf8ad.js";import"./header.026f1d2c.js";import"./MenuDropDown.8dc950a5.js";import"./influencerSize.61e9456e.js";import"./audienceCard.5da1d638.js";import"./QAS.c435d54d.js";import"./index.e8fcc329.js";import"./card.1f813e2e.js";import"./profiling.81eacc85.js";import"./footer.5ede8113.js";import"./EmptyState.40c6fb40.js";import"./BoltIcon.848fcb7a.js";import"./searchCard.f160c07b.js";import"./featureCard.a99330bb.js";function ft({saved_search:e,search_history:o,top_categories:i,top_influencers:p,categories:a,total_count:A}){const[b,l]=r.exports.useState(!1),[C,n]=r.exports.useState(!1),[R,c]=r.exports.useState(!1),[s]=r.exports.useContext(f);return t.createElement(d,{smallHeader:!1,title:"Search through our database of influencers",bgColor:s.bg_color},t.createElement("main",{className:"flex-1 pb-8 px-10"},t.createElement(x,{categories:a,searchActive:()=>n(!0),loading:()=>c(!0),handleResult:u=>l(u)}),t.createElement("div",null,t.createElement("div",{className:""},(e==null?void 0:e.length)>0&&t.createElement(m,{title:"Saved Searches",data:e,isSaved:!0}),(o==null?void 0:o.length)>0&&t.createElement(m,{data:o}),t.createElement(g,null),t.createElement(E,{data:i}),t.createElement(S,{data:p})))))}export{ft as default};