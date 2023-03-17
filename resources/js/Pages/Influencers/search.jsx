
import { Fragment, useState } from 'react'
import AuthenticatedLayout from '@/Components/AuthenticatedLayout'
import { Container } from '@/Components/Container'
import SearchBox from '../Search/SearchBox'
import { useForm, usePage } from '@inertiajs/inertia-react'
import TopInfluencers from './TopInfluencers'
import TopCategories from './TopCategories'
import RecentSearches from './RecentSearches'
import List from './list'
import TableSkeleton from '@/Components/Skeleton/Table'
import Pagination from '@/Components/Pagination'

export default function Search({ list, categories }) {
    const [searchActive, setSearchActive] = useState(false)
    const [loading, setLoading] = useState(false);

    return (

        <AuthenticatedLayout title="Search through our database of 33.5m+ influencers">

            <main className="flex-1 pb-8">
                <Container>
                    <SearchBox categories={categories} searchActive={() => setSearchActive(true)} loading={() => setLoading(true)} />

                    <div>
                        <div className="space-y-10">
                            {loading ? <TableSkeleton /> :
                                <>
                                    <List data={list.data} count={list?.meta?.total ?? 0} />
                                    <Pagination data={list.meta} />

                                </>
                            }
                        </div>
                    </div>
                </Container>
            </main>

            {/*  */}
        </AuthenticatedLayout>
    )
}
