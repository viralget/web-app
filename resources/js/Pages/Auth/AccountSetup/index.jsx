import Header from "./header";
import AccountSetupForm from "./form";
const AccountSetup = (props) => {
  const  { auth: { user }, image_url} = props;

    return (
        <div>
            <Header  user={user} image_url={image_url} />
             <AccountSetupForm />
        </div>
    )

}



export default AccountSetup;