import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import ButtonBack from "@/components/ButtonBack";
export default function ProfiledInfluencers({profiles}){

    
  
    return(
        <AuthenticatedLayout  smallHeader={true}>
             <div  className='px-10 mt-5 mb-4'>
                       <ButtonBack />
                </div>
              <InfluencerList  list={profiles} type='all'/>
        </AuthenticatedLayout>
    )
}