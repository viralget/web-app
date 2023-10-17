import { loadStripe } from '@stripe/stripe-js';
import { useStripe, Elements, PaymentRequestButtonElement, } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import Button from '../Button';
import { post } from '@/Utils/api';
import toast from '../Toast';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// console.log("stripePromise:", stripePromise)

const StripePaymentButton = (props) => {

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm {...props} />
        </Elements>

    );
};

export default StripePaymentButton;

const CheckoutForm = ({ className, isLink, plan, successRedirectsTo, type, amount = 0, email, metadata, paymentVerificationRoute, paymentDataExtras = {}, children, disabled = false, postPaymentAction }) => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);

    useEffect(() => {
        if (stripe) {
            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: metadata?.details ?? 'Viralget Payment',
                    amount: amount * 100,
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });

            // Check the availability of the Payment Request API.
            pr.canMakePayment().then(result => {
                if (result) {
                    setPaymentRequest(pr);

                }
            });
        }
    }, [stripe]);


    const onSuccess = async ({ reference }) => {
        // Implementation for whatever you want to do with reference and after success call.

        const data = {
            amount,
            plan,
            reference,
            type,
            payment_gateway: 'stripe',
            ...paymentDataExtras
        }

        const response = await post(paymentVerificationRoute, data, true);

        if (response.data.status) {

            toast(response.data.message ?? 'Payment successful!')

            if (postPaymentAction) {
                postPaymentAction(reference)
            }

            if (successRedirectsTo) {
                // redirect to success page
                setInterval(() => {
                    window.location.href = successRedirectsTo;
                }, 300);
            }
        } else {
            toast.error('An error occurred. Please contact admin')
        }
    };

    const options = {
        paymentRequest,
        style: {
            paymentRequestButton: {

                type: 'default',
                // One of 'default', 'book', 'buy', or 'donate'
                // Defaults to 'default'

                theme: 'dark',
                // One of 'dark', 'light', or 'light-outline'
                // Defaults to 'dark'

                height: '64px',
                // Defaults to '40px'. The width is always '100%'.
            },
        }
    }

    if (paymentRequest) {
        paymentRequest.on('paymentmethod', async (ev) => {

            const customer = await post(route('payments.stripe.customer.create'), { email, payment_method_id: ev.paymentMethod.id })

            if (!customer?.data) {
                ev.complete('fail');
                return;
            }

            // console.log({ ev, customer })
            const data = { amount, type, payment_method_id: ev.paymentMethod.id, customer_id: customer?.data?.id, email: customer?.data?.email, metadata };

            if (type == 'subscription') {
                data.plan_id = plan
            }

            const response = await post(route('payments.stripe.intent'), data)

            const clientSecret = response?.data?.client_secret;


            if (!clientSecret) {
                ev.complete('fail');
                return;
            }

            const confirmation = await stripe.confirmCardPayment(
                clientSecret,
                { payment_method: ev.paymentMethod.id },
                { handleActions: false }
            );

            const { paymentIntent, error: confirmError } = confirmation;

            // // console.log({ confirmation })

            // // console.log({ clientSecret, response })

            if (confirmError) {
                // Report to the browser that the payment failed, prompting it to
                // re-show the payment interface, or show an error message and close
                // the payment interface.
                ev.complete('fail');
                return;
            } else {
                // Report to the browser that the confirmation was successful, prompting
                // it to close the browser payment method collection interface.
                ev.complete('success');
                // Check if the PaymentIntent requires any actions and, if so, let Stripe.js
                // handle the flow. If using an API version older than "2019-02-11"
                // instead check for: `paymentIntent.status === "requires_source_action"`.
                if (paymentIntent.status === "requires_action") {
                    // Let Stripe.js handle the rest of the payment flow.
                    const { error } = await stripe.confirmCardPayment(clientSecret);
                    if (error) {
                        // The payment failed -- ask your customer for a new payment method.
                    } else {
                        // console.log('success', paymentIntent)
                        // The payment has succeeded.
                        onSuccess({ reference: paymentIntent.id })

                    }
                } else {
                    // The payment has succeeded.
                    onSuccess({ reference: paymentIntent.id })
                }
            }
            // onSuccess();
        });


        return <Button block type="button" isLink={isLink} usePrimary disabled={disabled} className={className} onClick={() => {
            paymentRequest.show()
        }}>{children ?? 'Make Payment'}</Button>
        return <PaymentRequestButtonElement options={options} />
    }

    return <Button block type="button" isLink={isLink} usePrimary disabled={true} className={className} >{children ?? 'Make Payment'}</Button>;

};

