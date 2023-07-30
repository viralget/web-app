import { useState } from 'react';
import Guest from '@/components/Layouts/Guest'
import Hero from './components/hero';
import Plans from './components/plans';
import { classNames } from '@/Utils/helpers';
import EmptyState from '@/Components/EmptyState';
import PlanCard from './components/planCard';
import PAYG from './PAYG';


export default function PricingPage({ plans }) {

    const [getTab, setTab] = useState('paygo'); //'plans'

    const handleTabs = (tab) => {
        setTab(tab);
    }

    return (
        <div className='bg-viralget-red'>

            <div className='relative flex flex-col items-center justify-center'>
                <Hero />

                <div className='flex  items-center justify-center content-center bottom-0  absolute'>
                    <div className='flex'>
                        {/* <button onClick={() => handleTabs('plans')} className={classNames("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend", getTab === 'plans' ? 'bg-white ' : 'bg-[#f4f4f4]')} >
                            Plans
                        </button> */}
                        <button onClick={() => handleTabs('paygo')} className={classNames("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend", getTab === 'paygo' ? 'bg-white ' : 'bg-[#f4f4f4]')}>
                            Pay as you go
                        </button>
                    </div>
                </div>
            </div>

            {
                getTab === 'plans' ? (
                    <div className='mb-10'>
                        <Plans plans={plans} />
                    </div>
                )
                    :
                    (
                        <div className='flex items-center justify-center  w-full   bg-white h-full rounded-tr-lg rounded-tl-lg  -top-10 '>
                            <div className='mt-10'>
                                <PAYG plan={plans[0]} />
                                {/* <EmptyState title="Coming soon" /> */}
                                {/* <span className='font-bold text-t-lg font-lexend'>Coming soon.</span> */}
                            </div>

                        </div>
                    )
            }

        </div>
    )
}

