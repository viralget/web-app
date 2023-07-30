import { post } from '@/Utils/api';
import { usePaystackPayment } from 'react-paystack';
import Button from '../Button';
import toast from '../Toast';

export const generatePaymentReference = () => {
    return (new Date()).getTime().toString()
}


const PaystackPaymentButton = ({ className, isLink, plan, successRedirectsTo, type, amount = 0, email, metadata, paymentVerificationRoute, paymentDataExtras = {}, children, disabled = false }) => {

    const config = {
        publicKey: import.meta.env.MIX_PAYSTACK_PUBLIC_KEY,
        email,
        metadata,
        amount: amount * 100,
        plan
    };

    // console.log({ config })

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

        // console.log({ response });
        if (response.data.status) {
            // setIsSuccessful(true);
            toast(response.data.message ?? 'Payment successful!')
            // redirect to success page

            setInterval(() => {
                window.location.href = successRedirectsTo;
            }, 300);
        } else {
            toast.error('An error occurred. Please contact admin')

        }
    };

    // you can call this function anything
    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        // console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);

    return (
        <Button usePrimary disabled={disabled} className={className} onClick={() => {
            initializePayment(onSuccess, onClose)
        }}>{children ?? 'Make Payment'}</Button>
    );
};


export default PaystackPaymentButton;