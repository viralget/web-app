import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import TextArea from '@/Components/TextArea';
import toast from '@/Components/Toast';
import PasswordInput from '@/Components/PasswordInput';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { getEventValue } from '@/Utils/helpers';

export default function NewCampaign({ influencers }) {

    const [agreed, setAgreed] = useState(false)

    const { data, setData, post, processing, errors } = useForm({
        title: '',
        goal: '',
    });


    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('campaigns.store'), {
            onSuccess: () => {
                toast('Campaign created successfully! Our team would reach out to you once the highlighted influencer(s) respond');
                setTimeout(() => {
                    Inertia.get(route('campaigns.index'));
                }, 3000)
            },
            onError: () => {
                toast.error('An error occured');
            }
        });
    };

    return (
        <AuthenticatedLayout title="Create new Campaign">

            <div className="overflow-hidden bg-white py-4 px-4 sm:px-6 lg:px-8 lg:py-12">
                <div className="relative mx-auto max-w-xl">

                    <div className="">
                        {influencers.length > 0 &&
                            <div className='my-3'>
                                <h4 className='font-bold'>Selected Influencers:</h4>
                                <div className='space-x-3'>
                                    {influencers.map((influencer, index) => {
                                        return <span className="text-sm text-gray-700 bg-gray-200 rounded p-1 px-2">{influencer.username}</span>
                                    })}
                                </div>
                            </div>
                        }
                        <form onSubmit={submit} className="space-y-2">
                            <div>
                                <Input
                                    type="text"
                                    name="title"
                                    label="Campaign Title"
                                    required
                                    defaultValue={data.title}
                                    className="mt-1 block w-full"
                                    onChange={onHandleChange}
                                />
                            </div>
                            <div>

                                <TextArea
                                    type="text"
                                    name="goal"
                                    label="Campaign Goal"
                                    className="mt-1 block w-full"
                                    defaultValue={data.goal}
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="text-center space-y-2 mt-4">
                                <Button
                                    type="submit"
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
