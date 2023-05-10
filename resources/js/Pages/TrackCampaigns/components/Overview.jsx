import PieChart from "@/components/PieChart";
import Card from "@/Pages/InfluencerProfile/card";
import {
    EngagementRateWithBSvg,
    SvgComments,
    SvgRetweet,
    SvgCountry,
    SvgCategory,
    SvgRank,
} from '@/Utils/icons';
const Overview = () => {


    const chartData = {
        dataLabels: ['Tweets', 'Retweets', 'Replies'],
        data:[200,400,500],
        chartName: 'metrics',
        colors: ['#eb4034', '#18a81c', '#aa1cc9']

    }

    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (<EngagementRateWithBSvg />),
            score: '20%',
            increase:'0.70',
            label: 'engagement'
        },
        {
            title: 'Likes',
            icon: (<SvgComments />),
            score: '30',
            increase:'0',
            label: 'likes'
        },
        {
            title: 'Retweet',
            icon: (<SvgRetweet />),
            score: '40%',
            increase: '12',
            label: 'retweet'
        },
        {
            title: 'Media tweets',
            icon: (<SvgRetweet />),
            score: '300',
            increase: null,
            label: 'medial tweets'
        },
        {
            title: 'Link tweets',
            icon: (<SvgRetweet />),
            score: '300',
            increase: null,
            label: 'medial tweets'
        },
        {
            title: 'Text tweets',
            icon: (<SvgRetweet />),
            score: '300',
            increase: null,
            label: 'medial tweets'
        },
       
    ];



    return(
        <div className="mt-space-60 flex flex-col space-y-10">

              <div className="flex  lg:flex-row   flex-col  lg:space-x-5 w-full  lg:space-y-0 space-y-3">
                 <div className="w-auto">
                     <PieChart chartData={chartData} /> 
                 </div>
               
                <div className="grid lg:grid-cols-3 grid-cols-2  w-full   gap-3 md:pl-0  lg:gap-5">
                        {
                            cardsList.map((item) => (
                                <Card item={item} />
                            ))
                        }
                </div>
             </div> 
            <div className="   grid grid-cols-2 gap-5 ">
                             <div className="flex flex-col border p-3 rounded-md">
                                  <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> No. of contributors</span>
                                  <span className="font-semibold text-h1  font-lexend ">20</span>
                              </div>
                              <div className="flex flex-col border p-3  rounded-md">
                                  <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> Original contributors</span>
                                  <span className="font-semibold text-h1  font-lexend ">20</span>
                              </div>
                              <div className="flex flex-col border p-3 rounded-md">
                                  <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> Avg. tweet per contributors </span>
                                  <span className="font-semibold text-h1  font-lexend ">20</span>
                              </div>
                              <div className="flex flex-col border p-3 rounded-md">
                                  <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> Avg. follower per contributors</span>
                                  <span className="font-semibold text-h1  font-lexend ">20</span>
                              </div>
            </div>
             
        </div>
    )
}


export default Overview;