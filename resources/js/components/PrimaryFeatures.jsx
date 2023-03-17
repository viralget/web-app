import { useEffect, useState } from 'react'
// import Image from 'next/future/image'
import { Tab } from '@headlessui/react'
import { classNames } from '@/Utils/helpers'

import { Container } from '@/components/Container'
import backgroundImage from '@/../assets/images/background-features.jpg'
import screenshotExpenses from '@/../assets/images/screenshots/find-influencers.png'
import screenshotPayroll from '@/../assets/images/screenshots/filters.png'
import screenshotReporting from '@/../assets/images/screenshots/analyze.png'
import screenshotVatReturns from '@/../assets/images/screenshots/campaigns.png'

const features = [
  {
    title: 'Find Influencers',
    description:
      "Search through our database to discover wide varieties of influencers across over 40 different niches and categories. ",
    image: screenshotExpenses,
  },
  {
    title: 'Smart Filter',
    description:
      "Using the most accurate filters in the industry, our AI powered smart filters will help you quickly find the right influencer for you, with an audience that is exactly right for your product or service.",
    image: screenshotPayroll,
  },
  {
    title: 'Analyze Influencers',
    description:
      "Use AI powered account analytics to analyse influencers online performance, their audience, contents and value to aid your influencer selection.",
    image: screenshotReporting,
  },
  {
    title: 'Create Campaigns',
    description:
      'Create a campaign list and add your selected influencers. When you’re ready to run your campaign, all your saved influencers will be just a click away.',
    image: screenshotVatReturns,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-gradient-to-r from-yellow-600 to-fuchsia-600 pt-20 pb-28 sm:py-32"
    >

      {/* bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 */}
      {/* <img
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight font-bold text-white sm:text-4xl md:text-5xl">
            An experience you’d expect from an influencer tool
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Why break your influencer campaign flow into fragments, making it hard - when you can do it all on ViralGet, with actionable insights
            guiding you through each stage
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={classNames(
                        'group relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5'
                      )}
                    >
                      <h3>
                        <Tab
                          className={classNames(
                            'font-display text-lg',
                            selectedIndex === featureIndex
                              ? 'text-orange-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white'
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={classNames(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white'
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 top-[-6.5rem] bottom-[-4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <img
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
