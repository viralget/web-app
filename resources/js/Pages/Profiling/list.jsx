import { useState, useRef } from 'react';
import EmptyState from '@/components/EmptyState';
import TitleText from '@/components/TitleText';
import MenuDropDown from '@/components/MenuDropDown';
import { post } from '@/Utils/api';
import toast from '@/Components/Toast';
import ListBox from './listBox';
import Modal from '@/components/Modal';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function List({ influencerList, profiles }) {

    console.log("influencerList:", profiles);

    const [getValue, setValue] = useState('')
    const [showModal, setShowModal] = useState(false);
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selected, setSelected] = useState([]);
    const [selectedList, setSelectedList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)



    function handleModal(item) {
        setShowModal(!showModal);
        setSelectedList(item);
    }

    const influencers = profiles.map((item) => {
        const influencer = item.influencer
        return influencer;
    });

    function toggleAll() {
        setSelected(checked || indeterminate ? [] : influencers)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    const handleSelectProfile = (e, item) => {
        setSelected(
            e.target.checked
                ? [...selected, item]
                : selected.filter((p) => p.id !== item.id)
        )
    }
    async function handleCreateList(e) {
        e.preventDefault()
        setIsLoading(true)
        const data = {
            name: getValue
        }

        const response = await post(route('create.list'), data, true);

        if (response?.data?.status) {
            toast.success(response?.data?.message);
            setIsLoading(false)
            setTimeout(function () {
                window.location.reload();
            }, 2000);
        } else {
            toast.error(response?.data?.message);
            setIsLoading(false)
        }


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
            list_id: selectedList.id

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

    const UserSvg = () => (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_958_19872)">
                <path d="M2.25 4.5C2.25 4.35082 2.30926 4.20774 2.41475 4.10225C2.52024 3.99676 2.66332 3.9375 2.8125 3.9375H15.1875C15.3367 3.9375 15.4798 3.99676 15.5852 4.10225C15.6907 4.20774 15.75 4.35082 15.75 4.5C15.75 4.64918 15.6907 4.79226 15.5852 4.89775C15.4798 5.00324 15.3367 5.0625 15.1875 5.0625H2.8125C2.66332 5.0625 2.52024 5.00324 2.41475 4.89775C2.30926 4.79226 2.25 4.64918 2.25 4.5ZM2.8125 9.5625H15.1875C15.3367 9.5625 15.4798 9.50324 15.5852 9.39775C15.6907 9.29226 15.75 9.14918 15.75 9C15.75 8.85082 15.6907 8.70774 15.5852 8.60225C15.4798 8.49676 15.3367 8.4375 15.1875 8.4375H2.8125C2.66332 8.4375 2.52024 8.49676 2.41475 8.60225C2.30926 8.70774 2.25 8.85082 2.25 9C2.25 9.14918 2.30926 9.29226 2.41475 9.39775C2.52024 9.50324 2.66332 9.5625 2.8125 9.5625ZM10.125 12.9375H2.8125C2.66332 12.9375 2.52024 12.9968 2.41475 13.1023C2.30926 13.2077 2.25 13.3508 2.25 13.5C2.25 13.6492 2.30926 13.7923 2.41475 13.8977C2.52024 14.0032 2.66332 14.0625 2.8125 14.0625H10.125C10.2742 14.0625 10.4173 14.0032 10.5227 13.8977C10.6282 13.7923 10.6875 13.6492 10.6875 13.5C10.6875 13.3508 10.6282 13.2077 10.5227 13.1023C10.4173 12.9968 10.2742 12.9375 10.125 12.9375ZM16.3125 12.9375H15.1875V11.8125C15.1875 11.6633 15.1282 11.5202 15.0227 11.4148C14.9173 11.3093 14.7742 11.25 14.625 11.25C14.4758 11.25 14.3327 11.3093 14.2273 11.4148C14.1218 11.5202 14.0625 11.6633 14.0625 11.8125V12.9375H12.9375C12.7883 12.9375 12.6452 12.9968 12.5398 13.1023C12.4343 13.2077 12.375 13.3508 12.375 13.5C12.375 13.6492 12.4343 13.7923 12.5398 13.8977C12.6452 14.0032 12.7883 14.0625 12.9375 14.0625H14.0625V15.1875C14.0625 15.3367 14.1218 15.4798 14.2273 15.5852C14.3327 15.6907 14.4758 15.75 14.625 15.75C14.7742 15.75 14.9173 15.6907 15.0227 15.5852C15.1282 15.4798 15.1875 15.3367 15.1875 15.1875V14.0625H16.3125C16.4617 14.0625 16.6048 14.0032 16.7102 13.8977C16.8157 13.7923 16.875 13.6492 16.875 13.5C16.875 13.3508 16.8157 13.2077 16.7102 13.1023C16.6048 12.9968 16.4617 12.9375 16.3125 12.9375Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_958_19872">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );


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
                                    {influencers.length > 0 && influencers.map((item, index) => (
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
                                                <img className="h-10 w-10 rounded-full" src={item.profile_photo_url} alt="" />

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

            <div className="flex  justify-between  w-full">
                <TitleText text="My Lists" />
                <div>

                    <MenuDropDown buttonName="Create List" className="bg-viralget-red text-white" ButtonIcon={<UserSvg className='w-4 h-4 ' />}>
                        <div className='p-2 flex flex-col  justify-center items-center'>
                            <form onSubmit={handleCreateList}>
                                <div>
                                    <input
                                        id="keywords"
                                        name="keywords"
                                        type="text"
                                        value={getValue}
                                        onChange={(e) => setValue(e.target.value)}
                                        placeholder={"Enter  name"}
                                        className="block w-full shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                                    />
                                </div>

                                <div className='w-full mt-3'>
                                    <button disabled={isLoading} className={
                                        classNames('bg-viralget-red text-white  w-full p-2 rounded-md',
                                            isLoading ? 'opacity-10' : ''
                                        )}>Create list</button>
                                </div>
                            </form>
                        </div>
                    </MenuDropDown>

                </div>
            </div>

            <div className='grid   grid-cols-3  gap-3'>
                {
                    influencerList.length > 0 ?
                        (
                            influencerList.map((item) => (
                                <ListBox item={item} handleAddInfluencer={() => handleModal(item)} />
                            ))
                        )
                        :
                        (
                            <EmptyState />
                        )
                }

            </div>
        </div >
    )
}