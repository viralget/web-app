import AuthGuest from "../../../assets/images/auth_guest.svg";
import { Logo } from '@/components/Logo';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Auth({ children , type}) {
    return (

        <div className="flex min-h-screen   bg-gradient-to-b from-[#FF9857] via-[#FA699D] to-[#B23AD3]">
            <div className="flex  md:w-space-600  flex-col py-space-40  px-4 sm:px-6 lg:flex-none lg:px-space-24 xl:px-space-24 rounded-tr-[20px]   rounded-br-3xl  bg-white     ">
               <Link href="/">
                    <Logo className="w-space-75  h-space-32"/>
                </Link>
              
                <div className="mx-auto  flex flex-col justify-center  h-full px-space-60 ">
                    {children}
                </div>
            </div>

          {

            type == 'confirmation'  ?
            (
            <div className="flex justify-center items-center w-full  ">
                <div>
                        <svg width="419" height="392" viewBox="0 0 419 392" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_dii_958_91584)">
                        <path d="M46 149.091V326.364C46 329.98 47.4367 333.449 49.994 336.006C52.5513 338.563 56.0198 340 59.6364 340H359.636C363.253 340 366.721 338.563 369.279 336.006C371.836 333.449 373.273 329.98 373.273 326.364V149.091L209.636 40L46 149.091Z" stroke="white" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M179.807 244.547L50.2617 336.081" stroke="white" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M369.01 336.081L239.465 244.547" stroke="white" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M373.273 149.094L239.466 244.548H179.807L46 149.094" stroke="white" stroke-width="24" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <filter id="filter0_dii_958_91584" x="0.589649" y="0.529266" width="418.094" height="390.821" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="5.93962"/>
                        <feGaussianBlur stdDeviation="16.7052"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.6625 0 0 0 0 0.229115 0 0 0 0 0.47524 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_958_91584"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_958_91584" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-4.45471"/>
                        <feGaussianBlur stdDeviation="8.16697"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.520833 0 0 0 0 0.0868056 0 0 0 0 0.47743 0 0 0 0.2 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_958_91584"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="-2.96981"/>
                        <feGaussianBlur stdDeviation="2.96981"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.808333 0 0 0 0 0.737604 0 0 0 0 0.792773 0 0 0 0.85 0"/>
                        <feBlend mode="normal" in2="effect2_innerShadow_958_91584" result="effect3_innerShadow_958_91584"/>
                        </filter>
                        </defs>
                        </svg>
                </div>

            </div>

            ):
            (
             <div className="relative overflow-hidden hidden w-0   pt-10 flex-1 justify-center align-middle md:flex lg:block">
                <div className="text-white px-space-30 text-center max-w-2xl mx-auto">
                    <h2 className="font-lexend text-t-lg  font-bold">Find influencers in seconds.
                        Drive your business forward with data-driven influencers’ insight</h2>
                    <p className="mt-3  font-lexend text-t-xsx  font-normal">Search through the database of 43.9m+
                        to find your perfect influencer</p>
                </div>
                <div className="relative  h-full">

                    <img
                        className="absolute bottom-0 inset-0 h-full w-full object-cover  top-0"
                        src={AuthGuest}
                        alt=""
                    />
                </div>
              
            </div>
            )
          }
          


        </div>
    )
}
