import Header from './header';
import InfluencerSize from "./influencerSize";
import AudienceCard from "./audienceCard";
import Card from './card';
import TweetList from "./tweetList";
import Profiling from "./profiling";
import Footer from "./footer";
import {
    EngagementRateWithBSvg,
    SvgComments,
    SvgRetweet,
    SvgCountry,
    SvgCategory,
    SvgRank,
} from '@/Utils/icons';


export default function Profile({ influencer }) {

    const engagement_rate = influencer?.metrics?.engagement_rate;
    const avg_comments = influencer?.metrics?.avg_comments;
    const avg_retweet = influencer?.metrics?.avg_retweet;
    const global_rank = influencer?.metrics?.global_rank;
    const country_rank = influencer?.metrics?.country_rank;
    const category_rank = influencer?.metrics?.category_rank;

    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (<EngagementRateWithBSvg />),
            score: engagement_rate?.score + '%',
            increase: engagement_rate?.increase,
            label: engagement_rate?.label
        },
        {
            title: 'Avg. comments',
            icon: (<SvgComments />),
            score: avg_comments?.score,
            increase: avg_comments?.increase,
            label: avg_comments?.label
        },
        {
            title: 'Avg. retweet',
            icon: (<SvgRetweet />),
            score: avg_retweet?.score,
            increase: avg_retweet?.increase,
            label: avg_retweet?.label
        },
        {
            title: 'Global rank',
            icon: (<SvgRank />),
            score: '#' + global_rank?.score,
            increase: null,
            label: global_rank?.label
        },
        {
            title: 'Country rank',
            icon: (<SvgCountry />),
            score: '#' + country_rank?.score,
            increase: null,
            label: country_rank?.label
        },
        {
            title: 'Category rank',
            icon: (<SvgCategory />),
            score: '#' + category_rank?.score,
            increase: null,
            label: category_rank?.label
        }
    ]

    return (
        <div className="w-full flex flex-col  mb-20">
            <div className="relative md:mb-[5rem]  mb-[10rem]">
                <Header isMini influencer={influencer} />
            </div>
            <div className='px-5'>
                <InfluencerSize influencer={influencer} isMini />
            </div>


            <div className="flex   md:flex-row  flex-col justify-between mt-4 ">
                <div className="px-5 md:pr-2 ">
                    <AudienceCard influencer={influencer} />
                </div>
                <div className="grid grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-3">
                    {
                        cardsList.map((item) => (
                            <Card item={item} />
                        ))
                    }
                </div>
            </div>

            <TweetList influencer={influencer} />
            <Profiling />

            <Footer influencer={influencer} />
        </div>
    )
}
