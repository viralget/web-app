import Review_1 from "@/../assets/images/reviews/review 1.png";
import Review_2 from "@/../assets/images/reviews/review 2.png";
import Review_3 from "@/../assets/images/reviews/review 3.png";
import Capterra from "@/../assets/images/reviews/capterra.png";
import Influencer from "@/../assets/images/reviews/influencer.png";
import Global from "@/../assets/images/reviews/global.png";
import Saas from "@/../assets/images/reviews/saas.png";


// import News_1 from "@/../assets/images/reviews/news_1.png";
// import News_2 from "@/../assets/images/reviews/news_2.png";
// import News_3 from "@/../assets/images/reviews/news_3.png";
// import News_4 from "@/../assets/images/reviews/news_4.png";
// import News_5 from "@/../assets/images/reviews/news_5.png";
// import News_6 from "@/../assets/images/reviews/news_6.png";

import { NewsList } from "@/Utils/constants";


const CustomersReview = () => {


    const NewsCard = ({ item }) => (
           <div className="bg-white p-space-28    shadow-header-card flex flex-col  space-y-space-32">
                   <div   className="w-space-58 h-space-36">
                        <img  src={item.image}   className="w-full  h-full object-contain"  />
                   </div>
                   <div  className="flex flex-col space-y-space-16">
                        <span className="font-lexend  text-t-xs  text-viralget-grey  font-bold">{item.title}</span>
                        <span className="font-normal text-t-xsx  text-viralget-grey">{item.content}</span>
                       <span className="font-normal text-t-normal-x  text-viralget-gray-400">{item.date}</span>
                   </div>
                   <div>
                           <a href="#"   className="font-bold text-t-normal text-viralget-red"  >Read the article</a>
                   </div>
           </div>
    );

   return(
        <div  className="mt-space-120 flex flex-col justify-center  relative items-center">
               

               <div className="absolute  right-0  -top-40">
                      <svg width="564" height="552" viewBox="0 0 564 552" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_f_1046_14465)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M475.979 -156.33C526.213 -152.966 575.56 -152.744 617.99 -125.664C661.061 -98.1764 697.862 -58.7066 707.533 -8.55034C717.104 41.0827 684.505 84.1186 667.631 131.774C640.449 208.535 659.952 331.822 580.553 350.048C501.666 368.155 474.14 239.813 409.609 191C353.812 148.794 266.867 151.417 235.387 88.9542C197.936 14.6467 178.872 -91.7445 237.16 -151.169C295.114 -210.254 393.39 -161.861 475.979 -156.33Z" fill="url(#paint0_linear_1046_14465)" fill-opacity="0.14"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_f_1046_14465" x="0.0837402" y="-380.227" width="909.175" height="932.012" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1046_14465"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_1046_14465" x1="414.928" y1="-204.039" x2="531.452" y2="360.206" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#B557FE"/>
                                    <stop offset="1" stop-color="#FA6699" stop-opacity="0.54"/>
                                    </linearGradient>
                                    </defs>
                        </svg>
               </div>


               <div className="absolute  left-0 z-0 top-40">
                    <svg width="492" height="1061" viewBox="0 0 492 1061" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_1046_14464)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.2277 270.003C88.3023 277.968 137.657 282.433 178.651 315.585C220.262 349.237 254.958 395.416 261.939 450.923C268.846 505.851 233.922 549.979 214.48 600.489C183.162 681.848 196.049 817.923 115.637 830.998C35.7437 843.989 15.1027 701.717 -46.8333 642.979C-100.385 592.193 -187.508 587.613 -215.646 516.823C-249.119 432.609 -262.475 314.991 -200.97 255.195C-139.816 195.74 -44.0986 256.906 38.2277 270.003Z" fill="url(#paint0_linear_1046_14464)" fill-opacity="0.14"/>
                            </g>
                            <defs>
                            <filter id="filter0_f_1046_14464" x="-472.926" y="0.642578" width="964.756" height="1060.19" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="114.5" result="effect1_foregroundBlur_1046_14464"/>
                            </filter>
                            <linearGradient id="paint0_linear_1046_14464" x1="-20.2853" y1="212.767" x2="65.9699" y2="837.871" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9457"/>
                            <stop offset="1" stop-color="#FA6699" stop-opacity="0.54"/>
                            </linearGradient>
                            </defs>
                     </svg>

               </div>

            <div className="flex  flex-col justify-center items-center  max-w-3xl mx-auto ">
                  <span className="text-viralget-red  font-lexend font-medium">What our customers are saying</span>
                  <span  className="font-bold text-t-large text-center font-lexend mt-space-16">Our happy customers love how  <span className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text">ViralGet</span>  helps optimize their influencer campaigns to drive ROI</span>
            </div>

            <div className="flex  mt-space-80 px-space-80 z-10  space-x-space-28">
                  <div className="">
                      <img src={Review_1}  className="w-full" />
                  </div>
                  <div>
                      <img src={Review_2}   className="w-full" />
                  </div>
                  <div>
                      <img src={Review_3}   className="w-full" />
                  </div>
            </div>

            <div  className="mt-space-120  flex flex-col z-10 justify-center">
                  <span className="font-lexend  text-t-lg-x  text-viralget-grey font-bold text-center">Reviews</span>
           
                 <div className="flex  mt-space-60  px-space-80  space-x-space-28">
                      
                        <div>
                            <img src={Influencer}  />
                        </div>
                        <div className="">
                            <img src={Capterra}  />
                        </div>

                        <div>
                            <img src={Saas}  />
                        </div>
                        <div>
                            <img src={Global}  />
                        </div>
                 </div>
            </div>



         <div  className="mt-space-120  flex flex-col justify-center  landing-page-story-section-bg" >
                  <div className="flex flex-col text-center">
                       <span className="font-bold text-t-large text-center font-lexend  text-viralget-grey">People talk  <span className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text">about us</span></span>
                       <span className="font-medium  text-h1-n  text-viralget-gray-400 mt-space-24 "> Press stories about why marketers call ViralGet their platform of choice </span>
                  </div>



                  <div className="grid lg:grid-cols-3 grid-cols-1 mt-space-60  lg:px-space-80  px-space-10  gap-space-28">
                         {
                            NewsList?.length > 0 && NewsList?.map((item) => (
                                <NewsCard  item={item} />
                            ))
                         }
                  </div>
         </div>
        </div>
    )
}



export default CustomersReview;