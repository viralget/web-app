
import Card from '@/Components/Card';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function TrackedList(props) {

    return (
        <div className="flex flex-col  px-10  mt-space-60">
          <div className="inline-block min-w-full align-middle">
                <Card usePadding={false} useBorder>
                    <div className="relative overflow-hidden ring-1 ring-black border-0 ring-opacity-5">
                        <div className='flex p-4 justify-between align-middle items-center'>
                             <h3 className="font-bold text-gray-600">12 Searches</h3>
                        </div >
                      
                         <table className="min-w-full table-fixed divide-y divide-gray-300">
                                    <thead className="bg-gray-100 border-t border-b">
                                        <tr>
                                          
                                            <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm px-6 font-semibold text-gray-900">
                                                Keyword
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Date
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Action
                                            </th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 bg-white px-6">
                                        <tr>
                                               <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">myMtn, #mymtnGlobal</td>
                                                <td className="whitespace-nowrap py-4 text-sm text-gray-500">{new Date().toDateString()}</td>
                                                <td className="whitespace-nowrap py-4 text-sm text-blue-500"><a  href='#'>View Metrics</a></td>            
                                        </tr>
                                        <tr>
                                               <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">myAirtel, #myairtelGlobal</td>
                                                <td className="whitespace-nowrap py-4 text-sm text-gray-500">{new Date().toDateString()}</td>
                                                <td className="whitespace-nowrap py-4 text-sm text-blue-500"><a  href='#'>View Metrics</a></td>            
                                        </tr>
                                        <tr>
                                               <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">gloNG, #glo</td>
                                                <td className="whitespace-nowrap py-4 text-sm text-gray-500">{new Date().toDateString()}</td>
                                                <td className="whitespace-nowrap py-4 text-sm text-blue-500"><a  href='#'>View Metrics</a></td>            
                                        </tr>
                                    </tbody>
                                </table>
                            

                    </div>
                  

                </Card>
            </div >
        </div >
    )
}
