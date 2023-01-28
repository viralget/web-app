import { useEffect, useState } from 'react'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import TextArea from '@/Components/TextArea';
import toast from '@/Components/Toast';
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { getEventValue } from '@/Utils/helpers';
import TitleText from '@/components/TitleText';
import InfluencerCard from '../Influencers/RecentSearches/InfluencerCard';
import CampaignCards from './Cards';
import Stats from './Stats';

export default function Campaign({ influencers, campaigns, campaign, stats }) {

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
        <AuthenticatedLayout title="Campaign" showHeader={false}>

            <div className="relative p-5">

                <div class="flex">
                    <h1 class="flex-1 text-2xl font-bold text-gray-900">Campaign Details: {campaign.title}</h1>
                    <div class="ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden">
                        <button type="button" class="rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <svg class="h-5 w-5" x-description="Heroicon name: mini/bars-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.166a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zm0 4.167a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Use list view</span>
                        </button>
                        <button type="button" class="ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <svg class="h-5 w-5" x-description="Heroicon name: mini/squares-2x2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="sr-only">Use grid view</span>
                        </button>
                    </div>
                </div>

                <div className='mt-10 grid grid-cols-4 gap-3'>
                    <div className='border border-gray-300 p-5'>
                        <TitleText text="Influencers" />
                        <div className='text-center'>
                            <div className="radial-progress text-orange-500" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }}>70%</div>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <Stats stat={stats['qas']} title="Quality Audience Total" />
                        <Stats stat={stats['reach']} title="Reach Total" />
                    </div>
                    <div className='space-y-3'>
                        <Stats stat={stats['engagement']} title="Quality Audience Total" />
                        <Stats stat={stats['reachability']} title="Authentic Reachablility" />
                    </div>
                    <div className='space-y-3'>
                        <Stats stat={stats['impressions']} title="Impressions Total" />
                        <Stats stat={stats['engagement_rate']} title="Engagement Rate" />
                    </div>
                </div>



                <div className='mt-10'>
                    <TitleText text="Profiled Influencers" />

                    <ul role="list" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">

                        {influencers?.length > 0 && influencers.map((item) => (

                            <InfluencerCard influencer={item} />
                        ))}
                    </ul >
                </div>

                <div className='mt-10'>
                    <TitleText text="My Lists" />

                    <CampaignCards campaigns={campaigns} />
                </div>
            </div>
        </AuthenticatedLayout >

    )
}


