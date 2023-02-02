import { useEffect } from 'react';
import Button from '@/Components/Button';
import App from '@/Components/Layouts/App';
import Input from '@/Components/Input';
import Label from '@/Components/Label';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, useForm } from '@inertiajs/inertia-react';
import Guest from '@/Components/Layouts/Guest';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
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

        post(route('password.confirm'));
    };

    return (
        <App>
            <Head title="Confirm Password" />
            <Guest>
                <div className="mb-4 text-sm text-gray-600">
                    Please confirm your password before continuing.
                </div>

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <div className="mt-4">
                        <Label forInput="password" value="Password" />

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={onHandleChange}
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Button className="ml-4" processing={processing}>
                            Confirm
                        </Button>
                    </div>
                </form>
            </Guest>
        </App>
    );
}
