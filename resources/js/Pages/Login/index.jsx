
import { Head, Link } from '@inertiajs/inertia-react';
import Auth from '@/Pages/Users/Layouts/Auth';
import AuthHeader from '../Auth/AuthHeader';
import Form from './Form';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Login(props) {
    return (
        <Auth>
            <Head title="Log in to continue" />
            <div className="flex justify-center my-3">
                <Link href="/">
                    <ApplicationLogo />
                </Link>
            </div>
            <Form {...props} />
        </Auth>
    );
}
