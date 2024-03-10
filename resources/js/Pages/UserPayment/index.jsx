import { useState } from "react";
import Header from "../Auth/AccountSetup/header";
import paystacklogo from "../../../assets/images/paystack_logo.png"
import { CardPaySvg } from "@/Utils/icons";
import Button from "@/components/Button";
import TextAlert from "@/components/TextAlert";
import PaystackPop from '@paystack/inline-js';
import { get } from "@/Utils/api";
import toast from '@/Components/Toast';
import { usePage } from "@inertiajs/inertia-react";

export const PaymentProccess = (props) => {
    const { auth } = usePage().props;
    const { user } = auth;

    const { plan_id, plan, public_key } = props;

    const [getPaymentMethod, setPaymentMethod] = useState("");
    const [buttText, setPaymentText] = useState("Start Free trial");
    // const [buttText, setPaymentText] = useState("Continue");
    const [isLoading, setIsLoading] = useState(false);


    const Levels = [

        {
            name: 'Account setup',
            status: 'complete'
        },
        {
            name: 'Pricing',
            status: 'complete'
        },
        {
            name: 'Payment method',
            status: 'current'
        }
    ]


    function payWithPaystack() {

        window.location.href = route('payments.trial');

        return;
        setIsLoading(true);
        setPaymentText("Initiating payment...")

        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: public_key,
            email: user.email,
            amount: 1, //plan.amount * 100,
            reference: (new Date()).getTime().toString(),
            plan: plan.plan_code,



            onSuccess: (transaction) => {
                // Payment complete! Reference: transaction.reference 
                verifyPayment(transaction.reference);
            },
            onCancel: () => {
                // user closed popup
                // console.log("You need this, stay back!")
            }
        });


    }

    function verifyPayment(reference) {
        setPaymentText("Verifying payment..")
        get(route("user.verify.payment", { reference, plan_id }))
            .then((item) => {
                if (item.data.status) {
                    toast.success('Payment verification successful');
                    setTimeout(function () {
                        window.location.href = '/select-social';
                    }, 2000);
                } else {
                    toast.error('Something went wrong');
                }
            })
            .catch((error) => {
                // console.log("error:", error);
                toast.error('Something went wrong');
            }).finally(() => setIsLoading(false));

    }

    function onHandleChange(e) {
        const method = e.target.name;
        setPaymentMethod(method)
    }

    function handleStart() {
        if (getPaymentMethod === 'paystack') {
            payWithPaystack();
        }
    }

    const PaymentCard = ({ value }) => {

        return (
            <div className="flex justify-between  items-center rounded-[8px] border border-viraget-gray-300 p-space-20">
                <div className="flex space-x-3 items-center">
                    <input
                        id={value}
                        name={value}
                        value={value}
                        checked={getPaymentMethod == 'paystack'}
                        onChange={onHandleChange}
                        type="checkbox"
                        className="h-4 w-4 rounded  accent-viralget-red  text-white bg-white"
                    />
                    <span className="text-t-xsx capitalize font-medium font-lexend">
                        {value}
                    </span>
                </div>
                {
                    value === 'card' ?
                        (
                            <CardPaySvg className="w-space-68 h-space-12" />
                        ) :
                        value === 'paystack' ?
                            (
                                <img src={paystacklogo} className="w-space-68 h-space-12" />
                            ) :
                            null
                }

            </div>
        )
    }

    return (
        <div>


            <div className="w-full flex items-center mt-space-80 px-space-10  justify-center">
                <div className="flex flex-col ">
                    <span className="font-bold font-lexend lg:text-t-xlg  text-t-lg text-center ">Payment method</span>

                    <div className="mt-space-20">
                        <TextAlert />
                    </div>
                    <div className="mt-space-20 flex flex-col space-y-4">
                        <PaymentCard value="paystack" />
                        {/* <PaymentCard  value="card" /> */}
                    </div>

                    <div className="text-left mt-space-20">
                        <Button
                            className='block w-auto bg-viralget-red rounded-[8px]  px-space-40'
                            processing={isLoading}
                            // href={route('explore')}
                            onClick={handleStart}
                        >
                            {buttText}

                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}


const UserPayment = (props) => {
    const { auth } = usePage().props;
    const { user } = auth;

    return (
        <>
            <Header user={user} />
            {/* <Header user={user} levels={Levels} /> */}

            <PaymentProccess {...props} />
        </>
    )
}

export default UserPayment;