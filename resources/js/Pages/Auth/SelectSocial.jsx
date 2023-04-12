import Header from "./AccountSetup/header";
import { TwitterSvg } from "@/Utils/icons";
const SelectSocial = (props) => {
    const { auth: { user }} = props;
    return(
        <div>
             <Header  user={user}   />
             <div className="mt-10  flex justify-center flex-col  items-center">

                <div  className="flex flex-col max-w-2xl mx-auto text-center">
                      <span className="text-t-xlg  font-lexend font-bold">You've successfully completed the registration</span>
                   <span className="font-semibold text-t-normal-lg text-viralget-gray-400  mt-space-16">Select one of the social networks <br/>
where you want to search for influencers</span>
                </div>


                <div className="max-w-2xl mx-auto mt-space-16">

                     <div  className="w-[290px]  rounded-md shadow-header-card p-5 items-center justify-center flex flex-col">
                            <div>
                                 <TwitterSvg  />
                            </div>

                            <span className="text-t-xsx font-medium  mt-space-20   font-lexend">Twitter</span>
                             <span className="text-t-normal font-medium mt-space-6">10.4m+ influencers</span>
                             <a href="/explore"  className="border mt-space-20 border-viralget-red  hover:bg-viralget-red  hover:text-white rounded-md text-viralget-red text-t-normal font-bold py-space-12 px-space-60" >
                                Select
                                </a> 
                     </div>
                </div>
                
             </div>
        </div>
    )
}


export default SelectSocial;