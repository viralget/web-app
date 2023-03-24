import Drawer from "@/components/Drawer";
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import Header from './header';
import InfluencerSize from "./influencerSize";
import AudienceCard from "./audienceCard";
import Card from './card';
import TweetList from "./tweetList";
import Profiling from "./profiling";
import Footer from "./footer";


export default function Profile({ influencer }) {

    const engagement_rate = influencer?.metrics?.engagement_rate;
    const avg_comments  = influencer?.metrics?.avg_comments;
    const avg_retweet  = influencer?.metrics?.avg_retweet;
    const global_rank  = influencer?.metrics?.global_rank;
    const country_rank  = influencer?.metrics?.country_rank;
    const category_rank  = influencer?.metrics?.category_rank;

    const cardsList = [
        {
            title: 'Engagement rate',
            icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="11" fill="#FEF2EB"/>
                        <g clip-path="url(#clip0_958_42860)">
                        <path d="M15.5 14.75H6.5V7.25" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.75 8L11 11.75L9.5 10.25L6.5 13.25" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14.75 9.875V8H12.875" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_958_42860">
                        <rect width="12" height="12" fill="white" transform="translate(5 5)"/>
                        </clipPath>
                        </defs>
                 </svg> ),
                score: engagement_rate.score + '%', 
                increase: engagement_rate.increase,
                label: engagement_rate.label
        },
        {
            title: 'Avg. comments',
            icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="11" fill="#FEF2EB"/>
            <g clip-path="url(#clip0_958_42798)">
            <path d="M7.12825 13.2952C6.56992 12.3532 6.37462 11.2398 6.57902 10.164C6.78342 9.08824 7.37347 8.12405 8.23838 7.45248C9.1033 6.78091 10.1836 6.44813 11.2765 6.51662C12.3694 6.58511 13.3997 7.05016 14.174 7.82446C14.9483 8.59877 15.4133 9.62907 15.4818 10.722C15.5503 11.8148 15.2175 12.8952 14.546 13.7601C13.8744 14.625 12.9102 15.215 11.8344 15.4194C10.7586 15.6238 9.64525 15.4285 8.70325 14.8702L7.147 15.3108C7.08324 15.3295 7.01564 15.3306 6.95128 15.3142C6.88692 15.2977 6.82817 15.2642 6.7812 15.2173C6.73422 15.1703 6.70075 15.1115 6.68429 15.0472C6.66783 14.9828 6.66898 14.9152 6.68763 14.8515L7.12825 13.2952Z" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_958_42798">
            <rect width="12" height="12" fill="white" transform="translate(5 5)"/>
            </clipPath>
            </defs>
            </svg>
            ),
                score: avg_comments.score, 
                increase: avg_comments.increase,
                label: avg_comments.label
        },
        {
            title: 'Avg. retweet',
            icon: (<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="11" fill="#FEF2EB"/>
            <path d="M15.9996 13.3413C15.8419 13.2376 15.6345 13.2782 15.5309 13.4314L15.1073 14.0533V8.96067C15.1073 7.60412 13.9986 6.5 12.642 6.5H9.0411C8.85184 6.5 8.70312 6.6532 8.70312 6.83798C8.70312 7.02728 8.85184 7.17599 9.0411 7.17599H12.642C13.629 7.17599 14.4312 7.9782 14.4312 8.96067V14.0623L14.0076 13.4314C13.8994 13.2782 13.6921 13.2376 13.5343 13.3413C13.3811 13.4494 13.3406 13.6568 13.4442 13.8145L14.4853 15.3513C14.5484 15.4414 14.6565 15.5 14.7647 15.5C14.8774 15.5 14.9856 15.4414 15.0486 15.3513L16.0897 13.8145C16.1934 13.6568 16.1528 13.4494 15.9996 13.3413Z" fill="#F37C38" stroke="#F37C38" stroke-width="0.14809"/>
            <path d="M13.0084 14.8217H9.41198C8.42051 14.8217 7.61827 14.0194 7.61827 13.037V7.93083L8.04644 8.56629C8.15006 8.71948 8.35739 8.76006 8.51514 8.6564C8.66834 8.54826 8.70892 8.34093 8.60525 8.18318L7.56418 6.64637C7.43801 6.46163 7.12702 6.46163 7.00536 6.64637L5.95981 8.18318C5.85611 8.34093 5.89668 8.54826 6.04992 8.6564C6.10849 8.69246 6.17613 8.71501 6.23922 8.71501C6.35188 8.71501 6.45554 8.66091 6.52314 8.56629L6.94227 7.94434V13.037C6.94227 14.3935 8.05092 15.4977 9.41198 15.4977H13.0084C13.1976 15.4977 13.3464 15.3445 13.3464 15.1597C13.3464 14.9704 13.1976 14.8217 13.0084 14.8217Z" fill="#F37C38" stroke="#F37C38" stroke-width="0.14809"/>
            </svg>
            
            
            ),
                score: avg_retweet.score, 
                increase: avg_retweet.increase,
                label: avg_retweet.label
        },
        {
            title: 'Global rank',
            icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#FEF2EB"/>
                    <g clip-path="url(#clip0_958_42873)">
                    <path d="M11 15.5C13.4853 15.5 15.5 13.4853 15.5 11C15.5 8.51472 13.4853 6.5 11 6.5C8.51472 6.5 6.5 8.51472 6.5 11C6.5 13.4853 8.51472 15.5 11 15.5Z" stroke="#F37C38" stroke-miterlimit="10"/>
                    <path d="M6.75781 9.5H15.2422" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.75781 12.5H15.2422" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 15.3812C12.0355 15.3812 12.875 13.4211 12.875 11.0031C12.875 8.58515 12.0355 6.625 11 6.625C9.96447 6.625 9.125 8.58515 9.125 11.0031C9.125 13.4211 9.96447 15.3812 11 15.3812Z" stroke="#F37C38" stroke-miterlimit="10"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_958_42873">
                    <rect width="12" height="12" fill="white" transform="translate(5 5)"/>
                    </clipPath>
                    </defs>
                 </svg>

                 ),
                score: '#'+ global_rank.score, 
                increase: null,
                label: global_rank.label
           },
           {
            title: 'Country rank',
            icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="11" cy="11" r="11" fill="#FEF2EB"/>
                        <g clip-path="url(#clip0_958_42808)">
                        <path d="M6.875 15.125V7.25" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.875 12.8761C9.875 10.6261 12.125 15.1261 15.125 12.8761V7.25108C12.125 9.50108 9.875 5.00108 6.875 7.25108" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_958_42808">
                        <rect width="12" height="12" fill="white" transform="translate(5 5)"/>
                        </clipPath>
                        </defs>
                 </svg> ),
                score: '#' + country_rank?.score, 
                increase: null,
                label: country_rank.label
           },
           {
            title: 'Category rank',
            icon: (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="11" fill="#FEF2EB"/>
                <g clip-path="url(#clip0_958_42840)">
                <path d="M12.875 15.5L10.25 13.625L7.625 15.5V8.375C7.625 8.27554 7.66451 8.18016 7.73484 8.10984C7.80516 8.03951 7.90054 8 8 8H12.5C12.5995 8 12.6948 8.03951 12.7652 8.10984C12.8355 8.18016 12.875 8.27554 12.875 8.375V15.5Z" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.125 8V6.875C9.125 6.77554 9.16451 6.68016 9.23484 6.60984C9.30516 6.53951 9.40054 6.5 9.5 6.5H14C14.0995 6.5 14.1948 6.53951 14.2652 6.60984C14.3355 6.68016 14.375 6.77554 14.375 6.875V14L12.875 12.9266" stroke="#F37C38" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_958_42840">
                <rect width="12" height="12" fill="white" transform="translate(5 5)"/>
                </clipPath>
                </defs>
                </svg>
                ),
                score:'#'+category_rank.score, 
                increase: null,
                label: category_rank.label
           }
    ]
    
    return (
        <div className="w-full flex flex-col  mb-20">
            <div className="relative md:mb-[5rem]  mb-[10rem]">
                <Header isMini influencer={influencer} />
            </div>
            <div  >
                <InfluencerSize influencer={influencer} />
            </div>


            <div className="flex   md:flex-row  flex-col justify-between mt-4 ">
                <div className="px-5 md:pr-2 ">
                    <AudienceCard  influencer={influencer} />
                </div>
                <div className="grid grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-3">
                   {
                    cardsList.map((item) => (
                        <Card item={item} />
                    ))
                   }
                </div>
            </div>

            <TweetList influencer={influencer}  />
            <Profiling />

            <Footer influencer={influencer}  />
        </div>
    )
}
