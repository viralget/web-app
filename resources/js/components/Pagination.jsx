import { encodeHTMLEntities } from '@/Utils/helpers';

export default function Pagination({ data, simpleData, paginationURL }) {
  const { total, links, per_page, from, to, prev_page_url, next_page_url, current_page, last_page } = data;

  if (last_page == 1) {
    return <></>;
  }

  return (
    <div className="mt-4 px-4 py-3 flex w-full items-center justify-between sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href={simpleData?.prev ?? '#'}
          className={`${simpleData?.prev == null && 'invisible'} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
        >
          Previous
        </a>
        <a
          href={simpleData?.next ?? '#'}
          className={`${simpleData?.next == null && 'invisible'} ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50`}
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex items-center justify-center">
        {/* <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{from}</span> to <span className="font-medium">{to}</span>
            of{' '}
            <span className="font-medium">100k+</span> results
          </p>
        </div> */}
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            {/* Current: "z-10 bg-green-50 border-green-500 text-green-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {links.map((item, key) => (
              <a
                key={key}
                href={paginationURL ? paginationURL + '?page=' + key : item.url}
                className={`${item.active ? 'bg-green-600 text-white' : 'bg-white text-gray-500'} border-gray-300  hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
              >
                {encodeHTMLEntities(item.label)}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
