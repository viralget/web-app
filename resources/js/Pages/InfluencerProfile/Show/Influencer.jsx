import Card from "@/Components/Card";
import { nFormatter } from "@/Utils/helpers";
import {
    Gender,
    Marital,
    Parental,
    Ethnicity,
    Income,
    Education,
    EngagementRateWithBSvg,
    SvgRank,
    SvgCountry,
    SvgCategory,

} from "@/Utils/icons";
import AudienceCard from "../audienceCardRow";
import DataCard from "../card";
import BrandSafetyLevel from "../Components/BrandSafetyLevel";


export default function ({ influencer }) {

    const {
        engagement_rate, global_rank, country_rank, category_rank,
        avg_cpe, avg_cpm, reachability, avg_impressions, reach, impressions

    } = influencer?.metrics;


    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (<EngagementRateWithBSvg />),
            score: engagement_rate?.score + '%',
            increase: engagement_rate?.increase,
            label: engagement_rate?.label
        },


        {
            title: 'Global rank',
            icon: (<SvgRank />),
            score: global_rank?.score,
            increase: null,
            label: global_rank?.label
        },
        {
            title: 'Country rank',
            icon: (<SvgCountry />),
            score: country_rank?.score,
            increase: null,
            label: country_rank?.label
        },
        {
            title: 'Category rank',
            icon: (<SvgCategory />),
            score: category_rank?.score,
            increase: null,
            label: category_rank?.label
        },

    ]

    const influencerInformation = [
        {
            title: 'Reach',
            icon: <Gender />,
            label: nFormatter(reach?.score) ?? 'no data'
        },
        {
            title: 'Reachability',
            icon: <Ethnicity />,
            label: nFormatter(reachability?.score) ?? 'no data'
        },
        {
            title: 'Impressions',
            icon: <Marital />,
            label: nFormatter(impressions?.score) ?? 'no data'
        },
        {
            title: 'Average Impressions',
            icon: <Parental />,
            label: avg_impressions?.score ?? 'no data'
        },

        {
            title: 'Average CPE',
            icon: <Income />,
            label: avg_cpe?.score ?? 'no data'
        },
        {
            title: 'Average CPM',
            icon: <Education />,
            label: avg_cpm?.score ?? 'no data'
        }
    ]


    // const influencerInformation = [
    //     {
    //         title: 'Reach',
    //         icon: <Gender />,
    //         label: influencer?.gender && influencer?.age ? influencer?.gender + ' • ' + influencer?.age + ' y.o' : 'no data'
    //     },
    //     {
    //         title: 'Impressions',
    //         icon: <Marital />,
    //         label: influencer?.marital_status
    //     },
    //     {
    //         title: 'Average Impressions',
    //         icon: <Parental />,
    //         label: influencer?.parental_status
    //     },
    //     {
    //         title: 'Reachability',
    //         icon: <Ethnicity />,
    //         label: influencer?.ethinic
    //     },
    //     {
    //         title: 'Media Value',
    //         icon: <Income />,
    //         label: influencer.income
    //     },
    //     {
    //         title: 'Average CPE',
    //         icon: <Education />,
    //         label: influencer?.education
    //     }
    // ]

    return (
        <>

            <div className="grid sm:grid-cols-2 p-4 md:space-x-3 ">

                <BrandSafetyLevel influencer={influencer} />

                <div className="grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  ">
                    {
                        cardsList.map((item) => (
                            <DataCard item={item} />
                        ))
                    }
                </div>
            </div>

            <Card useBorder={true} useShadow={false}>
                Most Used Hashtags

                {influencer.most_used_hashtags?.map((item, index) => {
                    <span className="m-2 bg-gray-50 " key={index}>{item}</span>
                })}
            </Card>

        </>
    )
}


const BSL = ({ influencer }) => {


    return (
        <div className="border  w-full h-full rounded-md p-5">

            <div className="flex  md:flex-row flex-col justify-between w-full space-x-3 " >
                <BrandSafetyLevel influencer={influencer} />

                <div className="w-auto p-4">
                    {
                        list.map((item, index) => (
                            <div key={index} className={`flex mt-5  pb-2 max-w-[10rem]  ${list.length != (index + 1) ? 'border-b' : ''}`}>
                                <div className="mr-2">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-t-normal  font-medium font-satoshi  text-viralget-gray-400"> {item.name}</span>
                                    <span className="font-bold">{item.value}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
