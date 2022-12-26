import { useContext, useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Link, useForm } from '@inertiajs/inertia-react';
import PasswordInput from '@/Components/PasswordInput';
import Success from '@/Components/Alerts/Success';
import SocialsLogin from '../Auth copy/SocialsLogin';
import AuthHeader from '../Auth/AuthHeader';
import { LoginContext } from '@/Contexts/LoginContext';

export default function Form({ status, canResetPassword }) {
    const [showLoginModal, setShowLoginModal, redirect_url, setRedirectUrl] = useContext(LoginContext);

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
        redirect_url
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onSuccess: () => {
                if (showLoginModal) {
                    setShowLoginModal(false);
                    setRedirectUrl(null);
                }
            }
        });
    };

    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-4 px-4 shadow sm:rounded-lg sm:px-10">
                    <AuthHeader title="You're just a step away!" subtitle="Login to continue" showAuth={false} />

                    <SocialsLogin type="login" redirect_url={redirect_url} />

                    {status && <Success message={status} />}

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit}>

                        <div>
                            <Label forInput="email" value="Email Address" />
                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                // isFocused={true}
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-2">
                            <Label forInput="password" value="Password" />

                            <PasswordInput
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="flex items-center justify-between my-4">
                            <label className="flex items-center">
                                <Checkbox name="remember" value={data.remember} onChange={onHandleChange} />

                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>

                        <Button
                            className="w-full"
                            processing={processing}>
                            Log in
                        </Button>
                        <div className="my-3 text-center text-gray-700">
                            Don't have an account? <Link href={route('register')} className="font-medium text-gray-800  underline">
                                Sign up
                            </Link>
                        </div>
                    </form>

                </div>
            </div>

        </>
    );
}
