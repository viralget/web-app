


export default function summaryCard(){


    return(
        <div className="border bg-white p-3 px-4  md:w-[20rem] rounded-md">
               <div className="flex justify-between">
                   <div className="flex flex-col">
                        <span className="font-bold  text-xs">Monthly profilings</span>
                        <span className="text-viralget-red  text-xs font-bold">20 left</span>
                   </div>
                    <div className="flex justify-start ">
                       <a href="#"  className="text-viralget-red font-bold text-xs">
                        <span className="text-xs">Add more</span>    
                       </a>
                   </div>
               </div>

               <div className="flex items-center justify-center p-4">
                      <div className="radial-progress text-viralget-red text-lg font-bold" style={{"--value":70}}>70</div>
               </div>

         
               
        </div>
    )
}