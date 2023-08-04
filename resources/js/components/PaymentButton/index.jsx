import { usePage } from "@inertiajs/inertia-react";
import PaystackPaymentButton from "./PaystackPaymentButton";
import StripePaymentButton from "./StripePaymentButton";
// import StripePaymentButton from "./StripePaymentButton";

export default function (props) {
    const { amount, amount_usd, currency } = props;

    return (
        <div className="block">
            {/* <PaystackPaymentButton {...props} amount={amount} /> */}

            {
                currency == 'USD' ?
                    <StripePaymentButton {...props} amount={amount_usd ?? amount} />
                    :
                    <PaystackPaymentButton {...props} amount={amount} />
            }
        </div>
    )

    // return (
    //     <div className="block space-y-3">
    //         {amount > 0 && (
    //             <PaystackPaymentButton {...props} amount={amount} />
    //         )}
    //         {amount_usd > 0 && (
    //             <StripePaymentButton {...props} amount={amount_usd} />
    //         )}
    //     </div>
    // )
}