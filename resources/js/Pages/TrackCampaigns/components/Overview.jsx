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
const Overview = ({ metrics }) => {




    const tweetsCount = metrics?.link_tweets?.value + metrics?.media_tweets?.value + metrics?.text_tweets?.value


    const chartData = {
        dataLabels: ['Tweets', 'Retweets', 'Replies'],
        data: [tweetsCount, metrics?.total_replies?.value, metrics.total_replies?.value],
        chartName: 'metrics',
        colors: ['#eb4034', '#18a81c', '#aa1cc9']

    }



    const cardsList = [
        {
            title: 'Engagements',
            icon: (<EngagementRateWithBSvg />),
            score: metrics?.engagements?.value,
            increase: metrics?.engagements?.growth,
            label: 'engagement'
        },
        {
            title: 'Likes',
            icon: (<SvgComments />),
            score: metrics?.total_likes?.value,
            increase: metrics?.total_likes?.growth,
            label: 'likes'
        },
        {
            title: 'Retweet',
            icon: (<SvgRetweet />),
            score: metrics?.total_replies?.value,
            increase: metrics?.total_replies?.growth,
            label: 'retweet'
        },
        {
            title: 'Media tweets',
            icon: (<SvgRetweet />),
            score: metrics?.media_tweets?.value,
            increase: metrics?.media_tweets?.growth,
            label: 'medial tweets'
        },
        {
            title: 'Link tweets',
            icon: (<SvgRetweet />),
            score: metrics?.link_tweets?.value,
            increase: metrics?.link_tweets?.value,
            label: 'link tweets'
        },
        {
            title: 'Text tweets',
            icon: (<SvgRetweet />),
            score: metrics?.text_tweets?.value,
            increase: metrics?.media_tweets?.growth,
            label: 'text tweets'
        },

    ];



    return (
        <div className="mt-space-60 flex flex-col space-y-10">

            <div className="flex  lg:flex-row   flex-col  lg:space-x-5 w-full  lg:space-y-0 space-y-3">
                <div className="w-auto">
                    <PieChart chartData={chartData} />
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-2  w-full   gap-3 md:pl-0  lg:gap-5">
                    {
                        cardsList.map((item, index) => (
                            <Card item={item} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className="   grid grid-cols-2 gap-5 ">
                <div className="flex flex-col border p-3 rounded-md">
                    <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> No. of contributors</span>
                    <span className="font-semibold text-h1  font-lexend ">{metrics.no_of_contributors}</span>
                </div>
                <div className="flex flex-col border p-3  rounded-md">
                    <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> Original contributors</span>
                    <span className="font-semibold text-h1  font-lexend ">{metrics.original_contributors}</span>
                </div>
                <div className="flex flex-col border p-3 rounded-md">
                    <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> Avg. Views per post </span>
                    <span className="font-semibold text-h1  font-lexend ">{metrics.average_views_per_post}</span>
                </div>
                <div className="flex flex-col border p-3 rounded-md">
                    <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> Avg. Comments per post</span>
                    <span className="font-semibold text-h1  font-lexend ">{metrics.average_comments_per_post}</span>
                </div>
            </div>

        </div>
    )
}


export default Overview;