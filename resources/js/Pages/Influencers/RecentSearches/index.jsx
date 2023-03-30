import { useState } from 'react';
import { LikeSvg, DotsSvg, TrashSvg }  from '@/Utils/icons';
import { formatDate } from '@/Utils/helpers';
import { Link } from '@inertiajs/inertia-react';
import Typography from '@/components/Typography';
import MenuDropDown from '@/components/MenuDropDown';
import toast from '@/Components/Toast';
import { post, del } from '@/Utils/api';

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
        <div className="mt-60">
            <div className="">
            <Typography variant='h2' content={title ?? "Recent Searches"}/>

                <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {data.map((card, index) => {

                        const keywords = JSON.parse(card.search_filters);

                        return keywords && (
                            (
                                <div key={index} className=" rounded-lg bg-white shadow-lg overflow-hidden">
                                    {/* <Link href={route('influencers.search') + '?' + card.query}> */}
                                        <div className="p-5">
                                            {
                                                isSaved ?
                                                (
                                                    <div className='flex justify-between   mb-17'>
                                                            <div className='flex space-x-2'>
                                                                   <LikeSvg  />
                                                                    <span className='capitalize'>{card.name}</span>
                                                            </div>
                                                            <div>
                                                                <MenuDropDown
                                                                    buttonName=''
                                                                     buttonIcon={<DotsSvg    className='w-4 h-4  mt-1'/>}
                                                                     className='p-0 py-0 px-0'
                                                                     >
                                                                     <div className='p-3 flex flex-col w-40  justify-center items-left  space-y-3'>
                                                                  
                                                                          <button onClick={()=> handleDeleteList(card.id)} className='flex  items-center space-x-2'>
                                                                                <TrashSvg />
                                                                                {
                                                                                    isLoading ? 
                                                                                    ( <span>Deleting...</span>)
                                                                                    : <span>Delete</span>
                                                                                }
                                                                                
                                                                            </button>
                                                                     </div>
                                                                     </MenuDropDown>

                                                                     
      
                                                            </div>
                                                    </div>
                                                )
                                                :
                                                null
                                            }
                                         
                                            <div className="flex items-center">
                                            <Link href={route('influencers.search') + '?' + card.query} className="w-0 flex-1">
                                                   <dl>
                                                        <dt className=" text-sm font-medium text-gray-500 space-x-1">
                                                            {Object.keys(keywords).length > 0 && Object.keys(keywords).splice(0, 2).map((item, index) => (
                                                                <span className='capitalize' key={index}>{item}:{keywords[item]}, </span>
                                                            ))}
                                                            {
                                                                Object.keys(keywords).length > 2  ?
                                                                ( <a href='' className='text-viralget-red'>+ {Object.keys(keywords).length - 2} filters</a>)
                                                                :
                                                            ''

                                                            }
                                                            </dt>
                                                    </dl>
                                                </Link>
                                            </div>
                                        </div>
                                    {/* </Link> */}
                                    <div className=" px-5 py-3">
                                        <div className="text-sm flex justify-between">
                                            <a href={card.href} className="font-medium bg-viralget-gray-200 rounded-md py-[6px] px-[12px] text-cyan-700 hover:text-cyan-900">
                                                {card.results_count} results
                                            </a>
                                            <div className='flex items-center '>
                                                <span className='text-gray-400 text-center'>
                                                    {formatDate(card.created_at, true)}
                                                </span>        
                                             </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            )
                        )


                    })}
                </div>
            </div>


        </div>
    )
}
