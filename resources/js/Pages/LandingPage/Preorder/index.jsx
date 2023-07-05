
import { useState } from 'react'
import Button from '@/Components/Button'
import { usePage } from '@inertiajs/inertia-react'
import PaystackPop from '@paystack/inline-js';
import { getEventValue, nairaSymbol, onlyUnique } from '@/Utils/helpers'
import toast from '@/Components/Toast'
import { post } from '@/Utils/api'
import App from '@/Components/Layouts/App';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import MultiSelect from '@/Components/MultiSelect';
import Label from '@/Components/Label';

export default function Preorder() {

    const { auth } = usePage().props;
    const { user } = auth;

    const amount = 19999;

    const [buttText, setPaymentText] = useState("Continue");
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [data, setData] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);


    function handleChange(e) {
        e.preventDefault(e);

        let field = e.target.name;
        let value = e.target.value;

        handleUpdateData(field, value)
    }

    function handleUpdateData(field, value) {
        let _data = data;

        _data[field] = value;

        setData(data)
    }

    function payWithPaystack(e) {
        e.preventDefault();

        console.log({ data })
        if (!email) {
            alert('Please enter your email address')
        }

        setIsLoading(true);
        setPaymentText("Initiating payment...");
        // console.log({ d: import.meta.env })

        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
            email: email,
            amount: amount * 100, //plan.amount * 100,
            reference: (new Date()).getTime().toString(),
            metadata: data,
            // plan: plan.plan_code,

            onSuccess: (transaction) => {
                // Payment complete! Reference: transaction.reference 
                // console.log({ transaction })
                verifyPayment(transaction.reference);
            },
            onCancel: () => {
                // user closed popup
                console.log("You need this, stay back!")
            }
        });


    }

    async function verifyPayment(reference) {
        setPaymentText("Verifying payment..")
        const response = await post(route("payments.verify", { reference }));

        if (response.data.status) {
            toast.success('Payment verification successful');
            setTimeout(function () {
                setShowSuccess(true);

                // window.location.href = route('billings.index');
            }, 2000);
        } else {
            toast.error('Something went wrong');
        }

        setIsLoading(false);
    }

    return (
        <App>

            {showSuccess ? <Success /> :
                <div className="home-bg  h-screen overflow-hidden"  >

                    <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
                        <h1 className='leading-5 text-3xl my-10 font-extrabold text-center font-lexend'>Pre-order</h1>
                        <h2 className="text-xl text-extrabold  text-center ">Access influencers based on your needs</h2>
                        <p className=' text-center '>Get a compiled list of 60 influencers of any size in any industry of your choosing.</p>

                        <form className="my-10">


                            <div className='grid md:grid-cols-2 gap-3 '>
                                <Input type='text' label="Full Name" required name="full_name" onChange={handleChange} />
                                <Input type='text' label="Company Name (optional)" name="company_name" onChange={handleChange} />
                                <Input type='text' label="Email Address" required onChange={(e) => setEmail(getEventValue(e))} />
                                <Input type='text' label="Phone Number" name="phone_number" onChange={handleChange} />
                                <MultiSelect
                                    options={[
                                        { value: 'Instagram' },
                                        { value: 'Twitter' }
                                    ]}
                                    label='Platform'
                                    name="platform"
                                    onChange={(values) => [...data?.platform ?? [], ...values].filter(onlyUnique)}
                                />
                                <Input type='text' label="Industry" name="industry" onChange={handleChange} />
                            </div>
                            <div className='py-5'>
                                <p className='text-bold text-xl my-2 font-lexend'>Size of Influencers</p>
                                <div className='grid md:grid-cols-3 gap-3'>
                                    <Input type='number' label="Nano" name="nano_count" onChange={handleChange} />
                                    <Input type='number' label="Micro" name="micro_count" onChange={handleChange} />
                                    <Input type='number' label="Mid-tier" name="mid_tier_count" onChange={handleChange} />
                                    <Input type='number' label="Macro" name="macro_count" onChange={handleChange} />
                                    <Input type='number' label="Mega" name="mega_count" onChange={handleChange} />
                                </div>
                            </div>

                            {/* Order summary */}
                            <div className="mt-10 lg:mt-0">

                                <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">

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
                                {/* <p className='text-sm my-5'>First 60 business owners/brands to pre-order gets an extra 15 influencers *. Offer valid until 8th of July, 2023</p> */}

                            </div>
                        </form>
                    </div >
                </div>
            }
        </App>
    )
}


const Success = () => {
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="px-8 py-10 overflow-hidden lg:px-24 md:py-20 bg-gray-50 rounded-3xl">
                    <div className="max-w-2xl mx-auto text-center space-y-5">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-lexend">Thank you for making a pre-order!</h2>
                        <p>We have received your request, and our team is processing already. We will send you the comprehensive influencer database within the next 24 hours.</p>
                    </div>



                    <div className=" text-center">
                        <div className="relative inline-flex group">
                            {/* <div
                                className="absolute duration-1000 rotate-180 transitiona-all opacity-70 -inset-px rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
                                style={{ background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)" }}
                            ></div> */}
                            <div className='py-5'>
                                <a href="/" className="rounded-md  px-space-30  py-space-15  bg-viralget-red  ">

                                    <span className='font-lexend font-medium  text-white text-t-xsx'>Return to homepage</span>
                                </a>
                            </div>
                            {/* <a
                                href="/pre-order"
                                title=""
                                className="relative inline-flex items-center justify-center py-3.5 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent px-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-opacity-90 rounded-xl"
                                role="button"
                            >
                                Click to pre-order
                            </a> */}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}