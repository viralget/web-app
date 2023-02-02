import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import TextArea from '@/Components/TextArea';
import toast from '@/Components/Toast';
import { useForm } from '@inertiajs/inertia-react';
import { getEventValue } from '@/Utils/helpers';
import ValidationErrors from "@/Components/ValidationErrors";
import { Header } from '@/Components/Header';
import SuccessNotice from '@/Components/SuccessNotice';

export default function New({ influencers }) {

    const [isSuccessful, setIsSuccessful] = useState(false)

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
                setIsSuccessful(true)
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
        <div>
            <Header />
            <main>

                {isSuccessful ?
                    <SuccessNotice
                        title="Kudos!"
                        message="You're only a step away. Our team would reach out to you once your request has been confirmed."
                        link={route('home')}
                        actionText="Return home"
                    />

                    :
                    <div className="max-w-md mx-auto">
                        <div>
                            <h2 className="mt-6 text-4xl text-center font-bold tracking-tight text-gray-900">Enlist on our WhatsApp Amplifier Network</h2>
                        </div>

                        <div className="mt-8 space-y-5">
                            {errors && <ValidationErrors errors={errors} />}
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
                                    <Input
                                        type="email"
                                        name="email"
                                        label="Email Address"
                                        required
                                        defaultValue={data.email}
                                        className="mt-1 block w-full"
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <div className="grid md:grid-cols-2 gap-5">

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
                                </div>
                                <div>
                                    <Input
                                        type="number"
                                        name="age"
                                        label="Age"
                                        required
                                        defaultValue={data.age}
                                        className="mt-1 block w-full"
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
                                        name="whatsapp_number"
                                        label="Whatsapp phone number"
                                        required
                                        defaultValue={data.whatsapp_phone_number}
                                        className="mt-1 block w-full"
                                        onChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <Input
                                        type="number"
                                        min="0"
                                        step="1"
                                        name="average_views"
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
                                        accepts="video/mp4,video/x-m4v,video/*"
                                        label="Video Evidence of WhatsApp Views"
                                        required
                                        onChange={(e) => setData('video_evidence', e.target.files[0])}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-5">
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
                    </div>
                }
            </main>
        </div>

    )
}
