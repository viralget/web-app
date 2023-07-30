
import FeatureCard from './featureCard'
import Most_Image_1 from "../../../../assets/images/feature_images/yemi_alade.png"
import Most_Image_2 from "../../../../assets/images/feature_images/wizkid.png"
import Most_Image_4 from "../../../../assets/images/feature_images/regina_daniel.png"
import Most_Image_5 from "../../../../assets/images/feature_images/donjazzy.png"
import Most_Image_3 from "../../../../assets/images/feature_images/davido.png";

import Top_Image_1 from "../../../../assets/images/feature_images/pastor.png";
import Top_Image_2 from "../../../../assets/images/feature_images/shaggi.png";
import Top_Image_3 from "../../../../assets/images/feature_images/ay.png";
import Top_Image_4 from "../../../../assets/images/feature_images/faz.png";
import Top_Image_5 from "../../../../assets/images/feature_images/banky.png";

import Fastest_Image_1 from "../../../../assets/images/feature_images/artist.png";
import Fastest_Image_2 from "../../../../assets/images/feature_images/toyin.png";
import Fastest_Image_3 from "../../../../assets/images/feature_images/toke.png";
import Fastest_Image_4 from "../../../../assets/images/feature_images/funke.png";
import Fastest_Image_5 from "../../../../assets/images/feature_images/peter.png"
import Typography from '@/components/Typography';
import { TopologySvg, StarTopologySvg } from '@/Utils/icons'

export default function FeatureSelections({ data }) {
    return (
        <div className='mt-space-60'>

            <Typography variant='h2' content='Feature Selection' />
            <div className="mt-space-20 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                <FeatureCard
                    TopologySvg={<TopologySvg />}
                    href={`${route('influencers.search')}/?influencer_qas=good&page=1`}
                    images={
                        [
                            Most_Image_1,
                            Most_Image_2,
                            Most_Image_3,
                            Most_Image_4,
                            Most_Image_5
                        ]
                    }
                    className="from-[#37CFFF]  via-[#0D57C6] to-[#0F5ED6]"
                    colors={['#4568DC', '#B06AB3']}
                    title="Most followed influencers with good quality of audience" reach='+1K'
                />
                <FeatureCard
                    TopologySvg={<TopologySvg />}
                    href={`${route('influencers.search')}?influencer_qas=very+good`}
                    images={
                        [
                            Top_Image_1,
                            Top_Image_2,
                            Top_Image_3,
                            Top_Image_4,
                            Top_Image_5
                        ]
                    }
                    className="from-[#FF7676]   to-[#9C1EBC]"
                    colors={['#43CEA2', '#185A9D']}
                    title="Top-performing influencers this week" reach="+3K" />

                <FeatureCard
                    TopologySvg={<StarTopologySvg />}
                    href={`${route('influencers.search')}/?size=100000&page=1`}
                    images={
                        [
                            Fastest_Image_1,
                            Fastest_Image_2,
                            Fastest_Image_3,
                            Fastest_Image_4,
                            Fastest_Image_5
                        ]
                    }
                    className="from-[#CB5DFF]   to-[#1D41BE]"
                    colors={['#D66768', '#EFC655']}
                    title="Fastest growing influencers under 100k followers" reach="+1.5K"
                />
            </div>

        </div>
    )
}
