
import TitleText from '@/components/TitleText';
import { formatDate } from '@/Utils/helpers';
import { Link } from '@inertiajs/inertia-react';


export default function RecentSearches({ data, title }) {

    return (
        <div className="mt-8">
            <div className="">
                <TitleText text={title ?? "Recent Searches"} />
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {data.map((card, index) => {

                        const keywords = JSON.parse(card.search_filters);

                        return keywords && (
                            (
                                <div key={index} className=" rounded-lg bg-white shadow-lg overflow-hidden">
                                    <Link href={route('influencers.search') + '?' + card.query}>
                                        <div className="p-5">
                                            <div className="flex items-center">
                                                <div className="w-0 flex-1">
                                                    <dl>
                                                        <dt className=" text-sm font-medium text-gray-500 space-x-1">
                                                            {Object.keys(keywords).length > 0 && Object.keys(keywords).splice(0, 2).map((item, index) => (
                                                                <span className='capitalize' key={index}>{item}:{keywords[item]}, </span>
                                                            ))}
                                                            <a href=''>+ 5 filters</a></dt>
                                                    </dl>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className=" px-5 py-3">
                                        <div className="text-sm flex justify-between">
                                            <a href={card.href} className="font-medium text-cyan-700 hover:text-cyan-900">
                                                {card.results_count}
                                            </a>
                                            <span className='text-gray-400'>
                                                {formatDate(card.created_at, true)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        )


                    })}
                </div>
            </div>


        </div>
    )
}
