// import Image from 'next/future/image'

import Button from '@/components/Button'
import { Container } from '@/components/Container'
// import nestle from '@/../assets/images/logos/nestle.jpeg'
// import remita from '@/../assets/images/logos/remita.png'
// import shoprite from '@/../assets/images/logos/shoprite.png'
import powerHorse from '@/../assets/images/logos/powerhorse.png'
import lagos from '@/../assets/images/logos/lagos.png'
import emergencyresponse from '@/../assets/images/logos/emergency-response.png'
import chi from '@/../assets/images/logos/chi.png'
import gomoney from '@/../assets/images/logos/gomoney.png'
import nestle from '@/../assets/images/logos/nestle.png'
import pwc from '@/../assets/images/logos/pwc.png'
// import lordsGin from '@/../assets/images/logos/lords-gin.jpeg'
import TiktokLogo from "@/../assets/images/tiktok-logo.png";
import InstagramLogo from "@/../assets/images/instagram-logo.png";
import YoutubeLogo from "@/../assets/images/youtube-logo.png";
import TwitterLogo from "@/../assets/images/twitter-logo.png";
// import HeroBanner from "@/../assets/images/hero-banner.svg";
import HeroBanner from "@/../assets/images/home_bg.png";

const brands = [
  [
    { name: 'Nestle', logo: nestle },
    { name: 'Power Horse', logo: powerHorse },
    { name: 'Pwc', logo: pwc },
  ],
  [
    { name: 'Shoprite', logo: shoprite },
    { name: 'Remita', logo: remita },
    { name: 'Lord\'s Gin', logo: lordsGin },
  ],
];

export function Hero() {
  return (
    <div className='relative w-full  lg:h-[65rem]' >


      <div>
        <div className="overflow-hidden p-5 relative  md:h-[49rem] pt-10 flex-1 bg-gradient-to-b from-[#FF9857]   via-[#FF9857] to-[#FA699D]">

          <div className="flex items-center justify-center   max-w-6xl mx-auto  mt-space-70  ">
            <div className='text-white  flex flex-col  text-center'>
              <span className='font-lexend font-bold  text-t-xxlg   '>Data-driven End-to-end influencer <br /> marketing platform to drive your business forward</span>
              <span className='font-normal text-center  text-viralget-gray-light text-h1-x font-lexend mt-space-26 px-space-5'>Does your current influencer marketing lack data insight? Is your influencer management, execution & tracking approach exhausting?
                <br />THEN VIRALGET WAS BUILT FOR YOU</span>
            </div>
          </div>

          <div className="absolute bottom-0 hidden md:flex w-full ">
            <div className=" relative opacity-25 w-full">
              <div className='max-w-32 w-[16rem] absolute -left-[6rem]  -bottom-[7rem]'>
                <img src={TiktokLogo} style={{ width: '30px !important' }} className='' />
              </div>

              <div className="w-[12rem] absolute  right-0 bottom-[30rem]   ">
                <img src={InstagramLogo} className='w-full' />
              </div>

              <div className="w-[10rem] absolute  left-20 bottom-[15rem]  ">
                <img src={TwitterLogo} className='w-[10rem]' />
              </div>

              <div className="w-[16rem] absolute   right-0  bottom-[8rem]">
                <img src={YoutubeLogo} className='full' />
              </div>
            </div>
          </div>
        </div>





        <div className=' absolute h-[500px]  lg:flex  overflow-hidden w-[1000px] lg:mx-auto bg-gradient-to-b from-[#E0E0E080]   to-[#F2F2F233]    rounded-lg  border border-[#E0E0E04D] hidden top-[30rem] left-0 right-0  justify-center items-center'>
          <div className='p-5 w-full h-full overflow-hidden  rounded-lg '>
            <img src={HeroBanner} className="object-cover" />
          </div>
        </div>
      </div>








      {/* <div className="hidden sm:absolute sm:inset-0 sm:block w-full" aria-hidden="true">
        <LottieAnimation animationData={worldJson} className="opacity-20" />
      </div> */}
      {/* 
      <Container className="pt-20 pb-16 text-center lg:pt-32 relative">

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
          <span className="relative whitespace-nowrap text-orange-600">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-600/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative"> Data-driven</span>
          </span>{' '}
          end-to-end influencer marketing platform.
        </h1>
        <h2 className="mx-auto max-w-4xl font-display text-6xl font-medium tracking-tight text-slate-800 sm:text-4xl mt-3">to drive your business forward</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg tracking-tight text-slate-700">
          Viralget is built for you. Get actionable influencer marketing data insight, track and manage influencers.
        </p> */}
      {/* <div className="mt-6 flex justify-center gap-x-6">
          <Button href="/join">Join the waitlist </Button> */}
      {/* <Button href="/explore">Get Started!</Button> */}
      {/* <Button
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            variant="outline"
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3 flex-none fill-orange-600 group-active:fill-current"
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
            </svg>
            <span className="ml-3">Watch video</span>
          </Button> */}
      {/* </div> */}

      {/* <div className="hidden md:block mt-12 ">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src={viralgetLanding}
            // src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
            alt=""
          />
        </div> */}

      {/* <div className="mt-16 lg:mt-24">
          <p className="font-display font-bold text-base text-slate-900">
            Join the world’s top brands
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {brands.map((group, groupIndex) => (
              <li key={groupIndex}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-10 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((company) => (
                    <li key={company.name} className="flex">
                      <img src={company.logo}
                        // style={{ filter: "invert(100%)", width: "100px" }}
                        alt={company.name} unoptimized />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div> 
      </Container>*/}
    </div>
  )
}
