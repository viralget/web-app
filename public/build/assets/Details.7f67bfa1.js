import{R as e,L as a}from"./app.7179bf09.js";import{f as o}from"./helpers.0557fa85.js";import{A as d}from"./Avatar.ed1856cd.js";import{V as f}from"./ValidationErrors.b8ab5216.js";import"./moment.9709ab41.js";import"./Error.5c8c8e29.js";function y(s){var m,r,n,l,c,i;const{influencer:t}=s;return e.createElement(e.Fragment,null,e.createElement("div",{className:"min-h-full"},e.createElement(f,{errors:s.errors}),e.createElement("main",{className:"py-10"},e.createElement("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"},e.createElement("div",{className:"flex items-center space-x-5"},e.createElement("div",{className:"flex-shrink-0"},e.createElement("div",{className:"relative"},e.createElement(d,{url:t.logo_url,userName:t==null?void 0:t.name,className:"h-16 w-16 rounded-full"}),e.createElement("span",{className:"absolute inset-0 rounded-full shadow-inner","aria-hidden":"true"}))),e.createElement("div",null,e.createElement("h1",{className:"text-2xl font-bold text-gray-900"},t==null?void 0:t.name),e.createElement("p",{className:"text-sm font-medium text-gray-500"},"Joined since: ",e.createElement("time",{dateTime:o(t.created_at,!1,"LLLL")},o(t.created_at))))),e.createElement("div",{className:"justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3"},t.approval_status=="pending"?e.createElement(a,{href:`${route("admin.influencers.whatsapp.approval",{influencer:t.id})}?status=approved`,className:"inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"},"Approve Account"):e.createElement(a,{href:`${route("admin.influencers.whatsapp.approval",{influencer:t.id})}?status=pending`,className:"inline-flex items-center justify-center rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"},"Mark as Unapproved"),t.is_verified?e.createElement(a,{href:`${route("admin.influencers.whatsapp.verification",{influencer:t.id})}?status=unverified`,className:"inline-flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"},"Mark as Unverified"):e.createElement(a,{href:`${route("admin.influencers.whatsapp.verification",{influencer:t.id})}?status=verified`,className:"inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100"},"Mark as Verified"))),e.createElement("div",{className:"mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"},e.createElement("div",{className:"space-y-6 lg:col-span-2 lg:col-start-1"},e.createElement("section",{"aria-labelledby":"applicant-information-title"},e.createElement("div",{className:"bg-white shadow sm:rounded-lg"},e.createElement("div",{className:"px-4 py-5 sm:px-6"},e.createElement("h2",{id:"applicant-information-title",className:"text-lg font-medium leading-6 text-gray-900"},"Influencer Information")),e.createElement("div",{className:"border-t border-gray-200 px-4 py-5 sm:px-6"},e.createElement("dl",{className:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Gender"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},t.gender)),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Age"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},t.age)),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Location"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},t.state,", ",t.country)),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Video Evidence"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},e.createElement("a",{href:t.video_evidence,download:!0},"Download"))),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Average Views"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},(m=t.average_views)!=null?m:"Not set")),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Occupation"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},(r=t.occupation)!=null?r:"Not set")),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Marital Status"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},(n=t.marital_status)!=null?n:"Not set")),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Parent Status"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},(l=t.parental_status)!=null?l:"Not set")),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Website"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},(c=t.website)!=null?c:"Not set")),e.createElement("div",{className:"sm:col-span-1"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"Interests"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},(i=t.interests)!=null?i:"Not set")),e.createElement("div",{className:"sm:col-span-2"},e.createElement("dt",{className:"text-sm font-medium text-gray-500"},"About"),e.createElement("dd",{className:"mt-1 text-sm text-gray-900"},e.createElement("div",{className:"mt-4 space-y-6 text-sm text-gray-800 job-details",dangerouslySetInnerHTML:{__html:t.about}}))))))))))))}export{y as default};
