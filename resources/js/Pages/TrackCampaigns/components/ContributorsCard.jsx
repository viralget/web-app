

const ContributorsCard = ({ title, subTitle }) => {



    const Row = ({ rank }) => (
        <div className=" flex flex-col space-y-2 w-full">
                <div className="flex  justify-between">
                       <div className="flex justify-start space-x-2">
                             <img src="http://127.0.0.1:8000/storage/user_images/16827594553.jpg" className="rounded-full w-space-40 h-space-40" />                   
                              <div className="flex flex-col space-y-1">
                                    <span className="text-t-xs  font-lexend  font-bold">@Dlaureate</span>
                                    <span className="text-t-normal font-lexend  text-viralget-gray-400 font-normal">Dalutere mega</span>
                             </div>
                        </div>
                        <div>
                                <span>{rank}</span>
                        </div>

                </div> 
                <div class="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                   <div class="bg-[#F37C38] h-1 rounded-full" style={{ width: rank +'%' }}></div>
                </div>

        </div>
    )

    return(

        <div  className="flex flex-col">
                <div  className="bg-[#F37C38]  py-5 px-3 mb-3 flex justify-between">
                      <span className="text-t-normal font-normal text-white font-lexend uppercase">{ title }</span>
                      <span className="font-normal  text-t-xsx text-white font-lexend">{ subTitle }</span>
                </div>
                <div className="flex  flex-col  space-y-3">
                     <Row   rank={90} />
                     <Row    rank={70}  />
                     <Row   rank={50}  />
                     <Row   rank={30}  />
                     <Row   rank={20} />
                     <Row   rank={10}  />
                     <Row  rank={10}  />
                </div>
        </div>
    )
}


export default ContributorsCard;