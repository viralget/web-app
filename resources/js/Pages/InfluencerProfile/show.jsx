import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import Header from './header';
import Tabs from "@/components/Tabs";
import InfluencerSize from "./influencerSize";
import { tabs } from '@/Utils/constants';
import {
    Gender,
    Marital,
    Parental,
    Ethnicity,
    Income,
    Education,
    EngagementRateWithBSvg,
    SvgComments,
    SvgRetweet,
    SvgCountry,
    SvgCategory,
    SvgRank
} from "@/Utils/icons";
import Card from './card';
import AudienceCard from "./audienceCardRow";

export default function show({ influencer, list }) {

    const url = new URLSearchParams(window.location.search).get('tab');
    const urlParams = url == null ? 'overview' : url;



    const engagement_rate = influencer?.metrics?.engagement_rate;
    const global_rank = influencer?.metrics?.global_rank;
    const country_rank = influencer?.metrics?.country_rank;
    const category_rank = influencer?.metrics?.category_rank;

    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (<EngagementRateWithBSvg />),
            score: engagement_rate.score + '%',
            increase: engagement_rate.increase,
            label: engagement_rate.label
        },


        {
            title: 'Global rank',
            icon: (<SvgRank />),
            score: '#' + global_rank.score,
            increase: null,
            label: global_rank.label
        },
        {
            title: 'Country rank',
            icon: (<SvgCountry />),
            score: '#' + country_rank?.score,
            increase: null,
            label: country_rank.label
        },
        {
            title: 'Category rank',
            icon: (<SvgCategory />),
            score: '#' + category_rank.score,
            increase: null,
            label: category_rank.label
        }
    ]

    const influencerInformation = [
        {
            title: 'Gender & age',
            icon: <Gender />,
            label: influencer.gender + ' • ' + influencer.age + ' y.o'
        },
        {
            title: 'Marital status',
            icon: <Marital />,
            label: influencer.marital_status
        },
        {
            title: 'Parental status',
            icon: <Parental />,
            label: influencer.parental_status
        },
        {
            title: 'Ethnicity',
            icon: <Ethnicity />,
            label: influencer.ethinic
        },
        {
            title: 'Est. Income',
            icon: <Income />,
            label: influencer.income
        },
        {
            title: 'Education',
            icon: <Education />,
            label: influencer.education
        }
    ]


    const Render = () => {
        if (urlParams === 'overview') {
            return (
                <>
                    <div className="flex   md:flex-row   flex-col space-x-1 mt-5 ">

                        <div>
                            <InfluencerSize influencer={influencer} />
                        </div>
                        <div className="grid md:grid-cols-3 grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0   gap-y-4">
                            {
                                influencerInformation.map((item) => (
                                    <div className="border rounded-md  p-3  h-[5.5rem] items-left">
                                        <div className="flex  items-center">
                                            <div className="mr-1">
                                                {item.icon}

                                            </div>
                                            <span className="text-xs capitalize  text-viralget-grey">{item.title}</span>
                                        </div>
                                        <div className="mt-2">
                                            <span className="text-[14px] capitalize  font-Satoshi ">
                                                {item.label}
                                            </span>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>

                    </div>




                    <div className="flex md:flex-row   flex-col p-4  md:space-x-5  md:pl-5 mt-5">

                        <div className="w-full">
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
        } else {
            return (
                <div className="flex items-center  p-5">
                    <span>
                        Coming soon.
                    </span>
                </div>

            )
        }

    }

    return (
        <AuthenticatedLayout>
            <>
                <div className="relative -mt-40   md:mb-0  mb-[8rem]">
                    <div className="m-5">
                        <ButtonBack className="text-white" />
                    </div>
                    <Header influencer={influencer} list={list} />
                </div>
            </>

            <div className="w-full p-4  md:mt-5  mt-10 ">
                <Tabs activeTab={urlParams} tabs={tabs} link={route('influencer.show', { id: influencer.id })} />
            </div>

            <Render />
        </AuthenticatedLayout>
    )
}
