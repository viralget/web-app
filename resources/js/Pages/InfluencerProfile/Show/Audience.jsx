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
import SectionTitle from "@/Components/SectionTitle";
import EmptyState from "@/Components/EmptyState";


export default function ({ influencer }) {

    const {
        engagement_rate, global_rank, country_rank, category_rank,
        avg_cpe, avg_cpm, reachability, avg_impressions, reach, impressions,
        average_views_per_post, average_comments_per_post, engagements, total_replies,
        audience_authenticity,
    } = influencer?.metrics;

    const { quality_audience } = influencer;


    const influencerInformation = [
        {
            title: 'Quality Audience ',
            icon: <EngagementRateWithBSvg />,
            score: quality_audience ?? '-'
        },

        {
            title: 'Audience Reachability',
            icon: <EngagementRateWithBSvg />,
            score: reachability?.score ?? '-'
        },
        {
            title: 'Audience Authenticity',
            icon: <EngagementRateWithBSvg />,
            score: audience_authenticity?.score ?? '-'
        }
        // {
        //     title: 'Average Views Per Post',
        //     icon: <Gender />,
        //     score: nFormatter(average_views_per_post?.score) ?? '-'
        // },
        // {
        //     title: 'Average Comments Per Post',
        //     icon: <Ethnicity />,
        //     score: nFormatter(average_comments_per_post?.score) ?? '-'
        // },
        // {
        //     title: 'Engagements',
        //     icon: <EngagementRateWithBSvg />,
        //     score: nFormatter(engagement_rate?.score) ?? '-'
        // },
        // {
        //     title: 'Total Replies',
        //     icon: <EngagementRateWithBSvg />,
        //     score: total_replies?.score ?? '-'
        // },

        // {
        //     title: 'Average CPE',
        //     icon: <EngagementRateWithBSvg />,
        //     score: avg_cpe?.score ?? '-'
        // },
        // {
        //     title: 'Average CPM',
        //     icon: <EngagementRateWithBSvg />,
        //     score: avg_cpm?.score ?? '-'
        // }
    ]



    return (
        <div className="space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4 mt-5 gap-3 md:pr-5 md:pl-0   ">
                {
                    influencerInformation.map((item) => (
                        <DataCard item={{
                            title: item.title,
                            icon: (<EngagementRateWithBSvg />),
                            score: item?.score ? nFormatter(item?.score) : '-',
                            increase: item?.increase,
                            label: item?.label
                        }} />

                        // <div className="border rounded-md  p-space-8 h-auto  items-left justify-center">
                        //     <div className="flex  items-center">
                        //         <div className="mr-1">
                        //             {item.icon}

                        //         </div>
                        //         <span className="text-t-normal font-lexend font-normal capitalize   text-viralget-grey">{item.title}</span>
                        //     </div>
                        //     <div className="mt-2">
                        //         <span className="text-t-normal capitalize  font-medium font-satoshi   text-viralget-grey ">
                        //             {item.score ?? "-"}
                        //         </span>
                        //     </div>

                        // </div>
                    ))
                }
            </div>
            <div className="flex space-x-3">
                <div className="w-1/3">
                    <Card useBorder useShadow={false}>
                        <SectionTitle title="Audience Type" />
                        <EmptyState title="Coming soon" />
                    </Card>
                </div>
                <div className="flex-1">
                    <Card useBorder useShadow={false}>
                        <SectionTitle title="Audience Location" />
                        <EmptyState title="Coming soon" />
                    </Card>
                </div>
            </div>

            <div className="flex space-x-3">
                <div className="flex-1">
                    <Card useBorder useShadow={false}>
                        <SectionTitle title="Audience age and gender" />
                        <EmptyState title="Coming soon" />
                    </Card>
                </div>
                <div className="w-1/3">
                    <Card useBorder useShadow={false}>
                        <SectionTitle title="Relationship status" />
                        <EmptyState title="Coming soon" />
                    </Card>
                </div>
            </div>


            <div className="flex space-x-3">
                <div className="">
                    <Card useBorder useShadow={false}>
                        <SectionTitle title="Audience education level" />
                        <EmptyState title="Coming soon" />
                    </Card>
                </div>
                <div className="w-1/3">
                    <Card useBorder useShadow={false}>
                        <SectionTitle title="Audience spend power" />
                        <EmptyState title="Coming soon" />
                    </Card>
                </div>
            </div>
        </div>
    )
}
