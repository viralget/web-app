import TitleText from '@/components/TitleText';
import EmptyState from '@/components/EmptyState';

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
    return (
        <>
            <TitleText text="Top Influencers" />

            {data?.length > 0 ?

                <ul role="list" className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                    {data.map((item) => (
                        <li
                            key={item.email}
                            className="col-span-1  rounded bg-white text-center shadow"
                        >
                            <div>
                                <img class="h-36 w-full object-cover" src={item.profile_banner_url} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col p-8 -mt-16">
                                <img className="mx-auto h-20 w-20 flex-shrink-0 rounded-full" src={item.profile_photo_url} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{item.full_name}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="text-sm text-gray-500">{item.username}</dd>

                                </dl>
                            </div>
                            <div>
                                <div className="flex justify-between mx-10 mb-5 ">
                                    <div className="text-center items-center flex-col">
                                        <span className="text-xl block">{item.followers_count}</span>
                                        <span className="text-sm text-gray-600">Followers</span>
                                    </div>
                                    <div className="text-center items-center flex-col">
                                        <span className="text-xl block p-0">6.3k</span>
                                        <span className="text-sm text-gray-600">Interactions</span>
                                    </div>
                                    <div className="text-center items-center flex-col">
                                        <span className="text-xl block">6.3k</span>
                                        <span className="text-sm text-gray-600">Engagement</span>
                                    </div>

                                </div>
                                {/* <div className="flex text-center justify-between">
                                        <div className=" ">
                                            <a
                                                href={`tel:${item.telephone}`}
                                                className=" block w-0  text-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                            >
                                                <span className="block text-xl">6.3k</span>
                                                <span className="ml-3">Call</span>
                                            </a>
                                        </div>
                                        <div className="">
                                            <a
                                                href={`tel:${item.telephone}`}
                                                className=" block w-0 text-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                            >
                                                <span className="block text-xl">6.3k</span>
                                                <span className="ml-3">Call</span>
                                            </a>
                                        </div>
                                        <div className=" ">
                                            <a
                                                href={`tel:${item.telephone}`}
                                                className=" block w-0 text-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                            >
                                                <span className="block text-xl">6.3k</span>
                                                <span className="ml-3">Call</span>
                                            </a>
                                        </div>
                                    </div> */}
                            </div>
                        </li>
                    ))}
                </ul >
                :
                <EmptyState />
            }
        </>
    )
}
