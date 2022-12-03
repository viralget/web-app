import { useEffect } from 'react';
import { Button } from '@/Components/Button';
import App from '@/Pages/Users/Layouts/App';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import Auth from '../../Layouts/Auth';
import AuthHeader from './AuthHeader';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.update'));
    };

    return (
        <App>
            <Head title="Reset Password" />

            <AuthHeader title="Reset Password" showAuth={false} />
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="email" value="Email" />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password" value="Password" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                isFocused={true}
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password_confirmation" value="Confirm Password" />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Button className="w-full" processing={processing}>
                                Reset Password
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </App>
    );
}
