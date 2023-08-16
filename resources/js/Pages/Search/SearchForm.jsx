import MultiDropdown from "@/Components/MultiDropdown";
import Select from "@/Components/Select";
import { PlatformContext } from "@/Contexts/PlatformContext";
import { getPlatform, platforms } from "@/Services/PlatformsService";
import { classNames } from "@/Utils/helpers";
import { useState, useEffect, useContext } from "react";


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
    handleFiltering,
    handleChangePlatform
}) {
    const influencer_location = new URLSearchParams(window.location.search).get('influencer_location');
    const size = new URLSearchParams(window.location.search).get('size');
    const audience_location = new URLSearchParams(window.location.search).get('audience_location');
    const verification_status = new URLSearchParams(window.location.search).get('verification_status');
    const influencer_qas = new URLSearchParams(window.location.search).get('influencer_qas');
    const selectedCategory = new URLSearchParams(window.location.search).get('category');
    const position = new URLSearchParams(window.location.search).get('position');
    const gender = new URLSearchParams(window.location.search).get('gender');
    const average_likes = new URLSearchParams(window.location.search).get('average_likes');
    const Selectedkeywords = new URLSearchParams(window.location.search).get('keywords');
    const _platform = new URLSearchParams(window.location.search).get('platform');

    const defaultPlatform = getPlatform('name', _platform);

    const [getSearch, setSearches] = useState(getSearches ?? []);
    const [platform, setPlatform] = useContext(PlatformContext);

    useEffect(() => {
        setPlatform(platform ?? defaultPlatform ?? platforms[0]);
    }, [])

    useEffect(() => {
        handleChangePlatform && handleChangePlatform(platform.name ?? platforms[0].name);
        handleChange(null, 'Platform', 'platform', platform?.name ?? platforms[0].name)
    }, [platform]);


    useEffect(() => {
        setSearches(getSearches);
    }, [getSearches]);

    useEffect(() => {
        searchQuery();
    }, []);


    const searchQuery = () => {

        let searchData = [];

        if (influencer_location) {
            searchData.push({ query: 'influencer_location', name: 'Influencer Location', value: influencer_location?.split(',') });
        }
        if (size) {
            searchData.push({ query: 'size', name: 'Influencer Size', value: size.split(',') });
        }
        if (audience_location) {
            searchData.push({ query: 'audience_location', name: 'Audience Location', value: audience_location?.split(',') });
        }

        if (influencer_qas) {
            searchData.push({ query: 'influencer_qas', name: 'Influencer Qas', value: influencer_qas?.split(',') });
        }

        if (influencer_qas) {
            searchData.push({ query: 'verification_status', name: 'Influencer Reach', value: verification_status?.split(',') });
        }

        if (selectedCategory) {
            searchData.push({ query: 'category', name: 'Category', value: selectedCategory?.split(',') });
        }

        if (position) {
            searchData.push({ query: 'position', name: 'Position', value: position?.split(',') });
        }

        if (Selectedkeywords) {
            searchData.push({ query: 'keywords', name: 'Keywords', value: Selectedkeywords });
        }

        setSearches(searchData);

    }

    const searchItems = getSearch?.filter((item) => item.name != 'Platform');

    return (
        <div className={className}>
            <div className="hidden md:grid grid-cols-2 w-80 gap-x-1">
                {platforms.map((_platform, index) => {
                    const platform_name = platform?.name ?? platforms[0].name;
                    const isActiveTab = _platform.name == platform_name;

                    return (
                        <div key={index} onClick={() => setPlatform(_platform)} className={classNames(" py-2.5 p-3 rounded-t-xl platform_header cursor-pointer", isActiveTab ? 'bg-white is_active' : 'bg-[#F5F5F5]')}>
                            <div className="flex justify-center items-center capitalize ">
                                {isActiveTab ? _platform.icon : <span className="filter grayscale opacity-75">{_platform.icon}</span>}  <span className="ml-2 text-sm font-lexend">{_platform.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mb-2 md:hidden">
                <Select
                    // label="Select Platform"
                    defaultValue={platform?.name}
                    defaultOptionText="Select Platform"
                    onChange={(e) => setPlatform(getPlatform('name', e.target.value))}
                    options={platforms.map((_platform) => (
                        { name: _platform.name, value: _platform.name }
                    ))} />
            </div>
            <form action="#" onSubmit={handleSubmit} className="sm:mx-auto lg:mx-0">
                <div className=" grid grid-cols-1 smgrid-cols-2 md:grid-cols-5 gap-4 bg-white  px-5 p-4 rounded-b-md rounded-r-md border-b ">
                    <div className="md:pr-6 md:border-r border-gray-100">

                        <MultiDropdown options={[
                            { name: 'Any' },
                            { name: 'Nigeria', },
                            { name: 'Ghana', },
                        ]}
                            onChange={(e) => handleChange(e, 'Influencer Location', 'influencer_location')}
                            label="Influencer Location"
                            defaultOptionText={influencer_location?.split(',')[0]}
                            useSelectedOptions={influencer_location?.split(',')}
                        />
                    </div>
                    <div className="md:pr-6 md:border-r border-gray-100">

                        <MultiDropdown options={[
                            { name: 'Any' },
                            { name: 'Nano (1000 - 10,000)', value: 'Nano' },
                            { name: 'Micro (10,000 - 50,000)', value: 'Micro' },
                            { name: 'Mid Tier (50,000 - 500k)', value: 'Mid-Tier' },
                            { name: 'Macro (500k - 1m)', value: 'Macro' },
                        ]}
                            onChange={(e) => handleChange(e, 'Influencer Size', 'size')}
                            label="Influencer Size"
                            defaultOptionText={size?.split(',')[0]}
                            useSelectedOptions={size?.split(',')}

                        />
                    </div>

                    {/* <div className="md:pr-6 md:border-r">


                        <MultiDropdown options={[
                            { name: 'Any' },
                            { name: 'Nigeria', value: 'Nigeria' },
                            { name: 'Ghana', value: 'Ghana' },
                        ]}

                            onChange={(e) => handleChange(e, 'Audience Location', 'audience_location')}
                            label="Audience Location"
                            defaultOptionText={audience_location?.split(',')[0]}
                            useSelectedOptions={audience_location?.split(',')}

                        />
                    </div> */}
                    <div className="md:pr-6 md:border-r border-gray-100">


                        <MultiDropdown options={[
                            { name: 'Any' },
                            { name: 'Verified', },
                            { name: 'Not Verified', },
                        ]}
                            onChange={(e) => handleChange(e, 'Verification status', 'verification_status')}
                            label="Verification Status" y
                            defaultOptionText={verification_status?.split(',')[0]}
                            useSelectedOptions={verification_status?.split(',')}
                        />

                        {/* <MultiDropdown options={[
                            { name: 'Any' },
                            { name: 'Excellent >90' },
                            { name: 'Very Good >80' },
                            { name: 'Good >60' },
                            { name: 'Average >40' },
                            { name: 'Poor >25' },
                        ]}
                            onChange={(e) => handleChange(e, 'Influencer QAS', 'influencer_qas')}
                            label="Influencer QAS"
                            defaultOptionText={influencer_qas?.split(',')[0]}
                            useSelectedOptions={influencer_qas?.split(',')}
                        /> */}
                    </div>

                    <div className="md:pr-6 md:border-r border-gray-100">


                        <MultiDropdown options={[
                            { name: 'Any' },
                            { name: 'Male', },
                            { name: 'Female', },
                        ]}
                            onChange={(e) => handleChange(e, 'Influencer Gender', 'gender')}
                            label="Influencer Gender"
                            defaultOptionText={gender?.split(',')[0]}
                            useSelectedOptions={gender?.split(',')}
                        />
                    </div>
                    <div className="hidden md:flex items-center sm:mt-0 sm:ml-3">
                        <button
                            onClick={handleSubmit}
                            // type="submit"
                            className=" w-full py-2  rounded-md shadow bg-orange-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div className=" align-middle my-3 space-x-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className=" bg-white shadow rounded-md py-1 px-3 ">
                        <MultiDropdown options={categories}
                            name="category"
                            onChange={(e) => handleChange(e, 'Category', 'category')}
                            defaultOptionText={selectedCategory ? selectedCategory : "Category"}
                            useSelectedOptions={selectedCategory?.split(',')}

                        />
                    </div>
                    <input
                        id="likes"
                        name="average_likes"
                        type="text"
                        defaultValue={average_likes ?? ''}
                        onChange={(e) => handleChange(e, 'Average Likes', 'average_likes')}
                        placeholder={"Average likes"}
                        className="block w-full py-3 px-3  shadow rounded-md  flex-grow  text-sm  border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                    />
                    <input
                        id="likes"
                        name="engagement_rate"
                        type="text"
                        defaultValue={average_likes ?? ''}
                        onChange={(e) => handleChange(e, 'Engagement rate', 'engagement_rate')}
                        placeholder={"Engagement rate"}
                        className="block w-full py-3 px-3  shadow rounded-md  flex-grow  text-sm  border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                    />
                    {/* </div> */}


                    {/* <div className=" flex flex-1 rounded-md shadow bg-white p-1 px-3">
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
                                useSelectedOptions={position?.split(',')}
                                defaultOptionText={position ? position : "Anywhere"}

                            />
                        </div>
                        <input
                            id="keywords"
                            name="keywords"
                            type="text"
                            defaultValue={Selectedkeywords ? Selectedkeywords : keywords}
                            onChange={(e) => handleChange(e, 'Keywords', 'keywords')}
                            placeholder={"Find influencers by keywords or hashtag"}
                            className="block w-full px-3  flex-grow  text-sm rounded-none rounded-r-md border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-offset-none"
                        />
                    </div> */}

                </div>

                <div className="block md:hidden items-center sm:mt-0 sm:ml-3">
                    <button
                        onClick={handleSubmit}
                        // type="submit"
                        className=" w-full py-2  rounded-md shadow bg-orange-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 "
                    >
                        Search
                    </button>
                </div>
                {searchItems.length > 0 && (
                    <div class="flex  -mt-3 mb-3 flex-wrap p-3 text-sm">
                        {searchItems.map((item, index) => {
                            return (
                                <div
                                    className=" p-2 mr-3 mt-2  flex "
                                    key={index}
                                >
                                    <span className="font-normal">{item.name}: </span>
                                    {
                                        Array.isArray(item?.value) ? item.value.map((val, ind) => {
                                            return (
                                                <span className="ml-2 text-viralget-grey">{val} {(ind + 1) === item.value.length ? '' : ','} </span>
                                            )
                                        }
                                        )
                                            :
                                            <span className="ml-2 text-viralget-grey">{item.value}</span>
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
                            )
                        })}
                    </div>
                )}

            </form>
        </div>
    );
}