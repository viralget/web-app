import { Logo } from "@/components/Logo";
import { classNames } from "@/Utils/helpers";
import Avatar from "@/components/Skeleton/Avatar";
// import Img_url from "../../../../../storage/app/user_images/"

const Header = ({ user, image_url}) => {


  const Levels = [

        {
            name: 'Account setup',
            status: 'current'
        },
        {
            name: 'Pricing',
            status: 'pending'
        },
        {
            name: 'Payment method',
            status: 'pending'
        }
    ]




 const Steps = ({ item , index }) => {
        return(
            <div className="flex space-x-2">
                   <div className={classNames("w-space-35 h-space-35  flex items-center justify-center rounded-full", item.status == 'current' ? 'bg-viralget-red-100' : 'bg-viralget-gray-200' )}>
                         <span  className={classNames("font-lexend font-medium text-t-xsx   ", item.status == 'current' ? 'text-viralget-red': '')}>{index+ 1}</span>
                   </div>
                    <div className="flex flex-col">
                          <span className={classNames("capitalize text-t-normal-x  font-medium", item.status == 'current' ? 'text-viralget-red' : 'text-viralget-gray-500')}>{item.status}</span>
                          <span className="text-t-normal font-bold">{item.name}</span>
                    </div>
            </div>
        )
    }

    return (

        <div className="flex justify-between px-space-80   shadow-header-card-2  py-space-24">
              <Logo className="w-space-75  h-space-32"/>

               <div className="flex space-x-5">
                     {
                       Levels.map((item, index) => (
                            <Steps item={item} index={index}  key={index}/>
                        ))
                     }
               </div>
               <div className="flex space-x-1 items-center">
                  <Avatar userName={user.name} />
                  <span className="text-t-xsx  font-medium font-lexend">Hello, {user.name}</span>
               </div>
        </div>
    )
}


export default Header;