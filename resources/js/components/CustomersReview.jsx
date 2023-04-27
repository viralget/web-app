import Review_1 from "@/../assets/images/reviews/review 1.png";
import Review_2 from "@/../assets/images/reviews/review 2.png";
import Review_3 from "@/../assets/images/reviews/review 3.png";
import Capterra from "@/../assets/images/reviews/capterra.png";
import Influencer from "@/../assets/images/reviews/influencer.png";
import Global from "@/../assets/images/reviews/global.png";
import Saas from "@/../assets/images/reviews/saas.png";


import News_1 from "@/../assets/images/reviews/news_1.png";
import News_2 from "@/../assets/images/reviews/news_2.png";
import News_3 from "@/../assets/images/reviews/news_3.png";
import News_4 from "@/../assets/images/reviews/news_4.png";
import News_5 from "@/../assets/images/reviews/news_5.png";
import News_6 from "@/../assets/images/reviews/news_6.png";


const CustomersReview = () => {

   return(
        <div  className="mt-space-120 flex flex-col justify-center items-center">
            <div className="flex  flex-col justify-center items-center  max-w-3xl mx-auto ">
                  <span className="text-viralget-red  font-lexend font-medium">What our customers are saying</span>
                  <span  className="font-bold text-t-large text-center font-lexend mt-space-16">Our happy customers love how  <span className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text">ViralGet</span>  helps optimize their influencer campaigns to drive ROI</span>
            </div>

            <div className="flex  mt-space-80 px-space-80  space-x-space-28">
                  <div className="">
                      <img src={Review_1}  />
                  </div>
                  <div>
                      <img src={Review_2}  />
                  </div>
                  <div>
                      <img src={Review_3}  />
                  </div>
            </div>

            <div  className="mt-space-120  flex flex-col justify-center">
                  <span className="font-lexend  text-t-lg-x  text-viralget-grey font-bold text-center">Reviews</span>
           
                 <div className="flex  mt-space-60  px-space-80  space-x-space-28">
                        <div className="">
                            <img src={Capterra}  />
                        </div>
                        <div>
                            <img src={Influencer}  />
                        </div>
                        <div>
                            <img src={Saas}  />
                        </div>
                        <div>
                            <img src={Global}  />
                        </div>
                 </div>
            </div>



         <div  className="mt-space-120  flex flex-col justify-center" >
                  <div className="flex flex-col text-center">
                       <span className="font-bold text-t-large text-center font-lexend  text-viralget-grey">People talk  <span className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text">about us</span></span>
                       <span className="font-medium  text-h1-n  text-viralget-gray-400 mt-space-24 "> Press stories about why marketers call ViralGet their platform of choice </span>
                  </div>



                  <div className="grid grid-cols-3  mt-space-60  px-space-80  gap-space-28">
                  <div className="">
                            <img src={News_1}  />
                        </div>
                        <div>
                            <img src={News_2}  />
                        </div>
                        <div>
                            <img src={News_3}  />
                        </div>
                        <div>
                            <img src={News_4}  />
                        </div>
                        <div>
                            <img src={News_5}  />
                        </div>
                        <div>
                            <img src={News_6}  />
                        </div>
                  </div>
         </div>
        </div>
    )
}



export default CustomersReview;