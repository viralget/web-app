import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Guest from '@/components/Layouts/Guest'

const faqs = [
    {
        question: "Which social networks are supported by ViralGet?",
        answer:
            "VirlaGet supports the highest-performing social media channel for organic reach, including Instagram and Twitter.",
    },
    {
        question: "Do I get full access to Discovery if I subscribe to Basic plan?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "How does ViralGet work?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What to consider when looking at QAS?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What is QAS (Quality Audience Score) and how is it calculated?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "How ViralGet detect Instagram audience location?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "How ViralGet detect audience interests?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    
    // More questions...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CloseIcon = () => {
    return(
        <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M1.125 1H14.875" stroke="#748094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    )
}

const OpenIcon = () => {
      
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1046_8549)">
        <path d="M3.125 10H16.875" stroke="#748094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10 3.125V16.875" stroke="#748094" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1046_8549">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    )
}

export default function Faqs() {


 
    return (
        <Guest>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl ">
                    <div className='text-center'>
                         <span  className='font-Lexend  text-[16px]  font-bold  text-viralget-red'>FAQs</span>
                    </div>
                    <h2 className="text-center text-3xl font-bold tracking-tight text-viralget-grey sm:text-3xl">
                    👋 Frequently asked questions
                    </h2>

                    <div className='flex flex-col items-center mt-3'>
                          <span className='text-viralget-red  text-xs'>
                              We are glad having you here looking for the answer to your question, 
                          </span>
                          <span className='text-viralget-grey text-xs'>
                              this guide will help you learn more about our product and its features.
                          </span>
                    </div>
                    <dl className="mt-6 space-y-6 ">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6   shadow-md rounded p-3">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                <span className="font-medium text-viralget-grey  font-bold text-sm">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                           
                                                    <div>
                                                        {
                                                            open ? <CloseIcon /> : <OpenIcon/>
                                                        }

                                                    </div>
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-viralget-grey text-xs">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </Guest>
    )
}

