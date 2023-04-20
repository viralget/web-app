import ValidationErrors from '@/Components/ValidationErrors';
import { useForm } from '@inertiajs/inertia-react';
import Select from '@/components/Select';
import { getEventValue } from '@/Utils/helpers';
import Button from '@/components/Button';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
const AccountSetupForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        company_type: '',
        company_name: '',
        job_title: '',
        company_website: '',
        company_bio: '',
    });



    const submit =(e) => {
        e.preventDefault();
        post('/account-setup');
    }

    const handleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    return(
        <div className="flex flex-col  items-center justify-center mt-space-80">
               <div className="">
                    <span className="text-t-xlg  font-bold font-lexend">Account setup</span>
               </div>


               <ValidationErrors errors={errors} />

                <form onSubmit={submit} className="mt-space-40 md:w-1/3   space-y-space-14   ">

                   <div className='flex  w-full  space-x-3'>
                       <div className='w-full '>
                            <Select options={[
                                    { name: 'Brand', value: 'brand' },
                                    { name: 'Agency', value: 'agency' }
                                ]}
                                    name="company_type"
                                    value={data.company_type}
                                    onChange={handleChange}
                                    label="Company type"
                                    defaultOptionText="Select company type"
                                    required
                                />
                       </div>

                       <div className='w-full'>
                            <Input
                                    type="text"
                                    name="company_name"
                                    label="Company name"
                                    value={data.company_name}
                                    className="mt-1 h-11 block w-full"
                                    autoComplete="company_name"
                                    placeholder="Enter company name"
                                    onChange={handleChange}
                                    required
                                />
                       </div>
                 </div>


                 <div className='flex  w-full  space-x-3'>
                       <div className='w-full'>
                            <Select options={[
                                    { name: 'C-level / VP', value: 'c-level/vp' },
                                    { name: 'Director', value: 'director' },
                                    { name: 'Manager/Team Lead', value: 'manager/team-lead' },
                                    { name: 'Team member', value: 'team-member' },
                                    { name: 'Executive', value: 'executive' },
                                    { name: 'Assistant', value: 'assistant' },
                                    { name: 'Independent professional', value: 'independent-professional' },
                                ]}
                                    name="job_title"
                                    value={data.job_title}
                                    onChange={handleChange}
                                    label="Job title"
                                    defaultOptionText="Select job title"
                                    required
                                />
                       </div>

                       <div className='w-full'>
                            <Input
                                    type="text"
                                    name="company_website"
                                    label="Company Website"
                                    value={data.company_website}
                                    className="mt-1 h-11 block w-full"
                                    autoComplete="company_website"
                                    placeholder="Enter company website"
                                    onChange={handleChange}
                                    required
                                />
                       </div>
                 </div>

                 <div className='w-full'>
                            <TextArea
                                    name="company_bio"
                                    label="Company bio"
                                    value={data.company_bio}
                                    className="mt-1 h-20 block w-full"
                                    autoComplete="company_bio"
                                    placeholder="Enter company bio"
                                    onChange={handleChange}
                                    required
                                />
                       </div>
                    

                    <div className="text-center  w-full flex justify-start  mt-space-20">

                        <div  className='w-auto'>
                               <Button
                                    className='block w-auto bg-viralget-red  px-space-80 rounded-[8px]'
                                    processing={processing}
                                    >
                                    Continue
                                </Button>
                        </div>
                        

                                
                     
                    </div>
             </form>
        </div>
    )
}


export default AccountSetupForm;