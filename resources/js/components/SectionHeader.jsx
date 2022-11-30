import { useEffect, useState } from 'react'
// import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import { classNames } from '@/Utils/helpers'

import { Container } from '@/components/Container'
import backgroundImage from '@/../assets/images/background-features.jpg'
import screenshotExpenses from '@/../assets/images/screenshots/expenses.png'
import screenshotPayroll from '@/../assets/images/screenshots/payroll.png'
import screenshotReporting from '@/../assets/images/screenshots/reporting.png'
import screenshotVatReturns from '@/../assets/images/screenshots/vat-returns.png'

export function SectionHeader({ title, children }) {


    return (
        <section
            id="features"
            aria-label="Features for running your books"
            className="relative overflow-hidden bg-gradient-to-r from-yellow-600 to-fuchsia-600 pt-20 pb-28 sm:py-32"
        >
            {children ?? (
                <Container className="relative">
                    <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                        {title && (
                            <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                                {title}
                            </h1>
                        )}

                    </div>

                </Container>
            )}

            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    {title && (
                        <h1 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
                            {title}
                        </h1>
                    )}

                </div>

            </Container>
        </section>
    )
}
