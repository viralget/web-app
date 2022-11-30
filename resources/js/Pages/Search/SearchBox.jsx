import SearchForm from "./SearchForm";

export default function SearchBox(props) {

    const handleChange = (e) => {
        const currentURL = window.location.search;
        const urlParams = new URLSearchParams(currentURL);
        urlParams.set(e.target.name, e.target.value);
        urlParams.set('page', 1); //force start from page 1

        handleSearch(urlParams);
    }

    const handleSearch = async (params) => {
        props.onLoading && props.onLoading(true);

        // window.location = route('search') + '?' + params.toString();

    }

    return (
        <div className="mx-auto shadow bg-white lg:px-8 pt-1 -mt-10 relative z-10 rounded-lg overflow-hidden">
            <SearchForm className="" handleChange={handleChange} {...props} />
        </div>
    )
}
