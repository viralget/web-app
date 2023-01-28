import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { get } from "@/Utils/api"

export default function SearchBox(props) {


    const [searchParams, setSearchParams] = useState('');

    const handleChange = (e) => {
        const currentURL = window.location.search;
        const urlParams = new URLSearchParams(currentURL);
        urlParams.set(e.target.name, e.target.value);
        urlParams.set('page', 1); //force start from page 1

        setSearchParams(urlParams)
        // handleSearch(urlParams);
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        props.onLoading && props.onLoading(true);
        props.searchActive(true);

        Inertia.get(route('influencers.search') + '?' + searchParams.toString());
        // , { job: job?.slug }, { replace: true, preserveState: true, preserveScroll: true })
        // window.location = route('search') + '?' + params.toString();
        //     const res = await get(route('influencers.search') + '?' + searchParams.toString());

        //     props.handleResult(res);
    }



    // const submit = (e) => {
    //     e.preventDefault();

    // };

    return (
        <div className="mx-auto -mt-12 relative z-10 rounded-lg overflow-hidden">
            <SearchForm className="" categories={props?.categories ?? []} handleChange={handleChange} handleSubmit={handleSearch} {...props} />
        </div>
    )
}
