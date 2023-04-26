import { useState } from "react";
import { classNames } from "@/Utils/helpers";
import FindImage from "@/../assets/images/display-find.png"
import FilterImage from "@/../assets/images/display-filter.png"
import AnalyzeImage from "@/../assets/images/display-analyze.png"
import CreateImage from "@/../assets/images/display-create.png"
import ManageImage from "@/../assets/images/display-manage.png"
import { FindIcon, FilterIcon, AnalyzeIcon, CreateIcon, ManageIcon} from "@/Utils/icons";

const Tabs = ['Find', "Filter", "Analyze", "Create", "Manage"];


const TabContent = [
    {
        tabName: 'Find',
        icon: FindIcon,
        title: 'Find influencers',
        content:() => ( <span className="text-[#FFFFFFCC]">Search through our database to discover wide varieties of influencers across over 40 different niches and categories. <br/>  <br/>Ranging from Nano, Micro, Macro, Mega and Celebrity influencer.</span>) ,
        sideImage: FindImage
    },

    {
        tabName: 'Filter',
        icon: FilterIcon,
        title: 'Smart filters',
        content: () => ( <span className="text-[#FFFFFFCC]"> Using the most accurate filters in the industry, our AI powered smart filters will help you quickly find the right influencer for you, with an audience that is exactly right for your product or service.</span>),
        sideImage: FilterImage
    },

    {
        tabName: 'Analyze',
        icon: AnalyzeIcon,
        title: 'Analyze influencers',
        content: () => ( <span className="text-[#FFFFFFCC]">   Analyze social media influencers to get actionable insights for any account. <br/> <br/> Use AI powered account analytics to analyse influencers online performance, their audience, contents and value to aid your influencer selection. </span>),
        sideImage: AnalyzeImage
    },
    
    {
        tabName: 'Create',
        icon: CreateIcon,
        title: 'Campaigns list',
        content: () =>  ( <span className="text-[#FFFFFFCC]">   Create a campaign list and add your selected influencers. <br/>  <br/> When you’re ready to run your campaign, all your saved influencers will be just a click away </span> ),
        sideImage: CreateImage
    },
    {
        tabName: 'Manage',
        icon: ManageIcon,
        title: 'Campaigns list',
        content: () => ( <span className="text-[#FFFFFFCC]">Seamlessly manage your entire influencer marketing campaign execution process. <br/> <br/> Starting from contacting, briefing, negotiating, content approval, & finishing with influencer posting, realtime tracking, payment and performance measurement.</span>) ,
        sideImage: ManageImage
    },
]



const HomeStage = () => {
   
    const [ selectedTab, setSelectedtab] = useState('Find');
    const [ tabContent, setTabContent] = useState(TabContent?.find((item) => item.tabName === selectedTab));
  
    const handleSetTab = (val) => {
        setSelectedtab(val);
    //    setTabContent({});
       const content =  TabContent?.find((item) => item.tabName === val);
     
       setTabContent(content);
    }


    const SelIcon = tabContent?.icon;
    const Content = tabContent.content;

    // console.log("tabContent:", tabContent)
    return(


        <div className="lg:px-0   px-5">
                <div  className="flex  w-full  h-full   flex-col items-center justify-center  mt-[140px]">
                    <div  className="max-w-2xl  mx-auto  text-center  flex flex-col">
                        <span  className="font-bold  text-center text-t-large  font-lexend  text-viralget-grey">An experience you’d expect from an <span  className="bg-gradient-to-r   from-[#F37C38]  via-[#EEB31B] to-[#B71BEE]  inline-block text-transparent bg-clip-text">influencer tool</span> </span>
                        <span className="mt-space-24 font-medium  text-h1-x  font-satoshi  text-viralget-gray-400 " >Why break your influencer campaign flow into fragments, making it hard - when you can do it all on ViralGet, with actionable insights 
        guiding you through each stage</span>
                    </div>



                    <div className="mt-space-80  mb-5">
                          <ul className="shadow-md bg-white rounded-md max-w-2xl  flex lg:flex-row  flex-col  mx-auto">
                              
                              {
                                Tabs.map((item) => (
                                  <li className="w-full   lg:w-auto">
                                        <button onClick={() => handleSetTab(item)} className={classNames("font-lexend w-full lg:w-auto font-medium px-space-40 py-space-15  text-t-xsx ", selectedTab === item ? ' bg-viralget-grey rounded-md text-white' : 'text-viralget-grey' )}>
                                            {item}
                                        </button>
                                   </li>   
                                ))
                              }
                          </ul>
                    </div>


                    <div className={classNames(`bg-gradient-to-r flex md:flex-row  flex-col mt-space-60  rounded-md`, tabContent.tabName === 'Find' ? 'from-[#ECA1A9]  to-[#82209F]' :  tabContent.tabName === 'Filter' ? 'from-[#4CA9D9]  to-[#DADC63]': tabContent.tabName === 'Analyze' ? 'from-[#43A0F6]  to-[#E844A6]': tabContent.tabName === 'Create' ?   'from-[#12FED3]  to-[#D02EF9]'  : tabContent.tabName === 'Manage' ? 'from-[#FE5569]  to-[#FFCD4B]' : 'from-[#4CA9D9]  to-[#DADC63]' )}>
                          <div className={`flex  flex-col md:py-space-60  md:px-space-80 py-5 px-5 max-w-xl`}>
                                 <SelIcon  />
                                 <span className="font-bold font-lexend text-t-lg-x  text-white mt-space-32">{tabContent.title}</span>
                                 <span className="font-normal text-t-normal-lg text-white  mt-space-16"><Content /></span>
                          </div>
                        
                          <div className={classNames("lg:w-[40rem] lg:h-[28rem]", tabContent.tabName === 'Manage' ? 'mt-[30px]': '')}>
                                <img src={tabContent?.sideImage}   className={classNames("w-full  h-full")}  />
                          </div>
                    </div>
                </div>
        </div>
    )
}


export default HomeStage;