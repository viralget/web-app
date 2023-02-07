import React from 'react';
import Form from './Form';
import Dashboard from '@/Pages/Recruiter/Layouts/Dashboard';
import SectionHeading from '@/Components/SectionHeading';
import Link from '@/Components/Link';

export default function NewCompany(props) {
    return (
        <Dashboard title={props.isEdit ? `Edit Company` : `Create new Company`}>
            <div className="m-10 space-y-6">

                <div className="md:w-4/6 mx-auto">
                    <SectionHeading title="Company Details" subtitle={<>Need help? <Link href={route('contact')}>Contact suppor</Link>t</>} />

                    <div className="space-y-6  p-6 bg-white shadow rounded">
                        <Form {...props} />
                    </div>

                </div>
                {/* 
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                    <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                        <Form {...props} />
                    </div>
                    <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                        Need help?
                    </aside>
                </div> */}
            </div>
        </Dashboard>
    );
}
