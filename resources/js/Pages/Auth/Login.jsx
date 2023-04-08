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

export default function Login() {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        // post(route('register'));

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

            <div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Or{' '}
                    <a href="/register" className="font-medium text-fuchsia-600 hover:text-fuchsia-500">
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
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>
                </div>
                <ValidationErrors errors={errors} />

                <form onSubmit={submit} className="space-y-2">


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

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-fuchsia-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-fuchsia-600 hover:text-fuchsia-500">
                                    Forgot your password?
                                </a>
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
