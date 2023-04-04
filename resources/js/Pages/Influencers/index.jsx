
import { Fragment, useState } from 'react'
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import { Container } from '@/Components/Container'
import SearchBox from '../Search/SearchBox'
import { useForm, usePage } from '@inertiajs/inertia-react'
import TopInfluencers from './TopInfluencers'
import TopCategories from './TopCategories'
import RecentSearches from './RecentSearches'
import List from './list'
import TableSkeleton from '@/Components/Skeleton/Table';
import Feature from './Feature';

export default function index({ saved_search, search_history, top_categories, top_influencers, categories }) {
    const [list, setList] = useState(false)
    const [searchActive, setSearchActive] = useState(false)
    const [loading, setLoading] = useState(false);

    return (

        <AuthenticatedLayout title="Search through our database of 33.5m+ influencers">
            {/* </div> */}

            <main className="flex-1 pb-8">
                <Container>
                    <SearchBox categories={categories} searchActive={() => setSearchActive(true)} loading={() => setLoading(true)} handleResult={(result) => setList(result)} />

                    <div>
                        <div className="">
                          
                            {/* {saved_search?.length > 0 && (
                                <RecentSearches title="Saved Searches" data={saved_search} isSaved />
                            )}
                            {search_history?.length > 0 && (
                                <RecentSearches data={search_history} />
                            )}
                            <Feature />
                            <TopCategories data={top_categories} /> */}
                            <TopInfluencers data={top_influencers} />
                           
                        </div>
                    </div>
                </Container>
            </main>


        </AuthenticatedLayout>
    )
}
