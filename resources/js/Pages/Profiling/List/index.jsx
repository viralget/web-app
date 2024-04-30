import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import List from '../list'
// import InfluencerList from './influencerList'
// import Summary from './Summary'
// import List from './list'

export default function ShowList({ profiles, influencerList }) {
    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className="m-5">
                <List influencerList={influencerList} profiles={profiles} />
            </div>
        </AuthenticatedLayout>
    )
}