import { BoltIcon } from '@heroicons/react/24/outline'
import ComingSoon from './ComingSoon'

export default function EmptyState({ title, subtitle, ctaText }) {
    if (title == 'Coming soon') {
        return <ComingSoon />
    }
    return (
        <div className="text-center py-24 justify-center align-middle" >
            <BoltIcon className="w-12 h-12 text-gray-300 mx-auto" />

            <h3 className="mt-2 text-gray-500">{title ?? 'No record found'}</h3>
            {subtitle && (
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
            )}
            <div className="mt-6">

            </div>
        </div>
    )
}
