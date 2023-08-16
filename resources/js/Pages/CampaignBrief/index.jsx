import { useEffect, useState } from 'react'
import EmptyState from '@/Components/EmptyState';
import { Link, useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Components/AuthenticatedLayout';
import Card from '@/components/Card';
import { classNames } from '@/Utils/helpers';
import { numberWithCommas } from '@/Utils/helpers';
import Button from '@/Components/Button';
import Typography from '@/Components/Typography';

export default function List({ campaigns }) {

    // console.log("campaigns::", campaigns)

    return (
        <AuthenticatedLayout smallHeader={true}>
            <div className="m-5">

                <div className="flex mb-4 justify-between  w-full">
                    <Typography variant={'h2'} content="My Campaigns" />
                    <Button usePrimary href={route('brief.create')}>{campaigns?.length > 0 ? 'Create a new campaign' : 'Create your first campaign'}</Button>
                </div>

                {/* // subtitle="some notes goes here" */}

                <div className="flex flex-col ">
                    <div className="inline-block min-w-full align-middle space-y-5">

                        <Card usePadding={false} useBorder>
                            <div className="relative overflow-hidden ring-1 ring-black border-0 ring-opacity-5">
                                <div className='flex justify-between p-4 items-center'>
                                    <h3 className="font-bold text-gray-600">{campaigns?.length} Campaigns</h3>
                                    {/* <Link className='bg-viralget-red  text-white capitalize rounded-md p-3' href={route('brief.create')}>{campaigns?.length > 0 ? 'Create a new campaign' : 'Create your first campaign'}</Link> */}
                                </div>
                                {
                                    campaigns?.length > 0 ?
                                        <table className="min-w-full table-fixed divide-y divide-gray-300 overflow-scroll">
                                            <thead className="bg-gray-100 border-t border-b">
                                                <tr>
                                                    <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        #
                                                    </th>
                                                    <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        Campaign title
                                                    </th>
                                                    <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        Budget
                                                    </th>
                                                    <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        Status
                                                    </th>
                                                    <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        Start Date
                                                    </th>
                                                    <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        End Date
                                                    </th>

                                                    <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                        Action
                                                    </th>


                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100 bg-white">
                                                {campaigns.map((item, index) => (
                                                    <tr key={index} >
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><a href={route('brief.show', { id: item.id })}>{item.campaign_name}</a></td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.currency} {numberWithCommas(item?.budget ?? 0)}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <span className={classNames(' p-2 rounded-md text-white capitalize', item.status === 'pending' || item.status === 'in-progress' ? 'bg-yellow-400' : item.status === 'approved' ? 'bg-green-400' : item.status === 'completed' ? 'bg-blue-400' : item.status === 'rejected' ? 'bg-red-400' : 'bg-gray-400 text-black')}>
                                                                {
                                                                    item.status

                                                                }
                                                            </span>
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.campaign_state_date}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.campaign_end_date}</td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            <div className='flex items-center space-x-3'>
                                                                <a href={route('brief.show', { id: item.id })} > View </a>
                                                                <a href={route('brief.edit', { id: item.id })}> Edit </a>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        :
                                        <EmptyState />
                                }

                            </div>


                        </Card>
                    </div >
                </div >
            </div>
        </AuthenticatedLayout >

    )
}
