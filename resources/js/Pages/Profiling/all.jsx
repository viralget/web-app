import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import InfluencerList from './influencerList'
import Summary from './Summary'
import List from './list'
import { Link } from '@inertiajs/inertia-react'

export default function AllProfiles({ profiles, profiles_count }) {


    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className="px-10 py-2 space-y-5">
                <Link href={route('profiling')} className='text-sm'>&larr; Go back</Link>
                <InfluencerList list={profiles} />
            </div>
        </AuthenticatedLayout>
    )
}