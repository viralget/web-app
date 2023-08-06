import Button from '@/Components/Button';
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import ButtonBack from '@/components/ButtonBack';

const Success = () => {
    return (
        <AuthenticatedLayout title="My Campaigns" smallHeader={true}>
            <div className='bg-white h-screen  mt-3 px-5 mb-10'>
                <ButtonBack />

                <section className="py-12 bg-white sm:py-16 lg:py-20">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-gray-50 rounded-3xl">
                            <div className="max-w-2xl mx-auto text-center space-y-5">
                                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-xl font-lexend"> Campaign successfully created! Influencers will start participating 24 hours after payment is made. </h2>
                            </div>

                            <div className=" text-center mt-5">
                                <div className="relative inline-flex group">
                                    <div className='py-5 space-x-5'>
                                        <a href={route('brief')} className="rounded-md  px-space-30  py-space-15  bg-viralget-red  ">
                                            <span className='font-lexend font-medium  text-white text-t-xsx'>See all briefs</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AuthenticatedLayout>

    );
}

export default Success;