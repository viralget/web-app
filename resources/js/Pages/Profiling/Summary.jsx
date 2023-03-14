import TitleText from '@/components/TitleText';
import SummaryCard from './summaryCard';

export  default function summary(){




    return(
        <div className="px-10 py-5">
           
           <div className="flex  justify-between  w-full">
               <TitleText text="Last profiled influencers" />
            </div>
            <div className='flex justify-between'>
                  <div className='flex space-x-3'>
                       <SummaryCard />
                       <SummaryCard />
                  </div>
                  <div>

                  </div>
            </div>

        </div>
    )
}