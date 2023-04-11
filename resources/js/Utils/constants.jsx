import { 
    QualityAudienceWithB,
    EngagementWithBSvg,
    ImpressionsWithB,
    EngagementRateWithBSvg,
    ReachabilityWithBSvg,
    ReactTotalWithBSvg,
} from '@/Utils/icons';

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
