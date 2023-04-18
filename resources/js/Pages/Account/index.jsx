import { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Components/AuthenticatedLayout';
import UploadImage from "@/components/UploadImage";
import Input from "@/components/Input";
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import { PasswordSvg, PasswordSvgRed } from '@/Utils/icons';
import PasswordInput from '@/components/PasswordInput';

export default function Account({ user }) {
    const [agreed, setAgreed] = useState(false)
    const [image, setImageUrl] = useState(null);

    console.log("user:", user)
   
    const { data, setData, post, processing, errors, reset } = useForm({
        company_name: user?.info.company_name,
        first_name: user.info.first_name,
        last_name: user.info.last_name,
        email: user.info.email,
        password: '',
        file: '',
        company_type:user.info.company_type,
        job_title: user.info.job_title,
        company_website:user.info.company_website,
        company_bio: user.info.company_bio,
    });

    const displayFile = (event) => {
        if (event.target.files && event.target.files[0]) {
            setData('file', event.target.files[0]);
            let reader = new FileReader();
            reader.onload = (e) => {
                setImageUrl(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
    }
}

    useEffect(() => {
        // post(route('register'));

        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        post('/register');
    };

    return (
        <AuthenticatedLayout   smallHeader={true} >

            <div className="overflow-hidden bg-white py-12 lg:px-10  px-5 ">
                <div className="relative mx-auto ">
                    <div className="w-full">
                        <div className='border-b  border-viralget-gray-300 pb-space-32'>
                          <span className='font-lexend font-bold text-t-xlg text-viralget-grey '>Settings</span>   
                        </div>
                        <form onSubmit={submit} >

                            <div className='mt-space-32  border-b  border-viralget-gray-300 pb-space-32'>
                                <div className='flex flex-col'>
                                       <span className='text-t-xs font-lexend font-bold'>Name and avatar</span>
                                       <span className='mt-space-8 text-normal text-viralget-gray-400'>Changing your name below will update your name on your profile.</span>
                               </div>
                               <div className='mt-space-28'>
                                   <UploadImage  displayFile={displayFile} image={image} />
                               </div>
                               <div className='mt-space-24'>
                                       <div className='flex  lg:flex-row flex-col  lg:w-auto  w-full lg:space-x-space-20 lg:space-y-0  space-y-space-20'>
                                                <Input
                                                    type="text"
                                                    name="first_name"
                                                    label="First Name"
                                                    value={data.first_name}
                                                    className="mt-1 block   lg:w-space-245   w-full  "
                                                    placeholder="Enter your first name"
                                                    autoComplete="first_name"
                                                    onChange={onHandleChange}
                                                    required
                                                />
                                                  <Input
                                                        type="text"
                                                        name="last_name"
                                                        label="Last Name"
                                                        value={data.last_name}
                                                        className="mt-1 block w-full  lg:w-space-245 "
                                                        autoComplete="family_name"
                                                        placeholder="Enter your last name"
                                                        onChange={onHandleChange}
                                                        required
                                                    />
                                        </div>
                                        <div className='mt-space-32 flex space-x-space-16'>
                                             <button className='px-space-28 py-space-8 bg-viralget-gray-300 rounded-md'>
                                             Save
                                             </button>

                                             <button type='reset' className='px-space-28 py-space-8 rounded-md  bg-white  border  border-gray-400'>
                                             Cancel
                                             </button>
                                        </div>
                               </div>
                            </div>
                           



                            <div className='mt-space-32  border-b  border-viralget-gray-300 pb-space-32'>
                                <div className='flex flex-col'>
                                       <span className='text-t-xs font-lexend font-bold'>Company info</span>
                                       <span className='mt-space-8 text-normal text-viralget-gray-400'>Update your company information here</span>
                               </div>
                              
                               <div className='mt-space-24'>
                               
                                 <div  className='flex  lg:flex-row flex-col  lg:w-auto  w-full lg:space-x-space-20  lg:space-y-0 space-y-space-20'>
                                       <Select options={[
                                                    { name: 'Brand', value: 'brand' },
                                                    { name: 'Agency', value: 'agency' }
                                                ]}
                                                    name="company_type"
                                                    value={data.company_type}
                                                    onChange={onHandleChange}
                                                    label="Company type"
                                                    defaultOptionText="Select company type"
                                                    required
                                                    className="lg:w-space-245 "
                                                />
                                           <Input
                                                    type="text"
                                                    name="company_name"
                                                    label="Company name"
                                                    value={data.company_name}
                                                    className="mt-1 h-11 block w-full  lg:w-space-245 "
                                                    autoComplete="company_name"
                                                    placeholder="Enter company name"
                                                    onChange={onHandleChange}
                                                    required
                                                />
                                    
                                </div>

                                 <div className='flex  lg:flex-row flex-col  lg:w-auto  w-full lg:space-x-space-20 lg:space-y-0 space-y-space-20 mt-space-20'>
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
                                                        onChange={onHandleChange}
                                                        label="Job title"
                                                        defaultOptionText="Select job title"
                                                        required
                                                        className="lg:w-space-245  w-full"
                                                    />

                                            <Input
                                                        type="text"
                                                        name="company_website"
                                                        label="Company Website"
                                                        value={data.company_website}
                                                        className="mt-1 h-11 block w-full  lg:w-space-245 "
                                                        autoComplete="company_website"
                                                        placeholder="Enter company website"
                                                        onChange={onHandleChange}
                                                        required
                                                    />
                                       
                                    </div>

                                    <div className='w-auto mt-space-20'>
                                            <TextArea
                                            name="company_bio"
                                            label="Company bio"
                                            value={data.company_bio}
                                            className="mt-1 h-20 block lg:w-space-510"
                                            autoComplete="company_bio"
                                            placeholder="Enter company bio"
                                            onChange={onHandleChange}
                                            required
                                        />
                                    </div>

                                        <div className='mt-space-32 flex space-x-space-16'>
                                             <button className='px-space-28 py-space-8 bg-viralget-gray-300 rounded-md'>
                                             Save
                                             </button>

                                             <button type='reset' className='px-space-28 py-space-8 rounded-md  bg-white  border  border-gray-400'>
                                             Cancel
                                             </button>
                                        </div>
                               </div>
                            </div>






                            <div className='mt-space-32  lg:w-space-510'>
                                <div className='flex flex-col'>
                                       <span className='text-t-xs font-lexend font-bold'>Security settings</span>
                                       <span className='mt-space-8 text-normal text-viralget-gray-400'>Note that if you signed in with a connected account, you are using that account’s login information and we cannot change or reset those passwords here.</span>
                               </div>
                              
                               <div className='mt-space-24'>

                                        <div className='w-auto mt-space-20'>
                                                 <PasswordInput
                                                        type="password"
                                                        label="Enter current password"
                                                        name="password"
                                                        value={data.password}
                                                        className="mt-1 block w-full pl-10"
                                                        autoComplete="new-password"
                                                        onChange={onHandleChange}
                                                        placeholder="Enter current password"
                                                        required
                                                        icon={<PasswordSvg />}
                                                    />
                                        </div>

                                        <div className='w-auto mt-space-20'>
                                                 <PasswordInput
                                                        type="password"
                                                        label="Enter new password"
                                                        name="password"
                                                        value={data.password}
                                                        className="mt-1 block w-full pl-10"
                                                        autoComplete="new-password"
                                                        onChange={onHandleChange}
                                                        placeholder="Enter new password"
                                                        required
                                                        icon={<PasswordSvg />}
                                                    />
                                        </div>


                                    <div  className='mt-space-20'>
                                       <div className='flex flex-col '>
                                           <span className='text-t-xs font-lexend font-bold'>Reset Password</span>
                                           <span className='mt-space-8 text-normal text-viralget-gray-400'>If you just forgot your password, don’t worry – we got you!</span>
                                        </div>  
                                        <div className='mt-space-20'>
                                            <a href={route('create.forgot.password')}  className='flex rounded-[8px]  py-space-12  items-center justify-center  space-x-3 text-viralget-red border border-viralget-red w-space-176'>
                                                <PasswordSvgRed className="text-viralget-red"  stroke="red" /> 
                                                <span> Reset password</span>
                                            </a> 
                                        </div>

                                         
                                    </div>
                                    

                                        <div className='mt-space-32 flex space-x-space-16'>
                                             <button className='px-space-28 py-space-8 bg-viralget-gray-300 rounded-md'>
                                             Save
                                             </button>

                                             <button type='reset' className='px-space-28 py-space-8 rounded-md  bg-white  border  border-gray-400'>
                                             Cancel
                                             </button>
                                        </div>
                               </div>
                            </div>




                           
                           
                           
                           
                           
                           
                            {/* <div>

                                <Input
                                    type="text"
                                    name="company_name"
                                    label="Company Name"
                                    value={data.company_name}
                                    className="mt-1 block w-full"
                                    autoComplete="company_name"
                                    onChange={onHandleChange}
                                    placeholder="Optional"
                                    required
                                />
                            </div>
                            <div>

                                <Input
                                    type="text"
                                    name="first_name"
                                    label="First Name"
                                    value={data.first_name}
                                    className="mt-1 block w-full"
                                    autoComplete="first_name"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div>

                                <Input
                                    type="text"
                                    name="last_name"
                                    label="Last Name"
                                    value={data.last_name}
                                    className="mt-1 block w-full"
                                    autoComplete="family_name"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="mt-4">

                                <Input
                                    type="email"
                                    name="email"
                                    label="Email Address"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="mt-4">
                                <PasswordInput
                                    type="password"
                                    label="Password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={onHandleChange}
                                    required
                                />
                            </div>

                            <div className="text-center space-y-2 mt-4">
                                <Button
                                    className='block w-full'
                                    processing={processing}>
                                    Update Account
                                </Button>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}
