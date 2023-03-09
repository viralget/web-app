import TitleText from '@/components/TitleText'
import EmptyState from '@/components/EmptyState';

const products = [
    {
        id: 1,
        name: 'Lifestyle',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    {
        id: 1,
        name: 'Food & Cooking',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    {
        id: 1,
        name: 'Skit Makers',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    {
        id: 1,
        name: 'Northern Nigeria',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    {
        id: 1,
        name: 'Lifestyle',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    {
        id: 1,
        name: 'Food & Cooking',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    {
        id: 1,
        name: 'Skit Makers',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },
    {
        id: 1,
        name: 'Northern Nigeria',
        color: 'White and black',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
        imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
        price: '$140',
    },    // More products...
]

export default function TopCategories({ data }) {
    return (
        <div>
            <div className="flex  justify-between  w-full">
               <TitleText text="Top Categories" />
              <div>
                   <a href={route('allcategories.page')}   className='text-xs font-bold  text-viralget-red'  >View all</a>
              </div>
            </div>
           
            {data?.length > 0 ?

                <div className="mt-5 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
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
                                    <p className="relative text-lg font-semibold text-white capitalize ">{item.name}</p>
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
