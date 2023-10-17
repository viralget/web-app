import Guest from '@/components/Layouts/Guest'

import PricingPage from '../PricingPage';


export default function GuestPricing(props) {
    // console.log({ props })
    return (
        <Guest>
            <PricingPage {...props} />
        </Guest>
    )
}
