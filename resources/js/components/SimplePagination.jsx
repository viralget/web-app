import { classNames, encodeHTMLEntities } from '@/Utils/helpers';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from './Button';
import Card from './Card';

export default function SimplePagination({ data, paginationURL }) {
    const { total, per_page, from, to, prev_page_url, next_page_url, current_page, last_page } = data?.meta;
    const { next, prev } = data?.links;

    const buttonStyle = ' shadow bg-white p-2 ';

    return (
        <div className="mt-4 w-full p-5 ">
            <div className="flex-1 flex justify-between">
                <div>

                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{from}</span> to <span className="font-medium">{to}</span> {' '}
                        of {' '}
                        <span className="font-medium">{total}</span> results
                    </p>
                </div>
                <div className="flex">
                    <a
                        className={classNames(buttonStyle, prev ? 'text-black ' : 'text-gray-200 cursor-default ')}
                        href={prev ?? '#'}
                        disabled={prev ? false : true}
                    >
                        <ChevronLeftIcon className='w-3 h-3' />
                    </a>
                    <a
                        className={classNames(buttonStyle, next ? 'text-black' : 'text-gray-200  cursor-default')}
                        href={next ?? '#'}
                        disabled={next ? false : true}
                    >
                        <ChevronRightIcon className='w-3 h-3' />
                    </a>
                </div>

            </div>
        </div>
    )
}
