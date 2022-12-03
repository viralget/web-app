
import { Button } from '@/Components/Button';
import App from '@/Pages/Users/Layouts/App';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import AuthHeader from './AuthHeader';
import Label from '@/Components/Label';
import Success from '@/Components/Alerts/Success';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <App>
            <Head title="Forgot Password" />
            <AuthHeader title="Forgot Password?" showAuth={false} />

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">

                    <div className="mb-4 text-sm text-gray-500 leading-normal">
                        Let's help you reset your password. A password reset link will be sent to your email inbox/spam.
                    </div>

                    {status && <Success message={status} />}

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit}>
                        <Label value="Enter email address" />
                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={onHandleChange}
                        />

                        <div className="flex items-center justify-end mt-4">
                            <Button className="w-full" processing={processing}>
                                Request Password Reset Link
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        </App>
    );
}
