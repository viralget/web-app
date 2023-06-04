import { useState } from "react";
import { classNames } from "@/Utils/helpers";
import FindImage from "@/../assets/images/display-find.png"
import FilterImage from "@/../assets/images/display-filter.png"
import AnalyzeImage from "@/../assets/images/display-analyze.png"
import CreateImage from "@/../assets/images/display-create.png"
import ManageImage from "@/../assets/images/display-manage.png"
// import ManageImage from "@/../assets/images/display-manage.png"
import { FindIcon, FilterIcon, AnalyzeIcon, CreateIcon, ManageIcon } from "@/Utils/icons";

const Tabs = ['Find', "Filter", "Analyze", "Create", "Manage"];


const TabContent = [
    {
        tabName: 'Find',
        icon: FindIcon,
        title: 'Find influencers',
        content: () => (<span className="text-[#FFFFFFCC]">Search through our database to discover wide varieties of influencers across over 40 different niches and categories. <br />  <br />Ranging from Nano, Micro, Macro, Mega and Celebrity influencer.</span>),
        sideImage: FindImage
    },

    {
        tabName: 'Filter',
        icon: FilterIcon,
        title: 'Smart filters',
        content: () => (<span className="text-[#FFFFFFCC]"> Using the most accurate filters in the industry, our AI powered smart filters will help you quickly find the right influencer for you, with an audience that is exactly right for your product or service.</span>),
        sideImage: FilterImage
    },

    {
        tabName: 'Analyze',
        icon: AnalyzeIcon,
        title: 'Analyze influencers',
        content: () => (<span className="text-[#FFFFFFCC]">   Analyze social media influencers to get actionable insights for any account. <br /> <br /> Use AI powered account analytics to analyse influencers online performance, their audience, contents and value to aid your influencer selection. </span>),
        sideImage: AnalyzeImage
    },

    {
        tabName: 'Create',
        icon: CreateIcon,
        title: 'Campaigns list',
        content: () => (<span className="text-[#FFFFFFCC]">   Create a campaign list and add your selected influencers. <br />  <br /> When you’re ready to run your campaign, all your saved influencers will be just a click away </span>),
        sideImage: CreateImage
    },
    {
        tabName: 'Manage',
        icon: ManageIcon,
        title: 'Campaigns list',
        content: () => (<span className="text-[#FFFFFFCC]">Seamlessly manage your entire influencer marketing campaign execution process. <br /> <br /> Starting from contacting, briefing, negotiating, content approval, & finishing with influencer posting, realtime tracking, payment and performance measurement.</span>),
        sideImage: ManageImage
    },
]



const HomeStage = () => {

    const [selectedTab, setSelectedtab] = useState('Find');
    const [tabContent, setTabContent] = useState(TabContent?.find((item) => item.tabName === selectedTab));

    const handleSetTab = (val) => {
        setSelectedtab(val);
        const content = TabContent?.find((item) => item.tabName === val);
        setTabContent(content);
    }


    const SelfIcon = tabContent?.icon;
    const Content = tabContent.content;

    return (


        <div className="lg:px-0 lg:mt-space-70  mt-space-90   relative px-5">




            <div className="absolute  -left-[4.5rem]  bottom-[26rem]">
                <svg width="368" height="862" viewBox="0 0 368 862" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1046_14133)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2203 260.219C55.7591 262.929 75.7627 319.085 91.16 365.86C105.813 410.374 117.147 463.6 95.6116 510.515C75.5026 554.322 30.1684 562.983 -7.36225 580.492C-35.7455 593.732 -65.3002 608.763 -91.4701 597.789C-116.264 587.392 -125.525 554.707 -137.042 526.112C-149.057 496.283 -167.561 466.77 -158.345 431.755C-148.869 395.756 -116.394 378.802 -91.7941 354.206C-56.7824 319.201 -28.1212 257.586 13.2203 260.219Z" fill="#F86582" fill-opacity="0.2" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1046_14133" x="-420.831" y="0.137634" width="788.399" height="861.444" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="130" result="effect1_foregroundBlur_1046_14133" />
                        </filter>
                    </defs>
                </svg>

            </div>

            <div className="absolute  left-60  right-auto top-0   bottom-10 z-0">
                <svg width="871" height="618" viewBox="0 0 871 618" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1046_14132)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M461.141 234.695C507.582 219.854 553.345 204.032 591.461 201.267C630.151 198.46 662.477 202.504 669.148 219.604C675.749 236.526 643.538 264.385 625.699 289.036C596.966 328.744 609.402 372.154 534.917 405.103C460.913 437.839 441.267 394.978 383.647 396.108C333.828 397.086 253.058 426.178 226.723 411.149C195.392 393.271 182.588 356.531 239.38 313.781C295.847 271.277 384.787 259.096 461.141 234.695Z" fill="url(#paint0_linear_1046_14132)" fill-opacity="0.15" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1046_14132" x="0.00537109" y="0.451202" width="870.02" height="616.995" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1046_14132" />
                        </filter>
                        <linearGradient id="paint0_linear_1046_14132" x1="406.699" y1="235.149" x2="488.907" y2="425.03" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#C957FE" />
                            <stop offset="1" stop-color="#FAD166" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>



            <div className="absolute right-0 bottom-60">
                <svg width="584" height="933" viewBox="0 0 584 933" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_1046_14131)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M475.979 224.669C526.213 228.033 575.56 228.255 617.99 255.335C661.061 282.823 697.862 322.292 707.533 372.449C717.104 422.082 684.505 465.118 667.631 512.773C640.449 589.534 659.952 712.821 580.553 731.047C501.666 749.154 474.14 620.812 409.609 571.999C353.812 529.793 266.867 532.416 235.387 469.953C197.936 395.646 178.872 289.255 237.16 229.83C295.114 170.745 393.39 219.138 475.979 224.669Z" fill="url(#paint0_linear_1046_14131)" fill-opacity="0.3" />
                    </g>
                    <defs>
                        <filter id="filter0_f_1046_14131" x="0.0837402" y="0.771744" width="909.175" height="932.012" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_1046_14131" />
                        </filter>
                        <linearGradient id="paint0_linear_1046_14131" x1="414.928" y1="176.96" x2="531.452" y2="741.205" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE9457" />
                            <stop offset="1" stop-color="#FA6699" stop-opacity="0.54" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>



            <div className="flex  w-full  h-full   flex-col items-center justify-center      ">
                <div className="max-w-2xl  mx-auto  text-center  flex flex-col">
                    <span className="font-bold  text-center text-t-large  font-lexend  text-viralget-grey">An experience you’d expect from an <span className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text">influencer tool</span> </span>
                    <span className="mt-space-24 font-medium  text-h1-x  font-satoshi  text-viralget-gray-400 " >Why break your influencer campaign flow into fragments, making it hard - when you can do it all on ViralGet, with actionable insights
                        guiding you through each stage</span>
                </div>



                <div className="mt-space-80  mb-5   z-10  ">
                    <ul className="shadow-md bg-white rounded-md max-w-2xl  flex  mx-auto">

                        {
                            Tabs.map((item) => (
                                <li className="w-full   lg:w-auto">
                                    <button onClick={() => handleSetTab(item)} className={classNames("font-lexend w-full lg:w-auto font-medium px-5 lg:px-space-40 py-space-15  z-10 text-t-xsx ", selectedTab === item ? ' bg-viralget-grey rounded-md text-white' : 'text-viralget-grey')}>
                                        {item}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className={classNames(`bg-gradient-to-r flex lg:flex-row  flex-col mt-space-60  rounded-md`, tabContent.tabName === 'Find' ? 'from-[#ECA1A9]  to-[#82209F]' : tabContent.tabName === 'Filter' ? 'from-[#4CA9D9]  to-[#DADC63]' : tabContent.tabName === 'Analyze' ? 'from-[#43A0F6]  to-[#E844A6]' : tabContent.tabName === 'Create' ? 'from-[#12FED3]  to-[#D02EF9]' : tabContent.tabName === 'Manage' ? 'from-[#FE5569]  to-[#FFCD4B]' : 'from-[#4CA9D9]  to-[#DADC63]')}>
                    <div className={`flex  flex-col md:py-space-60  md:px-space-80 py-5 px-5 max-w-xl`}>
                        <SelfIcon />
                        <span className="font-bold font-lexend text-t-lg-x  text-white mt-space-32">{tabContent.title}</span>
                        <span className="font-normal text-t-normal-lg text-white  mt-space-16"><Content /></span>
                    </div>

                    <div className={classNames("lg:w-[40rem] lg:h-[29rem]", tabContent.tabName === 'Manage' ? 'mt-[30px]' : '')}>
                        <img src={tabContent?.sideImage} className={classNames("w-full  h-full")} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomeStage;