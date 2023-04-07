import toast from '@/Components/Toast';
import Input from '@/Components/Input';
import TextArea from '@/components/TextArea';
import Button from '@/Components/Button';
import { useForm } from '@inertiajs/inertia-react';
import { getEventValue } from '@/Utils/helpers';
import ValidationErrors from '@/Components/ValidationErrors';
import { EmailSvg, CompanySvg } from '@/Utils/icons';

export default function ContactForm() {


    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        email: '',
        company_name: '',
        message: '',
    });



    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    function submit(event) {
        event.preventDefault();

        post(route('send.contact'), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success('Submitted successfully, one of our team will reach out to you shorthly!');
                reset();

            },
            onError: (errors) => {
                console.log("error:", errors)
            }
        })

    }


    // const UserIcon = () => {

    //     return (
    //         <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <g clip-path="url(#clip0_1046_8666)">
    //                 <path d="M9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75Z" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    //                 <path d="M9 11.25C10.5533 11.25 11.8125 9.9908 11.8125 8.4375C11.8125 6.8842 10.5533 5.625 9 5.625C7.4467 5.625 6.1875 6.8842 6.1875 8.4375C6.1875 9.9908 7.4467 11.25 9 11.25Z" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    //                 <path d="M4.48633 14.0207C4.90955 13.1871 5.55533 12.487 6.3521 11.9979C7.14887 11.5089 8.0655 11.25 9.00039 11.25C9.93528 11.25 10.8519 11.5089 11.6487 11.9979C12.4455 12.487 13.0912 13.1871 13.5145 14.0207" stroke="#3E4555" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
    //             </g>
    //             <defs>
    //                 <clipPath id="clip0_1046_8666">
    //                     <rect width="18" height="18" fill="white" />
    //                 </clipPath>
    //             </defs>
    //         </svg>
    //     )
    // }

  





    return (
        <div className='md:p-20 p-5 md:pt-10  md:mt-0 md:w-[50%] mt-5 md:h-screen'>
            <div className="relative flex  text-sm  mb-3">
                <span className=" text-black  text-2xl font-bold">Contact Us</span>
            </div>

            <div>
                <ValidationErrors errors={errors} />
            </div>


            <form onSubmit={submit} className="space-y-3 py-5">

                <Input
                    type="text"
                    name="full_name"
                    label="Full Name"
                    value={data.full_name}
                    className="mt-1 block h-10  pl-10 w-full"
                    autoComplete="full_name"
                    placeholder="Enter your full name"
                    onChange={onHandleChange}
                    icon={<UserSvg />}
                />

                <Input
                    type="text"
                    name="email"
                    label="Email"
                    value={data.email}
                    className="mt-1 block  h-10  pl-10 w-full"
                    autoComplete="email"
                    placeholder="Enter your email"
                    onChange={onHandleChange}
                    icon={<EmailSvg />}
                />

                <Input
                    type="text"
                    name="company_name"
                    label="Company"
                    value={data.company_name}
                    className="mt-1 block h-10  pl-10 w-full"
                    autoComplete="company_name"
                    placeholder="Enter your company name"
                    onChange={onHandleChange}
                    icon={<CompanySvg />}
                />

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
                    <span className='text-viralget-grey text-xs' >
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


            </form >
        </div >
    )
}