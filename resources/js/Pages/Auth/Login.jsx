import Auth from "@/components/Layouts/Auth";
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import PasswordInput from '@/Components/PasswordInput';
import { getEventValue } from '@/Utils/helpers';
import { Logo } from '@/components/Logo'
import SocialsLogin from "./SocialsLogin";
import { useEffect } from "react";
import { EmailSvg, PasswordSvg } from "@/Utils/icons";

export default function Login() {

    const getEmail = new URLSearchParams(window.location.search).get('email');

  
    const { data, setData, post, processing, errors, reset } = useForm({
        email:  getEmail ?? '',
        password: '',
    });

    useEffect(() => {
      
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        post('/login');
    };

    return (
        <Auth>
            

            <div className="w-full">
                <h2 className="text-t-lg-x font-lexend  font-bold ">Welcome back!</h2>
                <p className="mt-2 text-t-normal font-normal  text-gray-600">
                Not registered yet? {' '}
                            <a href={route('register')} className="font-bold text-t-normal text-viralget-red">
                            Create an account
                            </a>
                        </p>
            </div>
            <div className="mt-8">
                <div>
                    <SocialsLogin type="google" />

                    <div className="relative mt-6">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">Or</span>
                        </div>
                    </div>
                </div>
                <ValidationErrors errors={errors} />

                <form onSubmit={submit} className="">


                    <div className="mt-4">

                        <Input
                            type="email"
                            name="email"
                            label="Email Address"
                            value={data.email}
                            className="mt-1 block w-full  pl-10"
                            autoComplete="email"
                            onChange={onHandleChange}
                            required
                            icon={<EmailSvg />}
                        />
                    </div>

                    <div className="mt-4">
                        <PasswordInput
                            type="password"
                            label="Password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full pl-10"
                            autoComplete="new-password"
                            onChange={onHandleChange}
                            required
                            icon={<PasswordSvg />}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-viralget-red accent-viralget-red focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href={route('create.forgot.password')} className="font-bold text-viralget-red hover:text-viralget-red">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                    <div className="text-center  mt-space-32">
                        <Button
                            className='block w-full bg-viralget-red rounded-[8px]'
                            processing={processing}>
                            Login
                        </Button>
                    </div>
                </form>
                {/* 
                <div className="mt-6">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                       

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-fuchsia-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>

        </Auth>
    )
}
