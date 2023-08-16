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
import { Inertia } from '@inertiajs/inertia';

export default function Create({ user, isEdit = false, campaign }) {

    let urlParams = new URLSearchParams(window.location.search);
    const current_tab = urlParams.get('tab');

    const [tab, setTab] = useState(current_tab ?? 'details')
    const [image, setImageUrl] = useState(null);
    const [serviceFee, setServiceFee] = useState(0);
    const [total, setTotal] = useState(0);
    const [btnMessage, setBtnMessage] = useState(isEdit ? "Update Campaign" : "Create Campaign");

    const { data, setData, post, processing, errors, reset } = useForm(
        {
            title: campaign?.campaign_name,
            social_network: campaign?.social_network,
            campaign_type: campaign?.campaign_type,
            budget: campaign?.budget,
            keywords: campaign?.tracked_keywords,
            start_date: campaign?.campaign_start_date,
            end_date: campaign?.campaign_end_date,
            description: campaign?.campaign_description,
            brand_name: campaign?.brand_name,
            location: campaign?.target_location,
            gender: campaign?.target_gender,
            age: campaign?.target_age,
            interest: campaign?.target_interest,
            reach: campaign?.reach_goal,
            impression: campaign?.impressions_goal,
            engagement: campaign?.engagement_goal,
            conversion: campaign?.conversion_goal,
            logo: '',
            about_us: campaign?.about_us,
            campaign_goal: campaign?.campaign_goal,
            campaign_message: campaign?.campaign_message,
            key_objectives: campaign?.campaign_key_objectives,
            channels: campaign?.channels,
            timeline: campaign?.timeline,
            mood_board: '',
            target_audience: campaign?.target_audience,
            currency: campaign?.currency,
            influencer_niche: campaign?.influencer_niche,
            influencer_size: campaign?.influencer_size,
            influencer_number: campaign?.influencer_number,
            influencer_gender: campaign?.influencer_gender,
            influencer_location: campaign?.influencer_location,
            influencer_category: campaign?.influencer_category,
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

    useEffect(() => {
        if (isEdit) {
            calculateFees(campaign.budget);
        }
    }, [])

    const handleGoToNext = () => {
        if (tab === 'details') {
            window.location.href = '?tab=contents'
            // setTab('contents');
            return;
        }

        if (tab === 'contents') {
            window.location.href = '?tab=influencer'

            // setTab('influencer');
            return;
        }

        if (tab === 'influencer') {
            Inertia.get(route('brief.show', { id: campaign?.id }))
        }

    }

    function submit(e) {
        e.preventDefault();

        isEdit ? updateBrief() : createBrief();
    }


    const createBrief = async () => {
        // setBtnMessage("Creating campaign?..")
        post(route('brief.store')
            , {
                onSuccess: () => {
                    // window.location.href = route('brief.success');
                },
                onError: () => {
                    toast.error('An error occurred')
                }
            });
        // reset();
    };

    const updateBrief = async () => {
        // setBtnMessage("Creating campaign?..")
        post(route('brief.update', { id: campaign?.id })
            , {
                onSuccess: () => {
                    // window.location.href = route('brief.success');
                    handleGoToNext();
                },
                onError: () => {
                    toast.error('An error occurred')
                }
            });
        // reset();
    };

    function handleBudget(event) {
        setData(event.target.name, getEventValue(event));
        const budget = event.target.value;
        calculateFees(budget);
    }

    const calculateFees = (budget) => {
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
                        <a href="?tab=details" className='font-bold  text-black  capitalize'>campaign  details</a>
                        <span className='text-gray-300'>|</span>
                        <a href="?tab=contents" className={classNames('font-bold  capitalize', tab == 'contents' || tab == 'influencer' ? ' text-black' : 'text-gray-300')}>content</a>
                        <span className='text-gray-300'>|</span>
                        <a href="?tab=influencer" className={classNames('font-bold  capitalize', tab == 'influencer' ? ' text-black' : 'text-gray-300')}>influencers  detail</a>
                    </div>
                </div>


                <form onSubmit={submit} className='mt-10  bg-white shadow-sm md:p-5 p-3 w-full'>
                    {tab == 'details' ? (
                        // <Details />
                        <>
                            <Details data={data} campaign={campaign} onHandleChange={onHandleChange} setData={setData} />
                        </>


                    ) : tab == 'influencer' ? (
                        <Influencers data={data} campaign={campaign} onHandleChange={onHandleChange} setData={setData} handleBudget={handleBudget} serviceFee={serviceFee} total={total} />
                    )
                        : (
                            <>
                                <Contents data={data} campaign={campaign} onHandleChange={onHandleChange} setData={setData} handleBudget={handleBudget} displayFile={displayFile} image={image} />
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