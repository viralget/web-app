import Header from "./AccountSetup/header";
import  { useState, useEffect } from 'react';
import Hero from '../PricingPage/components/hero';
import Plans from '../PricingPage/components/plans';
import { classNames } from '@/Utils/helpers';

const SelectPricing = (props) => {
   const { auth: { user }, plans } = props;

   
    const [getTab, setTab] = useState('plans');
    const [getPlans, setPlans] = useState(plans?.filter((item) => !item.is_deleted))
  

    const handleTabs = (tab) => {
        setTab(tab);
    }
  
   const Levels = [

    {
        name: 'Account setup',
        status: 'complete'
    },
    {
        name: 'Pricing',
        status: 'current'
    },
    {
        name: 'Payment method',
        status: 'pending'
    }
]


   return(
    <div>
        <Header  user={user}  levels={Levels} />
        <div className='bg-viralget-red'>
            <div className='relative flex flex-col items-center justify-center'>
                <Hero />

                    <div className='flex  items-center justify-center content-center bottom-0  absolute'>
                                <div className='flex'>
                                        <button onClick={() => handleTabs('plans')}  className={ classNames("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend", getTab === 'plans' ? 'bg-white ' : 'bg-[#f4f4f4]' )} >
                                            Plans
                                        </button>
                                        <button   onClick={() => handleTabs('paygo')}   className={ classNames("rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-space-200   text-t-xs font-bold font-lexend", getTab === 'paygo' ? 'bg-white ' : 'bg-[#f4f4f4]' )}>
                                            Pay as you go
                                        </button>
                                </div>
                    </div>
            </div>

            {
                getTab === 'plans' ? (
                    <div className='mb-10'>
                    <Plans   plans={getPlans}/>
                    </div>
                )
                :
                (
                    <div className='flex items-center justify-center  w-full   bg-white h-full rounded-tr-lg rounded-tl-lg  -top-10 '>
                            <div className='mt-space-20'>
                                <span className='font-bold text-t-lg font-lexend'>Coming soon.</span>
                            </div>
                            
                    </div>
                )
            }

            </div>
    </div>
   )
}

export default SelectPricing;