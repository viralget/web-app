import { useEffect, useState } from 'react'
import Guest from '@/Components/Layouts/Guest'
import Button from '@/Components/Button';
import Cards from './Cards';
import PasswordInput from '@/Components/PasswordInput';
import EmptyState from '@/Components/EmptyState';
import { Link, useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Components/AuthenticatedLayout';
import { Container } from '@/Components/Container';
import CampaignCards from './Cards';

export default function List({ campaigns }) {
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
        <AuthenticatedLayout title="My Campaigns" subtitle={<Link href={route('campaign.create')}>{campaigns.length > 0 ? 'Create a new campaign' : 'Create your first campaign'}</Link>}>

            {campaigns.length > 0 ?
                <div className='mx-10'>
                    <CampaignCards campaigns={campaigns} />
                </div>
                :
                <EmptyState title="You have created no campaign list yet" />
            }

        </AuthenticatedLayout>

    )
}
