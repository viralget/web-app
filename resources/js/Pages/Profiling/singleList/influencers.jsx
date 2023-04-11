import { useState } from 'react';
import TitleText from '@/components/TitleText';
import EmptyState from '@/components/EmptyState';
import InfluencerCard from '../../Influencers/RecentSearches/InfluencerCard';
import InfluencerProfile from "@/Pages/InfluencerProfile";


const influencers = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [getInfluencer, setInfluencer] = useState([]);

    function handleProfile(influencer){
       if(influencer){
            setIsOpen(true);
            setInfluencer(influencer)
        }
    }

  return (
    <div className='mt-4'>
    {
     isOpen ? <InfluencerProfile  influencer={getInfluencer} /> : null
    }
 
     
         {data?.length > 0 ?

             <div role="list" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 ">
                 {data.map((item) => (
                     <InfluencerCard influencer={item}  handleProfile= {() => handleProfile(item)} />
                 ))}
             </div >
             :
             <EmptyState />
         }
     </div>
  )
}

export default influencers