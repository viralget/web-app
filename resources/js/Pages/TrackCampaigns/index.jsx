import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import SearchBox from "./SearchBox";
import TrackedList from "./TrackedList";
import Typography from "@/Components/Typography";

const TrackCampaigns = ({ searches }) => {

    // console.log("searches:", searches)

    return (
        <AuthenticatedLayout smallHeader={true}>

            <div className="m-5">
                <div className="flex mb-4 justify-between  w-full">
                    <Typography variant={'h2'} content="Track campaigns" />
                </div>
                <div className="space-y-5">
                    <SearchBox />
                    <TrackedList searches={searches} />
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default TrackCampaigns;