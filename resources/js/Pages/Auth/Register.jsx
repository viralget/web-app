import Auth from "@/components/Layouts/Auth";
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import PasswordInput from '@/Components/PasswordInput';
import { getEventValue } from '@/Utils/helpers';
import { Logo } from '@/components/Logo'
import SocialsLogin from "./SocialsLogin";
import { useEffect, useState } from "react";
import UploadImage from "@/components/UploadImage";
import { EmailSvg, PasswordSvg } from "@/Utils/icons";
import toast from "@/components/Toast";

export default function Register() {

    const [image, setImageUrl] = useState(null);
   
    const { data, setData, post, processing, errors, reset } = useForm({
        company_name: '',
        first_name: '',
        last_name: '',
        email: '',
        file: '',
        password: '',
        termCondition: false
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
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        if(!data.termCondition){
            toast.error("Please select the term and condition.");
            return;
        }
        post('/register');
    };

    return (
        <Auth>

            <div>
                     <h2 className="mt-6 text-t-lg-x font-lexend font-bold  text-viralget-grey">Create a ViralGet account</h2>
                        <p className="mt-2 text-t-normal font-normal  text-gray-600">
                        Already have an account?{' '}
                            <a href={route('login')} className="font-bold text-t-normal text-viralget-red">
                                Log in
                            </a>
                        </p>
            </div>
            <div className="mt-space-20">
                <div>
                    <SocialsLogin  type="google" redirect_url={route('auth.social.googleCallBack')} />

                    <div className="relative mt-space-20">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or </span>
                        </div>
                    </div>
                </div>

                <ValidationErrors errors={errors} />

                <form onSubmit={submit} className="">

                <div className="mt-space-20  mb-space-20">
                      <UploadImage  displayFile={displayFile} image={image} />
                </div>

                <div className="flex space-x-space-20  w-full">
                    <div className="w-full">
                        <Input
                            type="text"
                            name="first_name"
                            label="First Name"
                            value={data.first_name}
                            className="mt-1 block "
                            placeholder="Enter your first name"
                            autoComplete="first_name"
                            onChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="w-full">
                        <Input
                            type="text"
                            name="last_name"
                            label="Last Name"
                            value={data.last_name}
                            className="mt-1 block w-full"
                            autoComplete="family_name"
                            placeholder="Enter your last name"
                            onChange={onHandleChange}
                            required
                        />
                    </div>
                </div>

                <div className="mt-space-20  w-full">

                    <Input
                        type="email"
                        name="email"
                        label="Email Address"
                        value={data.email}
                        className="mt-1 block w-full pl-10"
                        autoComplete="email"
                        onChange={onHandleChange}
                        placeholder="Enter corporate email address"
                        required
                        icon={<EmailSvg />}
                    />
                </div>

                <div className="mt-space-20">
                        <PasswordInput
                            type="password"
                            label="Password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full pl-10"
                            autoComplete="new-password"
                            onChange={onHandleChange}
                            placeholder="Create a password (minimum 8 characters)"
                            required
                            icon={<PasswordSvg />}
                        />
                </div> 

                <div className="flex items-center  mt-space-20">
                                <input
                                    id="term-condition"
                                    name="termCondition"
                                    value={data.termCondition}
                                    onChange={onHandleChange}
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="term-condition" className="ml-2 block text-t-normal font-normal text-gray-900">
                                    I agree to all { ' '}
                                     <span className="text-viralget-red  font-bold text-t-normal">Terms & Conditions, Privacy Policy</span>  
                                </label>
                    </div>
                    

                    <div className="text-center  mt-space-20">
                        <Button
                            className='block w-full bg-viralget-red rounded-[8px]'
                            processing={processing}
                            >
                            Create account
                        </Button>
                    </div>
                </form>
          
            </div>

        </Auth>
    )
}
