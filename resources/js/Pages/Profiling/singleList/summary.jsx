import { useState } from 'react';
import TitleText from '@/components/TitleText';
import MenuDropDown from '@/components/MenuDropDown';
import { 
    CancelSvg,
    EditSvg, 
    TrashSvg, 
    UserSvg, 
} from '@/Utils/icons';

import { BoardcadsList } from '@/Utils/constants';  
import InfluencerBox from './influencerBox';
import BaseCard from '../baseCard';
import Modal from '@/components/Modal';
import toast from '@/Components/Toast';
import { post, del } from '@/Utils/api';
import AddInfluencer from './addInfluencer';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Summary({ list, profiled_influencers}){

 const [showAddModal, setShowAddModal] = useState(false);
 const [showModal, setShowModal] = useState(false);
 const [getValue, setValue] = useState({id: list.id, name: list.name});
 const [isLoading, setIsLoading] = useState(false)



    function handleModal(){
        setShowModal(!showModal);
    }

    function handleAddModal(){
        setShowAddModal(!showAddModal);
    }

    async  function handleUpdateList(e){
        e.preventDefault()
        setIsLoading(true)
       const response = await post(route('update.list'), getValue, true);
 
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


     async  function handleDeleteList(){
         
        setIsLoading(true)

        const data = {id: list.id}

       
        const response = await post(route('delete.list'), data,  true);
  
         if (response?.data?.status) {
             toast.success(response?.data?.message);
             setTimeout(function() {
                window.location.href = route('profiling');
            }, 1000);
         } else {
             toast.error(response?.data?.message);
             setIsLoading(false)
         }
     }


    return(
        <div className='mt-5'>

       {
          showAddModal ? 
           <AddInfluencer profiled_influencers={profiled_influencers} list={list} />
          : null
 
       }
<Modal  iDisplay={showModal}  handleModal={ () => handleModal()}>

<div className='p-2 flex flex-col  justify-center items-center bg-white p-4'>

                                     <div className='flex items-center justify-end w-full mb-3 ml-5'>
                                                              <button onClick={()=> handleModal()}>
                                                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <g clip-path="url(#clip0_958_50325)">
                                                                        <path d="M13.0625 5L5 13.0625" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path d="M13.0625 13.0625L5 5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        </g>
                                                                        <defs>
                                                                        <clipPath id="clip0_958_50325">
                                                                        <rect width="18" height="18" fill="white"/>
                                                                        </clipPath>
                                                                        </defs>
                                                                        </svg>

                                                                 </button>
                                      </div>

                                    <form onSubmit={handleUpdateList}>
                                                <div>
                                                        <input
                                                            id="keywords"
                                                            name="keywords"
                                                            type="text"
                                                            value={getValue.name}
                                                            onChange={(e) => setValue({name:e.target.value, id: list.id})}
                                                            placeholder={"Enter  name"}
                                                            className="block w-full shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                                                        />
                                                </div>

                                                <div className='w-full mt-3'>
                                                    <button disabled={isLoading} className={
                                                        classNames('bg-viralget-red text-white  w-full p-2 rounded-md', 
                                                        isLoading ? 'opacity-10' : ''
                                                        )}>Update list</button>
                                                </div>
                                            </form>
                                    </div>
</Modal>



            {/* header */}
                <div className="flex  justify-between  w-full">
                    <TitleText text={list.name} />

                    <div className='flex space-x-2'>
                            <button onClick={() => handleAddModal()}  className='flex space-x-1  items-center px-4 h-10 justify-center bg-viralget-red rounded-md'  >
                                   <UserSvg />
                                        <span className='text-white  text-xs'>
                                        Add influencer
                                        </span>
                            </button>

                            <MenuDropDown buttonName=" " className="bg-white text-black flex h-10  items-center" buttonIcon={<CancelSvg className='w-4 h-4 ' />}>
                                    <div className='p-3 flex flex-col w-40  justify-start  '>
                                          <button onClick={ () => handleModal()}  className='flex  items-center space-x-2  mb-3'>
                                              <EditSvg />
                                              <span>Edit</span>
                                          </button>

                                          <button onClick={()=> handleDeleteList()} className='flex  items-center space-x-2'>
                                             <TrashSvg />
                                             {
                                                isLoading ? 
                                                ( <span>Removing...</span>)
                                                : <span>Remove list</span>
                                             }
                                             
                                          </button>
                                    </div>
                             </MenuDropDown>

                            
                    </div>
             </div>


             <div className='flex  mt-4  space-x-3'>
                <div>
                   <InfluencerBox list={list} />
                </div>
                   

                  <div className='grid grid-cols-3 gap-3'>
                    {
                        BoardcadsList.map((item) => (
                            <BaseCard  label={item.label}  value={item.value} Icon={item.icon} />
                        ))
                    }
                         
                  </div>
             </div>
        </div>
    )
}