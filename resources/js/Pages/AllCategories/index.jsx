import { useEffect, useState } from 'react'
import AuthenticatedLayout from '@/components/AuthenticatedLayout'
import EmptyState from '@/components/EmptyState';
import ButtonBack from '@/components/ButtonBack';

export default function  AllCategories({categories}){

    const [getTopList, setTopList] = useState([]);
    const [activeTab, setActiveTab] = useState('all')
    const [getCategories, setCategories] = useState([]);
    useEffect(() => {
        handleTopList();
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
        <AuthenticatedLayout   smallHeader={true}>
        <div className='bg-white h-screen  mt-3 px-5'>
            <ButtonBack />

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