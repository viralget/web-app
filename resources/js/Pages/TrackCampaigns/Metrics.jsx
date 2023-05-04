import AuthenticatedLayout from "@/components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import MetricsHeader from "./components/MetricsHeader";
import Overview from "./components/Overview";

const  Metrics = () => {

    return(
        <AuthenticatedLayout smallHeader={true}>
        <div className='bg-white h-screen  mt-3 px-10 mb-10'>
            <ButtonBack />
            <MetricsHeader />
            <Overview />
        </div>
        </AuthenticatedLayout>
    )
}

export default Metrics;