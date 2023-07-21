import Header from "./header";
import AccountSetupForm from "./form";
const AccountSetup = (props) => {
  const  { auth: { user }, image_url} = props;

  const Levels = [

    {
        name: 'Account setup',
        status: 'current'
    },
    {
        name: 'Pricing',
        status: 'pending'
    },
    {
        name: 'Payment method',
        status: 'pending'
    }
]


    return (
        <div>
            <Header  user={user} image_url={image_url}  levels={Levels} />
             <AccountSetupForm />
        </div>
    )

}



export default AccountSetup;