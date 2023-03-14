
import { useLayoutEffect, useRef, useState } from 'react'
import EmptyState from '@/components/EmptyState';
import Badge from '@/Components/Badge';
import { HeartIcon } from '@heroicons/react/24/outline';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/outline';
import { post } from '@/Utils/api';
import toast from '@/Components/Toast';
import { Inertia } from '@inertiajs/inertia';
import InfluencerProfile from '../InfluencerProfile';
import MenuDropDown from '@/components/MenuDropDown';
import Modal from '@/components/Modal';
import  ExportIcon  from "../../../assets/images/ExportIcon.svg" 

// const people = [
//     {
//         name: 'Lindsay Walton',
//         title: 'Front-end Developer',
//         email: 'lindsay.walton@example.com',
//         role: 'Member',
//     },
//     {
//         name: 'Lindsay Walton',
//         title: 'Front-end Developer',
//         email: 'lindsay.walton@example.com',
//         role: 'Member',
//     }, {
//         name: 'Lindsay Walton',
//         title: 'Front-end Developer',
//         email: 'lindsay.walton@example.com',
//         role: 'Member',
//     }, {
//         name: 'Lindsay Walton',
//         title: 'Front-end Developer',
//         email: 'lindsay.walton@example.com',
//         role: 'Member',
//     }, {
//         name: 'Lindsay Walton',
//         title: 'Front-end Developer',
//         email: 'lindsay.walton@example.com',
//         role: 'Member',
//     },    // More people...
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function List(props) {

    const { count, data } = props;

    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selected, setSelected] = useState([])
    const [savingSearch, setSavingSearch] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [getInfluencer, setInfluencer] = useState([]);

    const [showModal, setShowModal] = useState(false);


    function handleModal(){
        setShowModal(!showModal);
    }


    useLayoutEffect(() => {
        const isIndeterminate = selected.length > 0 && selected.length < data.length
        setChecked(selected.length === data.length)
        setIndeterminate(isIndeterminate)

        if (checkbox.current) {
            checkbox.current.indeterminate = isIndeterminate

        }
    }, [selected])

    function toggleAll() {
        setSelected(checked || indeterminate ? [] : data)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    const handleSelectProfile = (e, item) => {
        // console.log(e.target.checked, selected.filter((p) => p.id !== item.id), item)
        setSelected(
            e.target.checked
                ? [...selected, item]
                : selected.filter((p) => p.id !== item.id)
        )

        // console.log("selected:", selected);
    }

    const handleSaveSearch = async (e) => {
        e.preventDefault();


        const urlParams = new URLSearchParams(window.location.search).toString();
    
        const data = {
            queryData: JSON.parse('{"' + decodeURI(urlParams.replace(/&/g, "\",\"").replace(/=/g, "\":\"")) + '"}'),
            query: urlParams,
        }


        const response = await post(route('influencers.search.store'), data, true);

        if (response?.data?.status) {
            toast('Search stored successfully!');
            setIsSaved(true)
        } else {
            toast.error('An error occured');
        }
    }

    const handleCreateCampaign = async (e) => {
        e.preventDefault()

        const data = {
            influencers: selected
        }

        const response = await post(route('campaign.initiate'), data, true);

        if (response?.data?.status) {
            Inertia.get(route('campaigns.create'));
        } else {
            toast.error('An error occured');
        }

    }

    function handleProfilePreview(influencer){
        if(influencer){
            setIsOpen(true);
            setInfluencer(influencer)
        }
    }

    const categories = ['Lifestyle', 'Beauty', 'Luxury', 'Actor'];


  async function handleCreateProfiling(){

    const getIds = selected.map((item) =>  {
        return {
            id : item.id
        }
    });

    const data = {
        data: getIds
    };


    const response = await post(route('create.profiling'), data, true);

    if (response?.data?.status) {
        setShowModal(!showModal);
        toast.success('Profile saved successfully');
    } else {
        toast.error('An error occured');
    }

  }
    return (
        <div className="mt-3 flex flex-col">
              {
        isOpen ? <InfluencerProfile  influencer={getInfluencer} /> : null
       }
            <div className="inline-block min-w-full align-middle">
                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <div className='flex p-4 justify-between align-middle items-center'>
                      
                        <div>
                            <h3>{count} {count > 0 ? 'Influencers' : 'Influencer'}</h3>

                            <div>
                                  <Modal  iDisplay={showModal}  handleModal={ () => handleModal()}>
                                       <div className='bg-white p-2  px-4 rounded-md  w-[22rem]'>
                                               <div className='flex space-x-4 px- py-2 justify-between border-b w-full '>
                                                          <div className='flex flex-col border-r pr-5 '>
                                                              <span className='text-xs font-bold'>Available to profile </span>
                                                              <span className='text-viralget-red text-xs font-bold'>20 influencers</span>
                                                          </div>

                                                          <div className='flex flex-col'>
                                                              <span className='text-xs font-bold'>Available to store </span>
                                                              <span className='text-viralget-red text-xs font-bold'> {selected.length} influencers</span>
                                                          </div>

                                                          <div className='flex items-center justify-end ml-5'>
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
                                                </div>



                                                <div className='mt-2 overflow-y-scroll  no-scrollbar flex space-x-2 pb-5 mt-3'>

                                                    {
                                                     selected.slice(0,2).map((influencer) => (
                                                            <div className='bg-[#F5F5F5] px-3 py-1 rounded-md  flex items-center justify-center '>
                                                                        <div className='mr-2 w-7 h-7'>
                                                                            <img  className='w-7 h-7 rounded-full'   src={influencer.profile_photo_url} />
                                                                        </div>

                                                                        <span className='text-xs font-bold text-black '>{influencer.username} </span>
                                                                </div>
                                                        ))

                                                    }
                                                    {
                                                        selected.length > 2 ?
                                                        (
                                                            <div className='bg-[#F5F5F5] px-1 py-1 rounded-md w-full flex items-center justify-center '>
                                                           
                                                              <span className='text-xs font-bold text-black w-[1.5rem]  text-center'>{selected.length - 2 + ' +'} </span>
                                                           </div>
                                                        )
                                                        : ''
                                                    }

                                   
                                                </div>

                                                <div className='flex justify-center items-center text-center w-full mt-1'>
                                                     <span className='text-xs font-normal'>will be profiled & added to your profile</span>
                                               
                                                </div>

                                                <div className='flex  justify-center items-center w-full mt-2 mb-4'>
                                                      <button onClick={handleCreateProfiling} className='bg-viralget-red py-3  font-bold rounded-md px-4 h-9 text-white  flex items-center text-center'>
                                                      Profile influencers
                                                      </button>
                                                </div>
                                       </div>
                                  </Modal>
                            </div>

                        </div>

                        <div>
                       
                        {data.length > 0 && (
                            <div className=" top-0 flex  items-center space-x-3 bg-gray-50 sm:left-16">

                               { selected.length > 0 && ( <button
                                        type="button"
                                        onClick={() => handleModal()}
                                        className="inline-flex items-center rounded border border-viralget-red h-9  bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        <UsersIcon className='w-4 h-4 mr-2  text-viralget-red' />
                                         <span  className='text-viralget-red font-bold'>  Profile influencers ({selected.length})</span> 
                                    </button>)
                              }
                             

                                <MenuDropDown buttonName={selected.length > 0 ? 'Export ' + selected.length +' influencers' : 'Export '  +'influencers'} ButtonIcon={<img src={ExportIcon} className='w-4 h-4 ' />}>
                                    <div className='p-3 flex flex-col  justify-center items-center'>
                                           <ArrowPathIcon  className='w-10 h-10'/>
                                           <span className='font-bold  mt-2 text-sm'>Coming soon</span>  
                                    </div>
                               </MenuDropDown>

                                
                                {!isSaved &&

                                    <MenuDropDown 
                                    buttonName='Save Search' 
                                    ButtonIcon={<HeartIcon className='w-5 h-5 ' />}
                                     >
                                    <div className='p-3'>
                                            <form>
                                                <div>
                                                        <input
                                                        id="keywords"
                                                            name="keywords"
                                                            type="text"
                                                            onChange={(e) => console.log(e)}
                                                            placeholder={"Enter search name"}
                                                            className="block w-full shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                                                        />
                                                </div>

                                                <div className='w-full mt-3'>
                                                    <button className='bg-[#F5F5F5] w-full p-2 rounded-md'>Save search</button>
                                                </div>
                                            </form>
                                    </div>
                                    </MenuDropDown>
                          
                                }

                                {/* <button
                                    type="button"
                                    onClick={handleCreateCampaign}
                                    disabled={selected.length == 0}
                                    className="inline-flex items-center rounded border h-9 font-bold border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    Create Campaign List
                                </button> */}

                               
                            </div>
                        )}
                     </div>
                    </div>
                    {data.length > 0 ?
                        <table className="min-w-full table-fixed divide-y divide-gray-300">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                        <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded bg-[#3E4555] border-gray-300 text-[#3E4555] focus:[#3E4555] sm:left-6"
                                            ref={checkbox}
                                            checked={checked}
                                            onChange={toggleAll}
                                        />
                                    </th>
                                    <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                        Influencer
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Follower
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Quality audience
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        ER
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        QAS
                                    </th>
                                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Social links
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                      Category
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                       Location
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {data.map((item) => (
                                    <tr key={item.email} className={selected.includes(item) ? 'bg-gray-50' : undefined}>
                                        <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                            {selected.includes(item) && (
                                                <div className="absolute inset-y-0 left-0 w-0.5 bg-gray-900" />
                                            )}
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded  accent-gray-700 sm:left-6"
                                                value={item.email}
                                                checked={selected.includes(item)}
                                                onChange={(e) => handleSelectProfile(e, item)}
                                            />
                                        </td>
                                        <td
                                            className={classNames(
                                                'whitespace-nowrap py-4 pr-3 text-sm font-medium   cursor-pointer',
                                                selected.includes(item) ? 'text-gray-900' : 'text-gray-900'
                                            )}
                                        >
                                            <button  onClick={() => handleProfilePreview(item)}>
                                                {item.username}
                                            </button>
                                            
                                        </td>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.username}</td> */}
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.followers_count}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10%</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10%</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><Badge text="Good" /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-400">
                                            <a href={'https://twitter.com/'+item.username} target="_blank">
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                            </a>
                                           
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4  w-60 text-sm text-gray-500">
                                           <div className='flex flex-wrap space-x-3'>
                                            {
                                                item.categories.length  > 2 ? 

                                                item.categories.slice(0,2).map((category) => (
                                                     
                                                  <span className='bg-[#F5F5F5] p-2  text-xs rounded-md'>{category}</span> 
                                               ))
                                               (
                                                <span className='bg-[#F5F5F5] p-2  text-xs rounded-md'>{item.categories.length - 2} +</span> 
                                               )

                                               : 
                                               item.categories.map((category) => (
                                                     
                                                <span className='bg-[#F5F5F5] p-2  text-xs rounded-md'>{category}</span> 
                                             ))
                                            }
                                             </div>
                                           
                                            
                                        </td>

                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.location}</td>


                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        :
                        <EmptyState />
                    }

                </div>
            </div>
        </div>
    )
}
