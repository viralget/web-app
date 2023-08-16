
import { Fragment, useContext, useEffect, useState } from 'react'
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
import EmptyState from '@/Components/EmptyState'
import { nFormatter, numberFormat } from '@/Utils/helpers'
import { PlatformContext } from '@/Contexts/PlatformContext'

export default function Search({ list, categories, total_count, has_query }) {
    const [loading, setLoading] = useState(false);
    const [platform] = useContext(PlatformContext);

    return (
        <AuthenticatedLayout smallHeader={false} title={`Search through our database of influencers`} bgColor={platform.bg_color}>

            <main className="flex-1 pb-8 px-10">
                {/* <Container> */}
                <SearchBox categories={categories} searchActive={() => setLoading(true)} onLoading={() => setLoading(true)} />

                <div>
                    <div className="space-y-10 my-6">
                        {loading ? <TableSkeleton /> :

                            has_query ?
                                Object.keys(list)?.length > 0 ?
                                    <>
                                        <List data={list?.data} count={list?.meta?.total ?? 0} paginationData={list} />
                                    </>

                                    :
                                    <EmptyState title="No result found" />
                                : <EmptyState title="Please use the search filter to set your search preferences" />
                        }
                    </div>
                </div>
                {/* </Container> */}
            </main>

            {/*  */}
        </AuthenticatedLayout>
    )
}
