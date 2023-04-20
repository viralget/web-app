import { useEffect } from 'react';
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { useForm } from '@inertiajs/inertia-react';
import Auth from '@/components/Layouts/Auth';
import {  PasswordSvg } from "@/Utils/icons";

export default function ResetPassword({ token, email }) {
    const getStatus = new URLSearchParams(window.location.search).get('status');
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
        <Auth  type={  getStatus == 'success' ? 'password-success' : "newPassword"}>
           
           {  getStatus == 'success' ?
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                   <h2 className="text-t-lg-x font-lexend  font-bold ">You’ve successfully  updated your password!</h2>
                  <span className='mt-space-16 text-t-xsx font-medium text-viralget-grey'> Now you can log in to your ViralGet account</span>
            
                  <div className="mt-4">
                            <a  href={route('login', { email: email})} className="block w-full bg-viralget-red rounded-[8px] text-white py-space-10  text-center" >
                            Log in
                            </a>
                 </div>
             </div>
           
           :
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-t-lg-x font-lexend  font-bold ">Create new password</h2>
                <span className='mt-space-12 text-t-xsx font-medium text-viralget-grey'> Securely access your account by creating 
a new log in password</span>
                   
                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit}  className="mt-space-40">
                     

                        <div className="mt-4">
                            <Label forInput="password" value="Enter new password" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full  pl-10"
                                autoComplete="new-password"
                                isFocused={true}
                                onChange={onHandleChange}
                                icon={<PasswordSvg />}
                                placeholder="Create your new password"
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password_confirmation" value="Confirm new password" />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full  pl-10"
                                autoComplete="new-password"
                                onChange={onHandleChange}
                                icon={<PasswordSvg />}
                                placeholder="Confirm your new password"
                            />
                        </div>

                        <div className="mt-4">
                            <Button className="block w-full bg-viralget-red rounded-[8px]" processing={processing}>
                                Reset Password
                            </Button>
                        </div>
                    </form>
                </div>
}
        </Auth>
    );
}
