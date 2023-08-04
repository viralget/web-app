import { post } from '@/Utils/api';
import PaystackPop from '@paystack/inline-js';
import Button from '../Button';
import toast from '../Toast';

export const generatePaymentReference = () => {
    return (new Date()).getTime().toString()
}

const PaystackPaymentButton = ({ className, isLink, plan, successRedirectsTo, type, amount = 0, email, metadata, paymentVerificationRoute, paymentDataExtras = {}, children, disabled = false, postPaymentAction }) => {

    const config = {
        key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
        email,
        metadata,
        amount: amount * 100,
        reference: generatePaymentReference(),
    };


    function payWithPaystack() {

        const paystack = new PaystackPop();

        paystack.newTransaction({
            ...config,
            onSuccess: (transaction) => {
                onSuccess({ reference: transaction.reference })
            },
            onCancel: () => {
                onClose();
            }
        });


    }


    // you can call this function anything
    const onSuccess = async ({ reference }) => {
        // Implementation for whatever you want to do with reference and after success call.

        const data = {
            amount,
            plan,
            reference,
            type,
            payment_gateway: 'paystack',
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

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        // console.log('closed')
    }

    return (
        <Button block usePrimary disabled={disabled} className={className} onClick={() => {
            payWithPaystack()
        }}>{children ?? 'Make Payment'}</Button>

    );
};


export default PaystackPaymentButton;