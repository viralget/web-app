import Card from "@/Components/Card";
import { nFormatter } from "@/Utils/helpers";
import {
    Gender,
    Marital,
    Parental,
    Ethnicity,
    Income,
    Education,
    EngagementRateWithBSvg,
    SvgRank,
    SvgCountry,
    SvgCategory,

} from "@/Utils/icons";
import AudienceCard from "../audienceCardRow";
import DataCard from "../card";
import BrandSafetyLevel from "../Components/BrandSafetyLevel";
import SectionTitle from "@/Components/SectionTitle";
import EmptyState from "@/Components/EmptyState";
import Avatar from "@/Components/Skeleton/Avatar";


export default function ({ influencer }) {

    const {

        brands_worked_with
    } = influencer?.metrics;


    const getBrands = () => {
        return brands_worked_with?.split(',').filter((brand) => brand != 'none');
    }


    return (
        <div className="grid gap-3">
            <div>
                <Card useBorder useShadow={false}>
                    <SectionTitle title="Brands Worked With" />
                    {/* <EmptyState title="Coming soon" /> */}

                    <div className="py-5">
                        {
                            getBrands().length > 0 ?
                                <div className="flex flex-wrap flex-row gap-5">
                                    {getBrands().map((brand) => {

                                        return (
                                            <div className="border rounded-md flex flex-col text-center p-3 w-40 h-40  justify-center content-center  items-center space-5">
                                                {/* <div className="flex flex-col text-center justify-center content-center items-center"> */}
                                                <Avatar userName={brand} />
                                                <span className="text-t-normal capitalize font-normal py-5 text-viralget-grey">{brand}</span>
                                            </div>



                                            // </div>
                                        )
                                    })}
                                </div> : <div className="py-5"> No data </div>
                        }
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-2 md:mt-0 mt-4    gap-3  w-full  ">

            </div>
        </div>
    )
}
