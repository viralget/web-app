
import { Footer } from '@/components/Footer'
import { Hero } from './Hero';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import CTA from './CTA';
import { Link } from '@inertiajs/inertia-react';
import { Logo } from '@/Components/Logo';
import Button from '@/Components/Button';
import HeroBanner from "@/../assets/images/display-find-landing-page.png";

import powerHorse from '@/../assets/images/logos/powerhorse.png'
import emergencyresponse from '@/../assets/images/logos/emergency-response.png'
import chi from '@/../assets/images/logos/chi.png'
import gomoney from '@/../assets/images/logos/gomoney.png'
import nestle from '@/../assets/images/logos/nestle.png'
import pwc from '@/../assets/images/logos/pwc.png'
import { Header } from '@/Components/Header';


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
            <Header />
            <div class="relative bg-gray-50">

                <section class="overflow-hidden">
                    <div className="absolute bottom-0 right-0 hidden lg:block">
                        <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                    </div>
                    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div class="flex flex-col lg:flex-row lg:items-stretch  ">
                            <div class="flex items-center justify-center w-full mx-auto ">
                                <div class="h-full px-4 pt-24 pb-16 ">
                                    <div className='text-center space-y-5'>
                                        <h1 class="text-4xl font-bold text-black sm:text-6xl xl:text-7xl font-lexend">Our Services </h1>
                                        <h2 className='text-2xl  font-lexend'>Every brand has slightly different indicators of success</h2>
                                        <p class="mt-6 text-base text-black sm:text-xl lg:w-2/3 mx-auto"> We gauge ours by the growing list of repeat clients, and results that consistently exceed industry standards. We are innovators, we are game-changers, and we take pride in every project we touch</p>

                                        <div className='py-5'>
                                            <a href="/contact-us" className="rounded-md  px-space-30  py-space-15  bg-viralget-red  ">

                                                <span className='font-lexend font-medium  text-white text-t-xsx'>Contact Us</span>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>

            <Feature1 />
            <CTA />

            <Footer />
        </>
    )
}
