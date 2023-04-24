import Auth from "@/components/Layouts/Auth";
const Confirmation  = (props) => {
    const { auth } = props;
    const tokenExpired = new URLSearchParams(window.location.search).get('token');

    return (
        <Auth type="confirmation">
             <div>
                   <div className="flex flex-col">
                    {tokenExpired ?
                    (
                        <span className="font-lexend font-bold   text-t-lg-x">Ops! <br/> Token Expired</span>
                    )
                    :
                    (
                        <span className="font-lexend font-bold   text-t-lg-x">Great! <br/> Now confirm your email</span>
                    )
                }
                {
                    tokenExpired ? (
                            <>

                     <span className="font-medium text-t-xsx mt-space-12  text-viralget-gray-400">We’ve sent an email to <span className="text-viralget-grey  font-bold ">{auth.user.email}</span> </span>
                        <span className="font-medium text-t-xsx  text-viralget-gray-400">While it can only last for  10 minutes. but don't worry.  </span>
                        <div className="mt-space-12">
                             <span className="font-normal text-t-normal  text-viralget-gray-400">
                             Request new link? 
                             </span>
                             { " "}
                             <a href={route('resend.email')} className="text-viralget-red font-bold text-t-normal" > Click to resend</a>
                        </div>
                            </>
                    )
                    :
                    (
                         <>
                            <span className="font-medium text-t-xsx mt-space-12  text-viralget-gray-400">We’ve sent an email to <span className="text-viralget-grey  font-bold ">{auth.user.email}</span> </span>
                            <span className="font-medium text-t-xsx  text-viralget-gray-400">Click the button inside to confirm your email</span>
                            <div className="mt-space-12">
                                <span className="font-normal text-t-normal  text-viralget-gray-400">
                                Didn’t receive the email? 
                                </span>
                                { " "}
                                <a href={route('resend.email')} className="text-viralget-red font-bold text-t-normal" > Click to resend</a>
                            </div>
                         </>
                    )

                }
                     
                    </div> 
             </div>
        </Auth>
       
    )
}



export default  Confirmation;