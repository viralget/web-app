

export default function Card({ item }) {



    return (

        <div className="border rounded-md  flex flex-col p-3 h-full w-full    justify-center  items-left">
            <div className="flex  items-center">
                <div className="mr-1">
                  {item.icon}

                </div>
                <span className="text-t-normal font-normal  text-viralget-grey">{item.title}</span>
            </div>
        
        
            <div className="mt-3">
                <span className="font-semibold text-h1  font-lexend ">{item.score}</span>
            </div>
            <div className="flex mt-3">
               
            {    item.increase ? (
                         
                     <div className="mt-1 mr-1">
                            <svg width="8" height="8" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.375 9.25V1" stroke="#28CA42" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 4.375L4.375 1L7.75 4.375" stroke="#28CA42" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                            )
                            : null
              }
                       
                <div className="text-xs">
                    {
                        item.increase ? (
                           
                            <span className="text-[#28CA42] font-medium text-t-normal-x  mr-1">{item.increase}% </span>
                          
                        )
                        : null
                    }
                   
                    <span className="text-viralget-grey  font-normal text-t-normal-x"> {item.increase ? 'vs' : null} {item.label}</span>
                </div>
            </div>


        </div>
    )
}