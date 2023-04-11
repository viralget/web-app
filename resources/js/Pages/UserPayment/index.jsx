import Header from "../Auth/AccountSetup/header";
import paystacklogo from "../../../assets/images/paystack_logo.png"
import Button from "@/components/Button";
import TextAlert from "@/components/TextAlert";
const UserPayment = (props) => {
    const { auth: { user }} = props;


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


    function onHandleChange(){

    }

    const PaymentCard = () => {

        return(
            <div className="flex justify-between  items-center rounded-[8px] border border-viraget-gray-300 p-space-20">
                   <div  className="flex space-x-3 items-center">
                    <input
                            id="paystack"
                                        name="paystack"
                                        value="paystack"
                                        onChange={onHandleChange}
                                        type="checkbox"
                                        className="h-4 w-4 rounded-full border-gray-300 text-fuchsia-600 focus:ring-indigo-500"
                        />
                         <span className="text-t-xsx  font-medium font-lexend">
                      Paystack
                   </span>
                   </div>
                   <img src={paystacklogo}  className="w-space-68 h-space-12" />
            </div>
        )
    }

    return (
        <div>

            <Header  user={user}  levels={Levels}/>

            <div  className="w-full flex items-center mt-space-40  px-space-10  justify-center">
                <div className="flex flex-col ">
                    <span className="font-bold font-lexend lg:text-t-xlg  text-t-lg text-center ">Payment method</span>
                     
                     <div  className="mt-space-20">
                         <TextAlert />
                     </div>
                     <div className="mt-space-20">
                        <PaymentCard />
                     </div>

                     <div className="text-left mt-space-20">
                        <Button
                            className='block w-auto bg-viralget-red rounded-[8px]  px-space-40'
                            // processing={processing}
                            >
                            Continue
                        </Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default UserPayment;