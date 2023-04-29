import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import HomeStage from '@/components/HomeStage'
import AnalyzedAccount from "@/components/AnalyzedAccount";
import CustomersReview from '@/components/CustomersReview';
import TrendingInfluencers from '@/components/TrendingInfluencers';
import GetStarted from '@/components/Get_Started';
import { Footer } from '@/components/Footer'

export default function Home({ trending_influncers }) {

  return (
    <>
   
      <Header useShadow={false} />
      <div className="home-bg  h-screen"  >
        <Hero />
        <HomeStage />
        <AnalyzedAccount  />
        <CustomersReview />
        <TrendingInfluencers  influencers={trending_influncers}/>
        <GetStarted  />
        <Footer />
       
        
      </div>
    </>
  )
}
