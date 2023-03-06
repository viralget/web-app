import {
    ScaleIcon,
} from '@heroicons/react/24/outline'
import TitleText from '@/components/TitleText';
import { formatDate } from '@/Utils/helpers';

const cards = [
    { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
    { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
    { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
    // More items...
]
export default function RecentSearches({ data }) {

    return (
        <div className="mt-8">
            <div className="">
                <TitleText text="Recent Searches" />
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {data.map((card) => (
                        <div key={card.keyword} className=" rounded-lg bg-white shadow">
                            <div className="p-5">
                                <div className="flex items-center">
                                    <div className="w-0 flex-1">
                                        <dl>
                                            <dt className=" text-sm font-medium text-gray-500">{card.keyword} <a href=''>+ 5 filters</a></dt>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-5 py-3">
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
                    ))}
                </div>
            </div>


        </div>
    )
}
