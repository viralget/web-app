import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import Summary from './Summary'
import List from './list'

export default function Profiling({ profiles, influencerList, isFull = false }) {
    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className="m-5">
                <Summary />
                <InfluencerList list={profiles} showMore={!isFull} isFull={isFull} />
                <List influencerList={influencerList} profiles={profiles} />
            </div>
        </AuthenticatedLayout>
    )
}