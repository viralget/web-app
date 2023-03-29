import TitleText from '@/components/TitleText'
// import EmptyState from '@/components/EmptyState';
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

export default function FeatureSelections({ data }) {
    return (
        <div className='mt-16'>

            <Typography variant='h2' content='Feature Selection' />
            <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                        <FeatureCard 
                        images={
                            [
                                Most_Image_1, 
                                Most_Image_2, 
                                Most_Image_3, 
                                Most_Image_4, 
                                Most_Image_5
                            ]
                        }
                         className="from-[#4568DC]  via-[#4568DC] to-[#B06AB3]" 
                         colors={['#4568DC', '#B06AB3']}  
                          title="Most followed influencers with good quality of audience"  reach='+1K' 
                          />
                        <FeatureCard  
                         images={
                            [
                                Top_Image_1, 
                                Top_Image_2, 
                                Top_Image_3, 
                                Top_Image_4, 
                                Top_Image_5
                            ]
                        }
                         className="from-[#43CEA2]  via-[#43CEA2] to-[#185A9D]"  
                         colors={['#43CEA2', '#185A9D']} 
                         title="Top-performing influencers this week"  reach="+3K" />
                      
                        <FeatureCard  
                         images={
                                [
                                    Fastest_Image_1, 
                                    Fastest_Image_2, 
                                    Fastest_Image_3, 
                                    Fastest_Image_4, 
                                    Fastest_Image_5
                                ]
                            }
                         className="from-[#D66768]  via-[#D66768] to-[#EFC655]" 
                         colors={['#D66768', '#EFC655']}
                         title="Fastest growing influencers under 100k followers"  reach="+1.5K"
                         />
                </div>

        </div>
    )
}
