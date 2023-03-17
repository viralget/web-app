import { formatDate } from "@/Utils/helpers";
import Pagination from "@/Components/Pagination";

export default function List(props) {

  const { data = [], paginationData } = props;

  return (
    <>
      <div>

        <div className="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                  Influencer Name
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                >
                  Gender
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Signed Up On
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Verification Status
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Approval Status
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.length > 0 ? (
                data.map((item, key) => (
                  <tr key={key}>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                      <a href={route('admin.influencers.whatsapp.show', { influencer: item.id })}>{item.name}</a>
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{item.gender}</td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{formatDate(item.created_at)}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{item.is_verified ? 'Verified' : 'Pending'}</td>
                    <td className="px-3 py-4 text-sm text-gray-500">{item.approval_status ?? 'Pending '}</td>
                    <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a href={route('admin.influencers.whatsapp.show', { influencer: item.id })} className="text-green-600 hover:text-green-900">
                        View
                      </a>
                    </td>
                  </tr>
                ))
              ) : <tr className="text-sm text-gray-500"><td colSpan={5} className="p-8">No record found</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
      {paginationData && <Pagination data={paginationData} />}

    </>
  )
}
