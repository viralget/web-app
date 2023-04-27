
import Card_9 from "@/../assets/images/cards/9.png";
import Card_10 from "@/../assets/images/cards/10.png";
import Card_11 from "@/../assets/images/cards/11.png";
import Card_12 from "@/../assets/images/cards/12.png";
import Card_13 from "@/../assets/images/cards/13.png";
import Card_14 from "@/../assets/images/cards/14.png";
import Card_15 from "@/../assets/images/cards/15.png";
import Card_16 from "@/../assets/images/cards/16.png";
const TrendingInfluencers = () => {


    return(

         <div className="mt-space-120">
                 <div className="flex justify-center items-center">
                   <span className="font-bold font-lexend  text-t-lg-x  text-viralget-grey">Trending Influencers</span>
                 </div>

                 <div className="grid grid-cols-4 gap-space-28  px-space-80 mt-space-60">
                     <div> 
                        <img src={Card_11}  />
                     </div>

                     <div> 
                        <img src={Card_12}  />
                     </div>

                     <div> 
                        <img src={Card_9}  />
                     </div>
                     <div> 
                        <img src={Card_10}  />
                     </div>
                     <div> 
                        <img src={Card_13}  />
                     </div>
                     <div> 
                        <img src={Card_14}  />
                     </div>
                     <div> 
                        <img src={Card_15}  />
                     </div>
                     <div> 
                        <img src={Card_16}  />
                     </div>
                </div>
         </div>
    )


}


export default  TrendingInfluencers;