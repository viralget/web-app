import Drawer from "@/components/Drawer";
import Profile from "./Profile";


export default function InfluencerProfile({ influencer }) {

   
      return (
            <Drawer>
                  <Profile influencer={influencer} showBg />
            </Drawer>
      )
}
