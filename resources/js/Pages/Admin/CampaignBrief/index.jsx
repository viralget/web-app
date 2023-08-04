import Dashboard from '../Layouts/Dashboard';
import EmptyState from '@/Components/EmptyState';
import { Link } from '@inertiajs/inertia-react';
import Card from '@/components/Card';
import { classNames, numberWithCommas } from '@/Utils/helpers';

export default function index({ campaigns }) {

    console.log("campaigns:",campaigns)

    return (
        <Dashboard
            title="Campaign Brief"
        >

<div className="flex flex-col mt-2 ">
            <div className="inline-block min-w-full align-middle">
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
                                               User
                                            </th>
                                            <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                Campaign name
                                            </th>
                                            <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                                Campaign Budget
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
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.user.full_name}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.campaign_name}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{numberWithCommas(item.budget)}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                   <span className={classNames(' p-2 rounded-md text-white capitalize', item.status === 'pending' || item.status === 'in-progress' ? 'bg-yellow-400' : item.status === 'approved'? 'bg-green-400' : item.status === 'completed' ? 'bg-blue-400' : 'bg-gray-400 text-black' )}>
                                                {
                                                item.status
                                                
                                                }
                                                </span> 
                                                </td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.campaign_state_date}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.campaign_end_date}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className='flex flex-col space-y-3'>
                                                 <a href={route('admin.view.brief', {id: item.id})}  className='text-blue-400'> View brief</a>
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
     </Dashboard>
    );
}
