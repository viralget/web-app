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
        avg_cpe, avg_cpm, reachability, avg_impressions, reach, impressions

    } = influencer?.metrics;

    const influencerInformation = [
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



    return (
        <div className="grid md:grid-cols-2 gap-3">
            <div>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Influencer media value" />
                    <EmptyState title="Coming soon" />
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
