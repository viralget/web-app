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
        avg_cpe, avg_cpm, avg_cpv, avg_cpc, reach, impressions, media_value

    } = influencer?.metrics;

    const influencerInformation = [


        {
            title: 'Average CPE',
            icon: <EngagementRateWithBSvg />,
            score: avg_cpe?.score ?? 'no data'
        },
        {
            title: 'Average CPM',
            icon: <EngagementRateWithBSvg />,
            score: avg_cpm?.score ?? 'no data'
        },
        {
            title: 'Average CPC',
            icon: <EngagementRateWithBSvg />,
            score: avg_cpc?.score ? nFormatter(avg_cpc?.score) : '-',
        },
        {
            title: 'Average CPV',
            icon: <EngagementRateWithBSvg />,
            score: avg_cpv?.score ?? '-'
        },
    ]



    return (
        <div className="grid md:grid-cols-2 gap-3">
            <div>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Influencer media value" />
                    {/* <EmptyState title="Coming soon" /> */}
                    <p className="font-semibold text-4xl font-lexend py-5 "> ${nFormatter(media_value?.score)}</p>

                    <p className="text-sm text-gray-500 py-5">Estimated cost to gain the same reach <br />through paid social ad with similar audience</p>
                </Card>
            </div>

            <div className="grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  ">
                {
                    influencerInformation.map((item) => (
                        <DataCard item={item} />
                    ))
                }
            </div>
        </div>
    )
}
