import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import { useState } from "react";
import SearchForm from "./SearchForm";
import { get } from "@/Utils/api"
import ButtonBack from "@/Components/ButtonBack";

export default function SearchBox(props) {


    const [searchParams, setSearchParams] = useState('');
    const [getSearches, setSearches] = useState([]);

    const handleChange = (e, name, query, value) => {

        if (e?.target?.value.length === 0 || !value) return;

        const currentURL = window.location.search;
        const urlParams = new URLSearchParams(currentURL);
        value = e?.target?.value ? e.target.value : e?.value ?? value;
        const filterData = getSearches.filter((item) => item.name != name);
        const searchData = [...filterData, { name, query, value }];
        setSearches(searchData);

        searchData.forEach(q => {
            urlParams.set(q.query, q.value);
        });
        urlParams.set('page', 1); //force start from page 1
        setSearchParams(urlParams);
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        props.onLoading && props.onLoading(true);
        Inertia.get(route('explore.search') + '?' + searchParams.toString());
    }

    const handleFiltering = (val) => {

        const findR = getSearches.filter((item) => item.name != val.name);
        setSearches(findR);
    }

    return (
        <div className="mx-auto -mt-24 relative z-1 rounded-lg space-y-5">
            {/* <ButtonBack isWhite /> */}
            <SearchForm
                getSearches={getSearches}
                handleFiltering={handleFiltering}
                categories={props?.categories ?? []}
                countries={props?.countries ?? []}
                handleChange={handleChange}
                handleSubmit={handleSearch}
                {...props} />
        </div>
    )
}
