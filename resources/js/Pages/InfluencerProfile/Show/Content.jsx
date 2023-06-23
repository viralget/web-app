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
import TweetCard from "@/Pages/InfluencerProfile/tweetCard";
import SectionTitle from "@/Components/SectionTitle";
import EmptyState from "@/Components/EmptyState";

export default function ({ influencer }) {

    const {
        engagement_rate, global_rank, country_rank, category_rank,
        avg_cpe, avg_cpm, reachability, avg_impressions, reach, impressions,
    } = influencer?.metrics;



    return (
        <div className="space-y-5">
            <div>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Best Performing Content" />
                    <div className="grid  md:grid-cols-3  grid-cols-1  md:gap-2  gap-y-3 mt-5">
                        {
                            influencer.best_performing_tweets ? influencer.best_performing_tweets?.map((item, index) => (
                                <TweetCard tweet={item} key={index} />
                            )) :
                                <p>No data available</p>
                        }
                    </div>

                    {/* <EmptyState title="Coming soon" /> */}
                </Card>
            </div>

            <div>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Best Performing Video" />
                    <div className="grid  md:grid-cols-3  grid-cols-1  md:gap-2  gap-y-3 mt-5">

                        {
                            influencer.best_performing_videos ? influencer.best_performing_videos?.map((item, index) => (
                                <TweetCard isMedia tweet={item} key={index} />
                            )) :
                                <p>No data available</p>

                        }
                    </div>
                    {/* <EmptyState title="Coming soon" /> */}
                </Card>
            </div>


            <div>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Recent tweets" />
                    <div className="grid  md:grid-cols-3  grid-cols-1  md:gap-2  gap-y-3 mt-5">
                        {
                            influencer.recent_tweets ? influencer.recent_tweets?.map((item, index) => (
                                <TweetCard tweet={item} key={index} />
                            )) :
                                <p>No data available</p>
                        }
                    </div>
                    {/* <EmptyState title="Coming soon" /> */}
                </Card>
            </div>

            <div className="flex space-x-3">
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Content type" />
                    <EmptyState title="Coming soon" />
                </Card>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Activity" />
                    <EmptyState title="Coming soon" />
                </Card>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Likes-comments-shares-ratio" />
                    <EmptyState title="Coming soon" />
                </Card>
            </div>

            <Card useBorder useShadow={false}>
                <SectionTitle title="Likes spread" />
                <EmptyState title="Coming soon" />
            </Card>

        </div>
    )
}