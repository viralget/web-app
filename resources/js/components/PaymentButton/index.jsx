import { usePage } from "@inertiajs/inertia-react";
import PaystackPaymentButton from "./PaystackPaymentButton";
// import StripePaymentButton from "./StripePaymentButton";

export default function (props) {
    const { amount, amount_usd } = props;
    const { app } = usePage().props;
    const { currency } = app;

    return (
        <div className="block">
            <PaystackPaymentButton {...props} amount={amount} />

            {/* {
                currency == 'NGN' ?
                    <PaystackPaymentButton {...props} amount={amount} />
                    :
                    <StripePaymentButton {...props} amount={amount_usd ?? amount} />
            } */}
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