
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3CenterLeftIcon,
    BellIcon,
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentChartBarIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import {
    BanknotesIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import AuthenticatedLayout from '../../components/AuthenticatedLayout'
import { SectionHeader } from '../../components/SectionHeader'
import { Container } from '../../components/Container'
import SearchBox from '../Search/SearchBox'
import DropdownMenu from '../../components/Layouts/Navigation/DropdownMenu'
import { usePage } from '@inertiajs/inertia-react'

const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'History', href: '#', icon: ClockIcon, current: false },
    { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
    { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
    { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Reports', href: '#', icon: DocumentChartBarIcon, current: false },
]
const secondaryNavigation = [
    { name: 'Settings', href: '#', icon: CogIcon },
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const cards = [
    { name: 'Account balance', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
    // More items...
]
const transactions = [
    {
        id: 1,
        name: 'Payment to Molly Sanders',
        href: '#',
        amount: '$20,000',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
    },
    // More transactions...
]
const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const { auth: { user } } = usePage().props;

    return (

        <AuthenticatedLayout>
            <div className="bg-red-500 bg-gradient-to-r from-yellow-600 to-fuchsia-600">
                <div className="flex mt-4 h-16 flex-shrink-0 border-b border-gray-200 bg-transparent lg:border-none">
                    <button
                        type="button"
                        className="border-r border-gray-200 px-4 text-gray-400 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Search bar */}
                    <div className="flex flex-1 justify-between lg:mx-auto lg:max-w-6xl">
                        <div className="flex flex-1">
                            <div className="w-full max-w-lg">
                                <form action="">

                                    <label htmlFor="search" className="sr-only">
                                        Search
                                    </label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-50" aria-hidden="true" />
                                        </div>
                                        <input
                                            id="keywords"
                                            name="keywords"
                                            className="block w-full rounded-lg border border-gray-300 bg-stone-50/30 py-5 pl-10 pr-3 leading-5 placeholder-gray-50 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"
                                            placeholder="Enter keywords, skills or company name"
                                            type="search"
                                        />
                                    </div>
                                </form>
                            </div>

                            {/* <form className="flex w-full md:ml-0" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600 p=5">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                                        <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        name="search-field"
                                        className="block h-full w-full bg-transparent border border-yellow-50 rounded py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                        placeholder="Search transactions"
                                        type="search"
                                    />
                                </div>
                            </form> */}
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className="rounded-full bg-transparent p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <DropdownMenu user={user} light />
                        </div>
                    </div>
                </div>
                <Container className="relative">
                    <div className="w-3/5  my-20 ">
                        <h1 className="font-display pb-10 font-bold text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                            Search through our database of 33.5m+ influencers
                        </h1>
                    </div>
                </Container>
            </div>
            {/* </div> */}

            <main className="flex-1 pb-8">
                <Container>
                    <SearchBox />


                    <div className="mt-8">
                        <div className="">
                            <h2 className="text-lg font-medium leading-6 text-gray-900">Overview</h2>
                            <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                {/* Card */}
                                {cards.map((card) => (
                                    <div key={card.name} className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-5">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                                                </div>
                                                <div className="ml-5 w-0 flex-1">
                                                    <dl>
                                                        <dt className="truncate text-sm font-medium text-gray-500">{card.name}</dt>
                                                        <dd>
                                                            <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                                                        </dd>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-5 py-3">
                                            <div className="text-sm">
                                                <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                                                    View all
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 className="mx-auto mt-8 max-w-6xl px-4 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
                            Recent activity
                        </h2>


                    </div>
                </Container>
            </main>


        </AuthenticatedLayout>
    )
}
