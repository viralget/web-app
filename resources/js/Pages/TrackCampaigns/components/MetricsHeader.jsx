import HeaderCard from "./HeaderCard";
import {
    EngagementRateWithBSvg
} from '@/Utils/icons';
import Card from "@/Pages/InfluencerProfile/card";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
const MetricsHeader = ({ metrics }) => {

    const data = metrics;

    console.log("data:", data)
    const metricsData = [
        {
            title: 'Impressions',
            icon: (<EngagementRateWithBSvg />),
            score: data?.impressions?.value,
            increase: data?.impressions?.growth,
            label: null
        },
        {
            title: 'Reach',
            icon: (<EngagementRateWithBSvg />),
            score: data?.reach?.value,
            increase: data?.reach?.growth,
            label: null
        },
        {
            title: 'Engagement increase',
            icon: (<EngagementRateWithBSvg />),
            score: data?.engagement_increase?.value,
            increase: data?.engagement_increase?.growth,
            label: null
        },
        {
            title: 'Campaign score',
            icon: (<EngagementRateWithBSvg />),
            score: data?.campaign_score?.value,
            increase: data?.campaign_score?.growth,
            label: null
        }
    ];

    return (
        <div className="mt-space-60 ">
            <div className="flex    justify-end">
                <a href="#" className='p-2  px-5  rounded-md bg-viralget-red  text-white font-lexend flex items-center'> <ArrowPathRoundedSquareIcon className="w-4 h-4 mr-2" /> Refetch </a>
            </div>
            <div className="grid mt-space-60  lg:grid-cols-4   grid-cols-1  gap-y-5 lg:gap-x-space-8">

                {
                    metricsData?.length > 0 && metricsData?.map((item, index) => (
                        <Card item={item} key={index} />

                    ))
                }
            </div>
        </div>
    )
}

export default MetricsHeader;