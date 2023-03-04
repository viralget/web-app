import TitleText from '@/components/TitleText'
// import EmptyState from '@/components/EmptyState';
import FeatureCard from './featureCard'
export default function FeatureSelections({ data }) {
    return (
        <div className='mt-4'>
            <TitleText text="Feature Selection" />
          
                <div className="mt-8 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                        <FeatureCard  className="from-[#4568DC]  via-[#4568DC] to-[#B06AB3]" colors={['#4568DC', '#B06AB3']} title="Most followed influencers with good quality of audience"  reach='+1K' />
                        <FeatureCard   className="from-[#43CEA2]  via-[#43CEA2] to-[#185A9D]"  colors={['#43CEA2', '#185A9D']} title="Top-performing influencers this week"  reach="+3K" />
                        <FeatureCard  className="from-[#D66768]  via-[#D66768] to-[#EFC655]"  colors={['#D66768', '#EFC655']}  title="Fastest growing influencers under 100k followers"  reach="+1.5K"/>
                </div>

        </div>
    )
}
