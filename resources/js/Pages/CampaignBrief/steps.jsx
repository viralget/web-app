

const Steps = ({ activeTab, onChangeTab }) => {

    const handleSetTab = (e, tab) => {
        e.preventDefault();

        onChangeTab(tab);
    }

    return (
        <div className="py-12 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <nav className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:justify-between md:space-x-6 md:items-center">
                    <a href="#" onClick={() => handleSetTab(e, 'details')} title="" className="flex items-start">
                        <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-white bg-primary border border-transparent rounded-full"> 1 </span>
                        <div className="flex-1 ml-5 items-center">
                            <p className="text-base font-bold text-gray-900">Campaign details</p>
                            {/* <p className="mt-2 font-medium text-gray-500">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p> */}
                        </div>
                    </a>

                    <svg className="flex-shrink-0 hidden w-12 h-12 text-gray-200 md:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>

                    <a href="#" onClick={() => handleSetTab(e, 'contents')} title="" className="flex items-start">
                        <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-gray-900 bg-white border border-gray-900 rounded-full"> 2 </span>
                        <div className="flex-1 ml-5">
                            <p className="text-base font-bold text-gray-900">Content Details</p>
                            {/* <p className="mt-2 font-medium text-gray-500">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p> */}
                        </div>
                    </a>

                    <svg className="flex-shrink-0 hidden w-12 h-12 text-gray-200 md:block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>

                    <a href="#" onClick={() => handleSetTab(e, 'influencers')} title="" className="flex items-start">
                        <span className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-gray-500 bg-white border border-gray-200 rounded-full"> 3 </span>
                        <div className="flex-1 ml-5">
                            <p className="text-base font-bold text-gray-500">Influencers Details</p>
                            {/* <p className="mt-2 font-medium text-gray-500">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p> */}
                        </div>
                    </a>
                </nav>
            </div>
        </div>
    );
}

export default Steps;