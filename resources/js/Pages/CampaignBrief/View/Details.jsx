/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Listbox, Menu, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    CalendarDaysIcon,
    CreditCardIcon,
    EllipsisVerticalIcon,
    FaceFrownIcon,
    FaceSmileIcon,
    FireIcon,
    HandThumbUpIcon,
    HeartIcon,
    PaperClipIcon,
    UserCircleIcon,
    XMarkIcon as XMarkIconMini,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import PaymentButton from '@/Components/PaymentButton'
import { usePage } from '@inertiajs/inertia-react'
import { patch } from '@/Utils/api'
import Button from '@/Components/Button'
import { formatDate, nFormatter, numberFormat } from '@/Utils/helpers'
import ReportList from '../Report/list'


const invoice = {
    subTotal: '$8,800.00',
    tax: '$1,760.00',
    total: '$10,560.00',
    items: [
        {
            id: 1,
            title: 'Logo redesign',
            description: 'New logo and digital asset playbook.',
            hours: '20.0',
            rate: '$100.00',
            price: '$2,000.00',
        },
        {
            id: 2,
            title: 'Website redesign',
            description: 'Design and program new company website.',
            hours: '52.0',
            rate: '$100.00',
            price: '$5,200.00',
        },
        {
            id: 3,
            title: 'Business cards',
            description: 'Design and production of 3.5" x 2.0" business cards.',
            hours: '12.0',
            rate: '$100.00',
            price: '$1,200.00',
        },
        {
            id: 4,
            title: 'T-shirt design',
            description: 'Three t-shirt design concepts.',
            hours: '4.0',
            rate: '$100.00',
            price: '$400.00',
        },
    ],
}
const activity = [
    { id: 1, type: 'created', person: { name: 'Chelsea Hagon' }, date: '7d ago', dateTime: '2023-01-23T10:32' },
    { id: 2, type: 'edited', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:03' },
    { id: 3, type: 'sent', person: { name: 'Chelsea Hagon' }, date: '6d ago', dateTime: '2023-01-23T11:24' },
    {
        id: 4,
        type: 'commented',
        person: {
            name: 'Chelsea Hagon',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        comment: 'Called client, they reassured me the invoice would be paid by the 25th.',
        date: '3d ago',
        dateTime: '2023-01-23T15:56',
    },
    { id: 5, type: 'viewed', person: { name: 'Alex Curren' }, date: '2d ago', dateTime: '2023-01-24T09:12' },
    { id: 6, type: 'paid', person: { name: 'Alex Curren' }, date: '1d ago', dateTime: '2023-01-24T09:20' },
]
const moods = [
    { name: 'Excited', value: 'excited', icon: FireIcon, iconColor: 'text-white', bgColor: 'bg-red-500' },
    { name: 'Loved', value: 'loved', icon: HeartIcon, iconColor: 'text-white', bgColor: 'bg-pink-400' },
    { name: 'Happy', value: 'happy', icon: FaceSmileIcon, iconColor: 'text-white', bgColor: 'bg-green-400' },
    { name: 'Sad', value: 'sad', icon: FaceFrownIcon, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
    { name: 'Thumbsy', value: 'thumbsy', icon: HandThumbUpIcon, iconColor: 'text-white', bgColor: 'bg-blue-500' },
    { name: 'I feel nothing', value: null, icon: XMarkIconMini, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function getStatusColor(status) {
    switch (status) {
        case 'approved':
            return 'green'

        case 'completed':
            return 'blue'

        case 'rejected':
            return 'red'

    }
}

export default function Details({ campaign }) {

    // console.log({ campaign })
    const [selected, setSelected] = useState(moods[5])

    const { auth } = usePage().props;
    const { user } = auth;

    const [open, setOpen] = useState(false)

    function handleModal() {
        setOpen(!open);
    }

    function handleCalculateTotal(budget) {
        const serviceFee = 0.15 * Number(budget);
        const total = Number(budget) + serviceFee;

        return total;
    }

    async function handleUpdateCampaignPayment(reference) {
        const response = await patch(route('brief.reference.update', { brief: campaign.id }), { reference_number: reference }, true);

        if (response?.data?.status) {
            setTimeout(() => {
                window.location.reload();
            }, 300)
        }
    }

    const statusColor = getStatusColor(campaign.status);


    return (
        <>

            <main>
                <header className="relative isolate pt-16">
                    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                        <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                            <div className="flex items-center gap-x-6">
                                <img
                                    src={campaign.logo_url}
                                    alt=""
                                    className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10"
                                />
                                <h1>
                                    <div className="mt-1 text-xl font-semibold leading-6 text-gray-900">{campaign.campaign_name}</div>
                                    <div className="text-xs leading-6 text-gray-500">
                                        Date Created: <span className="text-gray-700">{formatDate(campaign.created_at)}</span>
                                    </div>
                                </h1>
                            </div>
                            <div className="flex items-center gap-x-4 sm:gap-x-6">
                                <Button href={route('brief.edit', { id: campaign.id })}>Edit</Button>


                                {!campaign.reference_number && (
                                    <PaymentButton {...{
                                        email: user.email,
                                        amount: handleCalculateTotal(campaign.budget),
                                        metadata: { ...campaign, email: user.email },
                                        paymentDataExtras: {
                                            // job_listing_id: job.id,
                                        },
                                        // type: 'paid-listing',
                                        paymentVerificationRoute: route("general.payments.verify"),
                                        postPaymentAction: handleUpdateCampaignPayment,
                                        // successRedirectsTo: route('brief.success'),
                                    }}>Make Payment</PaymentButton>
                                )}

                            </div>
                        </div>
                    </div>
                </header>

                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {/* Invoice summary */}
                        <div className="lg:col-start-3 lg:row-end-1">
                            <h2 className="sr-only">Summary</h2>
                            <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                                <dl className="flex flex-wrap">
                                    <div className="flex-auto pl-6 pt-6">
                                        <dt className="text-sm font-semibold leading-6 text-gray-900">Budget</dt>
                                        <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">{campaign.currency} {campaign.budget}</dd>
                                    </div>
                                    <div className="flex-none self-end px-6 pt-4">
                                        <dt className="sr-only">Status</dt>
                                        <dd className={classNames("rounded-md px-2 py-1 text-xs font-medium, ring-1 ring-inset capitalize", `bg-${statusColor}-50  text-${statusColor}-600 ring-${statusColor}-600/20`)}>
                                            {campaign.status}
                                        </dd>
                                    </div>
                                    <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                                        <dt className="flex-none">
                                            <span className="sr-only">Start date</span>
                                            <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd className="text-sm font-medium leading-6 text-gray-900"><span className='text-gray-500'>Start date:</span><br /> {formatDate(campaign.campaign_state_date)}</dd>
                                    </div>
                                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                        <dt className="flex-none">
                                            <span className="sr-only">Due date</span>
                                            <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd className="text-sm font-medium leading-6 text-gray-900"><span className='text-gray-500'>End date:</span><br /> {formatDate(campaign.campaign_end_date)}</dd>

                                    </div>
                                    {/* <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                        <dt className="flex-none">
                                            <span className="sr-only">Status</span>
                                            <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                                        </dt>
                                        <dd className="text-sm leading-6 text-gray-500">Paid with MasterCard</dd>
                                    </div> */}
                                </dl>
                                <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                                    {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                        Download receipt <span aria-hidden="true">&rarr;</span>
                                    </a> */}
                                </div>
                            </div>
                        </div>

                        {/* Invoice */}
                        <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
                            <h2 className="text-base font-semibold leading-6 text-gray-900">Main Infomation</h2>
                            <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2 gap-y-5">
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Campaign name</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.campaign_name}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Social networks</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.social_network}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Campaign type</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.campaign_type}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Brand Name</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.brand_name}
                                    </dd>
                                </div>
                            </dl>

                            <h2 className="text-base font-semibold leading-6 text-gray-900 mt-10 pt-10 border-t ">About Campaign</h2>
                            <dl className="mt-6  text-sm leading-6">
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Description</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.campaign_description}
                                    </dd>
                                </div>

                            </dl>



                            <h2 className="text-base font-semibold leading-6 text-gray-900 mt-10 pt-10 border-t ">Campaign Content</h2>
                            <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2 gap-y-5">
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Reach</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.reach_goal}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Target Location</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.target_location}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Age</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.target_age}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Gender</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.target_gender}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Interests</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.target_interest}
                                    </dd>
                                </div>
                            </dl>


                            <h2 className="text-base font-semibold leading-6 text-gray-900 mt-10 pt-10 border-t ">Campaign Content</h2>
                            <dl className="mt-6 grid grid-cols-1 text-sm leading-6 gap-y-5">
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">About us</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.about_us}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Campaign Message</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.campaign_message}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Key objectives</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.conversion_goal}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Gender</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.campaign_key_objectives}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Goal</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.campaign_goal}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Timeline</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.timeline}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Mood Board</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.mood_board}
                                    </dd>
                                </div>
                            </dl>

                            <h2 className="text-base font-semibold leading-6 text-gray-900 mt-10 pt-10 border-t ">Influencer Details</h2>
                            <dl className="mt-6 grid grid-cols-1 text-sm leading-6 gap-y-5">
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Size</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.influencer_size}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Category</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.influencer_category}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Niche</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.influencer_niche}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Influencer Gender</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.influencer_gender}
                                    </dd>
                                </div>
                                <div className="sm:pr-4 block">
                                    <dt className="inline text-gray-500">Number</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.influencer_number}
                                    </dd>
                                </div>
                                <div className="mt-2 sm:mt-0 ">
                                    <dt className="inline text-gray-500">Location</dt><br />
                                    <dd className="inline text-gray-700">
                                        {campaign.influencer_location}
                                    </dd>
                                </div>

                            </dl>

                        </div>
                    </div>
                    <div className='my-10 space-y-3' id="reports">
                        <h3 className='font-bold text-2xl font-lexend capitalize'>Report From Influencers</h3>
                        <p className='font-bold text-sm text-gray-600'>See all the reports from influencers and your exchange replies</p>

                    </div>

                    <ReportList handleModalClose={handleModal} reports={campaign.reports} />
                </div>


            </main>
        </>
    )
}
