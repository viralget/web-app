import  { useState } from 'react';
import Guest from '@/components/Layouts/Guest'
import Hero from './components/hero';
import Plans from './components/plans';

export default function PricingPage() {

  const [getTab, setTab] = useState('plans');

 const handleTabs = (tab) => {
      setTab(tab);
 }

    return (
        <Guest>
            <div className='bg-viralget-red'>

                <div className='relative flex flex-col items-center justify-center'>
                      <Hero />

                        <div className='flex  items-center justify-center content-center bottom-0  absolute'>
                                    <div className='space-x-2 flex'>
                                            <button onClick={() => handleTabs('plans')}  className={  getTab === 'plans' ? 'bg-white rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-40 ' : 'bg-[#f4f4f4] rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-40 '} >
                                                Plans
                                            </button>
                                            <button   onClick={() => handleTabs('paygo')}  className={  getTab === 'paygo' ? 'bg-white rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-40 ' : 'bg-[#f4f4f4] rounded-tr-lg rounded-tl-lg  p-3 px-5 text-black w-40 '}>
                                                Pay as you go
                                            </button>
                                    </div>
                        </div>
                </div>
              

                           <Plans />
            </div>
        </Guest>
    )
}

