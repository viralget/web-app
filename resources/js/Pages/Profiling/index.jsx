import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import Summary from './Summary'
import List from './list'

export default function Profiling({ profiles, influencerList, profiles_count }) {


    //     return (
    //         <AuthenticatedLayout smallHeader={true}>
    //             <div className="px-10 py-2 space-y-5">
    //                 <Summary profiles_count={profiles_count} twitter_count={profiles_count} />
    //                 <InfluencerList influencerList={influencerList}  profiles={profiles} showMore />
    //                 <List />
    //             </div>
    // export default function profiling({profiles, influencerList}){



    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className="px-10 py-2 space-y-5">
                <Summary profiles_count={profiles_count} twitter_count={profiles_count} />
                <InfluencerList list={profiles} />
                <List influencerList={influencerList} profiles={profiles} />
            </div>
        </AuthenticatedLayout>
    )
}