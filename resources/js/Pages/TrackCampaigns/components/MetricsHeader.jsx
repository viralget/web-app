import HeaderCard from "./HeaderCard";
import {
    EngagementRateWithBSvg
} from '@/Utils/icons';
import Card from "@/Pages/InfluencerProfile/card";
import { formatDate } from "@/Utils/helpers";
const MetricsHeader = ({ metrics, onRefetch, updated_at }) => {

    const data = metrics;

    // console.log("data:", data)
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
            title: 'Engagement Rate',
            icon: (<EngagementRateWithBSvg />),
            score: data?.engagement_rate?.value,
            increase: data?.engagement_rate?.growth,
            label: null
        },
        {
            title: 'Campaign Value',
            icon: (<EngagementRateWithBSvg />),
            score: data?.campaign_value?.value,
            increase: data?.campaign_value?.growth,
            label: null
        }
    ];

    return (
        <div className="mt-space-60 ">
            <div className="flex    justify-end">
                <div className="text-right">
                    <button onClick={onRefetch} className='p-2  px-5  rounded-md bg-viralget-red  text-white font-lexend'> Refetch </button>
                    <p>Last updated on: {formatDate(updated_at)}</p>
                </div>
            </div>
            <div className="grid mt-space-60  lg:grid-cols-4   grid-cols-1  gap-y-5 lg:gap-x-space-8">

                {/* {
                    metricsData?.length > 0 && metricsData?.map((item, index) => (
                        <Card item={item} key={index} /> */}

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