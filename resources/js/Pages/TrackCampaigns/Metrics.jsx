import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import MetricsHeader from "./components/MetricsHeader";
import Overview from "./components/Overview";
import Contributors from "./components/Contributors";
import TweetPerformance from "./components/TweetPerformance";
import { useState, useEffect } from "react";
import { get, post } from "@/Utils/api";
import { getKeywordData } from "@/Services/TwitterExtractorService";
import toast from "@/Components/Toast";
import EmptyState from "@/Components/EmptyState";

const Metrics = ({ search, result, keyword, updated_at }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [dataFetched, setDataFetched] = useState(false);
    const [metrics, setMetrics] = useState(result ?? null);

    useEffect(() => {
        console.log({ metrics })
        if (!metrics) {
            getMetrics();
        } else {
            setIsLoading(false)
            setDataFetched(true)
        }
    }, []);

    const getMetrics = async () => {
        setIsLoading(true)
        const response = await getKeywordData(keyword);

        if (response) {
            setMetrics(response);
            setDataFetched(true);

            storeData(response);
        } else {
            toast.error('Error fetching keyword data')
        }


        setIsLoading(false);
    }

    const storeData = async (result) => {
        const data = {
            result,
            keyword: keyword
        }

        const response = await post(route('metrics.campaign.store'), data, true);

        console.log({ response, data })

    }


    const EmptyElment = () => (
        <div className="flex flex-col h-full items-center justify-center  space-y-5 ">
            <div className="animate-pulse  bg-viralget-grey  w-40 h-40  rounded-full  text-white   text-center flex items-center justify-center"> Loading metrics...</div>
        </div>
    )
    return (
        <AuthenticatedLayout showSearchForm={false} smallHeader={true}>
            <div className='bg-white h-screen  mt-3 px-10 mb-10'>

                {
                    isLoading ?
                        (<EmptyElment />)
                        :
                        (
                            dataFetched ?
                                <>
                                    <ButtonBack href={route('track.campaign.page')} />
                                    {/* <ButtonBack url={route('track.campaign.page ')} /> */}
                                    <MetricsHeader metrics={metrics} updated_at={updated_at} onRefetch={() => getMetrics()} />
                                    <Overview metrics={metrics} />
                                    <Contributors metrics={metrics} />
                                    <TweetPerformance metrics={metrics} keyword={keyword} />
                                </>
                                :
                                <EmptyState title="An error occurred" subtitle="We are having troubles fetching data at the moment. Please try again" />
                        )
                }

            </div>
        </AuthenticatedLayout>
    )
}

export default Metrics;