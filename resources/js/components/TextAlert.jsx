import { InfoSvg } from "@/Utils/icons"
const TextAlert = () => {


    return(
        <div className="p-space-16 w-full  bg-viralget-red-100 space-x-2 rounded-md flex items-center justify-center">
              <InfoSvg />
              <span className="text-t-normal  font-normal">Your card won't be charged until the end of the free trial period. </span>
        </div>  
    )
}

export default TextAlert;