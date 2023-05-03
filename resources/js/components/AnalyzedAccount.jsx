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

import { ScrollBanner } from "./ScrollBanner";

// const images = [
//    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
//    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
//    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
//    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
//    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
//    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
//    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
//  ].map((image) => ({
//    id: crypto.randomUUID(),
//    image
//  }));


 const images = [
   Card_1,
   Card_2,
   Card_3,
   Card_4
  ].map((image) => ({
   id: crypto.randomUUID(),
   image
 }));

 const images_2 = [
   Card_5,
   Card_6,
   Card_7,
   Card_8
  ].map((image) => ({
   id: crypto.randomUUID(),
   image
 }));
 

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

        <div className="mt-space-120  relative ">
             <div className="flex justify-center items-center">
                  <span className="font-bold font-lexend  text-t-lg-x  text-viralget-grey">Recently analyzed account</span>
            </div>

            <div className="absolute   right-0">
                 <svg width="721" height="1220" viewBox="0 0 721 1220" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_1046_14134)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M595.636 301.376C680.307 302.716 780.673 293.45 832.836 360.158C883.482 424.926 827.971 515.143 827.083 597.357C826.214 677.791 875.016 764.389 827.766 829.487C777.325 898.982 680.325 930.431 595.636 916.233C518.523 903.306 482.327 821.076 430.162 762.832C382.889 710.05 323.494 666.924 310.039 597.357C293.707 512.915 291.087 414.421 350.807 352.529C410.989 290.159 508.976 300.005 595.636 301.376Z" fill="#E85E85" fill-opacity="0.1"/>
                        </g>
                        <defs>
                        <filter id="filter0_f_1046_14134" x="0" y="0" width="1154.12" height="1219.57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1046_14134"/>
                        </filter>
                        </defs>
                  </svg>
            </div>


            <div className="mt-space-60">
                   <ScrollBanner  images={images} speed={1000} />
           </div>
           <div className="mt-space-28">
                   <ScrollBanner  images={images_2} speed={5000} />
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
            </marquee> */}







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
                           <div className="w-space-120  flex items-center"> <img src={Hm}   className="h-space-40   mx-auto" /></div>
                           <div className="w-space-120  flex items-center">  <img src={Png}  className="h-space-40" /> </div>
                           <div className="w-space-120  flex items-center">  <img src={Philips}  className="h-space-40"  /> </div>
                  </div> 
                  
                  </div>

            </div>


            
        </div>
    )
}


export default AnalyzedAccount;