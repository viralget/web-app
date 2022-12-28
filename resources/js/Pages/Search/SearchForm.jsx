import Select from "@/Components/Select";
import Button from "@/Components/Button";
import { MagnifyingGlassCircleIcon, MapIcon } from "@heroicons/react/24/solid";

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
    className
}) {

    return (
        <div className={className}>
            <form action="#" onSubmit={handleSubmit} className="sm:mx-auto lg:mx-0">
                {/* <form action={route('search')} className="sm:mx-auto lg:mx-0"> */}
                <div className="hidden md:grid grid-cols-7 gap-4 bg-white shadow px-3 py-5 rounded-md">
                    <div className="md:pr-2 md:border-r border-gray-100">
                        <Select options={[
                            { name: 'Any', value: '' },
                        ]}
                            name="influencer_location"
                            value={workmode}
                            onChange={handleChange}
                            label="Influencer Location"
                            defaultOptionText="Any"
                        />
                    </div>
                    <div className="md:pr-2 md:border-r border-gray-100">
                        <Select options={[
                            { name: 'Any', value: '' },
                        ]}
                            name="size"
                            value={jobType}
                            onChange={handleChange}
                            label="Influencer Size"
                            defaultOptionText="Any"
                        />
                    </div>

                    <div className="md:pr-2 md:border-r">
                        <Select options={[
                            { name: 'Any', value: '' },
                        ]}
                            name="audience_location"
                            value={dateRange}
                            onChange={handleChange}
                            label="Audience Location"
                            defaultOptionText="Any"
                        />
                    </div>
                    <div className="md:pr-2 md:border-r">
                        <Select options={[
                            { name: 'Any', value: '' },
                        ]}
                            name="age"
                            value={dateRange}
                            onChange={handleChange}
                            label="Audience Age"
                            defaultOptionText="Any"
                        />
                    </div>
                    <div className="md:pr-2 md:border-r border-gray-100">
                        <Select options={[
                            { name: 'Any', value: '' },
                        ]}
                            name="qas"
                            value={dateRange}
                            onChange={handleChange}
                            label="QAS"
                            defaultOptionText="Any"
                        />
                    </div>
                    <div className="">
                        <Select options={[
                            { name: 'Any', value: '' },
                        ]}
                            name="gender"
                            value={dateRange}
                            onChange={handleChange}
                            label="Audience Gender"
                            defaultOptionText="Any"
                        />
                    </div>

                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                            onClick={handleSubmit}
                            // type="submit"
                            className=" w-full py-3.5 px-2  rounded-md shadow bg-orange-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className="sm:flex items-center align-middle my-3 space-x-2">
                    <div className="bg-white shadow rounded py-1 px-3 overflow-hidden">
                        <Select options={[
                            { name: 'Any Category', value: 1 },
                        ]}
                            name="category"
                            value={dateRange}
                            onChange={handleChange}
                            // label=""
                            defaultOptionText="Any Category"
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
            </form>
        </div>
    );
}