import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Avatar from '@/Components/Avatar'
import Button from '@/Components/Button'
import { auth_routes } from './navigation'
import { Link } from '@inertiajs/inertia-react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownMenu({ user, light = false }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                {user ?

                    <Menu.Button className="bg-transparent">
                        <>
                            <span className="sr-only">Open user menu</span>
                            <>
                                <Avatar userName={user.name} />
                                <div className={`ml-2 text-sm  inline-flex items-center ${light ? 'text-white' : 'text-gray-800'}`}>{user.name} <ChevronDownIcon className="w-4 h-4 ml-1" /> </div>
                            </>
                            {/* <Button size='small' href={route('recruiter.index')}>Recruiter Dashboard</Button> */}
                        </>
                    </Menu.Button>
                    :
                    <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-2">
                        <Button bgColor="" textColor="text-gray-800" className="border-gray-500 border" href={route('login')} active={route().current('login')}>
                            Login
                        </Button>
                        <Button bgColor="bg-gray-800" textColor="text-white" href={route('register')} active={route().current('register')}>
                            Create an Account
                        </Button>
                        {/* <Link href={route('employer.jobs.new')}><Button className='px-2'>Post a job</Button></Link> */}
                    </div>
                }
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {user && (
                        <div className="px-4 py-3">
                            <p className="text-sm">Signed in as</p>
                            <p className="truncate text-sm font-medium text-gray-900">{user.email}</p>
                        </div>
                    )}
                    <div className="py-1">
                        {auth_routes.map((item, index) => (
                            <Menu.Item key={index}>
                                {({ active }) => (
                                    <Link
                                        href={route(item.href)}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm'
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href={route('logout')}
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    Log out
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
