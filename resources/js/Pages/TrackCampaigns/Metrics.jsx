import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import MetricsHeader from "./components/MetricsHeader";
import Overview from "./components/Overview";
import Contributors from "./components/Contributors";
import TweetPerformance from "./components/TweetPerformance";
const  Metrics = () => {

    return(
        <AuthenticatedLayout smallHeader={true}>
        <div className='bg-white h-screen  mt-3 px-10 mb-10'>
            <ButtonBack />
            <MetricsHeader />
            <Overview />
            <Contributors />
            <TweetPerformance />
        </div>
        </AuthenticatedLayout>
    )
}

export default Metrics;