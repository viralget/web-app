import { useEffect } from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Auth from '../../Layouts/Auth';
import AuthHeader from '../Auth/AuthHeader';
import SocialsLogin from './SocialsLogin';
import PasswordInput from '@/Components/PasswordInput';
import { getEventValue } from '@/Utils/helpers';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Auth>
            <Head title="Create an Account" />
            <div className="flex justify-center my-3">
                <Link href="/">
                    <ApplicationLogo />
                </Link>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <AuthHeader title="Get started!" subtitle="Create a new account" />
                    <div className="my-3 text-center text-sm text-gray-700">
                        Already own an account? <Link href={route('login')} className="font-medium text-gray-800  underline">
                            Login
                        </Link>
                    </div>

                    <SocialsLogin type="register" />

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit} className="space-y-2">
                        <div>
                            <Label forInput="first_name" value="First Name" />

                            <Input
                                type="text"
                                name="first_name"
                                value={data.first_name}
                                className="mt-1 block w-full"
                                autoComplete="first_name"
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label forInput="last_name" value="Last Name" />

                            <Input
                                type="text"
                                name="last_name"
                                value={data.last_name}
                                className="mt-1 block w-full"
                                autoComplete="family_name"
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="email" value="Email" />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password" value="Password" />

                            <PasswordInput
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password_confirmation" value="Confirm Password" />

                            <PasswordInput
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                onChange={onHandleChange}
                                required
                            />
                        </div>

                        <div className="text-center space-y-2 mt-4">
                            <Button
                                className='block w-full px-3'
                                processing={processing}>
                                Create account
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Auth>
    );
}
