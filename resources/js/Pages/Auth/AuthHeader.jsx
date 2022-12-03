import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function AuthHeader({ title, subtitle, showAuth = true }) {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md block items-center">
            <h2 className="mt-3 text-center text-2xl font-extrabold text-gray-700">{title}</h2>
            <p className="font-medium text-center text-gray-500 text-sm py-2">{subtitle}</p>
            {/* {showAuth && (
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    {route().current() == 'register' ?
                        <Link href={route('login')} className="font-medium text-green-600 hover:text-green-900 underline">
                            Login to continue
                        </Link>
                        :
                        <Link href={route('register')} className="font-medium text-green-600 hover:text-green-800 underline">
                            Create an account
                        </Link>
                    }
                </p>
            )} */}
        </div>
    )
}