import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import MetricsHeader from "./components/MetricsHeader";
import Overview from "./components/Overview";
import Contributors from "./components/Contributors";
import TweetPerformance from "./components/TweetPerformance";
import { useState, useEffect } from "react";
import { get } from "@/Utils/api";

const Metrics = ({ search, result, updated_at }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [metrics, setMetrics] = useState(result);


    function getMetrics() {
        setIsLoading(true)
        get("https://extractor.viralget.io/twitter/extract-keywords?keyword=" + search.keyword)
            .then(({ data }) => {

                if (data.status) {
                    setMetrics(data.data);
                }

            }).catch((error) => {
                console.log(error);
            }).finally(() => setIsLoading(false))
    }

    useEffect(() => {
        // getMetrics()
        setIsLoading(false);
    }, []);


    const EmptyElment = () => (
        <div className="flex flex-col h-full items-center justify-center  space-y-5 ">
            <div className="animate-pulse  bg-viralget-grey  w-40 h-40  rounded-full  text-white   text-center flex items-center justify-center"> Loading metrics...</div>
        </div>
    )
    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className='bg-white h-screen  mt-3 px-10 mb-10'>

                {
                    isLoading ?
                        (<EmptyElment />)
                        :
                        (
                            <>
                                <ButtonBack />
                                {/* <ButtonBack url={route('track.campaign.page ')} /> */}
                                <MetricsHeader metrics={metrics} updated_at={updated_at} onRefetch={() => getMetrics()} />
                                <Overview metrics={metrics} />
                                <Contributors metrics={metrics} />
                                <TweetPerformance metrics={metrics} />
                            </>
                        )
                }

            </div>
        </AuthenticatedLayout>
    )
}

export default Metrics;