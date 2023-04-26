import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import HomeStage from '@/components/HomeStage'
import AnalyzedAccount from "@/components/AnalyzedAccount"

export default function Home() {
  return (
    <>
   
      <Header useShadow={false} />
      <div className="home-bg  h-screen"  >
        <Hero />
        <HomeStage />
        <AnalyzedAccount  />
       
        
      </div>
    </>
  )
}
