import Input from "@/Components/Input"
import Select from "@/Components/Select"
import TextArea from "@/Components/TextArea"
import Button from "@/components/Button"
import { useForm } from "@inertiajs/inertia-react";
import { getEventValue } from "@/Utils/helpers";
import toast from "@/components/Toast";

export default  function  createReport({ handleModalClose, campaign_briefs_id }){

    const { data, setData, post, processing, errors, reset } = useForm({
       status: '',
       report_note: '',
       report_file: '',
       campaign_briefs_id
    });



    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };


    function submit(e) {
        e.preventDefault();
        post(route('admin.create.report'));
        reset();
        handleModalClose();
        toast.success("Report created successfully")
        setTimeout(function() {
            window.location.reload();
          }, 1000)

    };

    return(
        <div className='bg-white md:w-[30rem] mx-auto'>
             <div className="flex justify-between p-5">
                              <h2 className="font-bold text-t-lg  capitalize">Add report</h2>
                              <button  onClick={handleModalClose}>x</button>
                          </div>
                      <form onSubmit={submit} className=' bg-white shadow-sm md:p-5 p-3 w-full'>
                         
                            <div>
                                <div className="mt-2">
                                    <Select options={[
                                        { name: 'In Progress', value: 'in-progress' },
                                        { name: 'Approved', value: 'approved' },
                                        { name: 'Rejected', value: 'rejected' },
                                        { name: 'Completed', value: 'completed' }
                                    ]}
                                        name="status"
                                        label="Status"
                                        defaultOptionText="Select status"
                                        required
                                        defaultValue={data.status}
                                        onChange={onHandleChange}
                                    />
                                </div>

                             <div className="col-span-full mt-2">
                                    <TextArea
                                        type="text"
                                        name="report_note"
                                        label="Report Note"
                                        placeholder="Some note about the report"
                                        className="mt-1 block w-full h-32"
                                        defaultValue={data.report_note}
                                        onChange={onHandleChange}
                                        
                                    />
                                </div>

                                <div className="sm:col-span-3 mt-2">
                                    <Input

                                        type="file"
                                        name="report_file"
                                        label="Report File"
                                        defaultValue={data.report_file}
                                        onChange={(event) => setData('report_file', event.target.files[0])}
                                        
                                    
                                    />
                                </div>

                                <Button
                                        type="submit"
                                        usePrimary
                                        className="w-full mt-3"
                                        processing={processing}
                                        >
                                            Create report
                                    </Button>
                            </div>
                    </form>
        </div>
    )
}