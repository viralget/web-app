import { useEffect } from 'react';
import Input from '@/Components/Input';
import TextArea from '@/components/TextArea';
import Button from '@/Components/Button';
import { useForm } from '@inertiajs/inertia-react';
import { getEventValue } from '@/Utils/helpers';
import ValidationErrors from '@/Components/ValidationErrors';

export default function ContactForm({props}){


    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        email: '',
        company_name: '',
        message: '',
    });

    useEffect(() => {
        console.log("props:", props);
    })

    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    function submit(event){
        event.preventDefault();
       post(route('send.contact'),  {
        preserveScroll: true,
        onSuccess: (result) => console.log("result:", result),
        onError: (errors) => {
          console.log("error:", errors)
        }
      })
    //    then((result) => {
    //     console.log("result:", result);
    //    })
    }


    const UserIcon = () => {

        return(<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_1046_8666)">
        <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 11.25C10.5533 11.25 11.8125 9.9908 11.8125 8.4375C11.8125 6.8842 10.5533 5.625 9 5.625C7.4467 5.625 6.1875 6.8842 6.1875 8.4375C6.1875 9.9908 7.4467 11.25 9 11.25Z" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.48633 14.0207C4.90955 13.1871 5.55533 12.487 6.3521 11.9979C7.14887 11.5089 8.0655 11.25 9.00039 11.25C9.93528 11.25 10.8519 11.5089 11.6487 11.9979C12.4455 12.487 13.0912 13.1871 13.5145 14.0207" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_1046_8666">
        <rect width="18" height="18" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        )
    }

    const EmailIcon = () => (<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1046_8676)">
    <path d="M9 11.8125C10.5533 11.8125 11.8125 10.5533 11.8125 9C11.8125 7.4467 10.5533 6.1875 9 6.1875C7.4467 6.1875 6.1875 7.4467 6.1875 9C6.1875 10.5533 7.4467 11.8125 9 11.8125Z" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.7336 14.6254C11.4807 15.4572 9.98589 15.8468 8.48634 15.7324C6.9868 15.6179 5.56842 15.006 4.45627 13.9936C3.34412 12.9813 2.6019 11.6265 2.34738 10.1443C2.09286 8.66211 2.34062 7.13735 3.05135 5.81199C3.76207 4.48662 4.89506 3.43656 6.27052 2.82843C7.64599 2.2203 9.18515 2.08893 10.6438 2.45516C12.1024 2.8214 13.397 3.66426 14.322 4.85C15.2471 6.03575 15.7497 7.49647 15.75 9.00037C15.75 10.5543 15.1875 11.8129 13.7813 11.8129C12.375 11.8129 11.8125 10.5543 11.8125 9.00037V6.18787" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_1046_8676">
    <rect width="18" height="18" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    );

  
    const CompanyIcon = () => (
                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.125 14.1875H16.875" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.125 14.1875V1.8125C10.125 1.66332 10.0657 1.52024 9.96025 1.41475C9.85476 1.30926 9.71168 1.25 9.5625 1.25H2.8125C2.66332 1.25 2.52024 1.30926 2.41475 1.41475C2.30926 1.52024 2.25 1.66332 2.25 1.8125V14.1875" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.75 14.1875V6.3125C15.75 6.16332 15.6907 6.02024 15.5852 5.91475C15.4798 5.80926 15.3367 5.75 15.1875 5.75H10.125" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.5 4.0625H6.75" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.625 8.5625H7.875" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.5 11.375H6.75" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.375 11.375H13.5" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12.375 8.5625H13.5" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

    )



    return(
             <div  className='md:p-20 p-5 md:pt-10  md:mt-0 md:w-[50%] mt-5 md:h-screen'>
                    <div className="relative flex  text-sm  mb-3">
                            <span className=" text-black  text-2xl font-bold">Contact Us</span>
                     </div>

                     <div>
                     <ValidationErrors errors={errors} />
                     </div>


                     <form onSubmit={submit} className="space-y-3  ">
                         
                          <div className='relative  '>

                            <div className='absolute  bottom-3 left-3 '>
                                 <UserIcon />
                            </div>
                                <Input
                                    type="text"
                                    name="full_name"
                                    label="Full Name"
                                    value={data.full_name}
                                    className="mt-1 block h-10  pl-10 w-full"
                                    autoComplete="full_name"
                                    placeholder="Enter your full name"
                                    onChange={onHandleChange}
                                    
                                />
                            </div>

                            <div className='relative'>

                                <div className='absolute  bottom-3 left-3 '>
                                    <EmailIcon />
                                </div>
                                <Input
                                    type="text"
                                    name="email"
                                    label="Email"
                                    value={data.email}
                                    className="mt-1 block  h-10  pl-10 w-full"
                                    autoComplete="email"
                                    placeholder="Enter your email"
                                    onChange={onHandleChange}
                                />
                            </div>

                            <div className='relative'>

                                    <div className='absolute  bottom-3 left-3 '>
                                        <CompanyIcon />
                                    </div>
                                    <Input
                                        type="text"
                                        name="company_name"
                                        label="Company"
                                        value={data.company_name}
                                        className="mt-1 block h-10  pl-10 w-full"
                                        autoComplete="company_name"
                                        placeholder="Enter your company name"
                                        onChange={onHandleChange}
                                    />
                            </div>

                            <div className='relative'>

                                <TextArea
                                    type="text"
                                    name="message"
                                    label="Message"
                                    value={data.message}
                                    className="mt-1 block h-[8rem] w-full"
                                    autoComplete="message"
                                    placeholder="Enter your message"
                                    onChange={onHandleChange}
                                />
                           </div>

                           <div>
                               <span className='text-viralget-grey  text-xs' >
                               By submitting this form, you agree to the processing of your personal data 
by ViralGet as described in the Privacy Policy.
                               </span>
                           </div>


                           <div className="text-center space-y-2 mt-4">
                                <Button
                                    className='block rounded-sm bg-viralget-red w-full'
                                    processing={processing}
                                    >
                                    Send
                                </Button>
                          </div>


                    </form>
             </div>
    )
}