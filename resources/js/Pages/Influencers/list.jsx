
import { useLayoutEffect, useRef, useState } from 'react'
import EmptyState from '@/components/EmptyState';
import Badge from '@/Components/Badge';
import { HeartIcon } from '@heroicons/react/24/outline';
import { post } from '@/Utils/api';
import toast from '@/Components/Toast';
import { Inertia } from '@inertiajs/inertia';

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

        console.log({ response })
        if (response?.data?.status) {
            Inertia.get(route('campaigns.create'));
        } else {
            toast.error('An error occured');
        }

    }

    return (
        <div className="mt-3 flex flex-col">
            <div className="inline-block min-w-full align-middle">
                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <div className='flex p-4 justify-between align-middle items-center'>
                        <div>
                            <h3>{count} {count > 0 ? 'Influencers' : 'Influencer'}</h3>

                        </div>
                        {data.length > 0 && (
                            <div className=" top-0 flex  items-center space-x-3 bg-gray-50 sm:left-16">
                                <button
                                    type="button"
                                    onClick={handleCreateCampaign}
                                    disabled={selected.length == 0}
                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    Create Campaign List
                                </button>

                                {!isSaved &&
                                    <button
                                        type="button"
                                        onClick={handleSaveSearch}
                                        disabled={savingSearch}
                                        className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                    >
                                        <HeartIcon className='w-4 h-4 mr-2' />
                                        Save Search
                                    </button>

                                }
                                {/* <button
                                    type="button"
                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    Export CSV
                                </button> */}
                            </div>
                        )}

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
                                        Engagement Rate
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Rating
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Platform
                                    </th>
                                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
                                    </th> */}
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
                                                'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                                selected.includes(item) ? 'text-fuchsia-600' : 'text-gray-900'
                                            )}
                                        >
                                            {item.username}
                                        </td>
                                        {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.username}</td> */}
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.followers_count}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10%</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">10%</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><Badge text="Good" /></td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-blue-400">
                                            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </td>
                                        {/* <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-fuchsia-600 hover:text-fuchsia-900">
                                                Edit<span className="sr-only">, {item.name}</span>
                                            </a>
                                        </td> */}
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
