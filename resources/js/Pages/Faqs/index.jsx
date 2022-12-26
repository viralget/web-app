import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Guest from '@/components/Layouts/Guest'

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Guest>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
                    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt className="text-lg">
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                                                <span className="font-medium text-gray-900">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    <ChevronDownIcon
                                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base text-gray-500">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </Guest>
    )
}


// // import Head from 'next/head'

// import { CallToAction } from '@/components/CallToAction'
// import { Faqs } from '@/components/Faqs'
// import { Footer } from '@/components/Footer'
// import { Header } from '@/components/Header'
// import { Hero } from '@/components/Hero'
// import { Pricing } from '@/components/Pricing'
// import { PrimaryFeatures } from '@/components/PrimaryFeatures'
// import { SecondaryFeatures } from '@/components/SecondaryFeatures'
// import { Testimonials } from '@/components/Testimonials'
// import Guest from '../../components/Layouts/Guest'

// export default function Home() {
//     return (
//         <Guest>
//             {/* <Head>
//         <title>TaxPal - Accounting made simple for small businesses</title>
//         <meta
//           name="description"
//           content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
//         />
//       </Head> */}
//             <Header />
//             {/* <main>
//                 <Hero />
//                 <PrimaryFeatures />
//                 {/* <SecondaryFeatures /> */}
//                 {/* <CallToAction /> */}
//                 <Testimonials />
//                 {/* <Pricing /> */}
//                 {/* <Faqs /> */}
//             </main>
//             <Footer /> */}
//         </Guest>
//     )
// }
