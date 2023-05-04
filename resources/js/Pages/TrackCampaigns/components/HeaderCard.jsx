

const HeaderCard = ({ item }) => {



    return(
        <div className="flex  flex-col space-y-2">
               <div>
                    <span className="text-t-xs  font-medium  text-viralget-grey  font-lexend" >{ item.title }</span>
               </div>
               <div  className="flex space-x-2  items-end">
                     <span  className="font-bold font-lexend text-viralget-grey text-end text-t-xlg">{item.value}k</span>
                      <div className="flex space-x-1">
                            <svg width="8" height="8" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.375 9.25V1" stroke="#28CA42" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1 4.375L4.375 1L7.75 4.375" stroke="#28CA42" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="text-[#28CA42] font-medium text-t-normal-x  mr-1"> {item.rate}% </span>
                            <span className="text-viralget-grey  font-normal text-t-normal-x"> {item.timeDifference}</span>
                      </div>
               </div>
        </div>
    )
}


export default HeaderCard;