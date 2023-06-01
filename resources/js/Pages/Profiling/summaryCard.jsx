import Typography from "@/components/Typography"
export default function summaryCard({ item }) {


    return (
        <div className="border bg-white p-3 px-4  md:w-[20rem] rounded-md">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <Typography variant="h3" content={item.title} />
                    <Typography variant="h3" content={item.left + ' left'} className="text-viralget-red " />
                    {/* <span className="font-bold  text-xs">{item.title}</span> */}
                    {/* <span className="text-viralget-red  text-xs font-bold">{item.left} </span> */}
                </div>
                <div className="flex justify-start ">
                    {/* <a href="#"  className="text-viralget-red font-bold text-xs">
                        <span className="text-xs">Add more</span>    
                       </a> */}
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div className="radial-progress  text-viralget-red  " style={{ "--value": item.level, "--size": '10rem', '--thickness': '10%' }}>
                    <div className="flex flex-col items-center  border-2 border-dashed p-10 rounded-full">
                        <span className="text-viralget-grey  text-[25px]  font-[900]">{item.used}</span>
                        <span className="text-[#748094]  text-[10px]">Out of {item.total}</span>
                    </div>
                </div>

            </div>

            <div className="flex justify-center mt-3">
                <Typography variant="b3" content={item.bottomLine} className="text-viralget-grey " />
                {/* <span className="text-xs text-viralget-grey "> {item.bottomLine} </span> */}
            </div>

        </div>
    )
}