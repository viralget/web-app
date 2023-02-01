import { useEffect, useState } from 'react'
import Guest from '../../components/Layouts/Guest'
import Button from '@/Components/Button';
import Cards from './Cards';
import PasswordInput from '@/Components/PasswordInput';
import EmptyState from '@/Components/EmptyState';
import { Link, useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '../../components/AuthenticatedLayout';
import { Container } from '../../components/Container';

export default function NewCampaign({ campaigns }) {
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
        <AuthenticatedLayout title="My Campaigns" subtitle={<Link href={route('campaigns.create')}>{campaigns.length > 0 ? 'Create a new campaign' : 'Create your first campaign'}</Link>}>

            {campaigns.length > 0 ?
                <div className='mx-10'>
                    <Cards data={campaigns} />
                </div>
                :
                <EmptyState title="You have created no campaign list yet" />
            }

        </AuthenticatedLayout>

    )
}
