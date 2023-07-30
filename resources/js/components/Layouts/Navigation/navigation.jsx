import {
    FireIcon, MagnifyingGlassIcon, UserCircleIcon,
} from '@heroicons/react/24/outline'
import { CircleStackIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon, CursorArrowRippleIcon, HomeIcon, RectangleStackIcon } from '@heroicons/react/24/outline';


// export const services_routes = [
//     {
//         name: "Get your CV reviewed",
//         href: 'cv-review'
//     },
//     {
//         name: "Contact Us",
//         href: 'contact'
//     },
// ]


export const auth_routes = [
    // {
    //     name: "Explore Influencers",
    //     href: 'explore'
    // },
    // {
    //     name: "Profile Influencers",
    //     href: 'profiling'
    // },
    {
        name: "Account Settings",
        href: 'settings'
    },    // {
    //     name: "Log Out",
    //     href: 'logout'
    // },
]

export const guest_routes = [
    {
        name: 'Home',
        href: 'home',
        icon: HomeIcon,

    },
    // {
    //     name: 'Search Jobs',
    //     href: 'search',
    //     icon: MagnifyingGlassIcon,
    //     hideDesktop: true,
    // },
    // {
    //     name: 'Recommended Jobs',
    //     href: 'recommendations',
    //     icon: FireIcon,
    //     hideDesktop: true,
    // },
    {
        name: 'Login',
        href: 'login',
        icon: UserCircleIcon,
        hideDesktop: true,
    },
    {
        name: 'Create an account',
        href: 'register',
        icon: CursorArrowRippleIcon,
        hideDesktop: true,
    },
]

export const navigation = [
    {
        name: 'Dashboard',
        href: 'home',
        icon: HomeIcon,

    },

]
