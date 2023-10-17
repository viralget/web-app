import {
    ScaleIcon,
} from '@heroicons/react/24/outline'
import TitleText from '@/components/TitleText';
import { formatDate } from 'baseui/datepicker';

// const cards = [
//     { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
//     { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
//     { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
//     // More items...
// ]
export default function CampaignCards({ campaigns }) {
    // // console.log({ data })
    return (
        <div className="mt-2  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {campaigns?.length > 0 && campaigns.map((card) => (
                <a href={route('campaigns.show', { id: card.id })}>
                    <div className='overflow-hidden border-gray-300 border rounded-lg text-gray-700'>
                        <div class="container px-5 py-2 mx-auto ">
                            <div class="flex flex-wrap -m-1 md:-m-2">
                                {card.influencers?.length > 0 && card.influencers?.map((influencer) => (
                                    <div class="flex flex-wrap w-1/2">
                                        <div class="w-full p-1 md:p-2">
                                            <img alt="gallery" class="block object-cover object-center w-full h-100 rounded-lg"
                                                src={influencer.profile_banner_url} />
                                            {/* <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" /> */}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                    <p className='mt-3 text-md text-bold'>{card.title}</p>

                </a>
            ))}

            {/* {data.map((card) => (
                <div className="w-100 h-100">
                    <div class="grid grid-col-2 border border-gray-400">
                        {card.influencers?.length && card.influencers?.map((influencer) => (
                            <div class="w-50 h-50 overflow-hidden p-1 md:p-2">
                                <img alt="" class="block object-cover object-center w-full h-full rounded-lg"
                                    src={influencer.profile_banner_url} />
                            </div>
                        ))}
                    </div>
                    <p>{card.title}</p>
                </div>
            ))} */}

        </div>
    )
}


{/* // <div className="mt-8">
        //     <div className="">
        //         <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        //             {/* Card 
        //             {data.map((card) => (
        //                 <a href={route('campaigns.show', { id: card.id })} key={card.name} className=" rounded-lg px-5 py-3 bg-white shadow">
        //                     <div className="text-sm block space-y-3">
        //                         <div className="font-medium text-cyan-700 hover:text-cyan-900">
        //                             {card.title}       <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
        //                                 Pending
        //                             </span>
        //                         </div>
        //                         <div className='text-gray-400'>
        //                             {card.goal}
        //                         </div>
        //                     </div>
        //                 </a>
        //             ))}
        //         </div>
        //     </div>


        // </div> */}
