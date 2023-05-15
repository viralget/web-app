import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import MetricsHeader from "./components/MetricsHeader";
import Overview from "./components/Overview";
import Contributors from "./components/Contributors";
import TweetPerformance from "./components/TweetPerformance";
import { useState, useEffect } from "react";
import { get } from "@/Utils/api";

const  Metrics = ({ search }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [metrics, setMetrics] = useState([]);

    function  getMetrics(){

            fetch("http://extractor.viralget.io/twitter/extract-keywords?keyword=afrobeat")
            .then((result) => {
            console.log("result:", result);
            }).catch((error) => {
                console.log(error);
            }).finally(() => setIsLoading(false))

    }

    useEffect(() => {
        getMetrics()
    },[]);


    const EmptyElment = () => (
        <div className="flex flex-col h-full items-center justify-center  space-y-5 ">
                <div className="animate-pulse  bg-viralget-grey  w-40 h-40  rounded-full  text-white   text-center flex items-center justify-center"> Loading metrics...</div>
        </div>
    )
    return(
        <AuthenticatedLayout smallHeader={true}>
        <div className='bg-white h-screen  mt-3 px-10 mb-10'>

            {
                isLoading ? 
                (  <EmptyElment />)
                : 
                (
                    <>
                 <ButtonBack />
                 <MetricsHeader />
                <Overview />
                <Contributors />
                <TweetPerformance /> 
                    </>
                )
            }
           
        </div>
        </AuthenticatedLayout>
    )
}

export default Metrics;