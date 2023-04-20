import EmptyState from '@/components/EmptyState';
import InfluencerCard from '../Influencers/RecentSearches/InfluencerCard';
import Typography from '@/components/Typography';
import { Link } from '@inertiajs/inertia-react';


export default function InfluencerList({ list, showMore }) {


  const influencers = list?.map((item) => {
    const influencer = item.influencer
    return influencer;
  });

  return (
    <>

      <div className="flex  justify-between mt-16  w-full">
        <Typography variant="h2" content="Last profiled influencers" />
        {showMore && (
          <div>
            <Link href={route('profiling.list')} className='text-xs font-bold  border   px-4  py-2 border-viralget-red text-viralget-red' >View More</Link>
          </div>

        )}
      </div>

      <div>


        {influencers?.length > 0 ?

          <div role="list" className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
            {influencers.slice(0, 3).map((item) => (
              <InfluencerCard useLink influencer={item} />
            ))}
          </div >
          :
          <EmptyState />
        }
      </div>
    </>
  )
}