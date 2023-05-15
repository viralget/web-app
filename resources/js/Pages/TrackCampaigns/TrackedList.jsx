import Card from '@/Components/Card';
export default function TrackedList({ searches }) {


    // const searches = [
    //     {
    //         id: 1,
    //         keywords:'myMtn, #mymtnGlobal',
    //         date: new Date().toDateString()
    //     },
    //     {
    //         id: 2,
    //         keywords:'myAirtel, #myairtelGlobal',
    //         date: new Date().toDateString()
    //     },
    //     {
    //         id: 3,
    //         keywords:'gloNG, #glo',
    //         date: new Date().toDateString()
    //     }
    // ]
    return (
        <div className="flex flex-col  px-10  mt-space-60">
          <div className="inline-block min-w-full align-middle">
                <Card usePadding={false} useBorder>
                    <div className="relative overflow-hidden ring-1 ring-black border-0 ring-opacity-5">
                        <div className='flex p-4 justify-between align-middle items-center'>
                             <h3 className="font-bold text-gray-600"> { searches?.length } Searches</h3>
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

                                        {
                                            searches?.map((item, index)=> (
                                            <tr key={index}>
                                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{item.keyword}</td>
                                                 <td className="whitespace-nowrap py-4 text-sm text-gray-500">{new Date(item.updated_at).toDateString()}</td>
                                                 <td className="whitespace-nowrap py-4 text-sm text-blue-500"><a  href={route('metrics.campaign.page', { query : item.keyword})}>View Metrics</a></td>            
                                             </tr>
                                            ))
                                        }
                                      
                                      
                                    </tbody>
                                </table>
                            

                    </div>
                  

                </Card>
            </div >
        </div >
    )
}
