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



    return (
        <>
            <div className="grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0   ">
                Value
            </div>


        </>
    )
}
