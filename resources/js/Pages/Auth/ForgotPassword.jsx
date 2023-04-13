
import Button from '@/Components/Button';
import App from '@/Components/Layouts/App';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import AuthHeader from './AuthHeader';
import Label from '@/Components/Label';
import Success from '@/Components/Alerts/Success';
import Auth from "@/components/Layouts/Auth";

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
        <Auth type="forgot">
            {/* <Head title="Forgot Password" /> */}
            {/* <AuthHeader title="Forgot Password?" showAuth={false} /> */}

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                {/* <div className="bg-white py-8 px-4  sm:rounded-lg sm:px-10"> */}
                <h2 className="text-t-lg-x font-lexend  font-bold ">Forgot password?</h2>
                <span className='mt-space-12 text-t-xsx font-medium text-viralget-grey'>Sometimes it happens to everyone</span>
                    <div className="mt-space-40">
                        <span className='font-normal text-t-normal text-viralget-gray-400'>Enter the email connected with your account and we will send you
                          an email with instructions how to reset your password.</span>
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
            {/* </div> */}
        </Auth>
    );
}
