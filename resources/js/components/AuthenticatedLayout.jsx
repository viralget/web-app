
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { Logo } from '@/components/Logo'
import { classNames } from '@/Utils/helpers'

import {
    ClockIcon,
    HomeIcon,
    ScaleIcon,
    XMarkIcon,
    BellIcon,
    UsersIcon
} from '@heroicons/react/24/outline'
import { Container } from './Container'
import DropdownMenu from './Layouts/Navigation/DropdownMenu'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Link, usePage } from '@inertiajs/inertia-react'
import { FindInfluencer, ProfiledInfluencer, MyCampaign, HelpIcon, TrackCampaigns} from '@/Utils/icons';



const navigation = [
    { name: 'Find Influencers', href: 'explore', icon: FindInfluencer, current: true },
    { name: 'Profile Influencers', href: 'profiling', icon: ProfiledInfluencer, current: false },
    { name: 'Campaigns', href: 'coming-soon', icon: MyCampaign, current: false },
    { name: 'Track Campaigns', href: 'coming-soon', icon: TrackCampaigns  , current: false },
    { name: 'Help center', href: 'coming-soon', icon: HelpIcon, current: false },
]


export default function AuthenticatedLayout({ children, title, subtitle, showHeader = true, smallHeader = false }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const { auth: { user } } = usePage().props;


    return (

        <div className="min-h-screen bg-gray-50">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex bg-white">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white-700 pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                            onClick={() => setSidebarOpen(false)}
                                        >
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <Link href='/'>
                                        <Logo className="h-10 w-auto" />
                                    </Link>
                                </div>
                                <nav
                                    className="mt-5 h-full flex-shrink-0 divide-y divide-gray-800 overflow-y-auto"
                                    aria-label="Sidebar"
                                >
                                    <div className="space-y-1 px-2">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={route(item.href)}
                                                className={classNames(
                                                    item.href == route().current()
                                                        ? 'bg-orange-100 text-[#580877]'
                                                        : 'text-gray-400 hover:text-white hover:bg-gray-600',
                                                    'group flex items-center px-2 py-2 text-base  rounded-md'
                                                )}
                                                aria-current={item.href == route().current() ? 'page' : undefined}
                                            >
                                                <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-gray-900" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex flex-grow flex-col overflow-y-auto bg-white pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                        <Logo className="h-10 w-auto" />

                    </div>
                    <nav className="mt-10 flex flex-1 flex-col divide-y divide-gray-800 overflow-y-auto" aria-label="Sidebar">
                        <div className="space-y-1 px-3">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={route(item.href)}
                                    className={classNames(
                                        item.href == route().current() ? 'bg-fuchsia-50 rounded-md group-text-fuchsia-900' : 
                                        'text-[#748094]  hover:text-[#A5ABB5]',
                                        'group flex  space-x-3 items-center font-satoshi  px-2 py-2 text-sm leading-6 rounded-lg'
                                    )}
                                    aria-current={item.href == route().current() ? 'page' : undefined}
                                >
                                    <item.icon   className={classNames("h-6 w-6 flex-shrink-0")} aria-hidden="true" stroke={item.href == route().current() ? '#580877' : '#A5ABB5'} />
                                   <span className={ item.href == route().current() ? 'text-[#580877]' : ''}>{item.name}</span>  
                                </a>
                            ))}
                        </div>

                    </nav>
                </div>
            </div>


            <div className="flex flex-1 flex-col lg:pl-64">
                {showHeader && (
                    < div className={smallHeader ? "  text-black" : "bg-[#01C5FF] bg-gradient-to-r from-[#01C5FF]  via-[#00AEFF] to-[#0094FE]    rounded-br-[5rem]"}>
                        <div className="flex mt-4 h-16 flex-shrink-0 border-b border-gray-200 bg-transparent lg:border-none">
                            <button
                                type="button"
                                className={smallHeader ? "md:border-r border-black px-4 text-black lg:hidden" : "md:border-r border-gray-200 px-4 text-gray-400 lg:hidden"}
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <Bars3CenterLeftIcon className={smallHeader ? "h-6 w-6 text-black" : "h-6 w-6 text-white"} aria-hidden="true" />
                            </button>
                            {/* Search bar */}
                            <div className="flex flex-1 justify-end md:justify-between mx-auto  px-5 sm:px-6 lg:px-8 relative">
                                <div className="hidden md:flex flex-1">
                                    <div className="w-full max-w-sm  mt-3">
                                        <form action={route('influencers.search')} method="get">

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
                                                    className={smallHeader ? "block w-full rounded-lg border border-black-50/40 bg-black-50/30 py-3 pl-10 pr-3 leading-5 placeholder-black-50 focus:border-fushia-500 focus:placeholder-black-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm" : "block w-full rounded-lg border border-stone-50/40 bg-stone-50/30 py-3 pl-10 pr-3 leading-5 placeholder-gray-50 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"}
                                                    placeholder="Enter keywords"
                                                    type="search"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="ml-4 flex items-center md:ml-6 space-x-3">
                                    <button
                                        type="button"
                                        className={smallHeader ? "text-black rounded-lg border border-black-50/40 bg-black-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm" : "text-white rounded-lg border border-stone-50/40 bg-stone-50/30 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"}  >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    {/* Profile dropdown */}
                                    <div className={smallHeader ? "w-full rounded-lg border border-black-50/40 bg-black-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm" : " w-full rounded-lg border border-stone-50/40 bg-stone-50/30 py-1 p-2 focus:border-fushia-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-fushia-500 sm:text-sm"}>
                                        <DropdownMenu user={user} light={!smallHeader} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {!smallHeader && (
                            <Container className="relative">
                                <div className="w-[70%]  my-16 ">
                                    <h1 className="font-display pb-5 font-bold  font-lexend leading-[48px] text-white text-[44px]">
                                        {title}
                                    </h1>
                                    {subtitle && (
                                        <p className='text-sm text-gray-50'>{subtitle}</p>
                                    )}
                                </div>
                            </Container>
                        )}

                    </div>

                )}


                {children}
            </div>
        </div >
    )
}
