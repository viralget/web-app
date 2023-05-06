import HeaderCard from "./HeaderCard";

const MetricsHeader = () => {



    const metricsData = [
        {
            title: 'Impressions',
            value: '580',
            rate: 0.31,
            timeDifference: 'last 30d'
        },
        {
            title: 'Reach',
            value: '290',
            rate: 12,
            timeDifference: 'last 30d'
        },
        {
            title: 'Engagement Rate',
            value: '180',
            rate: 0.3,
            timeDifference: 'last 24hr'
        },
        {
            title: 'Campaign Value',
            value: '100',
            rate: 0.31,
            timeDifference: 'last 30d'
        }
    ]

    return(
        <div  className="grid  lg:grid-cols-4  mt-10  grid-cols-1  gap-y-5s lg:gap-x-space-4"> 
              
               {
                metricsData?.length > 0 && metricsData?.map((item) => (
                     <HeaderCard  item={item}/>

                ))
               }
        </div>
    )
}

export default MetricsHeader;