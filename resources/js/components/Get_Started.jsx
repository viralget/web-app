
import Get_Started from "@/../assets/images/get_started.png";
const GetStarted = () => {
  return(

        <div  className="mt-space-120   flex  items-center lg:space-x-space-160  py-space-40 lg:flex-row flex-col bg-gradient-to-r from-[#F38C97]  to-[#82209F] ">
               <div>
                    <img src={Get_Started}  />
               </div>
               <div className="flex flex-col  text-white justify-start items-start">
                        <span  className="font-bold font-lexend  text-t-large">Get started with ViralGet</span>
                        <span className="mt-space-24 font-lexend  text-h1-n  text-viralget-gray-light ">Grow your business through data-driven influencer marketing</span>
                      <a href="/register"   className="mt-space-40  px-space-30 py-space-15 bg-white text-viralget-red rounded-md  text-t-xsx font-lexend font-medium " >
                      Try ViralGet for free
                      </a>
               </div>
        </div>
    )
}


export default GetStarted;