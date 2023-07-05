import { Fragment } from 'react'
import { Link, usePage } from '@inertiajs/inertia-react'
import { Popover, Transition } from '@headlessui/react'
import { classNames } from '@/Utils/helpers'

import Button from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { Head } from '@inertiajs/inertia-react'
import DropdownMenu from './Layouts/Navigation/DropdownMenu'
import Badge from './Badge'
import { header_routes } from '@/Utils/constants'


// const header_routes = [
//   {
//     name: "Pricing",
//     href: route('pricing')
//   },
//   {
//     name: "Contact Us",
//     href: route('contact')
//   },
//   {
//     name: "FAQs",
//     href: route('faqs')
//   },
//   // {
//   //   name: <> Track Campaign<Badge text="Coming soon" /> </>,
//   //   href: "/#"
//   // },
//   // {
//   //   name: "FAQs",
//   //   href: route('faqs')
//   // },
// ]

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={classNames(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={classNames(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-50 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {header_routes.map((route, index) => (
              <MobileNavLink key={index} href={route.href}>{route.name}</MobileNavLink>
            ))}
            {/* <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header({ useShadow = true }) {
  const { auth: { user } } = usePage().props;



  return (
    <>
      <Head>
        <title>Viralget - Data-driven end-to-end influencer marketing platform</title>
        <meta name="description" content="Viralget is a data-driven end-to-end influencer marketing platform, focused on getting actionable influencer marketing data insight, tracking and managing influencers." />
        {/* <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        {{ Vite::asset('resources/assets/images/favicon.ico') }} */}
      </Head>
      <header className={classNames("py-5", useShadow && 'shadow-md')}>
        <Container>
          <nav className="relative flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <div>
                <Link href="/" aria-label="Home">
                  <Logo className="h-10 w-auto" />
                </Link>
              </div>
            </div>
            <div className="hidden font-bold justify-center items-center md:flex md:gap-x-3">
              {header_routes.map((route, index) => (
                <NavLink key={index} href={route.href} className="text-t-xsx font-lexend font-medium ">{route.name}</NavLink>
              ))}
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              {user ?
                <DropdownMenu user={user} />
                :
                <>
                  {/* <div className="hidden md:block">
                    <NavLink href="/login" className="text-viralget-red rounded-md  text-t-xsx font-lexend font-medium px-space-30  py-space-15   border border-viralget-red">Log in</NavLink>
                  </div> */}
                  <div className=" md:block">
                    <a href="/register" className="rounded-md  px-space-30  py-space-15  bg-viralget-red  ">

                      <span className='font-lexend font-medium  text-white text-t-xsx'>Pre Order</span>
                    </a>
                  </div>
                  {/* <Button href="/join" color="blue">
                    <span>
                      Join the waitlist
                    </span>
                  </Button> */}
                </>
              }
              {/* <div className="-mr-1 md:hidden">
                <MobileNavigation />
              </div> */}
            </div>
          </nav>
        </Container>
      </header>
    </>

  )
}
