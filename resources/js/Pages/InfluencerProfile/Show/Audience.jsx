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
        average_views_per_post, average_comments_per_post, engagements, total_replies

    } = influencer?.metrics;


    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (<EngagementRateWithBSvg />),
            score: engagement_rate?.score,
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
            title: 'Average Views Per Post',
            icon: <Gender />,
            label: nFormatter(average_views_per_post?.score) ?? 'no data'
        },
        {
            title: 'Average Comments Per Post',
            icon: <Ethnicity />,
            label: nFormatter(average_comments_per_post?.score) ?? 'no data'
        },
        {
            title: 'Engagements',
            icon: <Marital />,
            label: nFormatter(engagements?.score) ?? 'no data'
        },
        {
            title: 'Total Replies',
            icon: <Parental />,
            label: total_replies?.score ?? 'no data'
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



    return (
        <div className="space-y-5">
            <div className="grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4 mt-5 gap-3 md:pr-5 md:pl-0   ">
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
