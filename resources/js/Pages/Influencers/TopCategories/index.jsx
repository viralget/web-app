import EmptyState from '@/components/EmptyState';
import Typography from '@/components/Typography';


export default function TopCategories({ data }) {
    return (
        <div className='mt-space-60'>
            <div className="flex  justify-between  w-full">
                   <Typography variant='h2' content="Top Categories" />
                    <div>
                        <a href={route('allcategories.page')}   className='text-xs font-bold  text-viralget-red'  >View all</a>
                    </div>
            </div>
           
            {data?.length > 0 ?

                <div className="mt-space-20 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {data.map((item, index) => (
                        <a href="#" key={index}>
                            <div className="relative">
                                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-fuchsia-600 ">
                                    <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden rounded-lg p-4">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 top-0 h-full bg-black opacity-50"
                                    />
                                 
                                    <h3 className=" relative text-t-xs font-lexend font-bold text-white capitalize ">{item.name}</h3>
                                </div>
                            </div>

                        </a>
                    ))}
                </div>

                :
                <EmptyState />
            }
        </div>
    )
}
