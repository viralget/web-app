import { useState } from 'react';
import Typography from '@/components/Typography';
import EmptyState from '@/components/EmptyState';
import InfluencerCard from '../RecentSearches/InfluencerCard';
import InfluencerProfile from "@/Pages/InfluencerProfile";


export default function TopInfluencers({ data }) {

    const [isOpen, setIsOpen] = useState(false);
    const [getInfluencer, setInfluencer] = useState([]);

    function handleProfile(influencer) {
        if (influencer) {
            setIsOpen(true);
            setInfluencer(influencer)
        }
    }


    return (
        <div className='mt-space-60'>
            {
                isOpen ? <InfluencerProfile influencer={getInfluencer} /> : null
            }

            {/* <Typography variant='h2' content="Top Influencers" />

            {data?.length > 0 ?

                <div role="list" className="mt-space-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                    {data.map((item, index) => (
                        <InfluencerCard useShadow useLink influencer={item} key={index} showBanner handleProfile={() => handleProfile(item)} />
                    ))}
                </div >
                :
                <EmptyState />
            } */}
        </div>
    )
}
