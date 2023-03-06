
export default function PlanCard({isEmpty}) {


    return (
        <div  className="border   flex flex-col h-25 p-2    items-center justify-center">
              <span className="font-bold text-xs ">
                Basic
              </span>

              <span  className="text-xl  font-bold mt-3">
                $79/mo
              </span>

              <button  className="text-viralget-red border mt-3  p-1 hover:bg-viralget-red   text-center  flex items-center hover:text-white rounded-md border-viralget-red ">
                 <span  className="text-[9px]  font-bold">Start free 7-day trial</span> 
              </button>
        </div>
    )
}