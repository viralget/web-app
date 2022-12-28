import Guest from '@/components/Layouts/Guest'
import { Head } from '@inertiajs/inertia-react';
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Button from '../../components/Button';
import LottieAnimation from '../../components/LottieAnimation';
import succesfulJson from '../../../assets/lottie/successful.json';

export default function Welcome() {

    return (
        <Guest>
            <Head title="Welcome" />
            <div className="mx-auto max-w-7xl p-4">
                <div className="mx-auto max-w-3xl text-center space-y-10">
                    <LottieAnimation className="w-72 h-72 mx-auto" animationData={succesfulJson} />
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        You've successfully created an account!
                    </h2>
                    <Button href={route('influencers.search')}>Start Searching</Button>
                </div>
            </div>

        </Guest>
    );
}
