
import Feature2Img from "@/../assets/images/filters_open.png";

export default function Feature2() {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                    <div>
                        <img className="w-2/3 md:w-full max-w-md mx-auto" src={Feature2Img} alt="" />
                    </div>

                    <div className="text-center md:text-left lg:pr-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-lexend">Access Influencers accross diverse industries</h2>
                        <p className="mt-4 text-lg text-gray-700 sm:mt-8 font-pj">We know the difficulty of this for most business owners & brands and have gone ahead to do the work for you by building a data-driven community of nano, micro, mid-tier, macro, and mega influencers across different industries. And a platform that allows you to seamlessly activate; through data and manage influencers, regardless of how many, allowing you to scale up your influencer marketing campaign.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}