import { useState } from 'react';
import { LikeSvg, DotsSvg, TrashSvg }  from '@/Utils/icons';
import { formatDate, nFormatter } from '@/Utils/helpers';
import { Link } from '@inertiajs/inertia-react';
import Typography from '@/components/Typography';
import MenuDropDown from '@/components/MenuDropDown';
import toast from '@/Components/Toast';
import { post, del } from '@/Utils/api';

import SearchCard from './searchCard';

export default function RecentSearches({ data, title, isSaved }) {
        
    const [isLoading, setIsLoading] = useState(false);

  async  function handleDeleteList(id){
        setIsLoading(true);

        const data = {id};

     const response = await post(route('influencers.search.delete'), data,  true);
     if (response?.data?.status) {
             toast.success(response?.data?.message);
             setTimeout(function() {
                window.location.reload();
            }, 1000);
         } else {
             toast.error(response?.data?.message);
             setIsLoading(false)
         }
    }


    return (
        <div className="mt-space-60">
            <div className="">
                <div className='flex items-center justify-between'>
                   <Typography variant='h2' content={title ?? "Recent Searches"}/>
               
                {
                     isSaved &&
                     (
                        <div>
                           <a href={route('savedsearches.page')}   className='text-t-normal font-bold  text-viralget-red'  >Show more</a>
                        </div>
                     )
                }
                   
                </div>
           
                <div className="mt-space-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {data.map((card, index) => {

                        const keywords = JSON.parse(card.search_filters);

                        return keywords && (
                            (
                                 <SearchCard   card={card}  isSaved={isSaved} key={index} />
                            )
                        )


                    })}
                </div>
            </div>


        </div>
    )
}
