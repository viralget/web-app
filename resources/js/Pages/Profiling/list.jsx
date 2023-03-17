import EmptyState from '@/components/EmptyState';
import TitleText from '@/components/TitleText';

export default function InfluencerList({ list, showMore }) {

  return (
    <>
      <div className="flex  justify-between  w-full">
        <TitleText text="My Lists" />
        <div>
          <a href='#' className='text-xs font-bold  border   px-4  py-2 border-viralget-red text-viralget-red'  >View More</a>
        </div>
      </div>

      <div>
        <EmptyState />
      </div>
    </>
  )
}