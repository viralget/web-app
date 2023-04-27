import Card_1 from "@/../assets/images/cards/1.png";
import Card_2 from "@/../assets/images/cards/2.png";
import Card_3 from "@/../assets/images/cards/3.png";
import Card_4 from "@/../assets/images/cards/4.png";
import Card_6 from "@/../assets/images/cards/6.png";
import Card_7 from "@/../assets/images/cards/7.png";
import Card_8 from "@/../assets/images/cards/8.png";
import Card_5 from "@/../assets/images/cards/5.png";


import Hm from "@/../assets/images/logos/h-m.png"
import Cola from "@/../assets/images/logos/coca-cola.png"
import Loreal from "@/../assets/images/logos/loreal.png"
import Png from "@/../assets/images/logos/p&g.png"
import Philips from "@/../assets/images/logos/philips.png"

const AnalyzedAccount = () => {


   const dataAnalysis = [
      {
         name: 'Influencer\ncategory',
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
         <div className="flex flex-col  rounded-md  p-space-28  w-[299px] bg-gradient-to-r from-[#FFFFFF29]  to-[#FFFFFF0F]  border  border-[#FFFFFF0F]">
             <span  className="text-[#FFFFFF]  font-bold font-lexend  text-t-xs">{ item.name }</span>
              <span  className="text-[#FFFFFF]  font-bold font-lexend text-t-xlg mt-space-32">{ item.value }</span>
        </div>
   )

    return(

        <div className="mt-space-120 ">
             <div className="flex justify-center items-center">
                  <span className="font-bold font-lexend  text-t-lg-x  text-viralget-grey">Recently analyzed account</span>
            </div>
            <marquee>
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
            </marquee>

            <marquee>
                <div className="grid grid-cols-4 space-x-4 mt-4">
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
            </marquee>







            <div  className="mt-space-120  flex items-center  flex-col   bg-viralget-black">
                   
               <div className="w-full flex  flex-col justify-center text-center  max-w-3xl mx-auto   pt-space-120">
                       <span  className="font-lexend font-bold   text-white  text-t-large">Analyze   <span  className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text"> any influencer</span> <br/> in the world</span>
                       <span className="mt-space-24  font-medium  text-h1-n text-[#FFFFFFB2]">Find the influencer that matches your campaign’s objectives based on their stats – available anytime on your own intuitive database.</span>
                </div>

                   <div className="mt-space-80  flex  lg:flex-row  lg:py-0  lg:space-y-0 space-y-space-28  flex-col  px-space-80  lg:space-x-space-28">
                         {
                           dataAnalysis?.map((item) => (
                             <DarkCard  item={item} /> 
                           ))
                         }  
                   </div>



                   <div  className="text-center  mt-space-120   mb-20">
                     <span className="font-lexend font-bold  text-t-lg-x text-white">Join the world’s top brands</span>
      
                <div className="flex  flex-wrap  spaxe-x-[80px]   mt-[68px]"> 
                     
                           <div  className="w-space-120  flex items-center">  <img src={Cola}  className="h-space-40"  /> </div>
                           <div className="w-space-120  flex items-center "> <img src={Loreal}  className="h-space-40" /> </div>
                           <div className="w-space-120  flex items-center"> <img src={Hm}   className="h-space-40" /></div>
                           <div className="w-space-120  flex items-center">  <img src={Png}  className="h-space-40" /> </div>
                           <div className="w-space-120  flex items-center">  <img src={Philips}  className="h-space-40"  /> </div>
                  </div> 
                  
                  </div>

            </div>


            
        </div>
    )
}


export default AnalyzedAccount;