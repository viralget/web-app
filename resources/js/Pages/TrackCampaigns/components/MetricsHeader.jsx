import HeaderCard from "./HeaderCard";
import {
    EngagementRateWithBSvg
} from '@/Utils/icons';
import Card from "@/Pages/InfluencerProfile/card";
const MetricsHeader = () => {



    const metricsData = [
        {
            title: 'Impressions',
            icon: (<EngagementRateWithBSvg />),
            score: '580',
            rate: 0.31,
            label: 'last 30d'
        },
        {
            title: 'Reach',
            icon: (<EngagementRateWithBSvg />),
            score: '290',
            increase: 12,
            label: 'last 30d'
        },
        {
            title: 'Engagement increase',
            icon: (<EngagementRateWithBSvg />),
            score: '180',
            increase: 0.3,
            label: 'last 24hr'
        },
        {
            title: 'Campaign score',
            icon: (<EngagementRateWithBSvg />),
            score: '100',
            increase: 0.31,
            label: 'last 30d'
        }
    ];

    return(
        <div className="mt-space-60 ">
                <div className="flex    justify-end">
                        <a href="#"    className='p-2  px-5  rounded-md bg-viralget-red  text-white font-lexend'> Refetch </a>
                </div>
                <div  className="grid mt-space-60  lg:grid-cols-4   grid-cols-1  gap-y-5 lg:gap-x-space-8"> 
                    
                    {
                        metricsData?.length > 0 && metricsData?.map((item) => (
                            <Card  item={item}/>

                        ))
                    }
                </div>
        </div>
    )
}

export default MetricsHeader;