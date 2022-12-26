/*
  This example requires Tailwind CSS v3.0+
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useLayoutEffect, useRef, useState } from 'react'

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

export default function List() {
    const checkbox = useRef()
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [selectedPeople, setSelectedPeople] = useState([])

    useLayoutEffect(() => {
        const isIndeterminate = selectedPeople.length > 0 && selectedPeople.length < people.length
        setChecked(selectedPeople.length === people.length)
        setIndeterminate(isIndeterminate)
        checkbox.current.indeterminate = isIndeterminate
    }, [selectedPeople])

    function toggleAll() {
        setSelectedPeople(checked || indeterminate ? [] : people)
        setChecked(!checked && !indeterminate)
        setIndeterminate(false)
    }

    return (
        <div className="mt-3 flex flex-col">
            <div className="inline-block min-w-full align-middle">
                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <div className='flex p-4 justify-between align-middle items-center'>
                        <div>
                            <h3>33.5M Influencers</h3>

                        </div>
                        <div className=" top-0 flex  items-center space-x-3 bg-gray-50 sm:left-16">
                            <button
                                type="button"
                                disabled={selectedPeople.length > 0}
                                className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                Bulk edit
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                                Export CSV
                            </button>
                        </div>

                    </div>
                    <table className="min-w-full table-fixed divide-y divide-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                                    <input
                                        type="checkbox"
                                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
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
                            {people.map((person) => (
                                <tr key={person.email} className={selectedPeople.includes(person) ? 'bg-gray-50' : undefined}>
                                    <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                                        {selectedPeople.includes(person) && (
                                            <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                                        )}
                                        <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                                            value={person.email}
                                            checked={selectedPeople.includes(person)}
                                            onChange={(e) =>
                                                setSelectedPeople(
                                                    e.target.checked
                                                        ? [...selectedPeople, person]
                                                        : selectedPeople.filter((p) => p !== person)
                                                )
                                            }
                                        />
                                    </td>
                                    <td
                                        className={classNames(
                                            'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                                            selectedPeople.includes(person) ? 'text-indigo-600' : 'text-gray-900'
                                        )}
                                    >
                                        {person.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                                    <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                            Edit<span className="sr-only">, {person.name}</span>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
