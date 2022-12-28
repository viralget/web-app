import { useEffect, useState } from 'react'
import Guest from '../../components/Layouts/Guest'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import PasswordInput from '@/Components/PasswordInput';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';

export default function NewCampaign() {
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

        // post('/register');
    };

    return (
        <AuthenticatedLayout title="Create new Campaign">

            <div className="overflow-hidden bg-white py-4 px-4 sm:px-6 lg:px-8 lg:py-12">
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
                                    name="title"
                                    label="Campaign Title"
                                    value={data.company_name}
                                    className="mt-1 block w-full"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>
                            <div>

                                <Input
                                    type="text"
                                    name="goal"
                                    label="Campaign Goal"
                                    className="mt-1 block w-full"
                                    required
                                />
                            </div>



                            <div className="text-center space-y-2 mt-4">
                                <Button
                                    className='block w-full'
                                    processing={processing}>
                                    Create Campaign
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}
