import EmptyState from '@/components/EmptyState';
import InfluencerCard from '../Influencers/RecentSearches/InfluencerCard';
import TitleText from '@/components/TitleText';
export default function InfluencerList({list}){


    const influencers = list.map((item) => {
        const influencer =   item.influencer
          return  influencer;
       });
   


    return(
        <div className="px-10 py-2">
           

          <div className="flex  justify-between  w-full">
               <TitleText text="Last profiled influencers" />
              <div>
                   <a href='#'   className='text-xs font-bold  border   px-4  py-2 border-viralget-red text-viralget-red'  >View More</a>
              </div>
            </div>

              <div>
              

                {influencers?.length > 0 ?

                    <div role="list" className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                        {influencers.slice(0,3).map((item) => (
                            <InfluencerCard influencer={item}   />
                        ))}
                    </div >
                    :
                    <EmptyState />
                }
              </div>
        </div>
    )
}