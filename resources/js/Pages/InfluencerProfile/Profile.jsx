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
    LikeSvg,
    ReachabilityWithBSvg,
} from '@/Utils/icons';
import { nFormatter, numberFormat } from '@/Utils/helpers';


export default function Profile({ influencer }) {

    const { media_value_per_post } = influencer?.metrics;

    console.log({ media_value_per_post })
    const defaultValue = 'no data';
    const engagement_rate = influencer?.metrics?.engagement_rate;
    const avg_comments = influencer?.metrics?.average_comments_per_post;
    const avg_retweet = influencer?.metrics?.avg_retweet;
    const interactions = influencer?.metrics?.interactions;
    const average_likes = influencer?.metrics.average_likes_per_post;
    const global_rank = influencer?.metrics?.global_rank;
    const country_rank = influencer?.metrics?.country_rank;
    const category_rank = influencer?.metrics?.category_rank;
    const average_impressions = influencer?.metrics?.avg_impressions;

    const formatData = (field, title, icon) => {
        return {
            title: title,
            icon: icon,
            score: field?.score ? nFormatter(field?.score) : defaultValue,
            increase: field?.increase,
            label: field?.label
        }
    }

    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (<EngagementRateWithBSvg />),
            score: engagement_rate?.score ? engagement_rate?.score + '' : defaultValue,
            increase: engagement_rate?.increase,
            label: engagement_rate?.label
        },
        {
            title: 'Avg. impressions',
            icon: (<SvgComments />),
            score: average_impressions?.score ?? defaultValue,
            increase: average_impressions?.increase,
            label: average_impressions?.label
        },
        {
            title: 'Avg. likes',
            icon: (<LikeSvg />),
            score: average_likes?.score ?? defaultValue,
            increase: average_likes?.increase,
            label: average_likes?.label
        },
        {
            title: 'Avg. retweet',
            icon: (<SvgRetweet />),
            score: avg_retweet?.score ?? defaultValue,
            increase: avg_retweet?.increase,
            label: avg_retweet?.label
        },
        {
            title: 'Interactions',
            icon: (<SvgRank />),
            score: interactions?.score ?? defaultValue,
            increase: null,
            label: interactions?.label
        },
        {
            title: 'Avg. comments',
            icon: (<SvgComments />),
            score: avg_comments?.score ?? defaultValue,
            increase: avg_comments?.increase,
            label: avg_comments?.label
        },
        {
            title: 'Avg. retweet',
            icon: (<SvgRetweet />),
            score: avg_retweet?.score ?? defaultValue,
            increase: avg_retweet?.increase,
            label: avg_retweet?.label
        },
        formatData(media_value_per_post, 'Average Media Value', <ReachabilityWithBSvg />)

        // {
        //     title: 'Global rank',
        //     icon: (<SvgRank />),
        //     score: '#' + global_rank?.score,
        //     increase: null,
        //     label: global_rank?.label
        // },
        // {
        //     title: 'Country rank',
        //     icon: (<SvgCountry />),
        //     score: '#' + country_rank?.score,
        //     increase: null,
        //     label: country_rank?.label
        // },
        // {
        //     title: 'Category rank',
        //     icon: (<SvgCategory />),
        //     score: '#' + category_rank?.score,
        //     increase: null,
        //     label: category_rank?.label
        // }
    ]

    return (
        <div className="w-full flex flex-col  mb-20">
            <div className="relative md:mb-[5rem]  mb-[10rem]">
                <Header isMini influencer={influencer} />
            </div>
            <div className='px-5'>
                <InfluencerSize influencer={influencer} isMini />
            </div>

            <div className="px-5 ">
                <AudienceCard influencer={influencer} />
            </div>


            {/* <div className="flex   md:flex-row  flex-col justify-between mt-4 "> */}
            <div className='p-5'>
                <div className="grid grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-3">
                    {
                        cardsList.filter((item) => item.score != defaultValue).map((item) => (
                            <Card item={item} />
                        ))
                    }
                </div>
            </div>
            {/* </div> */}

            {/* <TweetList influencer={influencer} /> */}
            <Profiling />

            <Footer influencer={influencer} />
        </div>
    )
}
