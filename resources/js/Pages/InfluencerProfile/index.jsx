import Drawer from "@/components/Drawer";
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import Header from './header';
import InfluencerSize from "./influencerSize";
import AudienceCard from "./audienceCard";
import Card from './card';
export default function InfluencerProfile({ influencer }) {


  return (
    <Drawer>
            <div className=" w-full flex flex-col">
                  <div className="relative">
                        <Header  influencer={influencer}  />
                         <InfluencerSize />  
                  </div>
               

                  <div className="flex   md:flex-row  flex-col space-x-1 mt-4 justify-between">
                        <div className="px-5 md:pr-0">
                             <AudienceCard />  
                        </div>
                        <div className="grid grid-cols-2 md:mt-0 mt-4  md:pl-0  pl-2 pr-5  gap-2  md:gat-2">
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
