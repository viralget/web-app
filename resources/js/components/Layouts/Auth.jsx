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
              
                <div className=" flex flex-col justify-center  h-full px-space-60 ">
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

            ) : type == 'forgot' ?
            (
                <div className="flex justify-center items-center w-full  ">
                  <div>
                        <svg width="282" height="364" viewBox="0 0 282 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_dii_958_84279)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M236.362 151.833H226.895V111.59C226.792 64.3433 188.401 26 141.138 26C93.8536 26 55.4627 64.3406 55.3663 111.59L55.4458 151.835H45.8845C38.2233 151.835 32 158.065 32 165.73L32 312.107C32 319.774 38.2233 326 45.8845 326H236.355C244.035 326 250.263 319.775 250.263 312.107L250.265 165.725C250.263 158.062 244.037 151.83 236.357 151.83L236.362 151.833ZM161.352 282.154H120.91L129.157 231.436C123.74 227.648 120.184 221.381 120.184 214.264C120.184 202.69 129.54 193.315 141.133 193.315C152.695 193.315 162.082 202.692 162.082 214.264C162.082 221.381 158.485 227.648 153.067 231.436L161.352 282.154ZM86.4652 151.833L86.394 111.588C86.4945 81.4774 110.988 57.0368 141.143 57.0368C171.277 57.0368 195.775 81.4827 195.85 111.588L195.871 151.833H86.4652Z" fill="white" fill-opacity="0.9"/>
                            </g>
                            <defs>
                            <filter id="filter0_dii_958_84279" x="0.395618" y="0.0141745" width="281.474" height="363.209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="5.61856"/>
                            <feGaussianBlur stdDeviation="15.8022"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.6625 0 0 0 0 0.229115 0 0 0 0 0.47524 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_958_84279"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_958_84279" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="-4.21392"/>
                            <feGaussianBlur stdDeviation="7.72551"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.520833 0 0 0 0 0.0868056 0 0 0 0 0.47743 0 0 0 0.2 0"/>
                            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_958_84279"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="-2.80928"/>
                            <feGaussianBlur stdDeviation="2.80928"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.808333 0 0 0 0 0.737604 0 0 0 0 0.792773 0 0 0 0.85 0"/>
                            <feBlend mode="normal" in2="effect2_innerShadow_958_84279" result="effect3_innerShadow_958_84279"/>
                            </filter>
                            </defs>
                            </svg>

                  </div>
                </div>
            )
            
            : type == 'forgot-success' ?
            (
                <div className="flex justify-center items-center w-full  ">
                  <div>
                     
                <svg width="368" height="295" viewBox="0 0 368 295" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dii_958_84233)">
                <path d="M331.733 32.1436C330.202 30.1799 328.102 28.8737 325.821 28.3124H325.819C325.814 28.3124 325.81 28.3103 325.806 28.3103C325.802 28.3103 325.797 28.3082 325.795 28.3082C325.793 28.3082 325.791 28.3082 325.789 28.306C325.541 28.2463 325.289 28.1929 325.037 28.1502C325.033 28.1502 325.029 28.1481 325.025 28.1481C323.464 27.8877 321.842 27.9667 320.28 28.417L41.981 102.743C37.5331 103.931 34.3338 107.816 34.0245 112.411C33.715 117.004 36.3616 121.285 40.6091 123.061L122.251 157.185L136.615 245.93C137.255 249.891 140.049 253.167 143.859 254.425C144.965 254.79 146.102 254.969 147.231 254.969C149.993 254.969 152.697 253.904 154.738 251.917L200.942 206.912L263.077 249.031C264.883 250.254 266.989 250.884 269.113 250.884C270.377 250.884 271.647 250.662 272.863 250.209C276.124 248.997 278.596 246.28 279.499 242.921L333.604 41.6519C333.686 41.3616 333.754 41.0692 333.809 40.7747C333.922 40.1835 333.984 39.5901 333.997 38.9989C334.044 36.9627 333.513 34.901 332.375 33.076C332.183 32.7537 331.965 32.4421 331.733 32.1433L331.733 32.1436ZM247.736 70.0604L131.142 137.583L78.0328 115.384L247.736 70.0604ZM160.685 163.165C159.039 164.568 157.878 166.416 157.308 168.45L157.304 168.448L150.053 194.305L143.716 155.158L225.976 107.517L160.685 163.165ZM168.398 208.582L173.99 188.637L182.766 194.585L168.398 208.582ZM262.651 222.746L185.397 170.377L303.876 69.4042L262.651 222.746Z" fill="white" fill-opacity="0.9"/>
                </g>
                <defs>
                <filter id="filter0_dii_958_84233" x="0.589649" y="0.529266" width="366.821" height="293.789" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="5.93962"/>
                <feGaussianBlur stdDeviation="16.7052"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.6625 0 0 0 0 0.229115 0 0 0 0 0.47524 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_958_84233"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_958_84233" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-4.45471"/>
                <feGaussianBlur stdDeviation="8.16697"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.520833 0 0 0 0 0.0868056 0 0 0 0 0.47743 0 0 0 0.2 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_958_84233"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-2.96981"/>
                <feGaussianBlur stdDeviation="2.96981"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.808333 0 0 0 0 0.737604 0 0 0 0 0.792773 0 0 0 0.85 0"/>
                <feBlend mode="normal" in2="effect2_innerShadow_958_84233" result="effect3_innerShadow_958_84233"/>
                </filter>
                </defs>
                </svg>
                 </div>
                 </div>
            )
            :
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
