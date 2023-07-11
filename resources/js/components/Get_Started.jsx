
import Get_Started from "@/../assets/images/get_started_banner.png";

const GetStarted = () => {
  return (
    //         <div  className="mt-space-120 relative  flex  items-center lg:space-x-space-160  py-space-40 lg:flex-row flex-col bg-gradient-to-r from-[#F38C97]  to-[#82209F] ">

    <div className="relative  flex  items-center lg:space-x-space-160  py-space-40 lg:flex-row flex-col bg-gradient-to-r from-[#F38C97]  to-[#82209F] ">
      <div className="lg:w-[686px]   w-full">
        <img src={Get_Started} />
      </div>
      <div className="flex flex-col  lg:px-0  px-space-10  text-white justify-start items-start">
        <span className="font-bold font-lexend  text-t-large">Get started with ViralGet</span>
        <span className="mt-space-24 font-lexend  text-h1-n  text-viralget-gray-light ">Grow your business through data-driven influencer marketing</span>
        <a href="/register" className="mt-space-40  px-space-30 py-space-15 bg-white text-viralget-red rounded-md  text-t-xsx font-lexend font-medium " >
          Early Bird Signup
        </a>
      </div>


      <div className="absolute    top-0  right-0">
        <svg width="456" height="349" viewBox="0 0 456 349" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="320.5" cy="28.5" r="320.5" fill="white" fill-opacity="0.03" />
        </svg>
      </div>
    </div>
  )
}


export default GetStarted;