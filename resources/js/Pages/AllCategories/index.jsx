import { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import EmptyState from '@/components/EmptyState';


export default function  AllCategories({categories}){

    const [getTopList, setTopList] = useState([]);
    const [activeTab, setActiveTab] = useState('all')
    const [getCategories, setCategories] = useState([]);
    useEffect(() => {
        handleTopList();
        // handleCategeories();
        const cate = categories.filter((item) => { return  item.name.charAt(0) === 'F'})
        console.log("cate:", cate)
    },[])


    function handleTopList(){
      
       const newcate =  categories?.map((item) => item.name.charAt(0));
       const uniqList = [...new Set(newcate)];
       const addAll = ["all", ...uniqList];
       setTopList(addAll);
       setCategories(categories);
    }


    function handleCategeories(item){
        setActiveTab(item);
        if(item === 'all'){
            setCategories(categories);
    
        }else{

            const cate = categories.filter((val) => { return  val.name.charAt(0)=== item});
            setCategories(cate);
        }

       
    }

    return(
        <AuthenticatedLayout title="Search through our database of 33.5m+ influencers"  smallHeader={true}>
        <div className='bg-gray-50 h-screen  mt-3 px-5'>
               <button  className='flex   '  onClick={() => window.history.back()}>
                 <div  className=''>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.4698 13.0302C10.7626 12.7374 10.7626 12.2626 10.4697 11.9697L7.93357 9.43357C7.84889 9.34889 7.84889 9.2116 7.93357 9.12693L10.4698 6.59075C10.7626 6.2979 10.7626 5.8231 10.4698 5.53025C10.1769 5.2374 9.7021 5.2374 9.40925 5.53025L6.04836 8.89114C5.83346 9.10604 5.83346 9.45446 6.04836 9.66936L9.40925 13.0302C9.7021 13.3231 10.1769 13.3231 10.4698 13.0302Z" fill="#3E4555"/>
                        </svg>
                   </div>
                   <span className='text-xs '>Back</span>
                   
               </button>


               <div className='flex  pl-0 mt-5 space-x-2 border-b-2 '>
                      {
                        getTopList?.map((item) => (
                            <button  onClick={() => handleCategeories(String(item)) } className={  activeTab === item ? 'px-2 border-b-2  border-b-black':'px-2'}>
                                <span className='capitalize '>{item}</span>
                            </button>
                        ))
                      }
               </div>
       
       
       
       
       

         {getCategories?.length > 0 ?

                <div className="mt-5 grid grid-cols-1 gap-y-8 mb-5 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {getCategories.map((item, index) => (
                        <a href="#" key={index}>
                            <div className="relative">
                                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-r from-yellow-600 to-fuchsia-600 ">
                                    <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden rounded-lg p-4">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 top-0 h-full bg-black opacity-50"
                                    />
                                    <p className="relative text-lg font-semibold text-white capitalize ">{item.name}</p>
                                </div>
                            </div>

                        </a>
                    ))}
                </div>

                :
                <EmptyState />
                }
       
       
       
       
       
       
        </div>
        </AuthenticatedLayout>
    )
}