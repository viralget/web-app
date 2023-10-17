
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/20/solid'
import Button from '@/Components/Button'
import { PaystackButton } from 'react-paystack'
import PaymentButton from '@/Components/PaymentButton'
import { usePage } from '@inertiajs/inertia-react'
import UserPayment from '../UserPayment'
import PaystackPop from '@paystack/inline-js';
import { nFormatter, nairaSymbol, numberFormat } from '@/Utils/helpers'
import toast from '@/Components/Toast'
import { post } from '@/Utils/api'

// import { PaymentProccess } from '../UserPayment';

const products = [
    {
        id: 1,
        title: 'Basic Tee',
        href: '#',
        price: '$32.00',
        color: 'Black',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    // More products...
]
const deliveryMethods = [
    { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
    { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
    { id: 'credit-card', title: 'Credit card' },
    { id: 'paypal', title: 'PayPal' },
    { id: 'etransfer', title: 'eTransfer' },
]

export default function PAYG({ plan }) {

    const { auth } = usePage().props;
    const { user } = auth;

    const amount = 19000;


    const [getPaymentMethod, setPaymentMethod] = useState("");
    const [buttText, setPaymentText] = useState("Continue");
    const [isLoading, setIsLoading] = useState(false);


    function payWithPaystack(e) {
        e.preventDefault();

        setIsLoading(true);
        setPaymentText("Initiating payment...");
        // // console.log({ d: import.meta.env })

        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
            email: user.email,
            amount: amount * 100, //plan.amount * 100,
            reference: (new Date()).getTime().toString(),
            // plan: plan.plan_code,

            onSuccess: (transaction) => {
                // Payment complete! Reference: transaction.reference 
                // console.log({ transaction })
                verifyPayment(transaction.reference);
            },
            onCancel: () => {
                // user closed popup
                // console.log("You need this, stay back!")
            }
        });


    }

    async function verifyPayment(reference) {
        setPaymentText("Verifying payment..")
        const response = await post(route("payments.verify", { reference }));


        if (response.data.status) {
            toast.success('Payment verification successful');
            setTimeout(function () {
                window.location.href = route('billings.index');
            }, 2000);
        } else {
            toast.error('Something went wrong');
        }

        setIsLoading(false);
        // })
        // .catch((error) => {
        //     // console.log("error:", error);
        //     toast.error('Something went wrong');
        // }).finally(() => setIsLoading(false));

    }

    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-xl text-extrabold">Access influencers based on your needs</h2>
                <p>Get a compiled list of 60 influencers of any size in any industry of your choosing.</p>

                <form className="">

                    {/* Order summary */}
                    <div className="mt-10 lg:mt-0">

                        <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                            <h3 className="sr-only">Items in your cart</h3>

                            <dl className="space-y-6 border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex items-center justify-between pt-6">
                                    <dt className="text-base font-medium">Total</dt>
                                    <dd className="text-base font-medium text-gray-900">{nairaSymbol} {amount}  <s className='text-red-600'>60,000</s></dd>
                                </div>
                            </dl>


                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                {/* <PaymentProccess user */}
                                {/* <PaymentButton className='paystack-button bg-black w-full rounded p-4 text-white' {...{
                                    email: user.email,
                                    amount: plan.amount,
                                    amount_usd: plan.amount,
                                    metadata: {
                                        name: user.name,
                                        phone: user.phone,
                                        paymentType: 'pay-as-you-go',
                                        // plan: selectedPlan,
                                    },
                                    type: 'pay-as-you-go',
                                    paymentVerificationRoute: route("user.verify.payment", { reference: (new Date()).getTime().toString(), plan_id: plan.plan_code }),
                                    successRedirectsTo: route('billings.index'),
                                }}

                                >Make Payment</PaymentButton> */}
                                <Button isDark block className='block'
                                    onClick={payWithPaystack}
                                >
                                    Pre-Order now
                                </Button>

                            </div>

                        </div>
                        <p className='text-sm my-5'>First 60 business owners/brands to pre-order gets an extra 15 influencers *. Offer valid until 24th of July, 2023</p>

                    </div>
                </form>
            </div >
        </div >
    )
}
