import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { get } from "@/Utils/api"

export default function SearchBox(props) {


    const [searchParams, setSearchParams] = useState('');
    const [getSearches, setSearches] = useState([]);

    const handleChange = (e, name) => {
        const currentURL = window.location.search;
        const urlParams = new URLSearchParams(currentURL);
        const value = e?.target?.value ? e.target.value : e.value;
        setSearches([...getSearches, { name: name, value }]);

        if (e?.target?.value) {
            urlParams.set(name, value);
        } else {
            urlParams.set(value, name);
        }

       urlParams.set('page', 1); //force start from page 1
       setSearchParams(urlParams);
       
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        props.onLoading && props.onLoading(true);
        props.searchActive(true);

        Inertia.get(route('influencers.search') + '?' + searchParams.toString());
    }

    const handleFiltering = (val) => {

        const findR = getSearches.filter((item) => item.name != val.name);
        setSearches(findR);
    }

    return (
        <div className="mx-auto -mt-12 relative z-10 rounded-lg">
            <SearchForm 
             getSearches={getSearches}
             handleFiltering={handleFiltering}
             categories={props?.categories ?? []}
             handleChange={handleChange}
             handleSubmit={handleSearch} {...props} />
        </div>
    )
}
