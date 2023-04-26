import Card_1 from "@/../assets/images/cards/1.png";
import Card_2 from "@/../assets/images/cards/2.png";
import Card_3 from "@/../assets/images/cards/3.png";
import Card_4 from "@/../assets/images/cards/4.png";
import Card_6 from "@/../assets/images/cards/6.png";
import Card_7 from "@/../assets/images/cards/7.png";
import Card_8 from "@/../assets/images/cards/8.png";
import Card_5 from "@/../assets/images/cards/5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const AnalyzedAccount = () => {


   const dataAnalysis = [
      {
         name: 'Influencer category',
         value: '43'
      },
      {
         name: 'Smart filters',
         value: '30+'
      },
      {
         name: 'Metrics for influencer vetting',
         value: '60+'
      },
      {
         name: 'Performance tracking & measurement metrics',
         value: '35+'
      }
   ]


   const DarkCard = ({ item }) => (
         <div className="flex flex-col  rounded-md  p-space-28  w-[228px] bg-gradient-to-r from-[#FFFFFF29]  to-[#FFFFFF0F]  border  border-[#FFFFFF0F]">
             <span  className="text-[#FFFFFF]  font-bold font-lexend  text-t-xs">{ item.name }</span>
              <span  className="text-[#FFFFFF]  font-bold font-lexend text-t-xlg mt-space-32">{ item.value }</span>
        </div>
   )

    return(

        <div className="mt-space-120 ">
             <div className="flex justify-center items-center">
                  <span className="font-bold font-lexend  text-t-lg-x  text-viralget-grey">Recently analyzed account</span>
            </div>
            {/* <marquee>
                <div className="flex space-x-4  mt-space-60">
                     <div> 
                        <img src={Card_1}  />
                     </div>

                     <div> 
                        <img src={Card_4}  />
                     </div>

                     <div> 
                        <img src={Card_3}  />
                     </div>
                     <div> 
                        <img src={Card_5}  />
                     </div>
                </div>
            </marquee> */}

            <Carousel>
                <div className="flex space-x-4 mt-4">
                     <div> 
                        <img src={Card_2}  />
                     </div>

                     <div> 
                        <img src={Card_6}  />
                     </div>

                     <div> 
                        <img src={Card_7}  />
                     </div>
                     <div> 
                        <img src={Card_8}  />
                     </div>
                </div>
            </Carousel>







            <div  className="mt-space-120  flex items-center  flex-col   bg-viralget-black">
                   
               <div className="w-full flex  flex-col justify-center text-center  max-w-3xl mx-auto   pt-space-120">
                       <span  className="font-lexend font-bold   text-white  text-t-large">Analyze   <span  className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text"> any influencer</span> <br/> in the world</span>
                       <span className="mt-space-24  font-medium  text-h1-n text-[#FFFFFFB2]">Find the influencer that matches your campaign’s objectives based on their stats – available anytime on your own intuitive database.</span>
                </div>

                   <div className="mt-space-80  flex  md:flex-row  flex-wrap flex-col  px-space-80  space-x-space-28">
                         {
                           dataAnalysis?.map((item) => (
                             <DarkCard  item={item} /> 
                           ))
                         }  
                   </div>

            </div>


            <div>
                   <span>Join the world’s top brands</span>
            </div>
        </div>
    )
}


export default AnalyzedAccount;