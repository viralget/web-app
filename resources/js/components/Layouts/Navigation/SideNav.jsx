
import SlideOver from '@/Components/SlideOver'
import { classNames } from '@/Utils/helpers'
import { Link, usePage } from '@inertiajs/inertia-react'
import Avatar from '@/components/Skeleton/Avatar'
import { navigation, auth_routes, guest_routes, services_routes } from './navigation'
import ApplicationLogo from '@/Components/ApplicationLogo'

export default function SideNav(props) {

    const { auth: { user } } = usePage().props;

    const routes = user ? navigation : guest_routes;
    const extra_routes = user ? [
        ...services_routes,
        ...auth_routes,
    ] : services_routes

    return (
        <SlideOver {...props} containerClass="p-0"
            title={!user && <ApplicationLogo />}
        >
            <div className="flex flex-grow flex-col ">
                <div className="flex flex-shrink-0 items-center px-4">
                    {user && (
                        <>
                            <Avatar userName={user.first_name} />
                            <a href={route('settings.index')} className="ml-3">
                                <div className="text-base font-medium text-gray-800">{user?.name}</div>
                                <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                            </a>
                        </>
                    )}
                </div>
                <div className="mt-5 flex flex-grow flex-col">
                    <nav className="flex-1 space-y-8 bg-white px-2" aria-label="Sidebar">
                        <div className="space-y-1">
                            {routes.map((item) => (
                                <a
                                    key={item.name}
                                    href={route(item.href)}
                                    className={classNames(
                                        item.current == route().current() ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                        'group flex items-center px-2 py-2 text-lg font-medium rounded-md'
                                    )}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current == route().current() ? 'text-gray-800' : 'text-gray-700 group-hover:text-gray-500',
                                            'mr-6 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="space-y-1 border-t pt-4">
                            <div className="space-y-1" role="group" aria-labelledby="auth-routes">
                                {extra_routes.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={route(item.href)}
                                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        <span className="truncate">{item.name}</span>
                                    </Link>
                                ))}
                                {user && (
                                    <Link
                                        href={route('logout')}
                                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        <span className="truncate">Log out</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </SlideOver>
    )
}