
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Tabs = ({ tabs, link, activeTab }) => {

    const url = new URLSearchParams(window.location.search).get('tab');
    const urlParams =  url == null ? activeTab: url;

    return(
      <ul className="flex  text-sm font-medium overflow-y-scroll  w-full text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
         {
            tabs.map((item) => (
                <li class="mr-2">
                 <a href={link +'?tab='+item.value} className={ classNames("inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300   ", item.value === urlParams ? 'border-b-2 border-viralget-red' : '')}>{item.name}</a>
               </li>
            ))
         }
           
        
       </ul>

    )
}


export default Tabs;