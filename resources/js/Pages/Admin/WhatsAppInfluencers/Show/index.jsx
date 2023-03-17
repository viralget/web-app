import Dashboard from "../../Layouts/Dashboard";
import Details from "./Details";

export default function Show(props) {

    return (
        <Dashboard title={`Influencer Information`}>
            <Details {...props} />
        </Dashboard>
    )
}