import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import ButtonBack from '@/components/ButtonBack';
import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import Input from '@/Components/input';
import { useForm } from '@inertiajs/inertia-react';
import TextArea from '@/Components/TextArea';
import MultiSelect from '@/components/MultiSelect';
import { classNames } from '@/Utils/helpers';
import UploadImage from "@/components/UploadImage";
import { getEventValue } from '@/Utils/helpers';
import { numberWithCommas } from '@/Utils/helpers';
import Select from '@/components/Select';
import PaystackPop from '@paystack/inline-js';
import StripePaymentButton from '@/Components/PaymentButton/StripePaymentButton';
import axios from "axios";
import toast from '@/Components/Toast'
import Steps from './steps';
import Details from './Form/Details';
import Influencers from './Form/Influencers';
import Contents from './Form/Contents';

export default function Create({ user }) {


    const [tab, setTab] = useState('details')
    const [image, setImageUrl] = useState(null);
    const [serviceFee, setServiceFee] = useState(0);
    const [total, setTotal] = useState(0);
    const [stripeProps, setStripeProps] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [btnMessage, setBtnMessage] = useState("Create Campaign");


    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        social_network: '',
        campaign_type: '',
        budget: '',
        keywords: '',
        start_date: '',
        end_date: '',
        description: '',
        brand_name: '',
        location: '',
        gender: '',
        age: '',
        interest: '',
        reach: '',
        impression: '',
        engagement: '',
        conversion: '',
        logo: '',
        about_us: '',
        campaign_goal: '',
        campaign_message: '',
        key_objectives: '',
        channels: '',
        timeline: '',
        mood_board: '',
        target_audience: '',
        currency: 'NGN',
        influencer_niche: '',
        influencer_size: '',
        influencer_number: '',
        influencer_gender: '',
        influencer_location: '',
        influencer_category: '',
    });



    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const displayFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setData('logo', event.target.files[0]);
            let reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }



    function submit(e) {
        e.preventDefault();
        if (tab === 'details') {
            setTab('contents');
            return;
        }

        if (tab === 'contents') {
            setTab('influencer');
            return;
        }

        createBrief();
    }


    const createBrief = async () => {
        setBtnMessage("Creating campaign..")
        post(route('brief.store'));
        reset();
        window.location.href = route('brief.success');
    };

    function handleBudget(event) {
        setData(event.target.name, getEventValue(event));
        const budget = event.target.value;
        const serviceFee = 0.15 * Number(budget);
        const total = Number(budget) + serviceFee;
        setTotal(total);
        setServiceFee(serviceFee);
    }

    return (
        <AuthenticatedLayout title="My Campaigns" smallHeader={true}>
            <div className='bg-white h-screen  mt-3 px-5 mb-10'>
                <ButtonBack />

                {/* <Steps activeTab={tab} onChangeTab={setTab} /> */}

                <div className='flex  justify-center mx-auto p-5 text-sm bg-gray-50 my-5'>
                    <div className='flex space-x-5'>
                        <span className='font-bold  text-viralget-red  capitalize'>campaign  details</span>
                        <span className='text-gray-300'>|</span>
                        <span className={classNames('font-bold  capitalize', tab == 'contents' || tab == 'influencer' ? 'text-viralget-red' : 'text-gray-300')}>content</span>
                        <span className='text-gray-300'>|</span>
                        <span className={classNames('font-bold  capitalize', tab == 'influencer' ? 'text-viralget-red' : 'text-gray-300')}>influencers  detail</span>

                    </div>
                </div>


                <form onSubmit={submit} className='mt-10  bg-white shadow-sm md:p-5 p-3 w-full'>
                    {tab == 'details' ? (
                        // <Details />
                        <>
                            <Details data={data} onHandleChange={onHandleChange} setData={setData} />
                        </>


                    ) : tab == 'influencer' ? (
                        <Influencers data={data} onHandleChange={onHandleChange} setData={setData} handleBudget={handleBudget} />
                    )
                        : (
                            <>
                                <Contents data={data} onHandleChange={onHandleChange} setData={setData} handleBudget={handleBudget} displayFile={displayFile} image={image} />
                            </>)}


                    <div className="text-center flex space-x-3 mt-4 md:max-w-md">
                        {tab == 'details' ?
                            null : (
                                <Button type="buton"
                                    className='block w-full bg-white text-viralget-red'
                                    onClick={() => setTab(tab == 'influencer' ? 'contents' : 'details')}
                                >

                                    Back
                                </Button>
                            )}
                        {
                            (
                                <Button
                                    type="submit"
                                    usePrimary
                                    block
                                    processing={processing}>
                                    {tab == 'details' || tab == 'contents' ? 'Next' : btnMessage}
                                </Button>
                            )
                        }



                    </div>
                </form>

            </div>
        </AuthenticatedLayout>
    )
}