import { InstagramSvg, TwitterSvg, DoneSvg, CancelFillRedSvg } from "@/Utils/icons";

const features = [
      {
            section: "Plan",
            features: [
                  {
                        "feature_name": "Social Media Platform",
                        "feature_data_field": "social_media_platform"
                  }],
      },
      {
            section: "Find",
            features: [
                  {
                        "feature_name": "Discovery",
                        "feature_data_field": "discovery"
                  },
                  {
                        "feature_name": "Access to database",
                        "feature_data_field": "access_to_database"
                  },
                  {
                        "feature_name": "Numbers of search filters",
                        "feature_data_field": "numbers_of_search_filters"
                  },
                  {
                        "feature_name": "Numbers of search requests",
                        "feature_data_field": "numbers_of_search_requests"
                  },
                  {
                        "feature_name": "Monthly search results",
                        "feature_data_field": "monthly_search_results"
                  },

                  {
                        "feature_name": "Save search results",
                        "feature_data_field": "save_search_results"
                  },

            ]
      },
      {
            section: "Profiling",
            features: [
                  {
                        "feature_name": "Monthly influencer analysis",
                        "feature_data_field": "monthly_influencer_analysis"
                  },
                  {
                        "feature_name": "Influencer Overview",
                        "feature_data_field": "influencer_overview"
                  },
                  {
                        "feature_name": "Influencer Performance",
                        "feature_data_field": "influencer_performance"
                  },
                  {
                        "feature_name": "Audience Insight",
                        "feature_data_field": "audience_insight"
                  },
                  {
                        "feature_name": "Content Performance",
                        "feature_data_field": "content_performance"
                  },
                  {
                        "feature_name": "Brands influencer has worked with",
                        "feature_data_field": "brands_influencer_has_worked_with"
                  },
                  {
                        "feature_name": "Export profile analyzed",
                        "feature_data_field": "export_profile_analyzed"
                  },
            ],
      },

      {
            section: "Campaigns",
            features: [

                  {
                        "feature_name": "Campaign management",
                        "feature_data_field": "campaign_management"
                  },
                  {
                        "feature_name": "Influencer Managed",
                        "feature_data_field": "influencer_managed"
                  },],
      },

      {
            section: "Help Desk",
            features: [

                  {
                        "feature_name": "Support",
                        "feature_data_field": "support"
                  },
                  {
                        "feature_name": "Dedicated Team",
                        "feature_data_field": "dedicated_team"
                  },
            ],
      },


      // {
      //       section: "Pricing",
      //       features: [
      //             {
      //                   "feature_name": "MONTHLY SEARCH RESULTS AND INFLUENCER ANALYSIS",
      //                   "feature_data_field": "monthly_search_results_and_influencer_analysis"
      //             },
      //             {
      //                   "feature_name": "PLATFORM COST",
      //                   "feature_data_field": "platform_cost"
      //             },
      //             {
      //                   "feature_name": "DISCOUNTED COST",
      //                   "feature_data_field": "discounted_cost"
      //             }
      //       ],
      // },
]


const PlanDetails = ({ plans }) => {


      function getPlanData(plan, feature) {
            let value = plan.features.filter((_feature) => _feature.name == feature);

            value = value[0]?.value;


            switch (value) {
                  case '':
                        value = <CancelFillRedSvg className="w-4 h-4" />
                        break;
                  case 'true':
                        value = <DoneSvg className="w-4 h-4" />
                        break;

                  default:
                        break;
            }
            // if (typevalue == '') {
            //       return value ? <DoneSvg className="w-4 h-4" /> : <CancelFillRedSvg className="w-4 h-4" />;
            // }

            return value;
      };

      return (
            <div className="w-full flex  justify-center  items-center ">
                  <div className=" lg:flex  hidden">

                  </div>
                  <div className="flex w-full justify-center">
                        <table className="w-full overflow-scroll border">
                              {features.map((feature) => (
                                    <>
                                          <thead>
                                                <tr className="bg-viralget-gray-200">
                                                      <th colSpan="5">{feature.section}</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {feature.features?.map((feature) => (
                                                      <tr >
                                                            <td className="border text-t-xsx w-space-200 font-bold px-4">{feature.feature_name}</td>
                                                            {plans.map(plan => (
                                                                  <td className="border p-3  w-space-200">
                                                                        <div className="flex justify-center space-x-1 p-3">
                                                                              {getPlanData(plan, feature.feature_data_field)}
                                                                              {/* <InstagramSvg className="w-10 h-10 " /> */}
                                                                              {/* <span>Or</span> */}
                                                                              {/* <TwitterSvg /> */}
                                                                        </div>
                                                                  </td>
                                                            ))}
                                                      </tr>
                                                ))}


                                          </tbody>

                                    </>
                              ))}


                        </table>
                  </div>

            </div>
      )

      // return (
      //       <div className="w-full flex  justify-center  items-center ">
      //             <div className=" lg:flex  hidden">

      //             </div>
      //             <div className="flex w-full justify-center">
      //                   <table className="w-full overflow-scroll border">
      //                         <thead>
      //                               <tr className="bg-viralget-gray-200">
      //                                     <th colSpan="5">Find influencer</th>
      //                               </tr>
      //                         </thead>
      //                         <tbody>
      //                               <tr >
      //                                     <td className="border text-t-xsx w-space-200 font-bold px-4">Social media platform</td>
      //                                     <td className="border p-3  w-space-200">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <InstagramSvg className="w-10 h-10 " />
      //                                                 {/* <span>Or</span> */}
      //                                                 {/* <TwitterSvg /> */}
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 w-space-200 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <InstagramSvg className="w-10 h-10 " />
      //                                                 {/* <TwitterSvg /> */}
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 w-space-200 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <InstagramSvg className="w-10 h-10 " />
      //                                                 {/* <TwitterSvg /> */}
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 w-space-200 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <InstagramSvg className="w-10 h-10 " />
      //                                                 {/* <TwitterSvg /> */}
      //                                           </div>
      //                                     </td>
      //                               </tr>
      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold  px-4">Discovery</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Access to influencer database</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Number of
      //                                           search filters</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">3</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">15</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">20</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">All</span>
      //                                           </div>
      //                                     </td>
      //                               </tr>


      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Number of search results</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">500</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">5000</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">10,000</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">50,000</span>
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Save your searches</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">500</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">5000</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">10,000</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">50,000</span>
      //                                           </div>
      //                                     </td>
      //                               </tr>


      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Save your searches</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Export search results</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                         </tbody>





      //                         <thead>
      //                               <tr className="bg-viralget-gray-200">
      //                                     <th colSpan="5">Advanced profiling datasets</th>
      //                               </tr>
      //                         </thead>

      //                         <tbody>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Profile analysis</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">Analyze up to 10 profiles</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">Analyze up to 100 profiles</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">Analyze up to 200 profiles</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">Analyze up to 500 profiles</span>
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Influencer storage</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">15</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">120</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">250</span>
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <span className="text-t-normal font-normal">600</span>
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Brand safety</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Influencers conversion rate</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>


      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Follower spend power & purchase behaviour</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>



      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Influencer’s follower data signal</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>


      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Export profile analyzed</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>


      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Impressions vs reach</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>


      //                               <tr>
      //                                     <td className="border text-t-xsx  font-bold px-4">Growth rate</td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <CancelFillRedSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                                     <td className="border p-3 ">
      //                                           <div className="flex justify-center space-x-1">
      //                                                 <DoneSvg className="w-4 h-4" />
      //                                           </div>
      //                                     </td>
      //                               </tr>

      //                         </tbody>
      //                   </table>
      //             </div>

      //       </div>
      // )
}


export default PlanDetails;