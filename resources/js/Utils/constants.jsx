import { 
    QualityAudienceWithB,
    EngagementWithBSvg,
    ImpressionsWithB,
    EngagementRateWithBSvg,
    ReachabilityWithBSvg,
    ReactTotalWithBSvg,
} from '@/Utils/icons';



export     const tabs = [
    {
      name: 'Overview', 
      value:'overview'
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

   export  const BoardcadsList  = [
        {
            label: 'Quality Audience Total',
            value: '2.43M',
            icon:( <QualityAudienceWithB /> )
        },
        {
            label: 'Authentic Engagement Total',
            value: '1.12M',
            icon: (<EngagementWithBSvg /> )
        },
        {
            label: 'Impressions total',
            value: '932K',
            icon:( <ImpressionsWithB /> )
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