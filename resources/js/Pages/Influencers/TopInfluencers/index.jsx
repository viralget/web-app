import { useState } from 'react';
import TitleText from '@/components/TitleText';
import EmptyState from '@/components/EmptyState';
import InfluencerCard from '../RecentSearches/InfluencerCard';
import InfluencerProfile from "@/Pages/InfluencerProfile";


const people = [
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        name: 'Jane Cooper',
        title: 'Paradigm Representative',
        role: 'Admin',
        email: 'janecooper@example.com',
        telephone: '+1-202-555-0170',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    // More people...
]

export default function TopInfluencers({ data }) {

    const [isOpen, setIsOpen] = useState(false);
    const [getInfluencer, setInfluencer] = useState([]);

    function handleProfile(influencer){
       if(influencer){
            setIsOpen(true);
            setInfluencer(influencer)
        }
    }


    return (
        <>
       {
        isOpen ? <InfluencerProfile  influencer={getInfluencer} /> : null
       }
    
            <TitleText text="Top Influencers" />

            {data?.length > 0 ?

                <div role="list" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                    {data.map((item) => (
                        <InfluencerCard influencer={item}  showBanner handleProfile= {() => handleProfile(item)} />
                    ))}
                </div >
                :
                <EmptyState />
            }
        </>
    )
}
