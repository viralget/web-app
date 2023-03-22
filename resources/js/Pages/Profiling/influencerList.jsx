import EmptyState from '@/components/EmptyState';
import InfluencerCard from '../Influencers/RecentSearches/InfluencerCard';
import TitleText from '@/components/TitleText';
export default function InfluencerList({list, type}){


    const influencers = list.map((item) => {
        const influencer =   item.influencer
          return  influencer;
       });
   


    return(
        <div className="px-10 py-2">
           

          <div className="flex  justify-between  w-full">
               <TitleText text={type ? "profiled Influencers": "Last profiled influencers"} />
              <div>
                {
                    type ? ''
                    :
                    <a href={route('profiling.all')}   className='text-xs font-bold  border   px-4  py-2 border-viralget-red text-viralget-red'  >View More</a>
          
                }
              </div>
           </div>

        <div>
              

                {influencers?.length > 0 ?

                    <div role="list" className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 ">
                      {
                        type === 'all' ?
                        influencers.map((item) => (
                            <InfluencerCard influencer={item}   />
                        ))
                        :
                        influencers.slice(0,4).map((item) => (
                            <InfluencerCard influencer={item}   />
                        ))
                      }
                       
                    </div >
                    :
                    <EmptyState />
                }
              </div>
        </div>
    )
}