import AuthenticatedLayout from "@/Components/AuthenticatedLayout";
import ButtonBack from "@/components/ButtonBack";
import Header from './header';
import Tabs from "@/components/Tabs";
import InfluencerSize from "./influencerSize";
import { tabs }  from '@/Utils/constants';
import { Gender, Marital, Parental, Ethnicity, Income, Education }  from "@/Utils/icons";
import Card from './card';
export default function show({ influencer, list }) {

    const urlParams = new URLSearchParams(window.location.search).get('tab');



    const influencerInformation = [
        {
            title: 'Gender & age',
            icon: <Gender />,
            label: 'Female • 29 y.o'
        },
        {
            title: 'Marital status',
            icon: <Marital />,
            label: 'Married'
        },
        {
            title: 'Parental status',
            icon: <Parental />,
            label: 'Parent'
        },
        {
            title: 'Ethnicity',
            icon: <Ethnicity />,
            label: 'Hausa-Fulani'
        },
        {
            title: 'Est. Income',
            icon: <Income />,
            label: '$10K—25K'
        }, 
        {
            title: 'Education',
            icon: <Education />,
            label: 'Bachelor'
        }
    ]


    const Render = () => {
       if( urlParams === 'overview') {
        return(
             <div className="flex  md:flex-row  flex-col  ">
                    
                    <div>
                          <InfluencerSize  influencer={influencer} />
                    </div>
                    <div className="grid grid-cols-3 md:mt-0 mt-4  px-4   gap-3 md:pr-5 md:pl-0  md:gap-3">
                   {
                    influencerInformation.map((item) => (
                        <div className="border rounded-md  p-3  h-[5rem] items-left">
                        <div className="flex  items-center">
                            <div className="mr-1">
                              {item.icon}
            
                            </div>
                            <span className="text-xs  text-viralget-grey">{item.title}</span>
                        </div>
                        <div className="mt-2">
                        <span className="text-[14px]  font-Satoshi ">
                            {item.label}
                        </span>
                     </div>
                        
                      </div>
                    ))
                   }
                  </div>

              </div>
        )
       }else{
           return (
            <div className="flex items-center  p-5">
                <span>
                Coming soon.
                </span>
            </div>

           )
       }

    }
 
    return (

        <AuthenticatedLayout>
            <>

                <div className="relative -mt-40">
                    <div className="m-5">
                        <ButtonBack className="text-white"/>
                    </div>
                    <Header influencer={influencer}  list={list} />
                </div>
            </>

            <div className="w-full p-4  mt-5">
                 <Tabs   tabs={tabs} link={route('influencer.show', {id : influencer.id})}/>
            </div>

             
            <Render />
          

        </AuthenticatedLayout>
    )
}
