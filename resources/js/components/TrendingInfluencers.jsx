
import { nFormatter } from "@/Utils/helpers";
const TrendingInfluencers = ({ influencers }) => {


      const InfluencerCard = ({ influencer }) => {

            return (
                  <a href={route('influencer.show', { influencer: influencer.username })} className="flex flex-col p-space-20   space-y-space-14  shadow-header-card cursor-pointer   rounded-[16px] border border-[#1DA1F3]">
                        <div className="flex   space-x-space-12">
                              <div className="h-space-46 w-space-46  relative">
                                    <img src={influencer.profile_photo_url} className=" rounded-full w-full" />

                                    <div className="absolute right-0  bottom-0">
                                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="9.5" fill="#1DA1F3" stroke="white" />
                                                <path d="M13.1791 8.3323C13.1845 8.40522 13.1845 8.47772 13.1845 8.55022C13.1845 10.769 11.4958 13.3256 8.40953 13.3256C7.4587 13.3256 6.57536 13.0502 5.83203 12.5719C5.96703 12.5873 6.09703 12.5927 6.23745 12.5927C6.99286 12.5945 7.72688 12.3419 8.3212 11.8756C7.97096 11.8693 7.63144 11.7537 7.35005 11.5451C7.06866 11.3365 6.85944 11.0452 6.75161 10.7119C6.85536 10.7273 6.95953 10.7377 7.0687 10.7377C7.21911 10.7377 7.37036 10.7169 7.51078 10.6806C7.13068 10.6039 6.7889 10.3979 6.54354 10.0976C6.29818 9.79731 6.1644 9.42132 6.16495 9.03355V9.01272C6.3887 9.1373 6.64828 9.21522 6.92328 9.22564C6.6929 9.07255 6.504 8.86481 6.37342 8.62097C6.24285 8.37712 6.17466 8.10474 6.17495 7.82814C6.17495 7.51647 6.25786 7.23064 6.40328 6.98147C6.82501 7.50023 7.35099 7.92462 7.94717 8.22716C8.54335 8.5297 9.19643 8.70364 9.86411 8.73772C9.83828 8.61272 9.82245 8.48314 9.82245 8.35314C9.82234 8.13271 9.86567 7.91441 9.94998 7.71074C10.0343 7.50706 10.1579 7.322 10.3138 7.16613C10.4696 7.01026 10.6547 6.88664 10.8584 6.80234C11.0621 6.71803 11.2803 6.6747 11.5008 6.6748C11.9841 6.6748 12.4204 6.8773 12.727 7.2048C13.1028 7.13215 13.4631 6.99498 13.792 6.79939C13.6668 7.18723 13.4044 7.5161 13.0541 7.72439C13.3874 7.68638 13.713 7.59874 14.0204 7.46439C13.7908 7.79901 13.5064 8.09245 13.1791 8.3323Z" fill="white" />
                                          </svg>

                                    </div>
                              </div>

                              <div className="flex flex-col">
                                    <span className="font-bold text-t-xs  text-viralget-grey">@{influencer.username}</span>
                                    <span className="mt-space-6  text-viralget-gray-400 font-medium  text-t-normal">{influencer.full_name}</span>
                              </div>
                        </div>
                        <div className="flex  space-x-space-4">
                              {
                                    influencer?.categories?.length > 0 && influencer?.categories?.map((category) => (
                                          <span className="bg-[#F0F7FF] text-viralget-grey  px-space-8  py-space-4   rounded-[4px]">{category}</span>

                                    ))
                              }

                        </div>
                        <div className="flex  space-x-space-28">
                              <div className="flex flex-col space-y-[2px]">
                                    <span className="font-bold text-t-normal-x  text-center text-viralget-grey ">{nFormatter(influencer.followers_count)}</span>
                                    <span className="font-normal   text-t-normal-x  text-viralget-gray-400 text-center" >Followers</span>
                              </div>
                              <div className="flex flex-col space-y-[2px]">
                                    <span className="font-bold text-t-normal-x  text-center text-viralget-grey ">{nFormatter(influencer.interactions)}</span>
                                    <span className="font-normal   text-t-normal-x  text-viralget-gray-400 text-center" >Interactions</span>
                              </div>
                              <div className="flex flex-col space-y-[2px]">
                                    <span className="font-bold text-t-normal-x  text-center text-viralget-grey ">{nFormatter(influencer.engagement_rate)}</span>
                                    <span className="font-normal   text-t-normal-x  text-viralget-gray-400 text-center" >Engagement</span>
                              </div>

                        </div>
                  </a>
            )
      }

      return (

            <div className="mt-space-120  relative">


                  <div className="absolute  -right-20   bottom-0  z-0 ">
                        <svg width="705" height="370" viewBox="0 0 705 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_f_1046_14376)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M495.843 233.572C553.761 220.516 609.457 204.042 667.788 221.708C726.998 239.639 783.796 273.881 814.169 329.976C844.224 385.485 824.197 447.487 823.683 509.624C822.854 609.713 892.7 749.045 810.298 797.55C728.427 845.742 647.578 703.147 555.902 667.249C476.636 636.211 379.671 668.805 319.943 605.539C248.888 530.276 186.096 410.797 228.711 320.682C271.082 231.081 400.623 255.036 495.843 233.572Z" fill="url(#paint0_linear_1046_14376)" fill-opacity="0.09" />
                              </g>
                              <defs>
                                    <filter id="filter0_f_1046_14376" x="0.8479" y="0.00195312" width="1063.68" height="1021.39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                          <feGaussianBlur stdDeviation="107" result="effect1_foregroundBlur_1046_14376" />
                                    </filter>
                                    <linearGradient id="paint0_linear_1046_14376" x1="408.519" y1="197.801" x2="758.909" y2="826.228" gradientUnits="userSpaceOnUse">
                                          <stop stop-color="#B557FE" />
                                          <stop offset="1" stop-color="#FA6699" stop-opacity="0.54" />
                                    </linearGradient>
                              </defs>
                        </svg>
                  </div>


                  <div className="absolute -bottom-[10rem]  z-0">

                        <svg width="504" height="463" viewBox="0 0 504 463" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_f_1046_14177)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.2277 282.003C88.3023 289.968 137.657 294.433 178.651 327.585C220.262 361.237 254.958 407.416 261.939 462.923C268.846 517.851 233.922 561.979 214.48 612.489C183.162 693.848 196.049 829.923 115.637 842.998C35.7437 855.989 15.1027 713.717 -46.8333 654.979C-100.385 604.193 -187.508 599.613 -215.646 528.823C-249.119 444.609 -262.475 326.991 -200.97 267.195C-139.816 207.74 -44.0986 268.906 38.2277 282.003Z" fill="url(#paint0_linear_1046_14177)" fill-opacity="0.13" />
                              </g>
                              <defs>
                                    <filter id="filter0_f_1046_14177" x="-484.926" y="0.642578" width="988.756" height="1084.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                          <feGaussianBlur stdDeviation="120.5" result="effect1_foregroundBlur_1046_14177" />
                                    </filter>
                                    <linearGradient id="paint0_linear_1046_14177" x1="-20.2853" y1="224.767" x2="65.9699" y2="849.871" gradientUnits="userSpaceOnUse">
                                          <stop stop-color="#FA6699" stop-opacity="0.54" />
                                          <stop offset="1" stop-color="#FE9457" />
                                    </linearGradient>
                              </defs>
                        </svg>

                  </div>
                  <div className="flex justify-center items-center  z-10">
                        <span className="font-bold font-lexend  text-t-lg-x  text-viralget-grey">Trending Influencers</span>
                  </div>

                  <div className="grid lg:grid-cols-4   grid-cols-1 gap-space-28  lg:px-space-80  px-space-10 z-10 mt-space-60">


                        {influencers?.length > 0 && influencers.map((influencer) => (
                              <InfluencerCard influencer={influencer} />

                        ))}

                  </div>
            </div>
      )


}


export default TrendingInfluencers;