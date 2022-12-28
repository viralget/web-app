import { useEffect, useState } from 'react'
import Guest from '../../components/Layouts/Guest'
import Button from '@/Components/Button';
import Input from '@/Components/Input';
import PasswordInput from '@/Components/PasswordInput';
import EmptyState from '@/Components/EmptyState';
import { Link, useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';

export default function NewCampaign() {
    const [agreed, setAgreed] = useState(false)

    const { data, setData, post, processing, errors, reset } = useForm({
        company_name: '',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        // post(route('register'));

        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, getEventValue(event));
    };

    const submit = (e) => {
        e.preventDefault();

        post('/register');
    };

    return (
        <AuthenticatedLayout title="My Campaigns" subtitle={<Link href={route('campaigns.create')}>Create your first campaign</Link>}>

            <EmptyState title="You have created no campaign list yet" />
        </AuthenticatedLayout>

    )
}
