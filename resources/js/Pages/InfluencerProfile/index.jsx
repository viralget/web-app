import Drawer from "@/components/Drawer";
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import Header from './header';
import InfluencerSize from "./influencerSize";
import AudienceCard from "./audienceCard";
import Card from './Card';
export default function InfluencerProfile({ influencer }) {


  return (
    <Drawer>
            <div className=" w-full flex flex-col">
                  <div className="relative">
                        <Header  influencer={influencer}  />
                         <InfluencerSize />  
                  </div>
               

                  <div className="flex   md:flex-row  flex-col space-x-4  px-5 mt-4 justify-between">
                        <div className="md:w-full">
                             <AudienceCard />  
                        </div>
                        <div className="flex flex-wrap  ">
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
