import AuthenticatedLayout from '@/Components/AuthenticatedLayout';
import List from '../Billings/List';
import Button from '@/Components/Button';

export default function Billings(props) {


    return (
        <AuthenticatedLayout title={<><span>Access our database of Influencers.</span></>} subtitle={<>With over 70,000 influencers in our database, get a compiled list of 60 influencers of any size in any industry of your choosing. <br /><br /><Button href={route('pricing')}>Early Bird Signup now</Button></>}>
            <div className="overflow-hidden bg-white py-12 lg:px-10  px-5 ">
                <div className="relative mx-auto ">
                    <div className="w-full">
                        <List {...props} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}
