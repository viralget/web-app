import EmptyState from "@/Components/EmptyState";
import { classNames } from "@/Utils/helpers";
import { useEffect } from "react";
import { useState } from "react";
import Audience from "./Audience";
import Content from "./Content";
import Influencer from "./Influencer";
import Overview from "./Overview";
import Value from "./Value";


const Tabs = ({ influencer }) => {

  const tabs = [
    {
      name: 'Overview',
      value: 'overview',
      component: <Overview influencer={influencer} />
    },
    {
      name: 'Influencer',
      value: 'influencer',
      component: <Influencer influencer={influencer} />

    },
    {
      name: 'Audience',
      value: 'audience',
      component: <Audience influencer={influencer} />

    },
    // {
    //   name: 'Content',
    //   value: 'content',
    //   component: <Content influencer={influencer} />

    // },
    // {
    //   name: 'Value',
    //   value: 'value',
    //   component: <Value title="Feature coming soon" influencer={influencer} />

    // },
    // {
    //   name: 'Brand',
    //   value: 'brand',
    //   component: <EmptyState title="Feature coming soon" />

    // },
    // {
    //   name: 'Lookalike influencer',
    //   value: 'lookalike_influencer',
    //   component: <EmptyState title="Feature coming soon" />

    // },

  ];

  const [activeTab, setActiveTab] = useState(tabs[0])


  useEffect(() => {

    // console.log({ activeTab })
  }, [activeTab])


  const handleSwitchTab = (e, index) => {
    e.preventDefault();

    setActiveTab(tabs[index])
  }

  return (
    <div>
      <ul className="flex  text-sm font-medium overflow-y-scroll  w-full text-center  border-b border-gray-200 ">
        {
          tabs.map((item, index) => (
            <li class="mr-2">
              <a href="#" onClick={(e) => handleSwitchTab(e, index)} className={classNames("inline-block p-4 rounded-t-lg text-t-xsx font-lexend font-medium  hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300   ", item.name === activeTab.name ? 'border-b-2 border-viralget-red text-[#3E4555' : 'text-[#748094] ')}>{item.name}</a>
            </li>
          ))
        }
      </ul >

      <div className="my-5">
        {activeTab?.component}
      </div>

    </div>
  )
}


export default Tabs;