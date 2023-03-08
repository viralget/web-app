import Drawer from "@/components/Drawer";
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import Header from './header';
import InfluencerSize from "./influencerSize";
import AudienceCard from "./audienceCard";
import Card from './card';
export default function InfluencerProfile({ influencer }) {


  return (
    <Drawer>
            <div className="w-full flex flex-col">
                  <div className="relative">
                        <Header  influencer={influencer}  />
                  </div>
                  <div className="mt-[10rem]"> 
                      <InfluencerSize />  
                  </div>
               

                  <div className="flex   md:flex-row  flex-col justify-between mt-4 ">
                        <div className="px-5 md:pr-0">
                             <AudienceCard />  
                        </div>
                        <div className="grid grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-4">
                               <Card />
                               <Card />
                               <Card />
                               <Card />
                               <Card />
                               <Card />
                           </div>
                  </div>
            </div>
     </Drawer>
  )
}
