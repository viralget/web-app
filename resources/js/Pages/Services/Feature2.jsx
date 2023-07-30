
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
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-lexend">On Demand IGC</h2>
                        <p className="mt-4 text-lg text-gray-700 sm:mt-8 font-pj">Consistent On-demand influencer generated contents to strengthen your brand’s reputation through creative exposure. We engage nano and micro amplifiers across a 3 to 6 months duration to creating authentic use case generated contents. Our team will develop the approach and manage long term execution. Benefits include a revolving door of fresh content and continuous optimization based on results (A/B testing) – also great for seasonal promotions or limited time offers.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}