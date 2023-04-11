import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import Summary from './Summary'
import List from './list'
<<<<<<< HEAD

export default function profiling({ profiles }) {


    return (
        <AuthenticatedLayout smallHeader={true}>
            <Summary />
            <InfluencerList list={profiles} />
            <List />
=======
export default function profiling({profiles, influencerList}){

    
  
    return(
        <AuthenticatedLayout  smallHeader={true}>
              <Summary />
              <InfluencerList  list={profiles}/>
              <List influencerList={influencerList}  profiles={profiles}/>
>>>>>>> 604f621106fed629a5724df63650961b9e3b0ddc
        </AuthenticatedLayout>
    )
}