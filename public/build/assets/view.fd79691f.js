import{r as c,R as e}from"./app.4d8752af.js";import m from"./Dashboard.b140a29c.js";import{B as r}from"./ButtonBack.2cde0198.js";import{c as o,n as s}from"./helpers.e2b0a119.js";import{M as i}from"./Modal.ae153985.js";import p from"./create.2d42ab19.js";import d from"./list.28130c32.js";import"./Avatar.d2970f38.js";import"./XMarkIcon.89bf4a7c.js";import"./transition.7d14efaa.js";import"./keyboard.8e9991e5.js";import"./dialog.db5b399f.js";import"./description.e3ed8b46.js";import"./moment.9709ab41.js";import"./Input.0b947abe.js";import"./Label.105f8b6c.js";import"./Select.9a66d297.js";import"./TextArea.de4ef973.js";import"./Button.7405f17a.js";import"./Toast.23042df3.js";import"./Card.6fccadf2.js";function G({campaign:a}){const[t,n]=c.exports.useState(!1);function l(){n(!t)}return e.createElement(m,{title:"Campaign Brief"},e.createElement(i,{iDisplay:t},e.createElement(p,{handleModalClose:l,campaign_briefs_id:a.id})),e.createElement("div",{className:"bg-white h-screen  mt-3 px-5 mb-10"},e.createElement(r,null),e.createElement("section",{className:"py-12 bg-white sm:py-16 lg:py-20 shadow-md border mt-5"},e.createElement("div",{className:"px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"},e.createElement("div",{className:"flex flex-col items-center justify-center "},e.createElement("div",{className:"w-32 h-32"},e.createElement("img",{src:a.logo_url,className:"w-full h-full object-fit rounded-full"})),e.createElement("div",{className:"mt-3"},e.createElement("span",{className:o(" p-2 rounded-md text-white capitalize",a.status==="pending"||a.status==="in-progress"?"bg-yellow-400":a.status==="approved"?"bg-green-400":a.status==="completed"?"bg-blue-400":a.status==="rejected"?"bg-red-400":"bg-gray-400 text-black")},a.status))),e.createElement("a",{href:"#reports",className:"text-blue-400"},"Go to  report"),e.createElement("div",{className:"flex flex-col mt-5   w-full"},e.createElement("div",{className:""},e.createElement("h3",{className:"font-bold text-3xl"},"Main Info")),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"campaign name:"),e.createElement("span",null,a.campaign_name)),e.createElement("div",{className:"flex space-x-10 "},e.createElement("span",{className:"capitalize font-bold"},"social networks:"),e.createElement("span",null,a.social_network)),e.createElement("div",{className:"flex space-x-10 "},e.createElement("span",{className:"capitalize font-bold"},"campaign budget:"),e.createElement("span",null,s(a.budget))),e.createElement("div",{className:"flex space-x-10 "},e.createElement("span",{className:"capitalize font-bold"},"campaign type:"),e.createElement("span",null,a.campaign_type)),e.createElement("div",{className:"mt-5"},e.createElement("h3",{className:"font-bold text-3xl"},"About Campaign")),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Start date:"),e.createElement("span",null,a.campaign_state_date)),e.createElement("div",{className:"flex space-x-10 "},e.createElement("span",{className:"capitalize font-bold"},"end date:"),e.createElement("span",null,a.campaign_end_date)),e.createElement("div",{className:"flex space-x-10 "},e.createElement("span",{className:"capitalize font-bold"},"campaign budget:"),e.createElement("span",null,a.currency," ",s(a.budget))),e.createElement("div",{className:"flex space-x-10 "},e.createElement("span",{className:"capitalize font-bold"},"campaign description:"),e.createElement("span",null,a.campaign_description)),e.createElement("div",{className:"flex space-x-10 "},e.createElement("span",{className:"capitalize font-bold"},"companay name/brand:"),e.createElement("span",null,a.brand_name)),e.createElement("div",{className:"mt-5"},e.createElement("h3",{className:"font-bold text-3xl"},"Tracked Keywords")),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Keywords:"),e.createElement("span",null,a.tracked_keywords)),e.createElement("div",{className:"mt-5"},e.createElement("h3",{className:"font-bold text-3xl"},"Target")),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Location:"),e.createElement("span",null,a.target_location)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Age:"),e.createElement("span",null,a.target_age)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"gender:"),e.createElement("span",null,a.target_gender)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"interest:"),e.createElement("span",null,a.target_interest)),e.createElement("div",{className:"mt-5"},e.createElement("h3",{className:"font-bold text-3xl capitalize"},"Campaign goal")),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"reach:"),e.createElement("span",null,a.reach_goal)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Impressions:"),e.createElement("span",null,a.impressions_goal)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Conversions:"),e.createElement("span",null,a.conversion_goal)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Engagement:"),e.createElement("span",null,a.engagement_goal)),e.createElement("div",{className:"mt-5"},e.createElement("h3",{className:"font-bold text-3xl capitalize"},"Campaign Content")),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"About us:"),e.createElement("span",null,a.about_us)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Campaign Message:"),e.createElement("span",null,a.campaign_message)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Key objectives:"),e.createElement("span",null,a.campaign_key_objectives)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Campaign Goal:"),e.createElement("span",null,a.campaign_goal)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"}," Channels:"),e.createElement("span",null,a.channels)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"}," Timeline:"),e.createElement("span",null,a.timeline)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"}," Mood Board:"),e.createElement("a",{href:a.mood_board_url,target:"_blank",className:"text-blue-400"},a.mood_board)),e.createElement("div",{className:"mt-5"},e.createElement("h3",{className:"font-bold text-3xl capitalize"},"Influencer Details")),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Size:"),e.createElement("span",null,a.influencer_size)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Category:"),e.createElement("span",null,a.influencer_category)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Niche:"),e.createElement("span",null,a.influencer_niche)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Gender:"),e.createElement("span",null,a.influencer_gender)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Number:"),e.createElement("span",null,a.influencer_number)),e.createElement("div",{className:"flex space-x-10 mt-2"},e.createElement("span",{className:"capitalize font-bold"},"Location:"),e.createElement("span",null,a.influencer_location)),e.createElement("div",{className:"my-10",id:"reports"},e.createElement("h3",{className:"font-bold text-3xl capitalize"},"Campaign Reports")),e.createElement(d,{handleModalClose:l,reports:a.reports}))))))}export{G as default};