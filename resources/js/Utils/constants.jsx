import {
    QualityAudienceWithB,
    EngagementWithBSvg,
    ImpressionsWithB,
    EngagementRateWithBSvg,
    ReachabilityWithBSvg,
    ReactTotalWithBSvg,
} from '@/Utils/icons';

import Logo_1 from "@/../assets/images/logos/entrepreneur.png"
import Logo_2 from "@/../assets/images/logos/sun.png"
import Logo_3 from "@/../assets/images/logos/prweek.png"
import Logo_4 from "@/../assets/images/logos/wired.png"
import Logo_5 from "@/../assets/images/logos/hosting.png"
import Logo_6 from "@/../assets/images/logos/business.png"




export const NewsList = [

    {
        id: 1,
        title: 'Fast, cheap, and out of control: inside Shein’s sudden rise',
        content: 'According to VirlaGet, Shein is unusual in the industry for the enormous number of influencers it sends free clothing to. They in turn share discount codes with their followers and earn a commission on the sales.',
        date: '04 May, 2022',
        image: Logo_4
    },
    {
        id: 1,
        title: 'Twitter vs. Instagram: Which is more important to influencers?',
        content: 'The answer might surprise you. And other highlights from ViralGet\'s State of influencer marketing report',
        date: '14 Apr, 2022',
        image: Logo_3
    },
    {
        id: 2,
        title: 'Cristiano Ronaldo is first person to reach 400MILLION Instagram followers',
        content: 'It also describes 18.7 percent of his followers as \'suspicious accounts\', with a further 6.4 percent tarnished as \'mass followers accounts. ViralGet, describes \'mass followers\' accounts as those...',
        date: '07 Feb, 2022',
        image: Logo_2
    },
    {
        id: 4,
        title: 'How to Avoid Getting Scammed by Influencers With Fake Followings',
        content: 'One of the most questionable is buying fake followers where, according to ViralGet’s State of Influencer Marketing 2021 report, 55% and 45% of Instagram followers are real users and inactive users or bots, respectively.',
        date: '11 Jan, 2022',
        image: Logo_1
    },
    {
        id: 6,
        title: 'Instagram \'micro\' influencers are helping fuel industry rebound',
        content: 'Brands working with micro and nano influencers has been a continuing industry trend, which the pandemic has bolstered, said the CEO and cofounder of VirlaGet.',
        date: '15 Dec, 2021',
        image: Logo_6
    },
    {
        id: 7,
        title: 'How to build a powerhouse PR campaign through influencer marketing',
        content: 'If you treat influencer marketing as an ongoing process, and not just one-time promotions, then you need to set and track key performance indicators for each influencer.',
        date: '10 Dec, 2021',
        image: Logo_5
    }
]



export const tabs = [
    {
        name: 'Overview',
        value: 'overview'
    },
    {
        name: 'Influencer',
        value: 'influencer'
    },
    {
        name: 'Audience',
        value: 'audience'
    },
    {
        name: 'Content',
        value: 'content'
    },
    {
        name: 'Value',
        value: 'value'
    },
    {
        name: 'Brand',
        value: 'brand'
    },
    {
        name: 'Lookalike influencer',
        value: 'lookalike_influencer'
    },


];

export const BoardcadsList = [
    {
        label: 'Quality Audience Total',
        value: '2.43M',
        icon: (<QualityAudienceWithB />)
    },
    {
        label: 'Authentic Engagement Total',
        value: '1.12M',
        icon: (<EngagementWithBSvg />)
    },
    {
        label: 'Impressions total',
        value: '932K',
        icon: (<ImpressionsWithB />)
    },
    {
        label: 'Engagement Rate',
        value: '2.34%',
        icon: (<EngagementRateWithBSvg />)
    },
    {
        label: 'Audience reachability',
        value: '2.43M',
        icon: (<ReachabilityWithBSvg />)
    },
    {
        label: 'Reach total',
        value: '2.13M',
        icon: (<ReactTotalWithBSvg />)
    }
]



export const plans = [
    {
        id: 1,
        name: 'Basic',
        duration: 'monthly',
        price: 79,
        isPopular: false
    },
    {
        id: 2,
        name: 'Business',
        duration: 'monthly',
        price: 129,
        isPopular: false
    },
    {
        id: 3,
        name: 'Advanced',
        duration: 'monthly',
        price: 329,
        isPopular: true
    },
    {
        id: 4,
        name: 'Enterprise',
        duration: 'monthly',
        price: 529,
        isPopular: false
    },

    {
        id: 5,
        name: 'Basic',
        duration: 'yearly',
        price: 79,
        isPopular: false
    },
    {
        id: 6,
        name: 'Business',
        duration: 'yearly',
        price: 129,
        isPopular: false
    },
    {
        id: 7,
        name: 'Advanced',
        duration: 'yearly',
        price: 329,
        isPopular: true
    },
    {
        id: 8,
        name: 'Enterprise',
        duration: 'yearly',
        price: 529,
        isPopular: false
    },
]


export const availableCurrency = [

    {
        name: 'USD',
        symbol: '$',
        isSelected: true
    },
    {
        name: 'NGN',
        symbol: '₦',
        isSelected: false
    },
    {
        name: 'ZAR',
        symbol: 'R',
        isSelected: false
    },
    {
        name: 'KES',
        symbol: 'K',
        isSelected: false
    },
    {
        name: 'GHS',
        symbol: '₵',
        isSelected: false
    },
]



export const header_routes = [
    {
        name: "Pricing",
        href: route('pricing.page')
    },
    {
        name: "Contact Us",
        href: route('contact')
    },
    {
        name: "FAQs",
        href: route('faqs')
    },
]