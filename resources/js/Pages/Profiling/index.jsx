import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
export default function profiling({profiles}){

  
    return(
        <AuthenticatedLayout  smallHeader={true}>
     
        <div>
             
             <InfluencerList  list={profiles}/>
        </div>
        </AuthenticatedLayout>
    )
}