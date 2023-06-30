import { Header } from '@/components/Header'

import HomeStage from '@/components/HomeStage'
import AnalyzedAccount from "@/components/AnalyzedAccount";
import CustomersReview from '@/components/CustomersReview';
import TrendingInfluencers from '@/components/TrendingInfluencers';
import GetStarted from '@/components/Get_Started';
import { Footer } from '@/components/Footer'
import { Hero } from './Hero';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import CTA from './CTA';

export default function Home({ trending_influncers }) {

  return (
    <>

      <Header useShadow={false} />
      <div className="home-bg  h-screen overflow-hidden"  >
        <Hero />
        <Feature1 />
        <Feature2 />
        <CTA />
        {/* <HomeStage /> */}
        {/* <AnalyzedAccount /> */}
        {/* <CustomersReview /> */}
        {/* <TrendingInfluencers influencers={trending_influncers} /> */}
        {/* <GetStarted /> */}
        <Footer />


      </div>
    </>
  )
}
