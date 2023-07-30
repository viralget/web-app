
import { formatDate, numberFormat } from '@/Utils/helpers'
import Pagination from '@/Components/Pagination'
import Card from '@/Components/Card'
import { Inertia } from '@inertiajs/inertia'


export default function Billing({ invoices, subscription, plan }) {


    return (

        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">

            {/* Billing history */}
            <section aria-labelledby="billing-history-heading">
                <Card useBorder={true} useShadow={false}>
                    <div className="px-4 sm:px-6">
                        <h2 id="billing-history-heading" className="text-lg font-medium leading-6 text-gray-900">
                            Order History
                        </h2>
                    </div>
                    <div className="mt-6 flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                <div className="overflow-hidden border-t border-gray-200">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                    Description
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                    Amount
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                                                >
                                                    {/* <span className="sr-only">View receipt</span> */}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {invoices?.data?.length > 0 ?
                                                invoices.data.map((payment, index) => (
                                                    <tr key={index} onClick={() => Inertia.get(route('billings.invoice', { id: payment.id }))} className="cursor-pointer hover:bg-gray-50">
                                                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                                            <time dateTime={payment.created_at}>{formatDate(payment.created_at)}</time>
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                            {payment.description}
                                                        </td>
                                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                            {payment.currency}{payment.amount}
                                                        </td>
                                                        {/* <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                                <a href={payment.href} className="text-orange-600 hover:text-orange-900">
                                                                    View receipt
                                                                </a>
                                                            </td> */}
                                                    </tr>
                                                ))
                                                :
                                                <td colspan="4" className="p-5 text-sm">No record found</td>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
                {invoices?.data?.length > 0 && (
                    <Pagination data={invoices} />
                )}
            </section>
        </div>


    )
}
