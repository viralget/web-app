import { Header } from '@/components/Header'

import HomeStage from '@/components/HomeStage'
import AnalyzedAccount from "@/components/AnalyzedAccount";
import CustomersReview from '@/components/CustomersReview';
import TrendingInfluencers from '@/components/TrendingInfluencers';
import GetStarted from '@/components/Get_Started';
import { Footer } from '@/components/Footer'
import { Hero } from './Hero';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import CTA from './CTA';
import Intro from './Intro';
import { Link } from '@inertiajs/inertia-react';
import { Logo } from '@/Components/Logo';
import Button from '@/Components/Button';
import HeroBanner from "@/../assets/images/display-find-landing-page.png";

import powerHorse from '@/../assets/images/logos/powerhorse.png'
import lagos from '@/../assets/images/logos/lagos.png'
import emergencyresponse from '@/../assets/images/logos/emergency-response.png'
import chi from '@/../assets/images/logos/chi.png'
import gomoney from '@/../assets/images/logos/gomoney.png'
import nestle from '@/../assets/images/logos/nestle.png'
import pwc from '@/../assets/images/logos/pwc.png'


const brands = [
    // { name: 'Lagos State Govt', logo: lagos },
    { name: 'Power Horse', logo: powerHorse },
    { name: 'Pwc', logo: pwc },
    { name: 'Emergency Response', logo: emergencyresponse },
    { name: 'GoMoney', logo: gomoney },
    { name: 'Nestle', logo: nestle },
    { name: 'Chi', logo: chi },
];
export default function Home({ trending_influncers }) {

    return (
        <>
            <div class="relative bg-gray-50">
                <div className='text-center py-10'>
                    <Link href="/" aria-label="Home">
                        <Logo className="h-10 w-auto mx-auto" />
                    </Link>
                </div>

                <section class="overflow-hidden">
                    <div className="absolute bottom-0 right-0 hidden lg:block">
                        <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                    </div>
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div class="flex flex-col lg:flex-row lg:items-stretch  ">
                            <div class="flex items-center justify-center w-full mx-auto ">
                                <div class="h-full px-4 pt-24 pb-16 ">
                                    <div className='text-center space-y-5'>
                                        <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl font-lexend">Spend less time searching for influencers. </h1>
                                        <h2 className='text-2xl  font-lexend'>Get access to a community of influencers.</h2>
                                        <p class="mt-6 text-base text-black sm:text-xl lg:w-2/3 mx-auto">With the help of data filters, seamlessly activate and manage 100s of influencers from any location and industry of your choosing.</p>

                                        <div className='py-5'>
                                            <a href="/pre-order" className="rounded-md  px-space-30  py-space-15  bg-viralget-red  ">

                                                <span className='font-lexend font-medium  text-white text-t-xsx'>Pre Order Now</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12">
                            <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
                                <svg className="blur-xl filter" style={{ "filter": "blur(124px)" }} width="645" height="213" viewBox="0 0 645 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z" fill="url(#d)" />
                                    <defs>
                                        <linearGradient id="d" x1="665.741" y1="178.506" x2="296.286" y2="474.62" gradientUnits="userSpaceOnUse">
                                            <stop offset="0%" style={{ "stop-color": "var(--color-primary)" }} />
                                            <stop offset="100%" style={{ "stop-color": "var(--color-primary)" }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>


                            <img className="w-full mx-auto scale-90" src={HeroBanner} alt="" />


                        </div>
                    </div>
                </section>
            </div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
                <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div class="text-center">
                        <h2 class="text-xl font-medium text-gray-900">Trusted by the world’s top brands</h2>
                    </div>

                    <div className="flex  flex-wrap  ">
                        {brands.map((company, groupIndex) => (
                            <div key={groupIndex} className="p-5 flex items-center">  <img src={company.logo} className="h-space-40 invert" /> </div>
                        ))}
                    </div>

                </div>
            </section>
            <Feature1 />
            <Feature2 />
            <CTA />

            <Footer />
        </>
    )
}
