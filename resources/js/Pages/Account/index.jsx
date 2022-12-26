import { useEffect, useState } from 'react'
import Guest from '../../components/Layouts/Guest'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import PasswordInput from '@/Components/PasswordInput';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';

export default function Account() {
    const [agreed, setAgreed] = useState(false)

    const { data, setData, post, processing, errors, reset } = useForm({
        company_name: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        // post(route('register'));

        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        post('/register');
    };

    return (
        <AuthenticatedLayout title="Account Settings" subtitle="Update your account information">

            <div className="overflow-hidden bg-white py-12 px-4 ">
                <div className="relative mx-auto max-w-xl">
                    <svg
                        className="absolute left-full translate-x-1/2 transform"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 -translate-x-1/2 transform"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="">
                        <form onSubmit={submit} className="space-y-2">
                            <div>

                                <Input
                                    type="text"
                                    name="company_name"
                                    label="Company Name"
                                    value={data.company_name}
                                    className="mt-1 block w-full"
                                    autoComplete="company_name"
                                    onChange={onHandleChange}
                                    placeholder="Optional"
                                    required
                                />
                            </div>
                            <div>

                                <Input
                                    type="text"
                                    name="first_name"
                                    label="First Name"
                                    value={data.first_name}
                                    className="mt-1 block w-full"
                                    autoComplete="first_name"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div>

                                <Input
                                    type="text"
                                    name="last_name"
                                    label="Last Name"
                                    value={data.last_name}
                                    className="mt-1 block w-full"
                                    autoComplete="family_name"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="mt-4">

                                <Input
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="mt-4">
                                <PasswordInput
                                    type="password"
                                    label="Password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="text-center space-y-2 mt-4">
                                <Button
                                    className='block w-full'
                                    processing={processing}>
                                    Update Account
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}
