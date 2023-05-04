import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import Summary from './Summary'
import List from './list'

export default function Profiling({ profiles, influencerList }) {
    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className="m-5">
                <Summary />
                <InfluencerList list={profiles} />
                <List influencerList={influencerList} profiles={profiles} />
            </div>
        </AuthenticatedLayout>
    )
}