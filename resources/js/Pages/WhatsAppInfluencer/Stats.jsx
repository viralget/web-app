export default function Stats({ stat, title }) {
    return (
        <div key={title} className="border border-gray-300 rounded-lg p-5">
            <dt className="text-base font-normal text-gray-900">{title}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-black">
                    {stat}
                    {/* <span className="ml-2 text-sm font-medium text-gray-500">from 0</span> */}
                </div>

                {/* <div
                    className={classNames(
                        item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                        'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0'
                    )}
                >
                    {item.changeType === 'increase' ? (
                        <ArrowUpIcon
                            className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                            aria-hidden="true"
                        />
                    ) : (
                        <ArrowDownIcon
                            className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                            aria-hidden="true"
                        />
                    )}

                    <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                    {item.change}
                </div> */}
            </dd>
        </div>
    )
}