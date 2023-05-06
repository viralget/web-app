import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import SearchBox from "./SearchBox";
import TrackedList from "./TrackedList";

const TrackCampaigns = () => {


    return(
        <AuthenticatedLayout title="Track campaigns">
               <SearchBox  />
               <TrackedList  />
        </AuthenticatedLayout>
    )
}

export default TrackCampaigns;