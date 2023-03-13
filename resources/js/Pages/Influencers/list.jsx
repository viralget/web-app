
import { useLayoutEffect, useRef, useState } from 'react'
import EmptyState from '@/components/EmptyState';
import Badge from '@/Components/Badge';
import { HeartIcon } from '@heroicons/react/24/outline';
import { post } from '@/Utils/api';
import toast from '@/Components/Toast';
import { Inertia } from '@inertiajs/inertia';
import InfluencerProfile from '../InfluencerProfile';
import MenuDropDown from '@/components/MenuDropDown';

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

export default function List({ count, data }) {
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selected, setSelected] = useState([])
    const [savingSearch, setSavingSearch] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [getInfluencer, setInfluencer] = useState([]);

    console.log("data influencer:", data);
    

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
        console.log(e.target.checked, selected.filter((p) => p.id !== item.id), item)
        setSelected(
            e.target.checked
                ? [...selected, item]
                : selected.filter((p) => p.id !== item.id)
        )
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

    const ExportIcon = () => (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_958_49488)">
                    <path d="M12.0938 11.8125L13.5 15.1875L14.9062 11.8125" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.625 14.8008C5.35588 15.0468 5.00524 15.1846 4.64062 15.1875C3.78281 15.1875 3.09375 14.4352 3.09375 13.5C3.09375 12.5648 3.78281 11.8125 4.64062 11.8125C5.00524 11.8154 5.35588 11.9532 5.625 12.1992" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.875 14.9062C8.17974 15.1336 8.54951 15.2568 8.92969 15.2578C9.5625 15.2578 10.125 15.0469 10.125 14.3438C10.125 13.2188 7.875 13.7109 7.875 12.6562C7.875 12.0938 8.29688 11.7422 8.92969 11.7422C9.30986 11.7432 9.67963 11.8664 9.98438 12.0938" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.375 9V2.8125C3.375 2.66332 3.43426 2.52024 3.53975 2.41475C3.64524 2.30926 3.78832 2.25 3.9375 2.25H10.6875L14.625 6.1875V9" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.6875 2.25V6.1875H14.625" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_958_49488">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
              </svg>

    )

    // console.log("data:", data);
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

                        </div>

                        <div>
                       
                        {data.length > 0 && (
                            <div className=" top-0 flex  items-center space-x-3 bg-gray-50 sm:left-16">
                             

                                <MenuDropDown buttonName='Export CSV' ButtonIcon={<ExportIcon className='w-4 h-4 ' />}>
                                    <div className='p-3 flex  justify-center items-center'>
                                           <span className='font-normal  text-sm'>Comming soon</span>  
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
                                                                        // <button
                                    //     type="button"
                                    //     onClick={handleSaveSearch}
                                    //     disabled={savingSearch}
                                    //     className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                    // >
                                    //     <HeartIcon className='w-4 h-4 mr-2' />
                                    //     Save Search
                                    // </button>

                                }

                                <button
                                    type="button"
                                    onClick={handleCreateCampaign}
                                    disabled={selected.length == 0}
                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    Create Campaign List
                                </button>

                               
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
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-indigo-500 sm:left-6"
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
                                                <div className="absolute inset-y-0 left-0 w-0.5 bg-fuchsia-600" />
                                            )}
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-indigo-500 sm:left-6"
                                                value={item.email}
                                                checked={selected.includes(item)}
                                                onChange={(e) => handleSelectProfile(e, item)}
                                            />
                                        </td>
                                        <td
                                            className={classNames(
                                                'whitespace-nowrap py-4 pr-3 text-sm font-medium   cursor-pointer',
                                                selected.includes(item) ? 'text-fuchsia-600' : 'text-gray-900'
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
                                                  <span className='bg-[#F5F5F5] p-2  text-xs rounded-md'>Beauty</span> 
                                                  <span className='bg-[#F5F5F5] p-2  text-xs rounded-md'>Luxury</span> 
                                                  <span className='bg-[#F5F5F5] p-2  text-xs rounded-md'>2+</span> 
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
