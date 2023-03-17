import { useEffect } from 'react';
import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.login'));
    };

    return (
        <>

            <div className="mx-auto w-full  p-5 ">
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                <ValidationErrors errors={errors} />

                <div className='flex justify-center items-center '>
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="email" value="Email" />

                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
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
                                autoComplete="current-password"
                                onChange={onHandleChange}
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox name="remember" value={data.remember} onChange={onHandleChange} />

                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className=" items-center mt-4">
                            <Button className="block w-full" processing={processing}>
                                Log in
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
