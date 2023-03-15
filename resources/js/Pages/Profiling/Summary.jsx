import TitleText from '@/components/TitleText';
import SummaryCard from './summaryCard';

export  default function summary(){




    return(
        <div className="px-10 py-5">
           
           <div className="flex  justify-between  w-full">
               <TitleText text="Last profiled influencers" />
            </div>
            <div className='flex justify-between  space-x-3'>
                  <div className='flex space-x-3'>
                       <SummaryCard />
                       <SummaryCard />
                  </div>
                  <div className='flex flex-col w-full space-y-3'>
                         <div  className='bg-white border rounded-md p-5 w-full'>
                                 <div className='flex space-x-2 items-centert' >
                                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="#FEF2EB"/>
                                        <path d="M16 18.8125C17.5533 18.8125 18.8125 17.5533 18.8125 16C18.8125 14.4467 17.5533 13.1875 16 13.1875C14.4467 13.1875 13.1875 14.4467 13.1875 16C13.1875 17.5533 14.4467 18.8125 16 18.8125Z" stroke="#F37C38" stroke-width="1.2" stroke-miterlimit="10"/>
                                        <path d="M19.0938 9.53125H12.9062C11.0423 9.53125 9.53125 11.0423 9.53125 12.9062V19.0938C9.53125 20.9577 11.0423 22.4688 12.9062 22.4688H19.0938C20.9577 22.4688 22.4688 20.9577 22.4688 19.0938V12.9062C22.4688 11.0423 20.9577 9.53125 19.0938 9.53125Z" stroke="#F37C38" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.6562 13.1875C20.1222 13.1875 20.5 12.8097 20.5 12.3438C20.5 11.8778 20.1222 11.5 19.6562 11.5C19.1903 11.5 18.8125 11.8778 18.8125 12.3438C18.8125 12.8097 19.1903 13.1875 19.6562 13.1875Z" fill="#F37C38"/>
                                    </svg>

                                      <span className='text-xs'>Instagram accounts</span>
                                 </div>
                                 <div className='mt-2'>
                                      <span className='font-bold text-lg'>23 accounts</span>
                                 </div>
                         </div>


                         <div  className='bg-white border rounded-md p-5 w-full'>
                                 <div className='flex space-x-2 items-center' >
                                   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="16" fill="#FEF2EB"/>
                                        <path d="M16 18.8125C17.5533 18.8125 18.8125 17.5533 18.8125 16C18.8125 14.4467 17.5533 13.1875 16 13.1875C14.4467 13.1875 13.1875 14.4467 13.1875 16C13.1875 17.5533 14.4467 18.8125 16 18.8125Z" stroke="#F37C38" stroke-width="1.2" stroke-miterlimit="10"/>
                                        <path d="M19.0938 9.53125H12.9062C11.0423 9.53125 9.53125 11.0423 9.53125 12.9062V19.0938C9.53125 20.9577 11.0423 22.4688 12.9062 22.4688H19.0938C20.9577 22.4688 22.4688 20.9577 22.4688 19.0938V12.9062C22.4688 11.0423 20.9577 9.53125 19.0938 9.53125Z" stroke="#F37C38" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M19.6562 13.1875C20.1222 13.1875 20.5 12.8097 20.5 12.3438C20.5 11.8778 20.1222 11.5 19.6562 11.5C19.1903 11.5 18.8125 11.8778 18.8125 12.3438C18.8125 12.8097 19.1903 13.1875 19.6562 13.1875Z" fill="#F37C38"/>
                                    </svg>

                                      <span className='text-xs'>Twitter accounts</span>
                                 </div>
                                 <div className='mt-2'>
                                      <span className='font-bold text-lg'>12 accounts</span>
                                 </div>
                         </div>

                  </div>
            </div>

        </div>
    )
}