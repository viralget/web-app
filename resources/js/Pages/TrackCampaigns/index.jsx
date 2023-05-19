import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import SearchBox from "./SearchBox";
import TrackedList from "./TrackedList";

const TrackCampaigns = ({ searches }) => {

    console.log("searches:", searches)

    return(
        <AuthenticatedLayout title="Track campaigns">
               <SearchBox  />
               <TrackedList  searches={searches}/>
        </AuthenticatedLayout>
    )
}

export default TrackCampaigns;