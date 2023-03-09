import Select from "@/Components/Select";
import Button from "@/Components/Button";
import { MagnifyingGlassCircleIcon, MapIcon } from "@heroicons/react/24/solid";
import List from "@/components/List"

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
    getSearches
}) {


    return (
        <div className={className}>
            <form action="#" onSubmit={handleSubmit} className="sm:mx-auto lg:mx-0">
                {/* <form action={route('search')} className="sm:mx-auto lg:mx-0"> */}
                <div className="hidden md:grid grid-cols-5 gap-4 bg-white shadow px-3 py-2 rounded-md">
                    <div className="md:pr-2 md:border-r  border-gray-100">
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

                        <List options={[
                            { name: 'Any', value: 'influencer_location' },
                            { name: 'Nigeria', value: 'influencer_location' },
                            { name: 'Ghana', value: 'influencer_location' },
                        ]}
                        onChange={handleChange}
                        label="Influencer Location"
                        
                        />
                    </div>
                    <div className="md:pr-2 md:border-r border-gray-100">
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

                     <List options={[
                            { name: 'Any', value: '' },
                            { name: 'Nano (1000 - 10,000)', value: 'nano' },
                            { name: 'Micro (10,000 - 50,000)', value: 'micro' },
                            { name: 'Mid Tier (50,000 - 500k)', value: 'nano' },
                            { name: 'Macro (500k - 1m)', value: 'macro' },
                        ]}
                        onChange={handleChange}
                        label="Influencer Size"
                        
                        />
                    </div>

                    <div className="md:pr-2 md:border-r">
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

                     <List options={[
                            { name: 'Any', value: 'audience_location' },
                            { name: 'Nigeria', value: 'audience_location' },
                            { name: 'Ghana', value: 'audience_location' },
                        ]}

                        onChange={handleChange}
                        label="Audience Location"
                        
                        />
                    </div>
                    <div className="md:pr-2 md:border-r border-gray-100">
                        {/* <Select options={[
                            { name: 'Any', value: '' },
                            { name: 'Excellent >90', value: 'excellent' },
                            { name: 'Very Good >80', value: 'very good' },
                            { name: 'Good >60', value: 'good' },
                            { name: 'Average >40', value: 'average' },
                            { name: 'Poor >25', value: 'poor' },
                        ]}
                            name="qas"
                            value={dateRange}
                            onChange={handleChange}
                            label="QAS"
                            defaultOptionText="Any"
                        /> */}


                  <List options={[
                            { name: 'Any', value: '' },
                            { name: 'Excellent >90', value: 'excellent' },
                            { name: 'Very Good >80', value: 'very good' },
                            { name: 'Good >60', value: 'good' },
                            { name: 'Average >40', value: 'average' },
                            { name: 'Poor >25', value: 'poor' },
                        ]}
                        onChange={handleChange}
                        label="Influencer QAS"
                        
                        />
                    </div>
                    {/* <div className="">
                        <Select options={[
                            { name: 'Any', value: '' },
                        ]}
                            name="gender"
                            value={dateRange}
                            onChange={handleChange}
                            label="Audience Gender"
                            defaultOptionText="Any"
                        />
                    </div> */}

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
                    <div className="bg-white shadow rounded-md py-1 px-3 overflow-hidden">
                        <Select options={categories}
                            name="category"
                            value={dateRange}
                            onChange={handleChange}
                            defaultOptionText="Any Category"
                            className="text-xs"
                            useBorder={false}
                        />
                    </div>
                    {/* <div className="bg-white shadow rounded py-1 px-3 overflow-hidden">
                    <Select options={[
                        { name: 'Anywhere', value: '' },
                    ]}
                        name="location"
                        value={dateRange}
                        onChange={handleChange}
                        // label=""
                        defaultOptionText="Anywhere"
                    />
                </div> */}
                    <div className="flex-1">
                        <input
                            id="keywords"
                            name="keywords"
                            type="text"
                            defaultValue={keywords}
                            onChange={handleChange}
                            placeholder={"Find influencers by keywords or hashtag"}
                            className="block w-full shadow px-3 py-3  rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                        />
                    </div>
                </div>
                     {getSearches.length > 0 && (
                        <div  className="flex  space-x-2 mb-5 bg-white p-3 "  >
                   
                               { getSearches.map((item) => (
                                    <div  className="px-3 py-1  shadown-md  rounded-full ">
                                                <span>{item.name}</span>
                                                
                                     </div>
                                    
                                ))}
                         </div>
                            )}
               
                
            </form>
        </div>
    );
}