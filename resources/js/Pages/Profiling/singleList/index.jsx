import AuthenticatedLayout from '@/components/AuthenticatedLayout';
import ButtonBack from '@/components/ButtonBack';
import Summary from './summary';
import Influencers from './influencers';

export default function profiling({ influencerList, profiled_influencers }) {


    const data = influencerList.influencers;

    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className='px-10 mt-5'>
                <ButtonBack href={route('profiling')} />
                <Summary list={influencerList} profiled_influencers={profiled_influencers} />
                <Influencers data={data} />
            </div>
        </AuthenticatedLayout>
    )
}