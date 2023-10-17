import ApplicationLogo from "@/Components/ApplicationLogo";
import Badge from "@/Components/Badge";
import Button from "@/Components/Button";
import { formatDate } from "@/Utils/helpers";
import App from "@/Components/Layouts/App";

export default function Invoice(props) {


    return (
        <>
            <div className="print:hidden">
                <App>
                    <div className="flex justify-end">
                        <Button transparent onClick={() => window.print()} >Print</Button>
                    </div>
                    <div><Receipt showLogo={false} {...props} /></div>
                </App>
            </div>

            <div className="print:block hidden"><Receipt{...props} /></div>
        </>
    )
}

const Receipt = ({ invoice, showLogo }) => {

    // // console.log({ invoice })
    return (
        <div>
            <section className="py-10 ">
                <div className="max-w-5xl mx-auto bg-white">
                    <article className="overflow-hidden">
                        <div className="bg-[white] rounded-b-md">
                            <div className="p-9">
                                <div className="space-y-6 text-slate-700">
                                    {showLogo && <ApplicationLogo />}
                                    {/* <img className="object-cover h-12" src="https://pbs.twimg.com/profile_images/1513243060834123776/dL8-d7zI_400x400.png" /> */}

                                    <p className="text-xl font-extrabold tracking-tight uppercase font-body">
                                        Payment Invoice
                                    </p>
                                </div>
                                <p className="text-sm text-gray-600">Payment status:  <Badge text={invoice.status} type={invoice.status != 'paid' && 'error'} /></p>
                            </div>

                            <div className="p-9">
                                <div className="flex w-full">
                                    <div className="grid grid-cols-4 gap-12">
                                        <div className="text-sm font-light text-slate-500">
                                            <p className="text-sm font-normal text-slate-700">
                                                Invoice Detail:
                                            </p>
                                            <p>{invoice.description}</p>
                                            {/* <p>Fake Street 123</p>
                                            <p>San Javier</p>
                                            <p>CA 1234</p> */}
                                        </div>
                                        <div className="text-sm font-light text-slate-500">
                                            <p className="text-sm font-normal text-slate-700">Billed To</p>
                                            <p>{invoice.address}</p>
                                            <p>{invoice.phone}</p>
                                            {/* <p>The Boring Company</p>
                                            <p>Tesla Street 007</p>
                                            <p>Frisco</p>
                                            <p>CA 0000</p> */}
                                        </div>
                                        <div className="text-sm font-light text-slate-500">
                                            <p className="text-sm font-normal text-slate-700">Invoice Number</p>
                                            <p>{invoice.invoice_id}</p>

                                            <p className="mt-2 text-sm font-normal text-slate-700">
                                                Date of Issue
                                            </p>
                                            <p>{formatDate(invoice.created_at)}</p>
                                        </div>
                                        {/* <div className="text-sm font-light text-slate-500">
                                            <p className="text-sm font-normal text-slate-700">Terms</p>
                                            <p>0 Days</p>

                                            <p className="mt-2 text-sm font-normal text-slate-700">Due</p>
                                            <p>00.00.00</p>
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="p-9">
                                <div className="flex flex-col mx-0 mt-8">
                                    <table className="min-w-full divide-y divide-slate-500">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0">
                                                    Description
                                                </th>
                                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                                    Quantity
                                                </th>
                                                <th scope="col" className="hidden py-3.5 px-3 text-right text-sm font-normal text-slate-700 sm:table-cell">
                                                    Rate
                                                </th>
                                                <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-normal text-slate-700 sm:pr-6 md:pr-0">
                                                    Amount
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {invoice?.items?.map((item, index) => (
                                                <tr className="border-b border-slate-200">
                                                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                                        <div className="font-medium text-slate-700">{item}</div>
                                                        <div className="mt-0.5 text-slate-500 sm:hidden">
                                                            1 unit at {invoice.currency} {invoice.amount}
                                                        </div>
                                                    </td>
                                                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                        1
                                                    </td>
                                                    <td className="hidden px-3 py-4 text-sm text-right text-slate-500 sm:table-cell">
                                                        {invoice.currency} {invoice.amount}
                                                    </td>
                                                    <td className="py-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                                        {invoice.currency} {invoice.amount}
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                                                    Subtotal
                                                </th>
                                                <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                                                    Subtotal
                                                </th>
                                                <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                                    {invoice.currency} {invoice.amount}
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <th scope="row" colspan="3" className="hidden pt-6 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                                                    Discount
                                                </th>
                                                <th scope="row" className="pt-6 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                                                    Discount
                                                </th>
                                                <td className="pt-6 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                                    $0.00
                                                </td>
                                            </tr> */}
                                            <tr>
                                                <th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-light text-right text-slate-500 sm:table-cell md:pl-0">
                                                    Tax
                                                </th>
                                                <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-light text-left text-slate-500 sm:hidden">
                                                    Tax
                                                </th>
                                                <td className="pt-4 pl-3 pr-4 text-sm text-right text-slate-500 sm:pr-6 md:pr-0">
                                                    -
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row" colspan="3" className="hidden pt-4 pl-6 pr-3 text-sm font-normal text-right text-slate-700 sm:table-cell md:pl-0">
                                                    Total
                                                </th>
                                                <th scope="row" className="pt-4 pl-4 pr-3 text-sm font-normal text-left text-slate-700 sm:hidden">
                                                    Total
                                                </th>
                                                <td className="pt-4 pl-3 pr-4 text-sm font-normal text-right text-slate-700 sm:pr-6 md:pr-0">
                                                    {invoice.currency_total_amount}
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>

                            {/* <div className="mt-48 p-9">
                                <div className="border-t pt-9 border-slate-200">
                                    <div className="text-sm font-light text-slate-700">
                                        <p>
                                            Payment terms are 14 days. Please be aware that according to the
                                            Late Payment of Unwrapped Debts Act 0000, freelancers are
                                            entitled to claim a 00.00 late fee upon non-payment of debts
                                            after this time, at which point a new invoice will be submitted
                                            with the addition of this fee. If payment of the revised invoice
                                            is not received within a further 14 days, additional interest
                                            will be charged to the overdue account and a statutory rate of
                                            8% plus Bank of England base of 0.5%, totalling 8.5%. Parties
                                            cannot contract out of the Act’s provisions.
                                        </p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </article>
                </div>
            </section>
        </div>
    )

}