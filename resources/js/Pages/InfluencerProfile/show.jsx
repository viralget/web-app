import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import AudienceCard from "./audienceCard";
import Card from "./card";
import Header from './header';
import InfluencerSize from "./influencerSize";

export default function show({ influencer }) {

    return (

        <AuthenticatedLayout>
            <>

                <div className="relative -mt-24">
                    <Header influencer={influencer} />
                </div>
            </>

            <div className="w-full">

                <div className="flex   md:flex-row  flex-col justify-between mt-4 space-x-3">
                    <div className="w-full px-5 md:pr-0 bg-white ">
                        <AudienceCard />
                    </div>
                    <div className=" w-full grid grid-cols-2 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-4">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
