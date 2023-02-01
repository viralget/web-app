import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import toast from '@/Components/Toast';
import PasswordInput from '@/Components/PasswordInput';
import { useForm } from '@inertiajs/inertia-react';
import Auth from '@/Components/Layouts/Auth';
import { Inertia } from '@inertiajs/inertia';
import { getEventValue } from '@/Utils/helpers';
import { Logo } from '@/Components/Logo'

export default function New({ influencers }) {

    const [agreed, setAgreed] = useState(false)

    const { data, setData, post, processing, errors } = useForm({
    });


    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('whatsapp-influencers.store'), {
            onSuccess: () => {
                toast('Data submitted successfully! Your login details has been sent to your mailbox');
                // setTimeout(() => {
                //     // Inertia.get(route('campaigns.index'));
                // }, 3000)
            },
            onError: () => {
                toast.error('An error occured');
            }
        });
    };

    return (
        <Auth >
            <div>
                <Logo />
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Create a WhatsApp Influencer Account</h2>
            </div>

            <div className="mt-8">
                <form onSubmit={submit} className="space-y-2">
                    <div>
                        <Input
                            type="text"
                            name="name"
                            label="Your Name"
                            required
                            defaultValue={data.name}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Select
                            name="gender"
                            label="Gender"
                            required
                            defaultValue={data.gender}
                            options={[
                                { name: 'Male' },
                                { name: 'Female' }
                            ]}
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Select
                            name="marital_status"
                            label="Marital Status"
                            required
                            defaultValue={data.marital_status}
                            options={[
                                { name: 'Single' },
                                { name: 'Married' },
                                { name: 'Divorced' },
                                { name: 'Widowed' },
                                { name: 'Others' }
                            ]}
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            name="occupation"
                            label="Occupation"
                            required
                            defaultValue={data.occupation}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            name="whatsapp_phone_number"
                            label="Whatsapp phone number"
                            required
                            defaultValue={data.whatsapp_phone_number}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            name="average_whatsapp_views"
                            label="Average Whatsapp Views"
                            required
                            defaultValue={data.average_whatsapp_views}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="file"
                            name="video_evidence"
                            label="Video Evidence of WhatsApp Views"
                            required
                            defaultValue={data.video_evidence}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            name="country"
                            label="Country"
                            required
                            defaultValue={data.country}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            name="state"
                            label="State"
                            required
                            defaultValue={data.state}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Select
                            name="parental_status"
                            label="Parental Status"
                            required
                            defaultValue={data.parental_status}
                            options={[
                                { name: '18+' },
                                { name: 'Others' },
                            ]}
                            onChange={onHandleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            name="interests"
                            label="Interests"
                            required
                            defaultValue={data.interests}
                            className="mt-1 block w-full"
                            onChange={onHandleChange}
                        />
                    </div>


                    <div className="text-center space-y-2 mt-4">
                        <Button
                            type="submit"
                            className='block w-full'
                            processing={processing}>
                            Submit Data
                        </Button>
                    </div>
                </form>
            </div>
        </Auth>

    )
}
