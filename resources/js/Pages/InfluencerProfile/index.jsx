import Drawer from "@/components/Drawer";
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import Header from './header';
import InfluencerSize from "./influencerSize";
import AudienceCard from "./audienceCard";
import Card from './Card';
export default function InfluencerProfile({ influencer }) {


  return (
    <Drawer>
            <div className="relative w-full flex flex-col">
                  <Header  influencer={influencer}  />
                  <InfluencerSize />

                  <div className="flex  px-5 mt-4  w-full bg-green-400 justify-between">
                        <div>
                             <AudienceCard />  
                        </div>
                        <div className="flex flex-wrap justify-between">
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
