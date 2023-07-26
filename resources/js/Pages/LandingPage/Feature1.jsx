
import Feature1Img from "@/../assets/images/auth_guest.svg";

export default function Feature1() {
    return (
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:items-center gap-y-8 md:grid-cols-2 md:gap-x-16">
                    <div className="text-center md:text-left lg:pr-16 ">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-lexend">Work with the right influencers</h2>
                        <p className="mt-4 text-lg text-gray-700 sm:mt-8 font-pj">The deciding factor of your influencer marketing campaign succeeding or failing lies in working with the right set of influencers. But finding the right influencers for your campaign is one hell of a task, can take hours/days/weeks, and managing these influencers individually most times poses a challenge for you, especially if your plan is to work with 100s of them.</p>
                    </div>

                    <div>
                        <img className="w-full max-w-lg mx-auto" src={Feature1Img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}