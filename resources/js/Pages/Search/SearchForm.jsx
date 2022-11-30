import Select from "@/components/Select";
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
    handleChange,
    className
}) {

    return (
        <div className={className}>
            <div className="bg-white py-4 px-3 job-search-form">
                <form action="" className="sm:mx-auto lg:mx-0">
                    {/* <form action={route('search')} className="sm:mx-auto lg:mx-0"> */}
                    <div className="hidden md:grid grid-cols-4 gap-4">
                        <div>
                            <Select options={[
                                { name: 'remote', },
                                { name: 'onsite' },
                                { name: 'hybrid' },
                            ]}
                                name="workplace_type"
                                value={workmode}
                                onChange={handleChange}
                                label="Workplace Type"
                                defaultOptionText="Workplace Type"
                            />
                        </div>
                        <div>
                            <Select options={[
                                { name: 'full-time', },
                                { name: 'part-time' },
                                { name: 'internship' },
                                { name: 'contract' },
                            ]}
                                name="employment_type"
                                value={jobType}
                                onChange={handleChange}
                                label="Job Type"
                                defaultOptionText="Job Type"
                            />
                        </div>
                        {/* <div>
                        <Select options={[
                            { name: 'maritime', },
                            { name: 'IT' },
                            { name: 'finance' },
                            { name: 'non-profit' },
                        ]}
                            name="category"
                            value={category}
                            defaultOptionText="Category"
                            onChange={handleChange}
                        />
                    </div> */}
                        {/* <div>
                                <Select options={[
                                    {name: 'Current location',},
                                    {name: 'lagos'},
                                    {name: 'abuja'},
                                    {name: 'rivers'},
                                ]}
                                name="location"
                                value={location}
                                defaultOptionText="Distance"
                                onChange={handleChange}
                                />                                
                            </div> */}
                        <div>
                            <Select options={[
                                { name: '24 hours ago', value: 1 },
                                { name: 'within a week', value: 7 },
                                { name: 'within a month', value: 30 },
                                { name: 'As long as possible', value: '' },
                            ]}
                                name="date_range"
                                value={dateRange}
                                onChange={handleChange}
                                label="Workplace Type"
                                defaultOptionText="Posted on"
                            />
                        </div>
                        <div>
                            <Select options={[
                                { name: '50k or less', value: 0 },
                                { name: '100k to 250k', value: 100000 },
                                { name: '250k to 500k', value: 250000 },
                                { name: '500k to 1m', value: 500000 },
                                { name: '1m+', value: 1000000 },
                                { name: 'Any pay range', value: '' },
                            ]}
                                name="salary_range"
                                defaultOptionText="Salary Range"
                                label="Salary Type"
                                capitalize={false}
                                value={salaryRange}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="sm:flex items-center">
                        <div className="min-w-0 flex-1">
                            <label htmlFor="keywords" className="sr-only">
                                Keywords, Job title or Company
                            </label>
                            <div className="mt-1 relative ">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="keywords"
                                    name="keywords"
                                    type="text"
                                    defaultValue={keywords}
                                    placeholder={"Enter job title, company name or skill"}
                                    className="block w-full m-2 px-4 py-3 pl-10 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                                />
                            </div>
                        </div>
                        <div className="min-w-0 flex-1">
                            <label htmlFor="location" className="sr-only">
                                Where?
                            </label>
                            <div className="mt-1 relative ">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <MapIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    id="location"
                                    type="text"
                                    defaultValue={location}
                                    name="location"
                                    placeholder={"Where?"}
                                    className="block w-full m-2 px-4 py-3 pl-10 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                                />
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                                type="submit"
                                className="block w-full py-3.5 px-4 mr-3 rounded-md shadow bg-green-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "
                            >
                                Search Jobs
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}