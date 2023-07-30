import { useEffect, useState } from 'react'
import { useForm } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Components/AuthenticatedLayout';
import UploadImage from "@/components/UploadImage";
import Input from "@/components/Input";
import Select from '@/components/Select';
import TextArea from '@/components/TextArea';
import { PasswordSvg, PasswordSvgRed } from '@/Utils/icons';
import PasswordInput from '@/components/PasswordInput';
import { getEventValue, classNames } from '@/Utils/helpers';
import toast from '@/components/Toast';
import List from './List';

export default function Billings(props) {


    return (
        <AuthenticatedLayout smallHeader={true} >

            <div className="overflow-hidden bg-white py-12 lg:px-10  px-5 ">
                <div className="relative mx-auto ">
                    <div className="w-full">
                        <div className='border-b  border-viralget-gray-300 pb-space-32 mb-5'>
                            <span className='font-lexend font-bold text-t-xlg text-viralget-grey '>Billings</span>
                        </div>

                        <List {...props} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>

    )
}
