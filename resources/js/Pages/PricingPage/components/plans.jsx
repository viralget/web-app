import { useState } from "react"
import PlanCard from "./planCard"
import {  availableCurrency} from "@/Utils/constants"
import PlanDetails from "./planDetails";
import { classNames } from "@/Utils/helpers";

export default function Plans({plans}) {

   
    const [selectedDuration, setSelectedDuration] = useState("monthly");
    const [filteredPlans, setFilteredPlans] = useState( plans?.filter((item) => item.interval == selectedDuration))
   

  const   handleSwitch = (e) => {
        let duration;
         if(e.target.checked){
            duration = 'annually';
         }else {
            duration = 'monthly'; 
         }
         setSelectedDuration(duration)
       const newPlan = plans.filter((item) => item.interval == duration);
       setFilteredPlans(newPlan);
    
  }

    return (
       <div className=" w-full  bg-white h-full rounded-tr-lg rounded-tl-lg  -top-10 ">
              

                <div className="flex flex-col justify-center items-center  pt-10">

                      <div className="flex flex-col justify-center">
                           <h4 className="font-lexend  text-h1  font-semibold">ViralGet subscription plans</h4>
                           <span className="font-normal mt-space-12 text-t-xsx text-center text-viralget-gray-400">Choose a plan that works best for you</span>
                      </div>

                      <div class="flex flex-col justify-center  mt-4">
                            <div>
                                <span className="font-semibold font-lexend text-t-xsx mr-2">Billed monthly</span>
                                <input
                                class="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-[rgba(0,0,0,0.25)] outline-none before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-white after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-viralget-red checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-viralget-red checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchChecked"
                                onChange={handleSwitch}
                                 />
                                 <span className="font-semibold font-lexend text-t-xsx text-viralget-gray-400">Billed annually</span>
                            </div>

                            <div className="flex justify-center mt-2 items-center">
                                  <span className="text-t-xsx font-bold text-viralget-red
                                  ">
                                  Save up to 15%
                                  </span>

                                  <div>
                                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.5984 5.47249C25.9562 15.2761 21.3291 22.6509 13.8434 27.3917C9.43641 30.1828 5.28067 31.1868 3.6842 31.4911C3.30394 31.5636 3.03317 31.9163 3.07911 32.3007C3.12527 32.687 3.47297 32.9604 3.85574 32.8908C5.50235 32.5915 9.83727 31.5769 14.5398 28.6123C19.9499 25.2015 26.8468 18.4586 28.9827 5.70461L27.5984 5.47249Z" fill="url(#paint0_linear_1046_10228)"/>
                                            <path d="M29.0666 4.39874C28.8592 4.04888 28.4035 3.94003 28.0604 4.15845L22.8811 7.45613C22.5541 7.66432 22.4579 8.09818 22.6661 8.42515C22.8742 8.7521 23.3081 8.84839 23.635 8.64022L28.2186 5.72195L31.0933 10.5723C31.2909 10.9057 31.7214 11.0158 32.0548 10.8182C32.3882 10.6206 32.4984 10.1902 32.3008 9.85672L29.0666 4.39874Z" fill="url(#paint1_linear_1046_10228)"/>
                                            <defs>
                                            <linearGradient id="paint0_linear_1046_10228" x1="3.40641" y1="36.6223" x2="31.3112" y2="35.3699" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F37C38"/>
                                            <stop offset="1" stop-color="#EE681B"/>
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1046_10228" x1="22.4528" y1="12.1519" x2="33.561" y2="11.4135" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#F37C38"/>
                                            <stop offset="1" stop-color="#EE681B"/>
                                            </linearGradient>
                                            </defs>
                                      </svg> 
                                  </div>
                            </div>
                     </div>
              </div>







              <div  className="flex  justify-around px-10  mt-10" >
                      

                        <div className="lg:flex flex-col bg-white h-space-143 hidden  shadow-md ">
                                  
                                  {
                                    availableCurrency.map((item) => (
                                        <button  disabled={!item.isSelected} className={classNames("border-b p-1 text-sm  ", item.isSelected ? 'bg-viralget-red  text-white' : 'text-viralget-gray-400  disabled')}>
                                           <span>{item.name} ({item.symbol})</span>
                                        </button>
                                    ))
                                  }
                        </div>


                        <div  className="flex  flex-wrap">
                                 <PlanCard isEmpty />

                                 {
                                    filteredPlans?.map((item, index) => (
                                        <PlanCard  item={item}  key={index} /> 
                                    ))
                                 }
                                            
                        </div>
              </div>


              <PlanDetails />

                  
       </div>  
    )
}

