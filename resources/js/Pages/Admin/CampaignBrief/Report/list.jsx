import Card from "@/components/Card"
import Button from "@/components/Button"
import { classNames } from "@/Utils/helpers"

export default  function ReportList({ handleModalClose, reports }){

    console.log("reports:", reports)

    return(
        <Card usePadding={false} useBorder>
        <div className="relative overflow-hidden ring-1 ring-black border-0 ring-opacity-5">
                <div className='flex justify-between p-4 items-center'>    
                    <h3 className="font-bold text-gray-600">{reports.length}  reports</h3>
                    <Button onClick={handleModalClose} className='bg-viralget-red  text-white capitalize rounded-md p-3' >Add report</Button>
                </div>

         <div className='flex space-x-10 mt-2'>
                <table className="min-w-full table-fixed divide-y divide-gray-300 overflow-scroll">
                        <thead className="bg-gray-100 border-t border-b">
                            <tr>
                              <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                   #
                                </th>
                                <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                   Sender
                                </th>
                                <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                   Report Note
                                </th>
                                <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                    Report File
                                </th>
                                <th scope="col" className=" p-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                                    Status
                                </th>

                            </tr>
                        </thead>
                     <tbody className="divide-y divide-gray-100 bg-white">
                     {reports.map((item, index) => (
                                            <tr key={index} >
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{index + 1}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.user_id == null ? '@me' : user?.full_name}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.report_note}</td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                             <a href={item.report_file_url}  target='_blank' className='text-blue-400'>
                            {item.report_file}
                            </a>
                                             </td>
                                             <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                   <span className={classNames(' p-2 rounded-md text-white capitalize', item.status === 'pending' || item.status === 'in-progress' ? 'bg-yellow-400' : item.status === 'approved'? 'bg-green-400' : item.status === 'completed' ? 'bg-blue-400' : 'bg-gray-400 text-black' )}>
                                                {
                                                item.status
                                                
                                                }
                                                </span> 
                                               </td>
                                            
                                            </tr>
                                      ))}
                   </tbody>
             </table>
         </div>
       </div>
    </Card>
    )
}