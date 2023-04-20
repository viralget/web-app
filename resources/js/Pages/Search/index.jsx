// import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { SectionHeader } from '@/components/SectionHeader'
import SearchBox from './SearchBox'
import Categories from '@/components/Categories'

export default function Search({ categories }) {

  return (
    <>
  
      <Header />
      <main>
        <SectionHeader />
        <SearchBox categories={categories} />

        <Categories />
      </main>
      <Footer />
    </>
  )
}
