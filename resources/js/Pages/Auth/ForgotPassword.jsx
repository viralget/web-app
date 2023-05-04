
import Button from '@/Components/Button';
import App from '@/Components/Layouts/App';
import Input from '@/Components/Input';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import AuthHeader from './AuthHeader';
import Label from '@/Components/Label';
import Success from '@/Components/Alerts/Success';
import Auth from "@/components/Layouts/Auth";
import { EmailSvg, PasswordSvg } from "@/Utils/icons";
import ButtonBack from '@/components/ButtonBack';
import { classNames } from '@/Utils/helpers';

export default function ForgotPassword({ status }) {

    const getEmail = new URLSearchParams(window.location.search).get('email');

    const { data, setData, post, processing, errors } = useForm({
        email: getEmail ?? '',
    });


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('sendMail.forgot.password'));
    };


    return (
        <Auth type={getEmail ? "forgot-success" : "forgot"} >


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-t-lg-x font-lexend  font-bold ">{getEmail ? 'Check your inbox!' : 'Forgot password?'}</h2>
                <div className='mt-space-12 '>
                    {
                        getEmail ? (
                            <>
                                <span className='text-t-xsx font-medium text-viralget-gray-400'>We’ve sent you an email with instructions on how to reset your password to</span>
                                <span className='text-t-xsx font-bold text-viralget-grey'> {getEmail}</span>
                            </>
                        )
                            :
                            (
                                <span className='text-t-xsx font-medium text-viralget-grey'> Sometimes it happens to everyone</span>
                            )
                    }


                </div>

                <div className="mt-space-40">
                    <span className='font-normal text-t-normal text-viralget-gray-400 '>

                        {getEmail ? 'Didn’t get the email?' : 'Enter the email connected with your account and we will send you an email with instructions how to reset your password.'}</span>
                </div>

                {status && <Success message={status} />}

                <ValidationErrors errors={errors} />

                <form onSubmit={submit} >

                    {getEmail ? null :
                        <>
                            <Label value="Enter email address" />
                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full  pl-10"
                                isFocused={true}
                                onChange={onHandleChange}
                                icon={<EmailSvg />}
                            />
                        </>
                    }


                    <div className={classNames("flex items-center justify-end ", getEmail ? 'mt-space-20' : 'mt-space-32')}>
                        <Button className="block w-full bg-viralget-red rounded-[8px]" processing={processing} onClick={submit}>
                            {getEmail ? 'Send me another email, please' : 'Send instructions'}
                        </Button>
                    </div>

                    {
                        getEmail ?
                            null :

                            <div className='mt-space-20'>
                                <ButtonBack title="Go back and try one more time" />
                            </div>

                    }


                </form>

            </div>



        </Auth>
    );
}
