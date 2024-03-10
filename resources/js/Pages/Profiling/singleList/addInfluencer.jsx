import { useState, useRef } from 'react';
import EmptyState from '@/components/EmptyState';
import { post } from '@/Utils/api';
import toast from '@/Components/Toast';
import Modal from '@/components/Modal';
import Avatar from '@/Components/Skeleton/Avatar';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const AddInfluencer = ({ profiled_influencers, list }) => {


    const influencers = profiled_influencers.map((item) => {
        const influencer = item.influencer
        return influencer;
    });


    const [showModal, setShowModal] = useState(true);
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selected, setSelected] = useState([]);
    const [selectedList, setSelectedList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    const handleSelectProfile = (e, item) => {
        setSelected(
            e.target.checked
                ? [...selected, item]
                : selected.filter((p) => p.id !== item.id)
        )
    }


    function toggleAll() {
        setSelected(checked || indeterminate ? [] : influencers)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    function handleModal() {
        setShowModal(!showModal);
    }


    async function handleSavedInfluencers() {

        setIsLoading(true)

        const getIds = selected.map((item) => {
            return {
                id: item.id
            }
        });

        const data = {
            data: getIds,
            list_id: list.id

        };

        const response = await post(route('influencers.list'), data, true);

        if (response?.data?.status) {
            setShowModal(false)
            toast.success(response?.data?.message);
            setTimeout(function () {
                window.location.reload();
            }, 2000);
            setIsLoading(false);
        } else {
            toast.error(response?.data?.message);
            setIsLoading(false);
        }

    }

    return (

        <div>
            <Modal iDisplay={showModal} handleModal={() => handleModal()}>
                <div className='bg-white  rounded-md relative  w-full '>

                    <div className={classNames('w-full bottom-0   p-4 flex  justify-center items-center z-20 absolute',
                        selected.length > 0 ? 'block' : 'hidden'
                    )}>
                        <button disabled={isLoading} onClick={() => handleSavedInfluencers()}
                            className={
                                classNames('flex space-x-1 w-full py-3 justify-center bg-viralget-red rounded-md',
                                    isLoading ? 'opacity-10' : '')
                            }

                        >
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_958_19399)">
                                    <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.25 15.75V14.25C2.25 13.4544 2.56607 12.6913 3.12868 12.1287C3.69129 11.5661 4.45435 11.25 5.25 11.25H8.25C9.04565 11.25 9.80871 11.5661 10.3713 12.1287C10.9339 12.6913 11.25 13.4544 11.25 14.25V15.75" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12 8.25H16.5M14.25 6V10.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_958_19399">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className='text-white'>
                                Add influencer
                            </span>
                        </button>
                    </div>
                    <div className='flex p-2  justify-between ml-5'>
                        <div>
                            <span className='text-black font-bold'>Select Influencer</span>
                        </div>
                        <button onClick={() => handleModal()}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_958_50325)">
                                    <path d="M13.0625 5L5 13.0625" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.0625 13.0625L5 5" stroke="#748094" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_958_50325">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </button>
                    </div>



                    <div className='mt-4  overflow-y-scroll  h-80'>

                        {influencers.length > 0 ?
                            <table className="min-w-full table-fixed divide-y divide-gray-300  ">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded accent-gray-700 focus:[#3E4555] sm:left-6"
                                                ref={checkbox}
                                                checked={checked}
                                                onChange={toggleAll}
                                            />
                                        </th>
                                        <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left  text-xs font-semibold text-gray-900">
                                            Influencer
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left  text-xs font-semibold text-gray-900">
                                            Follower
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left  text-xs font-semibold text-gray-900">
                                            Interaction
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left  text-xs font-semibold text-gray-900">
                                            ER
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {influencers.map((item, index) => (
                                        <tr key={index}
                                            className={selected.includes(item) ? 'bg-gray-50' : undefined}
                                        >
                                            <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                                {/* {selected.includes(item) && (
                                                <div className="absolute inset-y-0 left-0 w-0.5 bg-gray-900" />
                                            )} */}
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
                                                    'whitespace-nowrap py-4  text-sm font-medium flex items-center justify-start  space-x-2   cursor-pointer',
                                                    selected.includes(item) ? 'text-gray-900' : 'text-gray-900'
                                                )}
                                            >
                                                <Avatar user={item} />
                                                {/* <img className="h-10 w-10 rounded-full" src={item.profile_photo_url} alt="" /> */}

                                                <div className='flex flex-col' >
                                                    <span className='font-bold  text-xs'>@{item.username}</span>
                                                    <span className='text-sm font-light'>{item.full_name}</span>

                                                </div>

                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.followers_count}</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10%</td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10%</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            :
                            <EmptyState />
                        }

                        <div className='h-20'>

                        </div>
                    </div>



                </div>
            </Modal>
        </div>
    )
}


export default AddInfluencer;