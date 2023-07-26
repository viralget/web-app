
import { useEffect, useState } from 'react'
import Button from '@/Components/Button'
import { usePage } from '@inertiajs/inertia-react'
import PaystackPop from '@paystack/inline-js';
import { getEventValue, nairaSymbol, onlyUnique } from '@/Utils/helpers'
import toast from '@/Components/Toast'
import { post } from '@/Utils/api'
import App from '@/Components/Layouts/App';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import MultiSelect from '@/Components/MultiSelect';
import Label from '@/Components/Label';
import { countries } from '@/Utils/defaults';
import ValidationErrors from '@/Components/ValidationErrors';

const influencer_types = ['nano', 'micro', 'macro', 'mega', 'mid-tier'];

const influencer_type_options = new Array(20).fill(0).map((value, index) => ({ value: index + 1 }));


const Success = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-gray-50 rounded-3xl">
                    <div className="max-w-2xl mx-auto text-center space-y-5">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-lexend">Thank you for signing up as an early bird to #ViralGetPlatform! </h2>
                        <p>We are thrilled to have you on board as a member of the #ViralGetPlatform community! 🎉and can’t wait for you to unleash the full potential of your influencer marketing campaigns with the help of data filters to seamlessly activate the right influencers for your campaign and manage them.</p>

                        <p> On the last week of July 2023, access to our platform will be live 🚀 and you’ll be able to self serve yourself to access anyone of the 90,000+ influencers in our database.</p>

                        <p>If you have any questions or need assistance, please don't hesitate to reach out to our friendly support team at <a href="mailto:support@viralget.com.ng">support@viralget.com.ng</a></p>

                        <p> Stay viral and keep creating!</p>
                    </div>



                    <div className=" text-center">
                        <div className="relative inline-flex group">
                            {/* <div
                                className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                                style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}
                            ></div> */}
                            <div className='py-5'>
                                <a href="/" className="rounded-md  px-space-30  py-space-15  bg-viralget-red  ">

                                    <span className='font-lexend font-medium  text-white text-t-xsx'>Return to homepage</span>
                                </a>
                            </div>
                            {/* <a
                                href="/pre-order"
                                title=""
                                className="relative inline-flex items-center justify-center py-3.5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent px-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-opacity-90 rounded-xl"
                                role="button"
                            >
                                Click to pre-order
                            </a> */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Success;