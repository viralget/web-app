import{R as e}from"./app.fb877f69.js";import{I as s}from"./Input.889e91d8.js";import{T as a}from"./TextArea.0f58c920.js";import"./moment.9709ab41.js";import"./Label.c3b5aba2.js";import"./helpers.472d4338.js";const i=({image:t,displayFile:l,name:n,isRequired:r})=>e.createElement("div",{className:"flex space-x-2"},e.createElement("div",{className:"relative"},t!=null?e.createElement("div",{className:"w-[62px]  h-[62px]"},e.createElement("img",{src:t,alt:"",className:"rounded-md w-full h-full object-cover"})):e.createElement("div",null,e.createElement("svg",{width:"62",height:"62",viewBox:"0 0 62 62",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("rect",{width:"62",height:"62",rx:"8",fill:"#FEF2EB"}),e.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.7847 21.5781L38.9098 21.5806C40.5436 21.6455 41.8553 22.9542 41.9382 24.5745L41.9424 24.7375L41.9422 34.0879L41.9382 34.1556C41.902 34.4676 41.6369 34.7052 41.3203 34.7052C41.0053 34.7052 40.745 34.4712 40.7038 34.1675L40.6982 34.0831L40.7178 32.5989L36.5147 27.5844L30.1044 35.7367L32.4274 38.7389L32.4683 38.7995C32.5744 38.9793 32.5833 39.2011 32.4909 39.3894C32.3994 39.5758 32.2221 39.7025 32.0202 39.7313L31.9324 39.7375L23.896 39.7375L23.7708 39.735C22.1371 39.6701 20.8254 38.3614 20.7424 36.7411L20.7383 36.5781L20.7383 24.7358L20.7408 24.6107C20.8057 22.9769 22.1144 21.6652 23.7346 21.5823L23.8977 21.5781L38.7847 21.5781ZM38.1488 33.6724C38.4638 33.6724 38.7241 33.9064 38.7652 34.2101L38.7709 34.2945L38.7701 36.8437L41.3252 36.8441L41.3929 36.8482C41.7049 36.8844 41.9425 37.1495 41.9425 37.4661C41.9425 37.7811 41.7085 38.0413 41.4048 38.0825L41.3204 38.0882L38.7701 38.0875L38.7708 40.6425L38.7667 40.7102C38.7305 41.0222 38.4655 41.2598 38.1488 41.2598C37.8338 41.2598 37.5736 41.0258 37.5324 40.7221L37.5267 40.6377L37.5263 38.0875L34.9724 38.0881L34.9048 38.084C34.5927 38.0478 34.3551 37.7827 34.3551 37.4661C34.3551 37.1511 34.5891 36.8909 34.8928 36.8497L34.9772 36.844L37.5263 36.8437L37.5269 34.2897L37.5309 34.2221C37.5671 33.91 37.8322 33.6724 38.1488 33.6724ZM23.8997 22.8223L38.7828 22.8223L38.9146 22.8268L39.0441 22.8401C39.9415 22.9632 40.6468 23.7111 40.6954 24.6359L40.698 24.7397L40.6972 30.6382L36.9761 26.1986L36.9111 26.1319C36.7956 26.0297 36.6456 25.9735 36.4894 25.9762C36.3296 25.9787 36.1771 26.0426 36.0634 26.1544L36.0137 26.2097L29.3201 34.7227L26.9267 31.6303L26.8627 31.5595C26.7479 31.4507 26.595 31.3889 26.434 31.3889C26.2694 31.3891 26.1119 31.4545 25.9958 31.5701L25.9452 31.6274L24.0804 34.0513L24.0297 34.1283C23.882 34.3933 23.9466 34.7333 24.1941 34.9238C24.4435 35.1156 24.7957 35.0906 25.0152 34.8688L25.0632 34.814L26.4358 33.0285L30.6637 38.4927L23.8975 38.4933L23.7657 38.4888C22.8076 38.4233 22.0358 37.6485 21.985 36.6797L21.9823 36.5759L21.9823 24.7375L21.9868 24.6057C22.0524 23.6476 22.8271 22.8758 23.7959 22.825L23.8997 22.8223ZM26.435 24.6228C27.7106 24.6228 28.7486 25.6608 28.7486 26.9365C28.7486 28.2121 27.7106 29.2501 26.435 29.2501C25.1594 29.2501 24.1214 28.2121 24.1214 26.9365C24.1214 25.6608 25.1594 24.6228 26.435 24.6228ZM25.3654 26.9365C25.3654 26.3466 25.845 25.867 26.4348 25.867C27.0247 25.867 27.5043 26.3466 27.5043 26.9365C27.5043 27.5263 27.0247 28.0059 26.4348 28.0059C25.845 28.0059 25.3654 27.5263 25.3654 26.9365Z",fill:"#F37C38"}))),e.createElement("input",{type:"file",accept:"image/jpeg, image/png",className:`w-40 h-20 absolute top-5 opacity-0
                    select-none
                    cursor-pointer`,onChange:l,required:r})),e.createElement("div",{className:"flex flex-col  space-y-1 justify-center "},e.createElement("span",{className:"text-t-normal font-bold text-viralget-grey capitalize"},"Upload  ",n," ",r?"":"(optional)"," "),e.createElement("span",{className:"text-t-normal w-[271px] font-normal text-viralget-gray-400"},"Upload PNG or JPEG file. File size limit is up to 4MB"),t?e.createElement("span",{className:"text-t-normal  font-bold text-viralget-red"},"Change ",n):null)),d=i,E=({data:t,onHandleChange:l,setData:n,handleBudget:r,displayFile:m,image:c})=>e.createElement(e.Fragment,null,e.createElement("div",{className:"space-y-12"},e.createElement("div",{className:"grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3"},e.createElement("div",null,e.createElement("h2",{className:"text-base font-semibold leading-7 text-gray-900"},"Campaign Content Details"),e.createElement("p",{className:"mt-1 text-sm leading-6 text-gray-600"},"Provide the necessary details of your campaign.")),e.createElement("div",{className:"grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2"},e.createElement("div",{className:"col-span-full"},e.createElement("div",{className:"mt-2"},e.createElement(d,{displayFile:m,image:c,name:"logo",isRequired:!c}))),e.createElement("div",{className:"col-span-full"},e.createElement(a,{type:"text",name:"about_us",label:"About us",placeholder:"2-3 sentences  explaining what your company does.",className:"mt-1 block w-full h-32",defaultValue:t.about_us,onChange:l,required:!0})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(a,{type:"text",name:"campaign_goal",label:"Taskl",placeholder:"1-2 sentenses on what you expect from the influencer",className:"mt-1 block w-full h-32",defaultValue:t.campaign_goal,onChange:l,required:!0})),e.createElement("div",{className:"col-span-full"},e.createElement(a,{type:"text",name:"campaign_message",label:"Dos",placeholder:"Instructions on what the influencer can/must do",className:"mt-1 block w-full h-32",defaultValue:t.campaign_message,onChange:l,required:!0})),e.createElement("div",{className:"col-span-full"},e.createElement(a,{type:"text",name:"key_objectives",label:"Don'ts",placeholder:"Instructions on what the influencer can't/mustn't do",className:"mt-1 block w-full h-32",defaultValue:t.key_objectives,onChange:l,required:!0})),e.createElement("div",{className:"sm:col-span-3"},e.createElement(s,{type:"text",name:"timeline",label:"Timeline",required:!0,placeholder:"Enter expected delivery timeline",defaultValue:t.timeline,onChange:l})),e.createElement("div",{className:"sm:col-span-3"},e.createElement(s,{type:"file",name:"mood_board",accept:".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf",label:"Mood board",required:!0,placeholder:"Input mood board",defaultValue:t.mood_board,onChange:o=>n("mood_board",o.target.files[0])})),e.createElement("div",{className:"sm:col-span-full"},e.createElement(a,{type:"text",name:"target_audience",label:"Audience Insights",required:!0,placeholder:"Brief Insight about the target audience",defaultValue:t.target_audience,onChange:l}))))));export{E as default};
