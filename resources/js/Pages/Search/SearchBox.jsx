import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { get } from "@/Utils/api"

export default function SearchBox(props) {


    const [searchParams, setSearchParams] = useState('');
    const [getSearches, setSearches] = useState([]);

    const handleChange = (e) => {
        const currentURL = window.location.search;
        const urlParams = new URLSearchParams(currentURL);
        const name = e?.target?.name ? e.target.name : e.name;
        const value = e?.target?.value ? e.target.value : e.value;

        console.log({ name })

        setSearches([...getSearches, { name: e?.target?.value ? e?.target?.value : name, value }]);

        if (e?.target?.value) {
            urlParams.set(name, value);
        } else {
            urlParams.set(value, name);
        }

        urlParams.set('page', 1); //force start from page 1

        setSearchParams(urlParams)
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        props.onLoading && props.onLoading(true);
        props.searchActive(true);

        Inertia.get(route('influencers.search') + '?' + searchParams.toString());

    }

    return (
        <div className="mx-auto -mt-12 relative z-10 rounded-lg">
            <SearchForm className="" getSearches={getSearches} categories={props?.categories ?? []} handleChange={handleChange} handleSubmit={handleSearch} {...props} />
        </div>
    )
}
