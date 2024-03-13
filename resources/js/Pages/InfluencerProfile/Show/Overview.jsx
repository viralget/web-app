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
import Card from "../card";
import InfluencerSize from "../influencerSize";


export default function ({ influencer }) {

    const {
        engagement_rate, global_rank, country_rank, category_rank,
        avg_cpe, avg_cpm, reachability, avg_impressions, reach, impressions, gender, marital_status,
        parental_status, ethnicity, estimated_income, education,

    } = influencer?.metrics;


    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (<EngagementRateWithBSvg />),
            score: engagement_rate?.score + '',
            increase: engagement_rate?.increase,
            label: engagement_rate?.label
        },


        {
            title: 'Global rank',
            icon: (<SvgRank />),
            score: global_rank?.score ?? '-',
            increase: null,
            label: global_rank?.label
        },
        {
            title: 'Country rank',
            icon: (<SvgCountry />),
            score: country_rank?.score ?? '-',
            increase: null,
            label: country_rank?.label
        },
        {
            title: 'Category rank',
            icon: (<SvgCategory />),
            score: category_rank?.score ?? '-',
            increase: null,
            label: category_rank?.label
        },

    ]

    const influencerInformation = [
        {
            title: 'Gender',
            icon: <Gender />,
            label: gender ?? 'no data'
        }, {
            title: 'Ethnicity',
            icon: <Ethnicity />,
            label: ethnicity ?? 'no data'
        }, {
            title: 'Marital Status',
            icon: <Marital />,
            label: marital_status ?? 'no data'
        }, {
            title: 'Parental Status',
            icon: <Parental />,
            label: parental_status ?? 'no data'
        },
        , {
            title: 'Estimated Income',
            icon: <Gender />,
            label: estimated_income ?? 'no data'
        },
        {
            title: 'Education',
            icon: <Gender />,
            label: education ?? 'no data'
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
            <div className="grid grid-cols-2 md:space-x-3">

                <div className="mx-5  md:mr-0 ">
                    <InfluencerSize influencer={influencer} />
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0   ">
                    {
                        influencerInformation.map((item) => (
                            <div className="border rounded-md  p-space-8 h-auto  items-left justify-center">
                                <div className="flex  items-center">
                                    <div className="mr-1">
                                        {item.icon}

                                    </div>
                                    <span className="text-t-normal font-lexend font-normal capitalize   text-viralget-grey">{item.title}</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-t-normal capitalize  font-medium font-satoshi   text-viralget-grey ">
                                        {item.label ?? "no data"}
                                    </span>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="flex md:flex-row   flex-col p-4  md:space-x-3  md:pl-5 mt-5">

                <div className="lg:w-space-510 lg:h-space-282">
                    <AudienceCard influencer={influencer} />
                </div>

                <div className="grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  ">
                    {
                        cardsList.map((item) => (
                            <Card item={item} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}