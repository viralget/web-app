import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import Summary from './Summary'
import List from './list'

export default function profiling({ profiles }) {


    return (
        <AuthenticatedLayout smallHeader={true}>
            <Summary />
            <InfluencerList list={profiles} />
            <List />
        </AuthenticatedLayout>
    )
}