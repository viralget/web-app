import { useState } from 'react';
import { LikeSvg, DotsSvg, TrashSvg }  from '@/Utils/icons';
import { formatDate, nFormatter } from '@/Utils/helpers';
import { Link } from '@inertiajs/inertia-react';
import Typography from '@/components/Typography';
import MenuDropDown from '@/components/MenuDropDown';
import toast from '@/Components/Toast';
import { post, del } from '@/Utils/api';


const SearchCard = ({ card, isSaved }) => {

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


      const keywords = JSON.parse(card.search_filters);


    return (
      <div  className=" rounded-lg bg-white shadow-header-card  border  border-[#F5F5F5] overflow-hidden">
           <div className="p-space-17">
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
                                         className='p-0 py-0 px-0  ring-0'
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
                <Link href={route('influencers.search') + '?' + card.query} className="w-0 flex-1 pt-space-17">
                       <dl>
                            <dt className=" text-sm font-medium text-gray-500 space-x-1 ">
                                {Object.keys(keywords).length > 0 && Object.keys(keywords).splice(0, 2).map((item, index) => (
                                    <span className='capitalize' key={index}>• {item} :{keywords[item]} { (index + 1) != 2 ? ',' : ''}</span>
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
        <div className="px-space-17 pb-space-17">
            <div className="text-sm flex justify-between">
                <a href={card.href} className="font-medium bg-viralget-gray-200 rounded-md py-[6px] px-[12px] text-[#3E4555] hover:text-cyan-900">
                    {nFormatter(card.results_count)} results
                </a>
                <div className='flex items-center '>
                    <span className='text-[#3E4555] text-center font-normal text-t-normal'>
                        {formatDate(card.created_at, false, 'DD MMM')}
                    </span>        
                 </div>
               
            </div>
        </div>
    </div>

    )
}


export default SearchCard;