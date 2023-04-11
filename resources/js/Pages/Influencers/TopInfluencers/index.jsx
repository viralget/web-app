import { useState } from 'react';
import TitleText from '@/components/TitleText';
import EmptyState from '@/components/EmptyState';
import InfluencerCard from '../RecentSearches/InfluencerCard';
import InfluencerProfile from "@/Pages/InfluencerProfile";

<<<<<<< HEAD
=======


>>>>>>> 604f621106fed629a5724df63650961b9e3b0ddc
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
        <>
            {
                isOpen ? <InfluencerProfile influencer={getInfluencer} /> : null
            }

            <TitleText text="Top Influencers" />

            {data?.length > 0 ?

                <div role="list" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
<<<<<<< HEAD
                    {data.map((item) => (
                        <InfluencerCard influencer={item} showBanner handleProfile={() => handleProfile(item)} />
=======
                    {data.map((item, index) => (
                        <InfluencerCard influencer={item} key={index}  showBanner handleProfile= {() => handleProfile(item)} />
>>>>>>> 604f621106fed629a5724df63650961b9e3b0ddc
                    ))}
                </div >
                :
                <EmptyState />
            }
        </>
    )
}
