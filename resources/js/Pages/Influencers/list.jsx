
import { useLayoutEffect, useRef, useState } from 'react'
import EmptyState from '@/components/EmptyState';

const people = [
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    },
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    }, {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    }, {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    }, {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
    },    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function List({ count, data }) {
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selected, setSelected] = useState([])

    useLayoutEffect(() => {
        const isIndeterminate = selected.length > 0 && selected.length < data.length
        setChecked(selected.length === people.length)
        setIndeterminate(isIndeterminate)

        if (checkbox.current) {
            checkbox.current.indeterminate = isIndeterminate

        }
    }, [selected])

    function toggleAll() {
        setSelected(checked || indeterminate ? [] : people)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    return (
        <div className="mt-3 flex flex-col">
            <div className="inline-block min-w-full align-middle">
                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <div className='flex p-4 justify-between align-middle items-center'>
                        <div>
                            <h3>{count} Influencers</h3>

                        </div>
                        {data.length > 0 && (
                            <div className=" top-0 flex  items-center space-x-3 bg-gray-50 sm:left-16">
                                <button
                                    type="button"
                                    disabled={selected.length > 0}
                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                    Create Campaign List
                                </button>
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
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Edit</span>
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
                                                onChange={(e) =>
                                                    setselected(
                                                        e.target.checked
                                                            ? [...selected, item]
                                                            : selected.filter((p) => p !== item)
                                                    )
                                                }
                                            />
                                        </td>
                                        <td
                                            className={classNames(
                                                'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                                selected.includes(item) ? 'text-fuchsia-600' : 'text-gray-900'
                                            )}
                                        >
                                            {item.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.role}</td>
                                        <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" className="text-fuchsia-600 hover:text-fuchsia-900">
                                                Edit<span className="sr-only">, {item.name}</span>
                                            </a>
                                        </td>
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
