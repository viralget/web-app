import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import Summary from './Summary'
import List from './list'

export default function Profiling({ profiles, influencerList, list_count, isFull = false, profiles_count = 0, instagram_accounts = 0, twitter_accounts = 0 }) {
    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className="m-5">
                <Summary list_count={list_count} profiles_count={profiles_count} instagram_count={instagram_accounts} twitter_count={twitter_accounts} />
                <InfluencerList list={profiles} showMore={!isFull} isFull={isFull} />
                <List influencerList={influencerList} profiles={profiles} />
            </div>
        </AuthenticatedLayout>
    )
}