import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import Profile from "./Profile";


export default function show({ influencer }) {

    return (

        <AuthenticatedLayout>
              <Profile influencer={influencer} showBg />
        </AuthenticatedLayout>
    )
}
