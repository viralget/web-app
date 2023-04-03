import MultiDropdown from "@/Components/MultiDropdown";
import { useState, useEffect } from "react";

export default function SearchForm({
    keywords,
    location,
    category,
    salaryRange,
    dateRange,
    workmode,
    jobType,
    showFull = false,
    handleSubmit,
    handleChange,
    className,
    categories,
    getSearches,
    handleFiltering
}) {


    useEffect(() => {
        setSearches(getSearches);
    }, [getSearches]);

    const [getSearch, setSearches] = useState(getSearches);

    return (
        <div className={className}>
            <form action="#" onSubmit={handleSubmit} className="sm:mx-auto lg:mx-0">
                {/* <form action={route('search')} className="sm:mx-auto lg:mx-0"> */}
                <div className="hidden md:grid grid-cols-5 gap-4 bg-white shadow px-5 p-4 rounded-md">
                    <div className="md:pr-6 md:border-r border-gray-100">
                        {/* <Select options={[
                            { name: 'Any', value: '' },
                            { name: 'Nigeria', value: '' },
                            { name: 'Ghana', value: '' },
                        ]}
                            name="influencer_location"
                            value={workmode}
                            onChange={handleChange}
                            label="Influencer Location"
                            defaultOptionText="Any"
                        /> */}



                        <MultiDropdown options={[
                            { name: 'Any', value: '' },
                            { name: 'Nigeria', value: 'Nigeria' },
                            { name: 'Ghana', value: 'Ghana' },
                        ]}
                            onChange={(e) => handleChange(e, 'Influencer Location', 'influencer_location')}
                            label="Influencer Location"
                        />
                    </div>
                    <div className="md:pr-6 md:border-r border-gray-100">
                        {/* <Select options={[
                            { name: 'Any', value: '' },
                            { name: 'Nano (1000 - 10,000)', value: 'nano' },
                            { name: 'Micro (10,000 - 50,000)', value: 'micro' },
                            { name: 'Mid Tier (50,000 - 500k)', value: 'nano' },
                            { name: 'Macro (500k - 1m)', value: 'macro' },
                        ]}
                            name="size"
                            value={jobType}
                            onChange={handleChange}
                            label="Influencer Size"
                        /> */}

                        <MultiDropdown options={[
                            { name: 'Any', value: '' },
                            { name: 'Nano (1000 - 10,000)', value: '10000' },
                            { name: 'Micro (10,000 - 50,000)', value: '50000' },
                            { name: 'Mid Tier (50,000 - 500k)', value: '500000' },
                            { name: 'Macro (500k - 1m)', value: '1000000' },
                        ]}
                            onChange={(e) => handleChange(e, 'Influencer Size', 'size')}
                            label="Influencer Size"

                        />
                    </div>

                    <div className="md:pr-6 md:border-r">
                        {/* <Select options={[
                            { name: 'Any', value: '' },
                            { name: 'Nigeria', value: '' },
                            { name: 'Ghana', value: '' },
                        ]}
                            name="audience_location"
                            value={dateRange}
                            onChange={handleChange}
                            label="Audience Location"
                            defaultOptionText="Any"
                        /> */}

                        <MultiDropdown options={[
                            { name: 'Any', value: '' },
                            { name: 'Nigeria', value: 'Nigeria' },
                            { name: 'Ghana', value: 'Ghana' },
                        ]}

                            onChange={(e) => handleChange(e, 'Audience Location', 'audience_location')}
                            label="Audience Location"

                        />
                    </div>
                    <div className="md:pr-6 md:border-r border-gray-100">



                        <MultiDropdown options={[
                            { name: 'Any', value: '' },
                            { name: 'Excellent >90', value: 'excellent' },
                            { name: 'Very Good >80', value: 'very good' },
                            { name: 'Good >60', value: 'good' },
                            { name: 'Average >40', value: 'average' },
                            { name: 'Poor >25', value: 'poor' },
                        ]}
                            onChange={(e) => handleChange(e, 'Influencer QAS', 'influencer_qas')}
                            label="Influencer QAS"

                        />
                    </div>


                    <div className="flex items-center sm:mt-0 sm:ml-3">
                        <button
                            onClick={handleSubmit}
                            // type="submit"
                            className=" w-full py-2  rounded-md shadow bg-orange-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="sm:flex items-center align-middle my-3 space-x-2">
                    <div className="flex-initial w-64 bg-white shadow rounded-md py-1 px-3 ">
                        <MultiDropdown options={categories}
                            name="category"
                            onChange={(e) => handleChange(e, 'Category', 'category')}
                            defaultOptionText="Category"
                        />
                    </div>
                    {/* <div className="flex-initial w-64 bg-white shadow rounded-md py-1 px-3 ">
                        <MultiDropdown options={[
                            { name: 'Anywhere', },
                            { name: 'In Bio', value: 'bio' },
                            { name: 'In Contents', value: 'contents' },
                        ]}
                            name="category"
                            onChange={(e) => handleChange(e, 'Position', 'position')}
                            className="text-xs"
                            useBorder={false}
                            defaultOptionText="Anywhere"
                        />
                    </div>

                    <div className="flex-1">
                        <input
                            id="keywords"
                            name="keywords"
                            type="text"
                            defaultValue={keywords}
                            onChange={(e) => handleChange(e, 'Keywords', 'keywords')}
                            placeholder={"Find influencers by keywords or hashtag"}
                            className="block w-full shadow px-3 py-3 text-sm  rounded-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                        />
                    </div> */}

                    <div className=" flex flex-1 rounded-md shadow bg-white p-1 px-3">
                        <div className="w-64 border-r border-gray-100 pr-3">
                            <MultiDropdown options={[
                                { name: 'Anywhere', },
                                { name: 'In Bio', value: 'bio' },
                                { name: 'In Contents', value: 'contents' },
                            ]}
                                name="category"
                                onChange={(e) => handleChange(e, 'Position', 'position')}
                                className="text-xs"
                                useBorder={false}
                                defaultOptionText="Anywhere"
                            />
                        </div>
                        {/* <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                            workcation.com/
                        </span> */}
                        <input
                            id="keywords"
                            name="keywords"
                            type="text"
                            defaultValue={keywords}
                            onChange={(e) => handleChange(e, 'Keywords', 'keywords')}
                            placeholder={"Find influencers by keywords or hashtag"}
                            className="block w-full px-3  flex-grow  text-sm rounded-none rounded-r-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                        // className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                </div>


                {getSearch?.length > 0 && (
                    <div class="flex  -mt-3 mb-3 flex-wrap p-3 text-sm">
                        {getSearch.map((item, index) => (
                            <div
                                className=" p-2 mr-3 mt-2  flex "
                                key={index}
                            >
                                <span className="font-normal">{item.name}: </span>
                                {
                                    Array.isArray(item?.value) ? item.value.map((val, ind) => (
                                        <span className="ml-2 text-viralget-grey">  {val} {(ind + 1) === item.value.length ? '' : ','} </span>
                                    ))
                                        :
                                        <span className="ml-2 text-viralget-grey">  {item.value} </span>
                                }

                                <span className="ml-2 mt-1 cursor-pointer" onClick={() => handleFiltering(item)}  >

                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_958_74924)">
                                            <path d="M10.1595 3.89062L3.88867 10.1615" stroke="#748094" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.1595 10.1615L3.88867 3.89062" stroke="#748094" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_958_74924">
                                                <rect width="14" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </span>
                            </div>
                        ))}
                    </div>
                )}

            </form>
        </div>
    );
}