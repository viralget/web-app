import React from 'react';
import Form from '../../New/Form';
import Auth from '@/Pages/Users/Layouts/Auth';
import App from '@/Pages/Users/Layouts/App';

export default function NewJob(props) {
    return (
        <App title="Create new Company">
            <div className="max-w-xl mx-auto text-center">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        <span className="block">Create a recruiter account</span>
                    </h1>
                    <p className="mt-3 text-gray-500 md:mt-5 ">
                        You are yet to create a company record. Enter your company information.
                    </p>
                </div>

                <div className="mt-10 space-y-6 max-w-xl">
                    <Form {...props} />
                </div>
            </div>
        </App>
    );
}
