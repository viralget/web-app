import Auth from "@/components/Layouts/Auth";
const Confirmation  = (props) => {
    const { auth } = props;


    console.log("props:", props);

    return (
        <Auth type="confirmation">
             <div>
                   <div className="flex flex-col">
                       <span className="font-lexend font-bold   text-t-lg-x">Great! <br/> Now confirm your email</span>
                        <span className="font-medium text-t-xsx  text-viralget-gray-400">We’ve sent an email to {auth.user.email} Click the button inside to confirm your email</span>
                        <div>
                             <span className="font-normal text-t-normal  text-viralget-gray-400">
                             Didn’t receive the email? 
                             </span>
                             { " "}
                             <a href={route('resend.email')} className="text-viralget-red font-bold text-t-normal" > Click to resend</a>
                        </div>
                    </div> 
             </div>
        </Auth>
       
    )
}



export default  Confirmation;