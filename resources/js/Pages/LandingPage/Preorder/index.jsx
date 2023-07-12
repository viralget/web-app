
import { useEffect, useState } from 'react'
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
import { countries } from '@/Utils/defaults';
import ValidationErrors from '@/Components/ValidationErrors';

const influencer_types = ['nano', 'micro', 'macro', 'mega', 'mid-tier'];

const influencer_type_options = new Array(20).fill(0).map((value, index) => ({ value: index + 1 }));

console.log({ influencer_type_options })
export default function Preorder() {

    const { auth } = usePage().props;
    const { user } = auth;

    const amount = 19999;

    const [buttText, setPaymentText] = useState("Continue");
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [data, setData] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [canMakePayment, setCanMakePayment] = useState(false);
    const [errors, setErrors] = useState({});

    // useEffect(() => {
    //     console.log({ data })

    //     if (email && data.full_name && data.country && data.company_name && data.phone_number && data.industry && data.platform) {
    //         console.log('can go')
    //         setCanMakePayment(true);
    //     } else {
    //         setCanMakePayment(false);
    //     }

    // })

    function handleChange(e) {
        e.preventDefault(e);


        let field = e.target.name;
        let value = e.target.value;

        console.log({ field })

        if (influencer_types.includes(field)) {
            if (value > 20 || value < 1) {
                alert(`Value can only be between 1 and 20`)
                // value = 1;
                return;
            }
        }


        handleUpdateData(field, value)
    }

    function handleUpdateData(field, value) {
        let _data = data;

        _data[field] = value;

        setData(data)
    }

    function payWithPaystack(e) {
        e.preventDefault();

        let _errors = [];


        if (!email) {
            _errors.push('Please enter your email address')
        }

        if (!data.full_name) {
            _errors.push('Fullname field is required')
        }

        if (!data.company_name) {
            _errors.push('Company name field is required')
        }

        if (!data.country) {
            _errors.push('Country field is required')
        }

        if (!data.phone_number) {
            _errors.push('Phone number field is required')
        }

        if (!data.industry) {
            _errors.push('Industry field is required')
        }

        // console.log({ p: data })
        if (data.platform.length <= 0) {
            _errors.push('Platform field is required')
        }

        // if (email && data.full_name && data.country && data.company_name && data.phone_number && data.industry && data.platform) {


        if (_errors.length) {
            toast.error('Please fill out all required fields');
            window.location.href = "#pre-order"
            setErrors(_errors)
            return;
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
                setErrors({})
            },
            onCancel: () => {
                // user closed popup
                console.log("You need this, stay back!")
                setErrors({})
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
                        <p className=' text-center '>Get access to a community of influencers of any size and in any industry and location of your choosing.</p>

                        <form className="my-10" id="pre-order">

                            <ValidationErrors errors={errors} />


                            <div className='grid md:grid-cols-2 gap-3 '>
                                <Input type='text' label="Full Name" required name="full_name" onChange={handleChange} />
                                <Input type='text' required label="Company Name" name="company_name" onChange={handleChange} />
                                <Input type='text' required label="Email Address" onChange={(e) => setEmail(getEventValue(e))} />
                                <Input type='text' required label="Phone Number" name="phone_number" onChange={handleChange} />
                                <MultiSelect
                                    options={[
                                        { value: 'Instagram' },
                                        { value: 'Twitter' }
                                    ]}
                                    label='Platform'
                                    name="platform"
                                    required
                                    onChange={(values) => handleUpdateData('platform', [...data?.platform ?? [], ...values].filter(onlyUnique))}
                                />
                                <Select
                                    options={countries}
                                    label='Country'
                                    name="country"
                                    required
                                    onChange={handleChange}
                                />
                                <Input type='text' required label="Industry" name="industry" onChange={handleChange} />
                            </div>
                            <div className='py-5'>
                                <p className='text-bold text-xl my-2 font-lexend'>Size of Influencers</p>
                                <div className='grid md:grid-cols-3 gap-3'>

                                    {influencer_types.map(type => (
                                        <Select
                                            options={influencer_type_options}
                                            label={type}
                                            name={type}
                                            required
                                            onChange={handleChange}
                                        />
                                    )
                                    )}
                                    {/* <Input type='number' min="0" max="20" label="Nano" name="nano_count" onChange={handleChange} />
                                    <Input type='number' min="0" max="20" label="Micro" name="micro_count" onChange={handleChange} />
                                    <Input type='number' min="0" max="20" label="Mid-tier" name="mid_tier_count" onChange={handleChange} />
                                    <Input type='number' min="0" max="20" label="Macro" name="macro_count" onChange={handleChange} />
                                    <Input type='number' min="0" max="20" label="Mega" name="mega_count" onChange={handleChange} /> */}
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
                                        // disabled={!canMakePayment}
                                        >
                                            Pre-Order now
                                        </Button>

                                    </div>

                                </div>
                                {/* <p className='text-sm my-5'>First 60 business owners/brands to pre-order gets an extra 15 influencers *. Offer valid until 24th of July, 2023</p> */}

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
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-lexend">Thank you for signing up as an early bird to #ViralGetPlatform! </h2>
                        <p>We are thrilled to have you on board as a member of the #ViralGetPlatform community! 🎉and can’t wait for you to unleash the full potential of your influencer marketing campaigns with the help of data filters to seamlessly activate the right influencers for your campaign and manage them.</p>

                        <p> On the last week of July 2023, access to our platform will be live 🚀 and you’ll be able to self serve yourself to access anyone of the 90,000+ influencers in our database.</p>

                        <p>If you have any questions or need assistance, please don't hesitate to reach out to our friendly support team at <a href="mailto:support@viralget.com.ng">support@viralget.com.ng</a></p>

                        <p> Stay viral and keep creating!</p>
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