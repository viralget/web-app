import{r as R,R as l}from"./app.ab529ffa.js";import C from"./card.d6c9335e.js";import{c as P,S as L,k as t}from"./icons.ff85f760.js";const h=({chartData:e})=>{const a={type:"pie",data:{labels:e==null?void 0:e.dataLabels,datasets:[{label:e==null?void 0:e.chartName,data:e==null?void 0:e.data,backgroundColor:e==null?void 0:e.colors,hoverOffset:4}]},options:{}};return R.exports.useEffect(()=>{new Chart(document.getElementById("chartPie"),a)},[]),console.log("chartData:",e),l.createElement("div",{className:"overflow-hidden"},l.createElement("canvas",{className:"p-1  border rounded-md ",id:"chartPie"}))},B=({metrics:e})=>{var n,d,s,g,f,u,w,v,p,r,x,E,b,_,N,i,k;const o=((n=e==null?void 0:e.link_tweets)==null?void 0:n.value)+((d=e==null?void 0:e.media_tweets)==null?void 0:d.value)+((s=e==null?void 0:e.text_tweets)==null?void 0:s.value),a={dataLabels:["Tweets","Retweets","Replies"],data:[o,(g=e==null?void 0:e.total_retweets)==null?void 0:g.value,(f=e.total_replies)==null?void 0:f.value],chartName:"metrics",colors:["#eb4034","#18a81c","#aa1cc9"]},c=[{title:"Engagements",icon:l.createElement(P,null),score:(u=e==null?void 0:e.engagements)==null?void 0:u.value,increase:(w=e==null?void 0:e.engagements)==null?void 0:w.growth,label:"engagement"},{title:"Likes",icon:l.createElement(L,null),score:(v=e==null?void 0:e.total_likes)==null?void 0:v.value,increase:(p=e==null?void 0:e.total_likes)==null?void 0:p.growth,label:"likes"},{title:"Retweet",icon:l.createElement(t,null),score:(r=e==null?void 0:e.total_retweets)==null?void 0:r.value,increase:(x=e==null?void 0:e.total_retweets)==null?void 0:x.growth,label:"retweet"},{title:"Media tweets",icon:l.createElement(t,null),score:(E=e==null?void 0:e.media_tweets)==null?void 0:E.value,increase:(b=e==null?void 0:e.media_tweets)==null?void 0:b.growth,label:"medial tweets"},{title:"Link tweets",icon:l.createElement(t,null),score:(_=e==null?void 0:e.link_tweets)==null?void 0:_.value,increase:(N=e==null?void 0:e.link_tweets)==null?void 0:N.value,label:"link tweets"},{title:"Text tweets",icon:l.createElement(t,null),score:(i=e==null?void 0:e.text_tweets)==null?void 0:i.value,increase:(k=e==null?void 0:e.media_tweets)==null?void 0:k.growth,label:"text tweets"}];return l.createElement("div",{className:"mt-space-60 flex flex-col space-y-10"},l.createElement("div",{className:"flex  lg:flex-row   flex-col  lg:space-x-5 w-full  lg:space-y-0 space-y-3"},l.createElement("div",{className:"w-auto"},l.createElement(h,{chartData:a})),l.createElement("div",{className:"grid lg:grid-cols-3 grid-cols-2  w-full   gap-3 md:pl-0  lg:gap-5"},c.map((y,m)=>l.createElement(C,{item:y,key:m})))),l.createElement("div",{className:"   grid grid-cols-2 gap-5 "},l.createElement("div",{className:"flex flex-col border p-3 rounded-md"},l.createElement("span",{className:"text-t-normal  font-medium font-satoshi  text-viralget-gray-400"}," No. of contributors"),l.createElement("span",{className:"font-semibold text-h1  font-lexend "},e.no_of_contributors)),l.createElement("div",{className:"flex flex-col border p-3  rounded-md"},l.createElement("span",{className:"text-t-normal  font-medium font-satoshi  text-viralget-gray-400"}," Original contributors"),l.createElement("span",{className:"font-semibold text-h1  font-lexend "},e.original_contributors)),l.createElement("div",{className:"flex flex-col border p-3 rounded-md"},l.createElement("span",{className:"text-t-normal  font-medium font-satoshi  text-viralget-gray-400"}," Avg. tweet per contributors "),l.createElement("span",{className:"font-semibold text-h1  font-lexend "},e.average_tweet_per_contributor)),l.createElement("div",{className:"flex flex-col border p-3 rounded-md"},l.createElement("span",{className:"text-t-normal  font-medium font-satoshi  text-viralget-gray-400"}," Avg. follower per contributors"),l.createElement("span",{className:"font-semibold text-h1  font-lexend "},e.average_follower_per_contributor))))};export{B as default};