import {
    ScaleIcon,
} from '@heroicons/react/24/outline'
import TitleText from '@/components/TitleText';
import { formatDate } from 'baseui/datepicker';

// const cards = [
//     { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
//     { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
//     { name: "Nigeria • Audience age: 16-45 • Fashion • Beauty• Fitness & Gym", href: '#', results: '3.5k', date: '10 may' },
//     // More items...
// ]
export default function Cards({ data }) {
    console.log({ data })
    return (
        <div className="mt-8">
            <div className="">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Card */}
                    {data.map((card) => (
                        <div key={card.name} className=" rounded-lg px-5 py-3 bg-white shadow">
                            <div className="text-sm block space-y-3">
                                <div className="font-medium text-cyan-700 hover:text-cyan-900">
                                    {card.title}       <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                                        Pending
                                    </span>
                                </div>
                                <div className='text-gray-400'>
                                    {card.goal}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
